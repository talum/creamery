class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :eater_id, :ice_cream_id, :created_at, :user

  def user
    UserSerializer.new(object.eater.user).attributes
  end

end
