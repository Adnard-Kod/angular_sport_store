FactoryGirl.define do
  factory :product do
    name { Faker::App.name }
    description { Faker::Lorem.sentence(4) }
    price { Faker::Number.number(3) }
    category { Faker::Number.number(1)}
   end
end