class DropProfilePictureFromProfiles < ActiveRecord::Migration[5.0]
  def change
    remove_column :profiles, :profile_picture
  end
end
