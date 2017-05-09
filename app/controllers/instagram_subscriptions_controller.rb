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
      tags = response["data"]["tags"] # see if it includes #icecream
      caption = response["data"]["caption"] # use this as the review
      link = response["data"]["link"] # store this just in case
      ice_cream_image_url = response["data"]["standard_resolution"]["url"] #save this as the ice cream
      loation = response["data"]["location"] # use this id to hit the api again and parse info to create parlor
      if tags.include?("icecream")
        ic = IceCream.new({
          title: caption,
          parlor_id: nil,
          ig_image: ice_cream_image_url
          ig_link: link
        })
        #create the ice cream
        #
        # Hit the api again and grab the parlor
        # save the ice cream and the parlor
      end

      return
    end
  end

  def create
    InstagramClient.new.create_subscription

    redirect_to root_path
  end
end
