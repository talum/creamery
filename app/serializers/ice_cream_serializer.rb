class IceCreamSerializer < ActiveModel::Serializer
  attributes :id, :title, :parlor_id, :flavors, :ice_cream_flavors, :reviews, :review_ids

end
