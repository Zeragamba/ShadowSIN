Rails.application.routes.draw do
  post 'login', to: 'auth#login'

  get 'user', to: 'user#view'
  patch 'user', to: 'user#update'

  resources :characters
  resources :gear
end
