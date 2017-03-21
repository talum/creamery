class IceCreamSerializer < ActiveModel::Serializer
  attributes :id, :title, :parlor_id, :flavors, :ice_cream_flavors, :reviews, :review_ids, :image_url, :favorites

  def image_url
    object.image.url
  end

end
