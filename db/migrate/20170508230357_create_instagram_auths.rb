class CreateInstagramAuths < ActiveRecord::Migration[5.0]
  def change
    create_table :instagram_auths do |t|
      t.integer :user_id
      t.string :access_token
      t.string :username
      t.string :bio
      t.string :instagram_user_id
      t.string :full_name
      t.string :profile_picture
    end
  end
end
