class CreateBoats < ActiveRecord::Migration[6.1]
  def change
    create_table :boats do |t|
      t.string :title
      t.string :description
      t.integer :price
      t.string :make
      t.string :model
      t.integer :year
      t.integer :length
      t.integer :passengers
      t.integer :crew
      t.integer :bed
      t.integer :sleep
      t.integer :fuel
      t.boolean :sailboat
      t.boolean :tender
      t.boolean :alcohol
      t.boolean :food
      t.text :extras
      t.float :lat
      t.float :long
      t.string :location
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
