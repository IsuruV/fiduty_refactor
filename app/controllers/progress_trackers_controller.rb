class ProgressTrackersController < ApplicationController
    def complete_task
       current_user.user_tasks.each do |user_task|
           if user_task.task.task.include?(task_params) || task_params.include?(user_task.task.task)
               user_task.completed = true
               user_task.save
           end
       end
       render json: {task: current_user.user_tasks}
    end

    def first_investment
        invest_task = current_user.user_tasks.where(task_id: 2).first
        invest_task.completed = true
        invest_task.save
        render json:{task:"completed task "}
    end

    def add_money
        current_user.add_to_funds(fund_params)
        render json: current_user.funds
    end

    private
    def task_params
        params.require(:task_name)
    end
    def fund_params
        params.require(:funds)
    end
end
