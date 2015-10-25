class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.string :name
      t.string :url
      t.string :player_class
      t.string :remote_id

      t.timestamps null: false
    end
  end
end
