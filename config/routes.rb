Rails.application.routes.draw do
  devise_for :users
  root 'games#index'
  resource :html, only: :show
  resources :htmls, only: [:index, :create] do
    collection do
      get :game1
    end
  end
  resource :css, only: :show
  resources :csses, only: [:index, :create] do
    collection do
      get :game1
      get :game2
    end
  end
  resource :javascript, only: :show
  resources :javascripts, only: [:index, :create] do
    collection do
      get :game1
      get :game2
    end
  end
  resource :vue, only: :show
  resources :vues, only: [:index, :create] do
    collection do
      get :game1
    end
  end
end

