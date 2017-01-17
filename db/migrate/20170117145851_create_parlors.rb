class CreateParlors < ActiveRecord::Migration[5.0]
  def change
    create_table :parlors do |t|
      t.string :name
      t.string :street_address
      t.string :city
      t.string :state
      t.integer :zip_code
      t.boolean :chain
      t.timestamps
    end
  end
end
