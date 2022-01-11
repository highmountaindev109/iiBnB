class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.string :address, null: false
      t.integer :guest_limit, null: false
      t.integer :price, null: false
      t.integer :bedrooms, null: false
      t.integer :bathrooms, null: false
      t.float :longitude, null: false
      t.float :latitude, null: false
      t.timestamps
    end
    add_index :listings, :host_id
  end
end
