class AddIgImageAndLinkToIceCreams < ActiveRecord::Migration[5.0]
  def change
    add_column :ice_creams, :ig_image, :string
    add_column :ice_creams, :ig_link, :string
  end
end
