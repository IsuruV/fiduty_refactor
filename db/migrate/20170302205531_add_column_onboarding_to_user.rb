class AddColumnOnboardingToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :onboarding, :boolean
  end
end
