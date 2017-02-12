class Comment < ApplicationRecord
  belongs_to :commentor
  belongs_to :review

  validates :commentor_id, presence: true
  validates :review_id, presence: true
  validates :content, presence: true
end
