class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password
      t.integer :phone_number
      t.string :membership

      t.timestamps
    end
  end
end
