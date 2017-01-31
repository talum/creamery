module Api
  module V1
    class ReviewsController < ApiController
      def create
        binding.pry
      end

      def update
      end

      def index
        @ice_cream = IceCream.find(params[:id])
        @ice_cream_reviews = @ice_cream.reviews
        render json: @ice_cream_reviews
      end
    end
  end
end
