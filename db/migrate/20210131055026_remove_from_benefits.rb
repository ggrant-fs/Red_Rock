class RemoveFromBenefits < ActiveRecord::Migration[6.1]
  def change
    remove_column :benefits, :type
  end
end
