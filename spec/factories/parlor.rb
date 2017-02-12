FactoryGirl.define do
  factory :parlor, class: Parlor do
    name           { Faker::Company.name  }
    street_address { Faker::Address.street_address }
    city           { Faker::Address.city_suffix }
    state          { Faker::Address.state_abbr }
    zip_code       { Faker::Address.zip_code }

    factory :parlor_with_three_ice_creams, class: Parlor do
      transient do
        ice_creams_count 3
      end

      after(:create) do |parlor, evaluator|
        create_list(:ice_cream, evaluator.ice_creams_count, parlor: parlor)
      end
    end
  end

  trait :chain do
    chain true
  end

  trait :not_chain do
    chain false
  end

end
