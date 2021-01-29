Rails.application.routes.draw do
  get 'company/index'
  get 'company/show'
  get 'company/create'
  get 'company/update'
  get 'company/delete'
  get 'user/index'
  get 'user/show'
  get 'user/create'
  get 'user/update'
  get 'user/delete'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources:user
  resources:company
end
