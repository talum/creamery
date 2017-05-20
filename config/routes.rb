Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "landing#index"
  get '/connect_instagram', to: 'auth#connect_instagram'
  get '/callback', to: 'auth#callback'
  get '/instagram_sub_callback', to: 'instagram_subscriptions#callback'
  post '/instagram_sub_callback', to: 'instagram_subscriptions#callback'
  get '/instagram_subscriptions', to: 'instagram_subscriptions#create'

  namespace :api do
    namespace :v1 do
      resources :ice_creams, only: [:index, :create, :update, :show]
      resources :comments, only: [:create, :update]
      resources :parlors, only: [:index, :create, :update]
      resources :reviews, only: [:create, :update, :index]
      resources :users, only: [:create, :show, :update]
      resources :favorites, only: [:create, :destroy]
      resources :ice_cream_suggestions, only: [:create]
      post '/login', to: "sessions#create"
      get '/logout', to: "sessions#destroy"
    end
  end
  get '*path', to: "landing#index", constraints: -> (req) { req.path !~ /\.(png|jpg|js|css)$/ }
end
