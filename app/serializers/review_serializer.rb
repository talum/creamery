class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :eater_id, :ice_cream_id, :created_at, :user, :comments

  def user
    UserSerializer.new(object.eater.user).attributes
  end

end
