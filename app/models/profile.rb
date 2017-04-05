class Profile < ApplicationRecord
  belongs_to :user

  def full_name
    "#{user.first_name} #{user.last_name}"
  end

end
