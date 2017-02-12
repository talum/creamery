class User < ApplicationRecord
  has_one :profile
  has_one :eater
  has_one :commentor

  validates :email, presence: true, uniqueness: true

  has_secure_password
end
