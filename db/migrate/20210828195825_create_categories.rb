class CreateCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :categories do |t|
      t.string :boat_type

      t.timestamps
    end
  end
end
