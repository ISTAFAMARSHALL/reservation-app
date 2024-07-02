class RestaurantsController < ApplicationController

    def index
        restaurants = Restaurant.all 
        render json: restaurants, status: :ok
    end

    # def show
    #     restaurant = Restaurant.find(params[:id])
    #     render json: restaurant, status: :ok
    # end

    def create
        restaurant = Restaurant.create!(restaurant_params)
        render json: restaurant, status: :created
    end
    
    def many_res
        restaurants = Restaurant.all.select{|restaurant| restaurant.reservations.count.to_s >= params[:amount]}
        render json: restaurants
    end

    # def update
    #     restaurant = Restaurant.find(params[:id])
    #     updated_restaurant = restaurant.update(restaurant_params)
    #     render json: updated_restaurant, status: :accepted
    # end

    # def destroy
    #     restaurant = Restaurant.find(params[:id])
    #     restaurant.destroy
    #     head :no_content
    # end

    private

    def restaurant_params
        params.permit(:name, :cuisine, :description)
    end
    
end
