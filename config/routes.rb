Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #
  get "/app/*id", to: 'pages#home'
  root to: 'pages#home'
  resources :tasks, only: %i[index]
end
