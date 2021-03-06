class IceCream < ApplicationRecord
  has_many :reviews
  has_many :comments, through: :reviews
  has_many :ice_cream_flavors
  has_many :flavors, through: :ice_cream_flavors
  belongs_to :parlor
  has_many :favorites, as: :favoritable
  belongs_to :user

  validates :title, presence: true
  validates :parlor_id, presence: true

  mount_base64_uploader :image, ImageUploader, file_name: -> () { SecureRandom.hex(10) }
end
