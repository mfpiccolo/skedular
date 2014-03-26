export default DS.Model.extend({
  payment_at: DS.attr('string'),
  payer_email: DS.attr('string'),
  collector_id: DS.attr('number'),
  payer_id: DS.attr('number'),
  amount_cents: DS.attr('number'),
  description: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),
  approved: DS.attr('boolean')
});
