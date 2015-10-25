MyBackend::Application.routes.draw do
  resources :cards
  resources :card_users
  resources :decks
  devise_for :users, controllers: { sessions: 'sessions', registrations: 'registrations' }
  root to: "ember#index"
  get 'login' => "ember#index"
  get 'collection' => "ember#index"
  get 'packs' => 'ember#index'
  get 'deckslist' => 'ember#index'
  get 'stats' => 'ember#index'
end
