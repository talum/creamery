require "rails_helper"

describe IceCreamFlavor, type: :model do
  describe "validations" do
    context "without an ice cream id" do
      it "is invalid" do
        ice_cream_flavor = build(:ice_cream_flavor, ice_cream_id: nil, flavor_id: 1)
        expect(ice_cream_flavor).to be_invalid
      end
    end

    context "without a flavor id" do
      it "is invalid" do
        ice_cream_flavor = build(:ice_cream_flavor, ice_cream_id: 1, flavor_id: nil)
        expect(ice_cream_flavor).to be_invalid
      end
    end
  end
end
