Rails.application.routes.draw do
  namespace :api do
    resources :reviews
    resources :bookings
    resources :boat_categories
    resources :categories
    resources :boats
    resources :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    get "/bounds", to: "boats#bounds"
    get "/owned", to: "boats#owned"

    post '/presigned_url', to: 'direct_upload#create'

  end
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end