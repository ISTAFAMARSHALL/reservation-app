class PatronSerializer < ActiveModel::Serializer
  attributes :id, :name,:phone_number,:email_address,:username,:password,:passwordConfirmation

  has_many :reservations
  has_many :restaurants, through: :reservations
end
