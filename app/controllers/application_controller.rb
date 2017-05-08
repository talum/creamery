class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    @current_user
  end

  def authenticate
    @current_user ||= User.find(session[:user_id])
  end
end
