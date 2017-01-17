class Comment < ApplicationRecord
  belongs_to :ice_cream
  belongs_to :commentor
end
