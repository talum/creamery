Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "landing#index"
  namespace :api do
    namespace :v1 do
      resources :ice_creams, only: :index
    end
  end
end
