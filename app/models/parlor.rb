class Parlor < ApplicationRecord
  has_many :ice_creams
  has_many :favorites, as: :favoritable
  belongs_to :user

  validates :name, presence: true
end
