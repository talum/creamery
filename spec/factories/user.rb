FactoryGirl.define do
  factory :user, class: User do
    email { Faker::Internet.email }
  end
end
