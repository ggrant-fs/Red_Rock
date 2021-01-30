class AddNameToBenefits < ActiveRecord::Migration[6.1]
  def change
    add_column :benefits, :name, :string
    add_column :benefits, :type, :string
    add_column :benefits, :price, :integer
  end
end
