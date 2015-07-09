Rails.application.routes.draw do
  resources :bye

  root "bye#index"
end
