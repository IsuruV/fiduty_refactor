class AddFbColumnToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :age_range, :integer
    add_column :users, :gender, :string
    add_column :users, :locale, :string
    add_column :users, :birthday, :string
  end
end
