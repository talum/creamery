class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :content
      t.integer :eater_id
      t.integer :ice_cream_id
      t.timestamps
    end
  end
end
