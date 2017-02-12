class Review < ApplicationRecord
  belongs_to :ice_cream
  belongs_to :eater
  has_many :comments

  validates :title, presence: true
  validates :content, presence: true
  validates :eater_id, presence: true

end
