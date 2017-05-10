class InstagramSubscriptionsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :callback

  def callback
    if request.method == "GET"
      challenge = params["hub.challenge"]

      render text: challenge
    else
      payload = JSON.parse(request.body)
      puts payload 
      InstaIceCreamCreator.new(payload).execute

      return
    end
  end

  def create
    InstagramClient.new.create_subscription

    redirect_to root_path
  end
end
