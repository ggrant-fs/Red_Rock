class RemoveColumnFromCompany < ActiveRecord::Migration[6.1]
  def change
    remove_column :companies, :type
  end
end
