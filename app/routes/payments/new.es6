export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('payment');
  },
  deactivate: function() {
    var model = this.get('controller.model');

    if (model.get('isNew')) {
      model.deleteRecord();
    }
  },
  actions: {
    save: function() {
      var model = this.get('controller.model');
      var _this = this;
      model.save().then(function(model) {
        _this.transitionTo('payments.show', model);
      }, function(){alert('reject');});
    },
    cancel: function() {
      this.transitionTo('payments.index');
    }
  }
});
