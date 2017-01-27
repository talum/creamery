module Api
  module V1
    class ParlorsController < ApiController
      def index
        @parlors = Parlor.all.each_with_object({}) do |parlor, hash| 
          hash[parlor.id] = ParlorSerializer.new(parlor).attributes
        end
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
