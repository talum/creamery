module Api
  module V1
    class ApiController < ActionController::API
      before_action :authenticate
      
      def logged_in?
        !!current_user
      end

      def current_user
        if auth_present? && token_present?
          user = User.find(auth["user"])
          @current_user ||= user if user
        end
      end

      def authenticate
        render json: { errors: "unauthorized" }, status: 401 unless logged_in?
      end

      def as_nested_hash(klass)
        klass.constantize.all.each_with_object({}) do |object, hash|
          hash[object.id] = "#{klass}Serializer".constantize.new(object).attributes
        end
      end

     private
    
      def token
        request.env["HTTP_AUTHORIZATION"].scan(/Bearer(.*)$/).flatten.last.strip
      end

      def token_present?
        token != "undefined"
      end

      def auth
        Auth.decode(token)
      end

      def auth_present?
        !!request.env.fetch("HTTP_AUTHORIZATION", "").scan(/Bearer/).flatten.first
      end
    end
  end
end
