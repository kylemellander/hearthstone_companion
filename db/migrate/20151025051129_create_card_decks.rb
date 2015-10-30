class CreateCardDecks < ActiveRecord::Migration
  def change
    create_table :card_decks do |t|
      t.integer :deck_id, index: true
      t.integer :card_id, index: true
      t.integer :count

      t.timestamps null: false
    end
  end
end
