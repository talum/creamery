class CreateIceCreams < ActiveRecord::Migration[5.0]
  def change
    create_table :ice_creams do |t|
      t.string :title
      t.integer :parlor_id
      t.timestamps
    end
  end
end
