class AuthController < ApplicationController
  before_action :authenticate, only: :callback

  def callback
    token = params["code"]
    res = RestClient.post('https://api.instagram.com/oauth/access_token', {
      client_id: ENV['INSTAGRAM_CLIENT_ID'],
      client_secret: ENV['INSTAGRAM_CLIENT_SECRET'],
      grant_type: 'authorization_code',
      redirect_uri: "#{callback_url}",
      code: token
    })

    body = JSON.parse(res.body)
    ig_auth = InstagramAuth.find_or_create_by(user_id: current_user.id)
    ig_auth.update({
      access_token: body["access_token"],
      username: body["user"]["username"],
      bio: body["user"]["bio"],
      instagram_user_id: body["user"]["id"],
      full_name: body["user"]["full_name"],
      profile_picture: body["user"]["profile_picture"]
    })

    redirect_to root_path
  end
end

