FactoryGirl.define do
  factory :review, class: Review do
    title   { Faker::Hipster.sentence }
    content { Faker::Hipster.sentences }
    eater
    ice_cream
  end
end
