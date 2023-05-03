class Restaurant < ApplicationRecord
    validates :name, :cuisine, :description, presence: true

    has_many :reservations
    has_many :patrons, through: :reservations
end
