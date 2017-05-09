class InstagramSubscriptionsController < ApplicationController
  INSTAGRAM_API_ROOT = 'https://api.instagram.com/v1'

  def callback
    if request.method == "GET"
      challenge = params["hub.challenge"]
      render text: challenge
    else
      request = JSON.parse(response.body)
      user_id = request["object_id"]
      user_token = InstagramAuth.find_by(instagram_user_id: user_id).access_token
      media_id = request["data"]["media_id"]
      res = RestClient.get("#{INSTAGRAM_API_ROOT}/media/#{media_id}?access_token=#{user_token}")
      response = JSON.parse(res.body)
      tags = response["data"]["tags"] # see if it includes #icecream
      caption = response["data"]["caption"] # use this as the review
      link = response["data"]["link"] # store this just in case
      ice_cream_image_url = response["data"]["standard_resolution"]["url"] #save this as the ice cream
      loation = response["data"]["location"] # use this id to hit the api again and parse info to create parlor

      return
    end
  end

  def create
    url = "#{INSTAGRAM_API_ROOT}/subscriptions/"
    res = RestClient.post(url, {
      client_id: ENV['INSTAGRAM_CLIENT_ID'],
      client_secret: ENV['INSTAGRAM_CLIENT_SECRET'],
      object: 'user',
      aspect: 'media',
      verify_token: 'VERIFY_ME',
      callback_url: "#{instagram_sub_callback_url}"
    })

    redirect_to root_path
  end
end
