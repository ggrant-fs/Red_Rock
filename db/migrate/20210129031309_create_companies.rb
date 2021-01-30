class CreateCompanies < ActiveRecord::Migration[6.1]
  def change
    create_table :companies do |t|
      t.string :username
      t.string :email
      t.string :password
      t.integer :phone_number


      t.timestamps
    end
  end
end
