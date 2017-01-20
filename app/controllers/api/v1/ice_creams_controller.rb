module Api
  module V1
    class IceCreamsController < ApiController
      def index
        render json: IceCream.all
      end
    end
  end
end
