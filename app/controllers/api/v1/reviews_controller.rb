module Api
  module V1
    class ReviewsController < ApiController

      def create
        @review = Review.create(review_params.merge({eater_id: current_user.eater.id}))
        @review.save
        render json: @review
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
