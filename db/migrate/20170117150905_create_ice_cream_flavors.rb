class CreateIceCreamFlavors < ActiveRecord::Migration[5.0]
  def change
    create_table :ice_cream_flavors do |t|
      t.integer :ice_cream_id
      t.integer :flavor_id
      t.timestamps
    end
  end
end
