module Api
  module V1
    class UsersController < ApiController
      skip_before_action :authenticate

      def create
        @user = User.new(user_params)
        @user.build_eater
        @user.build_commentor
        @user.build_profile

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

      def update
        @user = User.find_by(id: params[:user][:id])
        @user.profile.update({
          first_name: params[:user][:first_name],
          last_name: params[:user][:last_name],
          date_of_birth: DateTime.parse(params[:user][:date_of_birth])
        })

        render json: @user
      end

    private
      
      def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
      end
    end
  end
end
