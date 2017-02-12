FactoryGirl.define do
  factory :flavor, class: Flavor do
    title { Faker::Food.ingredient }
  end
end
