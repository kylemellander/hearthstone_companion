MyBackend::Application.routes.draw do
  devise_for :users, controllers: { sessions: 'sessions', registrations: 'registrations' }
  root to: "ember#index"
  get 'login' => "ember#index"
end
