class SessionsController < ApplicationController       
    skip_before_action :authorize, only: [:create]   

<<<<<<< HEAD
    def create         
            user = Patron.find_by(username: params[:username])         
        if user&.authenticate(params[:password])             
            session[:user_id] = user.id              
            render json: user, status: :created         
        else             
            render json: {errors: ["Invlaid username or password"]}, status: :unauthorized         
        end      
    end      
=======

    skip_before_action :authorize, only: [:create]

    def create
        user = Patron.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :created
        else
            render json: {errors: ["Invlaid username or password"]}, status: :unauthorized
        end

    end

    def destroy
        session.delete :user_id
        head :no_content
    end
>>>>>>> 647d6219ff19f09b53a1dd11b4c766a16353ddb7
    
    def destroy         
        session.delete :user_id         
        head :no_content     
    end      
    
end