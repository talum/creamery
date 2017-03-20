class CreateFavorites < ActiveRecord::Migration[5.0]
  def change
    create_table :favorites do |t|
      t.integer :user_id
      t.references :favoritable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
