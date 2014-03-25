class CreatePayments < ActiveRecord::Migration
  def change
    create_table    :payments do |t|
      t.integer     :collector_id
      t.integer     :payer_id
      t.integer     :amount_cents
      t.string      :description
      t.datetime    :created_at
      t.datetime    :updated_at
      t.string      :payer_email
      t.boolean     :approved,     default: false
      t.datetime    :payment_at

      t.timestamps
    end
  end
end
