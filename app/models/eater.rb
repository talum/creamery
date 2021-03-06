class Eater < ApplicationRecord
  belongs_to :user
  has_many :reviews
  has_many :ice_creams, through: :reviews

  validates :user_id, presence: true
end
