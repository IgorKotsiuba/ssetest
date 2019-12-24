Rails.application.routes.draw do
  resources :comments do
    collection { get :events }
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
