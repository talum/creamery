module Api
  module V1
    class ParlorsController < ApiController
      skip_before_action :authenticate

      def index
        @parlors = as_nested_hash("Parlor")
        render json: @parlors
      end

      def create
        @parlor = Parlor.new(
          name: params[:parlor][:name],
          street_address: params[:parlor][:street_address],
          city: params[:parlor][:city],
          state: params[:parlor][:state],
          zip_code: params[:parlor][:zip_code]
        )

        if @parlor.save
          render json: @parlor
        else
          render json: @parlor.errors
        end
      end

      def update
      end

    end
  end
end
