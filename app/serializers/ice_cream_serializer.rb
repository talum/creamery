class IceCreamSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :parlor_id, :flavors, :ice_cream_flavors, :reviews, :review_ids, :image_url

  def image_url
    root_url + object.image.url
  end

end
