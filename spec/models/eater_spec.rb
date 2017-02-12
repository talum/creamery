require "rails_helper"

describe Eater, type: :model do
  describe "validations" do
    context "without a user_id" do
      it "is invalid" do
        eater = build(:eater, user_id: nil)
        expect(eater).to be_invalid
      end
    end
  end
end
