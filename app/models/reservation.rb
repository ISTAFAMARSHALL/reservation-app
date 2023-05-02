class Reservation < ApplicationRecord
    validates :name, :number_of_guests, :day , :time, :patron_id, :restaurant_id, presence: true
    validates_uniqueness_of :patron_id, scope: [:day, :time]

    belongs_to :patron
    belongs_to :restaurant
    
end
