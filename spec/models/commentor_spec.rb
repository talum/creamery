require "rails_helper"

describe Commentor, type: :model do
  describe "validations" do
    context "without a user_id" do
      it "is invalid" do
        commentor = build(:commentor, user_id: nil)
        expect(commentor).to be_invalid
      end
    end
  end
end
