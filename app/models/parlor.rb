class Parlor < ApplicationRecord
  has_many :ice_creams
  has_many :favorites, as: :favoritable

  validates :name, presence: true
end
