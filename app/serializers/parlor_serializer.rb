class ParlorSerializer < ActiveModel::Serializer
  attributes :name, :ice_creams

  def ice_creams
    object.ice_creams.pluck(:id)
  end
end
