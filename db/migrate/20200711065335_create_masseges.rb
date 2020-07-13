class CreateMasseges < ActiveRecord::Migration[6.0]
  def change
    create_table :masseges do |t|
      t.text :body
      t.integer :image
      t.references :group, foreign_key: true
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
