class IceCreamSerializer < ActiveModel::Serializer
  attributes :id, :title, :parlor_id, :flavors, :ice_cream_flavors
  
  def flavors
    # think about what to return
    object.flavors.pluck(:id)
  end

  def ice_cream_flavors
    # think about what to return
    object.ice_cream_flavors.pluck(:id)
  end

end
