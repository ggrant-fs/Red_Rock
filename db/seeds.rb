require "faker"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create!(username: 'Gary', email: 'garygrant@gmail.com', phone_number:'123-456-7890', password: '123456')

20.times do
  user_data =  User.create!(
        username: Faker::Name.name,
        email: Faker::Name.first_name + "@gmail.com",
        phone_number: Faker::PhoneNumber.cell_phone,
        password: Faker::String.random(length: 10..15) 
    )
end

20.times do
   company_data = Company.create!(
        username: Faker::Company.name,
        email: Faker::Name.first_name + "@gmail.com",
        phone_number: Faker::Number.number(digits: 10),
        industry: Faker::Company.industry,
        suffix: Faker::Company.suffix,
        duns: Faker::Company.duns_number,
        password: Faker::String.random(length: 10..15) 
    )
end
