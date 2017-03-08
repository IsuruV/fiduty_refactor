class AddColumnSimpleDescToPortfolios < ActiveRecord::Migration[5.0]
  def change
    add_column :portfolios, :simple_description, :string
  end
end
