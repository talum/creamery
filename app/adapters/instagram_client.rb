class InstagramClient
  include Rails.application.routes.url_helpers
  INSTAGRAM_URL      = 'https://api.instagram.com'
  INSTAGRAM_API_ROOT = "#{INSTAGRAM_URL}/v1"

  def retrieve_access_token(temporary_token)
    RestClient.post("#{INSTAGRAM_URL}/oauth/access_token", {
      client_id:     ENV['INSTAGRAM_CLIENT_ID'],
      client_secret: ENV['INSTAGRAM_CLIENT_SECRET'],
      grant_type:    'authorization_code',
      redirect_uri:  "#{callback_url}",
      code:          temporary_token
    })
  end

  def create_subscription
    RestClient.post("#{INSTAGRAM_API_ROOT}/subscriptions/", {
      client_id:     ENV['INSTAGRAM_CLIENT_ID'],
      client_secret: ENV['INSTAGRAM_CLIENT_SECRET'],
      object:        'user',
      aspect:        'media',
      verify_token: 'VERIFY_ME',
      callback_url: "#{instagram_sub_callback_url}"
    })
  end

  def fetch_media(media_id, user_token)
    RestClient.get("#{INSTAGRAM_API_ROOT}/media/#{media_id}?access_token=#{user_token}")
  end

  def fetch_location(location_id)
    RestClient.get("#{INSTAGRAM_API_ROOT}/locations/#{location_id}?access_token=#{user_token}")
  end

  def oauth_endpoint
    "#{INSTAGRAM_URL}/oauth/authorize/?client_id=#{ENV['INSTAGRAM_CLIENT_ID']}&redirect_uri=#{root_url}callback&response_type=code"
  end
  
end
