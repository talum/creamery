FactoryGirl.define do
  factory :ice_cream, class: IceCream do
    title { Faker::Food.ingredient }
    image { Faker::LoremPixel.image  }
    parlor

    factory :ice_cream_with_three_flavors, class: IceCream do
      transient do
        flavors_count 3
      end

      after(:create) do |ice_cream, evaluator|
        create_list(:flavor, evaluator.flavors_count, ice_creams: [ice_cream])
      end
    end

    factory :ice_cream_with_two_reviews, class: IceCream do
      transient do
        reviews_count 2
      end

      after(:create) do |ice_cream, evaluator|
        create_list(:review, evaluator.reviews_count, ice_cream: ice_cream)
      end
    end
  end

end
