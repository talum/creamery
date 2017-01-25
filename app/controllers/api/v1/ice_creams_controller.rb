module Api
  module V1
    class IceCreamsController < ApiController
      def index
        render json: IceCream.all
      end

      def create
        binding.pry
        @ice_cream = IceCream.new(title: params[:title], parlor_id: params[:parlorId])
        # add flavors of ice cream too
        @ice_cream.save
        render json: @ice_cream
      end

      def update
      end

      def show
      end
    end
  end
end
