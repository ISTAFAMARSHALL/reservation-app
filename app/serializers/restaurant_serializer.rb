class RestaurantSerializer < ActiveModel::Serializer
  attributes :name, :cuisine, :description

  has_many :reservations
  has_many :patrons, through: :reservations
end
