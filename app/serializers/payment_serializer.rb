class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :collector_id, :payer_id, :amount_cents, :description,
    :created_at, :updated_at, :payer_email, :approved, :payment_at

  def links
    {
      invoice_items: api_v1_invoice_items_path(payment_id: object.id)
    }
  end

end
