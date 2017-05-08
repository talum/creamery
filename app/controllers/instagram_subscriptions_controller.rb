class InstagramSubscriptionsController < ApplicationController

  def callback
    if request.method == "GET"
      challenge = params["hub.challenge"]
      render text: challenge
    else
      # store the updates that match
      return
    end
  end

  def create
    url = 'https://api.instagram.com/v1/subscriptions/'
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
