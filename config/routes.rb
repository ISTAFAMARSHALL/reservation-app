Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
   
      get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

      get '/many_res/:amount', to: 'restaurants#many_res' 
    
      resources :patrons
      resources :reservations
      resources :restaurantss

      post "/signup", to: "patrons#create"
      get "/me", to: "patrons#show"

      post "/login", to: "sessions#create"
      delete "/logout", to: "sessions#destroy"

end


# return the rest with at leat the given number of reservations