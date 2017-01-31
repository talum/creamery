Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "landing#index"
  namespace :api do
    namespace :v1 do
      resources :ice_creams, only: [:index, :create, :update]
      resources :comments, only: [:create, :update]
      resources :parlors, only: [:index, :create, :update]
      resources :profiles, only: [:create, :update, :show]
      resources :reviews, only: [:create, :update, :index]
      resources :users, only: :create
      post '/login', to: "sessions#create"
    end
  end
  get '*path', to: "landing#index"
end
