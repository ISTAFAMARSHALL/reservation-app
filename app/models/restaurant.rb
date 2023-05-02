class Restaurant < ApplicationRecord
    validates :name, :cuisine, :description, presence: true

    has_many :reservations, dependent: :destroy
    has_many :patrons, through: :reservations
end
