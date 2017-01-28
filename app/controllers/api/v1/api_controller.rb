module Api
  module V1
    class ApiController < ActionController::API

      def as_nested_hash(klass)
        klass.constantize.all.each_with_object({}) do |object, hash|
          hash[object.id] = "#{klass}Serializer".constantize.new(object).attributes
        end
      end

    end
  end
end
