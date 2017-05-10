class InstaIceCreamCreator
  attr_reader :user_id, :media_id, :user_token, :media_data

  def initialize(payload)
    @user_id  = payload["object_id"]
    @media_id = payload["data"]["media_id"] 
  end

  def execute
    retrieve_user_token
    get_media
    create_ice_cream_and_parlor
  end

  private

  def retrieve_user_token
    @user_token = InstagramAuth.find_by(instagram_user_id: user_id).access_token
  end

  def get_media
    response = InstagramClient.new.fetch_media(media_id, user_token)
    response_body = JSON.parse(response.body)
    @media_data = response_body["data"]
  end

  def create_ice_cream_and_parlor
    tags     = media_data["tags"]
    location = media_data["location"]
    ice_cream_image_url = media_data["standard_resolution"]["url"]

    if tags.include?("icecreamery")
      p = Parlor.find_or_create_by(ig_location_id: location["id"])
      p.update({
        name:      location["name"],
        latitude:  location["latitude"],
        longitude: location["longitude"]
      })

      ic = IceCream.create({
        title:       media_data["caption"]["text"],
        parlor_id:   p.id,
        ig_image:    ice_cream_image_url,
        ig_link:     media_data["link"],
        ig_media_id: media_id
      })
    end
  end

end
