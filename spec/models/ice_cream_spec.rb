require "rails_helper"

describe IceCream, type: :model do
  describe "validations" do
    context "without a title" do
      it "is invalid" do
        ice_cream = build(:ice_cream, title: nil)
        expect(ice_cream).to be_invalid
      end
    end

    context "without a parlor_id" do
      it "is invalid" do
        ice_cream = build(:ice_cream, parlor_id: nil)
        expect(ice_cream).to be_invalid
      end
    end

  end

  describe "associations" do
    it "has many flavors" do
      ice_cream_with_flavors = create(:ice_cream_with_three_flavors)
      expect(ice_cream_with_flavors.flavors.count).to eq(3)
    end

    it "has many reviews" do
      ice_cream_with_reviews = create(:ice_cream_with_two_reviews)
      expect(ice_cream_with_reviews.reviews.count).to eq(2)
    end

  end
end
