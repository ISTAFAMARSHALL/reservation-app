class PatronSerializer < ActiveModel::Serializer
  attributes :name, :phone_number, :email_address

  has_many :reservations
  has_many :restaurants, through: :reservations
end
