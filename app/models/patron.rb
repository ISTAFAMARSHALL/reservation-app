class Patron < ApplicationRecord
    validates :name, presence: true
    # validates :phone_number, length: { is: 14 }

    has_many :reservations
    has_many :restaurants, through: :reservations
end
