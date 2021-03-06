class ParlorSerializer < ActiveModel::Serializer
  attributes :id, :name, :ice_creams, :street_address, :city, :state, :zip_code, :latitude, :longitude

  def ice_creams
    object.ice_creams.pluck(:id)
  end
end
