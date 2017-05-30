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


# " 'recipient': {
#     'id': #{params["entry"][0]["messaging"][0]["sender"]["id"]}
#   },
#   'message': {
#     'text': 'hello, world!'
#   }
# }"

        #     req.params['recipient'] = "{
        #         'id': '1381205945293947'
        #         }"
        #     req.params['message'] = "{
        #      'text': 'hello, world!''
        #     }"
        #     req.body = '"recipient": {
        #         "id": "1381205945293947"
        #         },
        # "message": {
        #      "text": "hello, world!"
        #     }
        # }'