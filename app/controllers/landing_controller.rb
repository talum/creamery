require 'net/http'

class LandingController < ApplicationController
  before_action :authenticate, only: :callback

  def index
  end

  def callback
    token = params["code"]
    uri = URI('https://api.instagram.com/oauth/access_token')
    res = Net::HTTP.post_form(uri, {
      client_id: ENV['INSTAGRAM_CLIENT_ID'],
      client_secret: ENV['INSTAGRAM_CLIENT_SECRET'],
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:3000/callback',
      code: token
    })

    body = JSON.parse(res.body)
    current_user.update({ig_access_token: body["access_token"]})
    current_user.profile.update({profile_picture: body["user"]["profile_picture"]})

    redirect_to root_path
  end
end
