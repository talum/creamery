class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :favorites, :favorite_ice_creams, :profile
  has_one :profile

end
