class RestaurantSerializer < ActiveModel::Serializer
  attributes :id, :name, :cuisine, :description

  has_many :reservations
  has_many :patrons, through: :reservations

end
