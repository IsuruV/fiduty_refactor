Rails.application.routes.draw do
  resources :facebook_richies
  resources :progress_points
  # devise_for :users
  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  devise_scope :user do
    get '/omniauth/facebook_messenger' => 'users/omniauth_callbacks#facebook_messenger'
  end
  
  root to: 'home#index'
  get '/users/speedmatch' => "home#speedmatch"
  get '/home' => "home#home"
  get '/home/index' => 'home#index'
  get '/share' => "home#share"
  get '/users/profile' => 'users#profile'
  get '/users/dashboard' => 'users#dashboard'
  get '/users/experience' => 'users#experience'
  get '/users/knowledge'=> 'users#knowledge'
  get '/users/social' => 'users#social'
  post '/users/social' => 'users#social'
  get '/portfolios/etf_return' => 'portfolios#etf_return'
  get '/users/recent_friend_investment' => 'users#recent_friend_investment'
  get '/users/recent_everyone_investment' => 'users#recent_everyone_investment'
  get '/users/sign_out' => "users#log_out"
  post '/users/update' => "users#update"
  post '/users/add_points' => "users#add_points"
  get '/users/scoreboard' => "users#scoreboard"
  
  get '/portfolios/ten_portfolios' => "portfolios#ten_portfolios"
  resources :user_portfolios
  post '/user_portfolios/watson_proxy' => "user_portfolios#watson_proxy"
  
  post '/progress_tracker/complete_task' => "progress_trackers#complete_task"
  post '/progress_tracker/first_investment' => "progress_trackers#first_investment"
  post '/progress_tracker/add_money' => "progress_trackers#add_money"
  
  match "/facebookAuth" => "facebook_richies#facebook_auth", as: :facebook_auth, via: [:get, :post]
  # devise_scope :user do
  #   get '/signout', to: 'devise/sessions#destroy', as: :signout
  # end
  
  namespace :api do
  # resources :reviews
  resources :users
  resources :user_portfolios
  resources :advisors
  resources :sales
  resources :portfolios do
    resources :reviews
  end

  
  # resources :tasks
  post '/tasks/complete_task' => 'tasks#complete_task'
  get '/tasks/user_tasks' => 'tasks#users_tasks'
  
  mount_devise_token_auth_for 'User', at: 'auth'
  post '/portfolios/upload', to: 'portfolios#upload'
  post '/user_portfolios/add_portfolio' => 'user_portfolios#create'
  post '/portfolios/portfolios_by_type' => 'portfolios#portfolios_by_type'
  post '/users/:id/add_user_info' => 'users#add_user_info'
  get '/portfolios/fetch_stock_quote' => 'portfolios#fetch_stock_quote'

  get '/portfolios/real_time_quotes' => 'portfolios#real_time_quotes'
  get '/user_portfolios/recent_investments' => 'user_portfolios#recent_investments'
  get '/users/:id/user_portfolios' => 'users#user_portfolios'

  post '/users/recent_friend_investment' => 'users#recent_friend_investment'
  post '/users/friends_top_roi' => 'users#friends_roi'
  
  post '/users/:id/add_funds' => 'users#add_funds'
  
end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

