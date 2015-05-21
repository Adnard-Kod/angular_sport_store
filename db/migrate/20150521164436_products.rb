class Products < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :category
      t.string :name
      t.string :description
      t.integer :price
      t.timestamps
    end
  end
end
