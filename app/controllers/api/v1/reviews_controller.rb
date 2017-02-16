module Api
  module V1
    class ReviewsController < ApiController

      def create
        @review = Review.create(review_params.merge({eater_id: current_user.eater.id}))

        if @review.save
          render json: @review
        else
          render json: { errors: @review.errors.full_messages }, status: 422
        end
      end

      def update
      end

      def index
      end

    private

      def review_params
        params.require(:review).permit(:title, :content, :ice_cream_id)
      end
    end
  end
end
