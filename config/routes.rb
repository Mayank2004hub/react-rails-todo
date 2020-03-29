Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #
  root to: 'pages#home'
  resources :tasks, only: %i[index]
  get "/*id", to: 'pages#home'
end
