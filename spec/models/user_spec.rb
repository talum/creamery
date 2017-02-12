require "rails_helper"

describe User, type: :model do
  describe "validations" do
    context "without an email" do
      it "is invalid without an email" do
        user = build(:user, email: nil)
        expect(user).to be_invalid
      end
    end

    context "when there are duplicate emails" do
      it "is invalid" do
        user = create(:user, email: "test@test.com")
        invalid_user = build(:user, email: "test@test.com")
        expect(invalid_user).to be_invalid
      end
    end

  end
end
