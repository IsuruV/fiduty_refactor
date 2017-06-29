class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
  
  def facebook_messenger
  
    @redirect_uri = params["redirect_uri"]
    @account_linking_token = params["account_linking_token"]
   
    # require 'pry'; binding.pry
    # FacebookRichie.fetch_psid(account_linking_token)
    # "{\"recipient\":\"1381205945293947\",\"id\":\"735175116652212\"}"
  end
  
  def facebook
    
    @redirect_uri = params["redirect_uri"]
    @account_linking_token = params["account_linking_token"]
    
   @user = User.from_omniauth(request.env["omniauth.auth"])
      auth_token = request.env["omniauth.auth"]['credentials']['token']
      
    if @user.persisted?
      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Facebook") if is_navigational_format?
    else
      session["devise.facebook_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end

  end

  def failure
    redirect_to root_path
  end
end