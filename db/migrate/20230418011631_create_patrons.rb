class CreatePatrons < ActiveRecord::Migration[7.0]
  def change
    create_table :patrons do |t|
      t.string :name
      t.string :phone_number
      t.string :email_address
      t.string :username
      t.string :password_digest
      t.string :passwordConfirmation

      t.timestamps
    end
  end
end
