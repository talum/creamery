class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :favoritable, polymorphic: true
  belongs_to :ice_cream, -> { where(favorites: { favoritable_type: 'IceCream' }) }, foreign_key: 'favoritable_id', optional: true
end
