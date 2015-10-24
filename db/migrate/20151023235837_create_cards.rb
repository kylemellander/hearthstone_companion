class CreateCards < ActiveRecord::Migration
  def change
    create_table :cards do |t|
      t.string :name
      t.string :card_set
      t.string :rarity
      t.integer :cost
      t.string :player_class
      t.string :card_type
      t.string :img
      t.string :hearthstone_id

      t.timestamps null: false
    end
  end
end
