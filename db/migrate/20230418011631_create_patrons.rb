class CreatePatrons < ActiveRecord::Migration[7.0]
  def change
    create_table :patrons do |t|
      t.string :name
      t.string :phone_number
      t.string :email_address
      t.string :username
      t.string :password_digest
<<<<<<< HEAD
      t.string :password_confirmation
=======
      t.string :passwordConfirmation
>>>>>>> 647d6219ff19f09b53a1dd11b4c766a16353ddb7

      t.timestamps
    end
  end
end
