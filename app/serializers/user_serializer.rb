class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :favorite_ice_creams
  has_one :profile

end
