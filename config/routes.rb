Rails.application.routes.draw do
  root 'games#index'
  resources :htmls, only: :index do
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

