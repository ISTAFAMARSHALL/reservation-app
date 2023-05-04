class SessionsController < ApplicationController       
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
    
end