class SessionsController < ApplicationRecord

  def create
    user = User.find_by(email: auth_params[:email])
    if user.authenticate(auth_params[:password])
      jwt = Auth.issue({user: user.id})
      render json: { jwt: jwt }
    else
      render json: { error: 'No user matches that email and password combination' }
    end
  end

end
