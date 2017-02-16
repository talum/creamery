module Api
  module V1
    class IceCreamsController < ApiController
      skip_before_action :authenticate

      def index
        @ice_creams = as_nested_hash("IceCream")
        render json: @ice_creams
      end

      def create
        @ice_cream = IceCream.new(title: params[:title], parlor_id: params[:parlorId], image: params[:imageFile])
        flavor_titles = params[:flavors].split(",").map(&:strip)
        flavors = flavor_titles.map{|flavor_title| Flavor.find_or_initialize_by(title: flavor_title)}
        flavors.each do |flavor| 
          @ice_cream.flavors << flavor
        end

        if @ice_cream.save
          render json: @ice_cream
        else
          render json: { errors: @ice_cream.errors.full_messages }, status: 422
        end
      end

      def update
      end

      def show
        @ice_cream = IceCream.find_by(id: params[:id])

        if @ice_cream
          render json: @ice_cream
        else
          render json: { errors: "Ice cream not found" }, status: 404
        end
      end
    end
  end
end
