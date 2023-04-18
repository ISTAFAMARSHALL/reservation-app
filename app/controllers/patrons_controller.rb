class PatronsController < ApplicationController

    def index
        patrons = Patron.all 
        render json: patrons, status: :ok
    end

    def show
        patron = Patron.find(params[:id])
        render json: patron, status: :ok
    end

    def create
        patron = Patron.create!(patron_params)
        render json patron, status: :created
    end

    def update
        patron = Patron.find(params[:id])
        updated_patron = patron.update(patron_params)
        render json: updated_patron, status: :accepted
    end

    def destroy
        patron = Patron.find(params[:id])
        patron.destroy
        head :no_content
    end

    private

    def patron_params
        params.permit(:name,:phone_number,:email_address)
    end
    
end
