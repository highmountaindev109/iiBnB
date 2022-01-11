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

listing1 = Listing.create!(host_id: 1, title: "The Box", description: "Just a box", address: "Corner of Wall Street", guest_limit: 1, price: 100, bedrooms: 1, bathrooms: 1, longitude: 40.706064, latitude: -74.008782)
listing2 = Listing.create!(host_id: 1, title: "The Beach", description: "Just a beach house", address: "Somewhere in Miami", guest_limit: 12, price: 1200, bedrooms: 8, bathrooms: 6, longitude:40.701613, latitude: -73.995008 )
listing3 = Listing.create!(host_id: 2, title: "The Cabin in the Woods", description: "It's a cabin in the woods", address: "Somewhere undisclosed", guest_limit: 6, price: 237, bedrooms: 3, bathrooms: 1.5, longitude:40.702105, latitude:-73.997019 )
listingphoto1 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kelli-mcclintock-d21p_xkPoMA-unsplash.jpg')
listingphoto2 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kadarius-seegars-DevJkLB3hWE-unsplash.jpg')
listingphoto3 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kadarius-seegars-S6OvsSwm5sE-unsplash.jpg')
listingphoto4 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kelli-mcclintock-ANp23FdOOls-unsplash.jpg')
listingphoto5 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kelli-mcclintock-DcoB_NoNl6U-unsplash.jpg')
listingphoto6 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/kelli-mcclintock-GopRYASfsOc-unsplash.jpg')
listingphoto7 = URI.open('https://iibnb-seeds.s3.amazonaws.com/cb/brandable-box-8mCsyImZRGY-unsplash.jpg')
listingphoto8 = URI.open('https://iibnb-seeds.s3.amazonaws.com/bh/1.jpg')
listingphoto9 = URI.open('https://iibnb-seeds.s3.amazonaws.com/bh/2.jpg')
listingphoto10 = URI.open('https://iibnb-seeds.s3.amazonaws.com/bh/3.jpg')
listingphoto11 = URI.open('https://iibnb-seeds.s3.amazonaws.com/bh/4.jpg')
listingphoto12 = URI.open('https://iibnb-seeds.s3.amazonaws.com/bh/5.jpg')
listingphoto13 = URI.open('https://iibnb-seeds.s3.amazonaws.com/bh/6.jpg')
listingphoto14 = URI.open('https://iibnb-seeds.s3.amazonaws.com/bh/7.jpg')
listingphoto15 = URI.open('https://iibnb-seeds.s3.amazonaws.com/ch/Cabin1.jpg')
listingphoto16 = URI.open('https://iibnb-seeds.s3.amazonaws.com/ch/Cabin2.jpg')
listingphoto17 = URI.open('https://iibnb-seeds.s3.amazonaws.com/ch/Cabin3.jpg')
listingphoto18 = URI.open('https://iibnb-seeds.s3.amazonaws.com/ch/Cabin4.jpg')
listingphoto19 = URI.open('https://iibnb-seeds.s3.amazonaws.com/ch/Cabin5.jpg')
listingphoto20 = URI.open('https://iibnb-seeds.s3.amazonaws.com/ch/Cabin6.jpg')
listingphoto21 = URI.open('https://iibnb-seeds.s3.amazonaws.com/ch/Cabin7.jpg')


listing1.photos.attach(io: listingphoto1, filename:'kelli-mcclintock-d21p_xkPoMA-unsplash.jpg')
listing1.photos.attach(io: listingphoto2, filename:'cb2.jpg')
listing1.photos.attach(io: listingphoto3, filename:'cb3.jpg')
listing1.photos.attach(io: listingphoto4, filename:'cb4.jpg')
listing1.photos.attach(io: listingphoto5, filename:'cb5.jpg')
listing1.photos.attach(io: listingphoto6, filename:'cb6.jpg')
listing1.photos.attach(io: listingphoto7, filename:'cb7.jpg')

listing2.photos.attach(io: listingphoto8, filename:'bh1.jpg')
listing2.photos.attach(io: listingphoto9, filename:'bh2.jpg')
listing2.photos.attach(io: listingphoto10, filename:'bh3.jpg')
listing2.photos.attach(io: listingphoto11, filename:'bh4.jpg')
listing2.photos.attach(io: listingphoto12, filename:'bh5.jpg')
listing2.photos.attach(io: listingphoto13, filename:'bh6.jpg')
listing2.photos.attach(io: listingphoto14, filename:'bh7.jpg')

listing3.photos.attach(io: listingphoto15, filename:'Cabin1.jpg')
listing3.photos.attach(io: listingphoto16, filename:'Cabin2.jpg')
listing3.photos.attach(io: listingphoto17, filename:'Cabin3.jpg')
listing3.photos.attach(io: listingphoto18, filename:'Cabin4.jpg')
listing3.photos.attach(io: listingphoto19, filename:'Cabin5.jpg')
listing3.photos.attach(io: listingphoto20, filename:'Cabin6.jpg')
listing3.photos.attach(io: listingphoto21, filename:'Cabin7.jpg')