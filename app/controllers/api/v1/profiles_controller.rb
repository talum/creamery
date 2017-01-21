module Api
  module V1
    class ProfilesController < ApiController
      def create
        #send user_id and data
      end
      
      def update
      end

      def show
        @parlor = Parlor.find(params[:id])
        render json: @parlor
      end
    end
  end
end


