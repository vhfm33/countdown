class CreateByes < ActiveRecord::Migration
  def change
    create_table :byes do |t|
      t.string :title
      t.datetime :date

      t.timestamps null: false
    end
  end
end
