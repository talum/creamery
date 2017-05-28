class Parlor < ApplicationRecord
  has_many :ice_creams
  has_many :favorites, as: :favoritable
  belongs_to :user, optional: true
  has_many :ice_cream_suggestions

  validates :name, presence: true
end
