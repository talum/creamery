module Api
  module V1
    class IceCreamsController < ApiController
      skip_before_action :authenticate

      def index
        @ice_creams = as_nested_hash("IceCream")
        render json: @ice_creams
      end

      def create
        @ice_cream = IceCream.new(title: params[:title], parlor_id: params[:parlorId])
        flavor_titles = params[:flavors].split(",").map(&:strip)
        flavors = flavor_titles.map{|flavor_title| Flavor.find_or_initialize_by(title: flavor_title)}
        flavors.each do |flavor| 
          @ice_cream.flavors << flavor
        end

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
