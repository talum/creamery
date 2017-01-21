module Api
  module V1
    class UsersController < ApiController
      def create
        @user = User.find_or_create_by(email: params[:email])
        @user.build_eater
        @user.build_commentor
        @user.save

        render json: @user
      end
    end
  end
end
