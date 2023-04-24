class PatronsController < ApplicationController

    skip_before_action :authorize, only: [:create]

    def index
        patrons = Patron.all 
        render json: patrons, status: :ok
    end

    def show
        render json: @current_user
    end

    def create
        patron = Patron.create!(patron_params)
        session[:user_id] ||= patron.id
        render json: patron, status: :created
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
        params.permit(:name,:phone_number,:email_address,:username,:password,:passwordConfirmation)
    end
    
end
