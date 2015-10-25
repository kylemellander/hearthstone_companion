class CreateCardDecks < ActiveRecord::Migration
  def change
    create_table :card_decks do |t|
      t.references :deck, index: true, foreign_key: true
      t.references :card, index: true, foreign_key: true
      t.integer :count

      t.timestamps null: false
    end
  end
end
