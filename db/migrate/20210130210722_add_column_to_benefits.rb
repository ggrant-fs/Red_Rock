class AddColumnToBenefits < ActiveRecord::Migration[6.1]
  def change
    add_column :benefits, :location, :string
    add_column :benefits, :date, :string
    add_column :benefits, :discount, :string
    add_column :benefits, :description, :string
    add_column :benefits, :expiration, :string
    add_column :benefits, :length, :string
  end
end
