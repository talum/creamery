class InstagramClient
  INSTAGRAM_API_ROOT = 'https://api.instagram.com/v1'

  def retrieve_access_token(temporary_token)
    RestClient.post("#{INSTAGRAM_API_ROOT}/oauth/access_token", {
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
  
end
