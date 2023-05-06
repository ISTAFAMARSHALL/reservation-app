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
        reservation = @current_user.reservations.create!(reservation_params)
        render json: @current_user, status: :created
    end

    def update
        reservation = Reservation.find(params[:id])
        updated_reservation = reservation.update!(reservation_params)
        render json: @current_user, status: :accepted
    end

    def destroy
        reservation = Reservation.find(params[:id])
        reservation.destroy
        render json: @current_user
    end

    private

    def reservation_params
        params.permit(:name, :number_of_guests, :day, :time, :restaurant_id )
    end
    
end
