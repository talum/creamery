class AddIgMediaIdToIceCreams < ActiveRecord::Migration[5.0]
  def change
    add_column :ice_creams, :ig_media_id, :string
  end
end
