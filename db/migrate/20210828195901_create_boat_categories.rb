class CreateBoatCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :boat_categories do |t|
      t.belongs_to :boat, null: false, foreign_key: true
      t.belongs_to :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
