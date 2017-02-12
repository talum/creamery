require "rails_helper"

describe User, type: :model do
  describe "without an email" do
    it "is invalid" do
      user = build(:user, email: nil)
      expect(user).to be_invalid
    end
  end
end
