class CreateUsersGroups < ActiveRecord::Migration[6.0]
  def change
      create_table :users_groups do |t|
      t.timestamps
    end
  end
end
