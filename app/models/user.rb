class User < ApplicationRecord
  has_one :profile
  has_one :eater
  has_one :commentor

  has_secure_password
end
