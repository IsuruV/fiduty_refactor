class ChangeColumnOnboardUsers < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :onboarding, :boolean, :default => true
  end
end
