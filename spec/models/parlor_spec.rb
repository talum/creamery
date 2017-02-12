require "rails_helper"

describe Parlor, type: :model do
  describe "validations" do
    context "without a name" do
      it "is invalid" do
        parlor = build(:parlor, name: nil)
        expect(parlor).to be_invalid
      end
    end

    context "without an address" do
      it "is invalid" do
        parlor = build(:parlor, street_address: nil)
        expect(parlor).to be_invalid
      end
    end

    context "without a city" do
      it "is invalid" do
        parlor = build(:parlor, city: nil)
        expect(parlor).to be_invalid
      end
    end

    context "without a state" do
      it "is invalid" do
        parlor = build(:parlor, state: nil)
        expect(parlor).to be_invalid
      end
    end

    context "without a zip_code" do
      it "is invalid" do
        parlor = build(:parlor, zip_code: nil)
        expect(parlor).to be_invalid
      end
    end
  end

  describe "associations" do
    it "has many ice_creams" do
      parlor = create(:parlor_with_three_ice_creams)
      expect(parlor.ice_creams.count).to eq(3)
    end
  end
end
