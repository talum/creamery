class User < ApplicationRecord
  has_one :profile
  has_one :eater
  has_one :commentor

  validates :email, presence: true, uniqueness: true

  has_secure_password

  def admin!
    self.update(admin: true)
  end
end
