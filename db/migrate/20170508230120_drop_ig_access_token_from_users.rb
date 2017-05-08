class DropIgAccessTokenFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :ig_access_token
  end
end
