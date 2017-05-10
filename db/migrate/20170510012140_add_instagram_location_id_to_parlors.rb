class AddInstagramLocationIdToParlors < ActiveRecord::Migration[5.0]
  def change
    add_column :parlors, :ig_location_id, :string
  end
end
