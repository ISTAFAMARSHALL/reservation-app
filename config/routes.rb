Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")


  namespace :api do
    # resources :patrons
    # resources :reservations
    root "patrons#show"
    
    resources :restaurants

    post "/signup", to: "patrons#create"
    get "/me", to: "patrons#show"

    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

  end

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  
end
