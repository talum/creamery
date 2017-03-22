module Api
  module V1
    class UsersController < ApiController
      skip_before_action :authenticate

      def create
        @user = User.new(user_params)
        @user.build_eater
        @user.build_commentor

        if  @user.save
          render json: @user and return
        else
          render json: { errors: @user.errors.full_messages }, status: 422
        end
      end

      def show
        @user = User.find_by(id: params[:id])

        if @user
          render json: @user
        else
          render json: { errors: "User not found" }, status: 404
        end
      end

    private
      
      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end
    end
  end
end
