require "rails_helper"

describe Review, type: :model do
  describe "validations" do
    context "without a title" do
      it "is invalid" do
        review = build(:review, title: nil)
        expect(review).to be_invalid
      end
    end

    context "without content" do
      it "is invalid" do
        review = build(:review, content: nil)
        expect(review).to be_invalid
      end
    end

    context "without an eater" do
      it "is invalid" do
        review = build(:review, eater_id: nil)
        expect(review).to be_invalid
      end
    end

    
    context "without an ice_cream" do
      it "is invalid" do
        review = build(:review, ice_cream_id: nil)
        expect(review).to be_invalid
      end
    end
  end
end
