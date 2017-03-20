class Parlor < ApplicationRecord
  has_many :ice_creams
  has_many :favorites, as: :favoritable

  validates :name, presence: true
  validates :street_address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip_code, presence: true
end
