class CreateVues < ActiveRecord::Migration[5.2]
  def change
    create_table :vues do |t|
      t.integer :score
      t.string :game
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
