export default Ember.Route.extend({
  model: function(params){
    return ic.ajax.request('/api/v1/contacts/' + params.contact_id);
  }
});
