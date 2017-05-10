class AddLatitudeAndLongitudeToParlors < ActiveRecord::Migration[5.0]
  def change
    add_column :parlors, :latitude, :float
    add_column :parlors, :longitude, :float
  end
end
