class AddImageToIceCreams < ActiveRecord::Migration[5.0]
  def change
    add_column :ice_creams, :image, :string
  end
end
