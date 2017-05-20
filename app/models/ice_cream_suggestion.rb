class IceCreamSuggestion < ApplicationRecord
  belongs_to :parlor
  validates :ice_cream_title, presence: true

end

