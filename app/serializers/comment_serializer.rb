class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commentor_id, :review_id, :content, :created_at, :updated_at, :author 

  def author
    UserSerializer.new(object.commentor.user).attributes
  end
end
