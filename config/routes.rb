Rails.application.routes.draw do
  devise_for :users
  root 'games#index'
  resources :games, only: :show
  resources :htmls, only: [:index, :create] do
    collection do
      get :game1
    end
  end
  resources :csses, only: [:index, :create] do
    collection do
      get :game1
    end
  end
  resources :javascripts, only: [:index, :create] do
    collection do
      get :game1
    end
  end
end

