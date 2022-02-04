class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.integer :listing_id, null: false
      t.integer :guest_id, null: false
      t.integer :number_of_guests, null: false
      t.datetime :check_in_date, null: false
      t.datetime :check_out_date, null: false

      t.timestamps
    end
  end
end
