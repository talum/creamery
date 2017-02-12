require "rails_helper"

describe Comment, type: :model do
  describe "validations" do
    context "without a commentor_id" do
      it "is invalid" do
        comment = build(:comment, commentor_id: nil)
        expect(comment).to be_invalid
      end
    end

    context "without content" do
      it "is invalid" do
        comment = build(:comment, content: nil)
        expect(comment).to be_invalid
      end
    end

    context "without a review id" do
      it "is invalid" do
        comment = build(:comment, review_id: nil)
        expect(comment).to be_invalid
      end
    end
  end
end
