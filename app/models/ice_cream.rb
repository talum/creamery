class IceCream < ApplicationRecord
  has_many :reviews
  has_many :comments, through: :reviews
  has_many :ice_cream_flavors
  has_many :flavors, through: :ice_cream_flavors
  belongs_to :parlor
end
