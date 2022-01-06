# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.delete_all

demo = User.create!( email: 'User@Fake.com', first_name: 'Demo', last_name: 'User', password: '123456')
tashi = User.create!( email: 'tashi@sangpo.com', first_name: 'Tashi', last_name: 'Sangpo', password: '123456')

file = URI.open('https://iibnb-seeds.s3.amazonaws.com/demopf.png')
demo.photo.attach(io: file, filename: 'demopf.png')
