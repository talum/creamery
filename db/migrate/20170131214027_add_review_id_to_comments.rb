class AddReviewIdToComments < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :review_id, :integer
  end
end
