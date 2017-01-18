module Api
  module V1
    class IceCreamsController < ApiController
      def index
        IceCream.all
      end
    end
  end
end
