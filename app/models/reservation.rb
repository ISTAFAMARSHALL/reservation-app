class Reservation < ApplicationRecord
    validates :name, :number_of_guests, :time, :patron_id, :restaurant_id, presence: true
    
    belongs_to :patron
    belongs_to :restaurant
end
