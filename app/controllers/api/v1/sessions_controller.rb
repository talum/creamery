module Api
  module V1
    class SessionsController < ApiController
      skip_before_action :authenticate

      def create
        user = User.find_by(email: auth_params[:email])

        if user && user.authenticate(auth_params[:password])
          jwt = Auth.issue({user: user.id})
          render json: { jwt: jwt }
        else
          render json: { errors: 'No user matches that email and password combination' }, status: 422
        end
      end

    private
      def auth_params
        params.require(:session).permit(:email, :password)
      end

    end
  end
end
