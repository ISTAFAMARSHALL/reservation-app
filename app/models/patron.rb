class Patron < ApplicationRecord
    has_secure_password
    
    validates :name, :password, :password_confirmation, presence: true
    validates :phone_number, length: { is: 12 }
    validates :username, :email_address, uniqueness: true

    has_many :reservations, dependent: :destroy
    has_many :restaurants, through: :reservations
    
end
