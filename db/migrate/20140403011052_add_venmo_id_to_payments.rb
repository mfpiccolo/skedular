class AddVenmoIdToPayments < ActiveRecord::Migration
  def change
    add_column :payments, :venmo_id, :string
  end
end
