class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.string :name
      t.integer :number_of_guests
      t.string :time
      t.integer :patron_id
      t.integer :restaurant_id

      t.timestamps
    end
  end
end
