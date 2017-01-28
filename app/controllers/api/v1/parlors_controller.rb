module Api
  module V1
    class ParlorsController < ApiController
      def index
        @parlors = as_nested_hash("Parlor")
        render json: @parlors
      end

      def create
        @parlor = Parlor.create(
          name: params[:parlor][:name],
          street_address: params[:parlor][:streetAddress],
          city: params[:parlor][:city],
          state: params[:parlor][:state],
          zip_code: params[:parlor][:zipCode]
        )
        render json: @parlor
      end

      def update
      end

    end
  end
end
