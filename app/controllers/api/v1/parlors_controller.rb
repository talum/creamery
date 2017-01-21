module Api
  module V1
    class ParlorsController < ApiController
      def index
        render json: Parlor.all
      end

      def create
      end

      def update
      end
    end
  end
end
