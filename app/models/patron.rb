class Patron < ApplicationRecord
    has_secure_password
    
    validates :name, presence: true
    # validates :phone_number, length: { is: 14 }

    has_many :reservations, dependent: :destroy
    has_many :restaurants, through: :reservations
end
