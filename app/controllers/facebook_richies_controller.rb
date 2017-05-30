class FacebookRichiesController < ApplicationController
    def facebook_auth
        
        if params["hub.challenge"]
            render plain: params["hub.challenge"]
        else
            token="EAAbvbGHoqdIBAHcp4GUdIJNWnRw7Bzi9rwEyexDY6DCV3UMaRm7uZA6b9LktTd7nZBZB0ZBP7kMtiZC9SY1ZAZCfoN8NrYmZBiLYeQ149xs7KbBzaWEGS1m6npDdZA7O2orl9RuSaE858ZCZBZCTwKqTrktaA5nrzUyBd4d6IZAFnCZBF9FgZDZD"
            url = "https://graph.facebook.com/v2.6/me/messages?access_token=#{token}"
        
            user_message = params["entry"][0]["messaging"][0]["message"]["text"]
            user_id = params["entry"][0]["messaging"][0]["sender"]["id"]
    
            conn = Faraday.new(:url => url)
            conn.post do |req|
             req.url url
                req.headers['Content-Type'] = 'application/json'
                req.params['recipient'] = "{ 'id': '#{user_id}' }"
                req.params['message'] = "{ 'text': '#{user_message}' }"
            end
        end
    end
    
end
