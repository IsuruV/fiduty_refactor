class CreateTableSkills < ActiveRecord::Migration[5.0]
  def change
    create_table :table_skills do |t|
      t.string :skill_name
    end
  end
end
