class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :favorites, :favorite_ice_creams
  has_one :profile

end
