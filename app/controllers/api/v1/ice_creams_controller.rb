module Api
  module V1
    class IceCreamsController < ApiController
      def index
        render json: IceCream.all
      end

      def create
      end

      def update
      end

      def show
      end
    end
  end
end
