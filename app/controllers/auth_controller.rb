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
    current_user.update({ig_access_token: body["access_token"]})
    current_user.profile.update({profile_picture: body["user"]["profile_picture"]})

    redirect_to root_path
  end
end

