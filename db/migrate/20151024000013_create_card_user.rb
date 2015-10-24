class CreateCardUser < ActiveRecord::Migration
  def change
    create_table :card_users do |t|
      t.integer :card_id
      t.integer :user_id
      t.integer :count, default: 0
    end
  end
end
