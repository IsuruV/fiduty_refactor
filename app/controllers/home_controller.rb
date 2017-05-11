class HomeController < ApplicationController
    
    def index
        if current_user
            redirect_to '/users/dashboard'
        end
    end
    
    def home
        render 'home/index'
    end
    
    def speedmatch
    end
    
end
