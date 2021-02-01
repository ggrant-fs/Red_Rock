Rails.application.routes.draw do
  get 'company/index'
  get 'company/show'
  get 'company/create'
  get 'company/update'
  get 'company/delete'
  
  get '/auth/verify', to: 'authentication#verify'
  post '/auth/login', to: 'authentication#login'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users
  resources :company
end
