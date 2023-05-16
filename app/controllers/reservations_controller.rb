class ReservationsController < ApplicationController

    # def index
    #     reservations = Reservation.all 
    #     render json: reservations, status: :ok
    # end

    # def show
    #     reservation = Reservation.find(params[:id])
    #     render json: reservation, status: :ok
    # end

    def create
        reservation = @current_user.reservations.create!(reservation_params)
        render json: reservation, status: :created
    end

    def update
        reservation = @current_user.reservations.find(params[:id])
        updated_reservation = reservation.update!(update_reservation_params)
        render json: reservation, status: :accepted
    end

    def destroy
        reservation = @current_user.reservations.find(params[:id])
        reservation.destroy
        render json: reservation
    end

    private

    def reservation_params
        params.permit(:name, :number_of_guests, :day, :time, :restaurant_id )
    end

    def update_reservation_params
        params.permit(:name, :number_of_guests, :day, :time)
    end
    
end
