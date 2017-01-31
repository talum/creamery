class Review < ApplicationRecord
  belongs_to :ice_cream
  belongs_to :eater
  has_many :comments
end
