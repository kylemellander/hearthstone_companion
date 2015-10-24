MyBackend::Application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions', registrations: 'registrations' }
  root to: "ember#index"
  resources :cards
  get 'login' => "ember#index"
  get 'collection' => "ember#index"
  resources :card_users
end
