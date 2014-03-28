export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('payment');
  },
  actions: {
    validSignIn: function() {
      this.transitionTo("dashboard");
    },
    didSignOut: function() {
      this.transitionTo("index");
    },
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
      var cents = (model.get("amount_cents")*100);
      model.set("amount_cents", cents)
      var _this = this;
      model.save().then(function(model) {
      $('#calendar').fullCalendar('refetchEvents');
      $("input .payment").val("");
      }, function(){alert('reject');});
      this.send('close')
    },
    cancel: function() {
      this.transitionTo('payments.index');
    },
    goTo: function(route, payable) {
      if (typeof payable !== 'undefined') {
        this.transitionTo(route, payable);
      } else {
        this.transitionTo(route);
      }
    },
  }
});
