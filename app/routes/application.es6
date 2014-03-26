export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('payment');
  },
  actions: {
    open: function() {
      return this.render('modal', {
        into: 'application',
        outlet: 'contactModal'
      });
    },
    close: function() {
      $("#lean_overlay").remove();
      return this.disconnectOutlet({
        outlet: 'contactModal',
        parentView: 'application'
      });
    },
    save: function() {
      var model = this.get('controller.model');
      var _this = this;
      model.save().then(function(model) {
        _this.transitionTo('payments.show', model);
      }, function(){alert('reject');});
      this.send('close')
    },
    cancel: function() {
      this.transitionTo('payments.index');
    }
  }
});
