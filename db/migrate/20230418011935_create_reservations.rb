class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.string :name
      t.string :number_of_guests
      t.string :time
      t.string :belongs_to
      t.string :patron
      t.string :belongs_to
      t.string :restaurant

      t.timestamps
    end
  end
end
