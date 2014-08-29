class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :city
      t.integer :age
      t.boolean :male
      t.boolean :female
      t.string :favorite_animal

      t.timestamps
    end
  end
end
