class ReservationSerializer < ActiveModel::Serializer
  attributes :id , :number_of_guests, :time

  attribute :restaurant do 
    self.object.restaurant
  end

end
