class AddColumnToCompanies < ActiveRecord::Migration[6.1]
  def change
    add_column :companies, :industry, :string
    add_column :companies, :type, :string
    add_column :companies, :suffix, :string
    add_column :companies, :duns, :string
  end
end
