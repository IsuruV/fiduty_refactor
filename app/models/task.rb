class Task < ApplicationRecord
    belongs_to :level
    belongs_to :table_skill, required: false
    has_many :user_tasks
    has_many :users, :through => :user_tasks
end