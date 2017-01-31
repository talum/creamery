module Api
  module V1
    class UsersController < ApiController
      skip_before_action :authenticate

      def create
        @user = User.new(user_params)
        @user.build_eater
        @user.build_commentor
        @user.save

        render json: @user
      end

    private
      
      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end
    end
  end
end
