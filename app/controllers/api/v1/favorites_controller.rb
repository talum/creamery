module Api
  module V1
    class FavoritesController < ApiController

      def create
        @favorite = Favorite.new({
          favoritable_id: params[:favoritableId],
          favoritable_type: params[:favoritableType],
          user_id: current_user.id
        })
        if @favorite.save
          render json: @favorite
        else
          render json: { errors: @favorite.errors.full_messages }, status: 422
        end
      end

      def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        render json: { message: "Success" }
      end
    end
  end
end
