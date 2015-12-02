class CreateUserInfos < ActiveRecord::Migration
  def change
    create_table :user_infos do |t|
      t.boolean :admin, default: false

      t.timestamps null: false
    end
  end
end
