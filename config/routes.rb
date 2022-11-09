Rails.application.routes.draw do
  root 'welcomes#index'
  namespace :api, format: 'json' do
    namespace :v1  do
      resources :welcomes
    end
  end
end
