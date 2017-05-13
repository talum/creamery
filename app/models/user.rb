class User < ApplicationRecord
  has_one :profile
  has_one :eater
  has_one :commentor
  has_many :favorites
  has_many :favorite_ice_creams, through: :favorites, source: 'ice_cream'
  has_one :instagram_auth
  has_many :ice_creams
  has_many :parlors

  validates :email, presence: true, uniqueness: true

  has_secure_password

  def admin!
    self.update(admin: true)
  end
  
end
