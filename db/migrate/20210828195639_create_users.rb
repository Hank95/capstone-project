class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.text :bio
      t.date :join_date

      t.timestamps
    end
  end
end
