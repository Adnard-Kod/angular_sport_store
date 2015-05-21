FactoryGirl.define do
  factory :product do
    name { Faker::App.name }
    description { Faker::Lorem.sentence(4) }
    price { rand(10,200) }
    category { rand(1,4)}
   end
end