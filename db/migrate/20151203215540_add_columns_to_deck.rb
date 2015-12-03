class AddColumnsToDeck < ActiveRecord::Migration
  def change
    add_column :decks, :position, :integer
    add_column :decks, :deck_type, :string
  end
end
