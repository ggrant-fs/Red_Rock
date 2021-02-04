Rails.application.routes.draw do 
  get '/auth/verify', to: 'authentication#verify'
  post '/auth/login', to: 'authentication#login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :companies
  resources :benefits 
end
