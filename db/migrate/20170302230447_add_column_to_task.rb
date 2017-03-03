class AddColumnToTask < ActiveRecord::Migration[5.0]
  def change
    add_column :tasks, :table_skill_id, :integer
  end
end
