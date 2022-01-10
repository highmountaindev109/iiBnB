# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Listing.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('listings')

demo = User.create!( email: 'User@Fake.com', first_name: 'Demo', last_name: 'User', password: '123456')
tashi = User.create!( email: 'tashi@sangpo.com', first_name: 'Tashi', last_name: 'Sangpo', password: '123456')

file = URI.open('https://iibnb-seeds.s3.amazonaws.com/demopf.png')
demo.photo.attach(io: file, filename: 'demopf.png')

listing1 = Listing.create!(host_id: 1, title: "The Box", description: "Just a box", address: "Corner of Wall Street", guest_limit: 1, price: 100, bedrooms: 1, bathrooms: 1 )
listingphoto1 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kelli-mcclintock-d21p_xkPoMA-unsplash.jpg')
listingphoto2 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kadarius-seegars-DevJkLB3hWE-unsplash.jpg')
listingphoto3 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kadarius-seegars-S6OvsSwm5sE-unsplash.jpg')
listingphoto4 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kelli-mcclintock-ANp23FdOOls-unsplash.jpg')
listingphoto5 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kelli-mcclintock-DcoB_NoNl6U-unsplash.jpg')
listingphoto6 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kelli-mcclintock-GopRYASfsOc-unsplash.jpg')
listingphoto7 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/brandable-box-8mCsyImZRGY-unsplash.jpg')

