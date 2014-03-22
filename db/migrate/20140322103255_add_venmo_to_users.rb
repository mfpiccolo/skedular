class AddVenmoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :provider, :string
    add_column :users, :uid,      :string
    add_column :users, :venmo_id, :string
    add_column :users, :venmo_about,               :text
    add_column :users, :venmo_display_name,        :string
    add_column :users, :venmo_first_name,          :string
    add_column :users, :venmo_last_name,           :string
    add_column :users, :venmo_profile_picture_url, :string
    add_column :users, :venmo_username,            :string
    add_column :users, :venmo_balance_cents,       :integer
    add_column :users, :venmo_token,    :string
  end
end
