class CreateIceCreamSuggestion < ActiveRecord::Migration[5.0]
  def change
    create_table :ice_cream_suggestions do |t|
      t.integer :parlor_id
      t.string :ice_cream_title
      t.text :comment
      t.string :name
      t.string :email
      t.timestamps
    end
  end
end
