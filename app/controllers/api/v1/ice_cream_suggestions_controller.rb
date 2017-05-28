module Api
  module V1
    class IceCreamSuggestionsController < ApiController
      skip_before_action :authenticate, only: [:create]

      def create
        ics = IceCreamSuggestion.new(ice_cream_suggestion_params)
        ics.save!
      end

      private

      def ice_cream_suggestion_params
        params.require(:ice_cream_suggestion).permit(:ice_cream_title, :comment, :name, :email, :parlor_id)
      end

    end
  end
end
