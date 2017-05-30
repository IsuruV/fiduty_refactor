class WatsonMessenger
    attr_accessor :manager
    
    def authenticate
        self.manager = Watson.Conversation::ManageDialog.new(
            username: '',
            password: '',
            workspace_id: '',
            storage: 'hash')
    end 
    
    def reply
        
    end
end
