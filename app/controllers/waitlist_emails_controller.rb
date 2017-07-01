class WaitlistEmailsController < ApplicationController
    
    def create
        WaitlistEmail.create(waitlist_params)
        render 'home/share'
    end
    
  private
    def waitlist_params
        params.permit(:email)
    end
end
