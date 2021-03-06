Rails.application.routes.draw do
  devise_scope :user do
    get "/sessions/current" => "ember_devise_simple_auth/sessions#show"
  end

  devise_for :users, controllers: {
    sessions: 'ember_devise_simple_auth/sessions',
    registrations: "skedular/registrations",
    :omniauth_callbacks => "users/omniauth_callbacks"
  }

  namespace :api do
    namespace :v1 do
      resources :payments
      resources :clients
      resources :invoice_items
      resources :dashboard
      resources :contacts, only: [:index, :show]
    end
  end

  get '*foo', :to => 'landing#index'
end
