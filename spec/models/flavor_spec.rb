require "rails_helper"

describe Flavor, type: :model do
  describe "validations" do
    context "without a title" do
      it "is invalid" do
        flavor = build(:flavor, title: nil)
        expect(flavor).to be_invalid
      end
    end
  end
end
