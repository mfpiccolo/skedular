export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('payment', params.payment_id);
  },
  actions: {
    destroyRecord: function() {
      if (confirm('Está seguro de querer eliminar este paymente?')) {
        var model = this.get('controller.model');
        var _this = this;
        model.destroyRecord().then(function() {
          _this.transitionTo('payments.index');
        });
      }
    }
  }
});
