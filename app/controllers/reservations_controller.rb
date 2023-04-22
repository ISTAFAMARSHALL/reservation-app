class ReservationsController < ApplicationController

    def index
        reservations = Reservation.all 
        render json: reservations, status: :ok
    end

    def show
        reservation = Reservation.find(params[:id])
        render json: reservation, status: :ok
    end

    def create
        reservation = Patron.reservations.create!(reservation_params)
        render json: reservation, status: :created
    end

    def update
        reservation = Reservation.find(params[:id])
        updated_reservation = reservation.update(reservation_params)
        render json: updated_reservation, status: :accepted
    end

    def destroy
        reservation = Reservation.find(params[:id])
        reservation.destroy
        head :no_content
    end

    private

    def reservation_params
        params.permit(:name, :number_of_guests, :time, :patron_id, :restaurant_id )
    end
    
end
