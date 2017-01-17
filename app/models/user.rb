class User < ApplicationRecord
  has_one :profile
  has_one :eater
  has_one :commentor
end
