class Flavor < ApplicationRecord
  has_many :ice_cream_flavors
  has_many :ice_creams, through: :ice_cream_flavors

  validates :title, presence: true
end
