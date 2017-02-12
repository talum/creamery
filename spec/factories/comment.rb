FactoryGirl.define do
  factory :comment, class: Comment do
    content { Faker::Hipster.sentences }
    review
    commentor
  end
end
