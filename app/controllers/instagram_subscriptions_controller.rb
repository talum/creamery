class InstagramSubscriptionsController < ApplicationController

  def callback
    if request.method == "GET"
      challenge = params["hub.challenge"]
      render text: challenge
    else
      req = JSON.parse(request.body)
      user_id = req["object_id"]
      user_token = InstagramAuth.find_by(instagram_user_id: user_id).access_token
      media_id = req["data"]["media_id"]
      res = InstagramClient.new.fetch_media(media_id, user_token)
      response = JSON.parse(res.body)
      tags = response["data"]["tags"]
      caption = response["data"]["caption"]["text"]
      link = response["data"]["link"]
      ice_cream_image_url = response["data"]["standard_resolution"]["url"]
      location_id = response["data"]["location"]["id"]
      location_name = response["data"]["location"]["name"]
      location_latitude = response["data"]["location"]["latitude"]
      location_longitude = response["data"]["location"]["longitude"]

      if tags.include?("icecreamery")
        p = Parlor.find_or_create_by(ig_location_id: location_id)
        p.update({
          name:           location_name,
          latitude:       location_latitude,
          longitude:      location_longitude,
          ig_location_id: location_id
        })

        ic = IceCream.create({
          title: caption,
          parlor_id: p.id
          ig_image: ice_cream_image_url
          ig_link: link,
          ig_media_id: media_id
        })
      end

      return
    end
  end

  def create
    InstagramClient.new.create_subscription

    redirect_to root_path
  end
end
