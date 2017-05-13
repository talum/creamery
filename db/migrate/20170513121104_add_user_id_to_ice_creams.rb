class AddUserIdToIceCreams < ActiveRecord::Migration[5.0]
  def change
    add_column :ice_creams, :user_id, :integer
  end
end
