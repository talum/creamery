class AuthController < ApplicationController
  before_action :authenticate, only: :callback

  def callback
    token = params["code"]
    res = InstagramClient.new.retrieve_access_token(token)

    body = JSON.parse(res.body)
    ig_auth = InstagramAuth.find_or_create_by(user_id: current_user.id)
    ig_auth.update({
      access_token:      body["access_token"],
      username:          body["user"]["username"],
      bio:               body["user"]["bio"],
      instagram_user_id: body["user"]["id"],
      full_name:         body["user"]["full_name"],
      profile_picture:   body["user"]["profile_picture"]
    })

    redirect_to root_path
  end

  def connect_instagram
    redirect_url = InstagramClient.new.oauth_endpoint
    
    render json: { redirect_url: redirect_url }
  end
end

