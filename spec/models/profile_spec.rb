require "rails_helper"

describe Profile, type: :model do
  describe "validations" do
    context "without a first_name" do
      it "is invalid" do
        profile = build(:profile, first_name: nil)
        expect(profile).to be_invalid
      end
    end

    context "without a last_name" do
      it "is invalid" do
        profile = build(:profile, last_name: nil)
        expect(profile).to be_invalid
      end
    end

    context "without a date of birth" do
      it "is invalid" do
        profile = build(:profile, date_of_birth: nil)
        expect(profile).to be_invalid
      end
    end

    context "without a user_id" do
      it "is invalid" do
        profile = build(:profile, user_id: nil)
        expect(profile).to be_invalid
      end
    end
  end
end
