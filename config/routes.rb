Rails.application.routes.draw do
  devise_for :users
  root 'games#index'
  resources :htmls, only: [:index, :create] do
    collection do
      get :game1
    end
  end
  resources :csses, only: :index do
    collection do
      get :game1
    end
  end
  resources :javascripts, only: :index do
    collection do
      get :game1
    end
  end
end

