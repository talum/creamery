FactoryGirl.define do
  factory :profile, class: Profile do
    first_name    { Faker::Name.first_name } 
    last_name     { Faker::Name.last_name }
    date_of_birth { Faker::Date.between(30.years.ago, 10.years.ago) }
    user
  end
end
