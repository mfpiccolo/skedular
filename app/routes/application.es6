export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('payment');
  },
  setupController: function(controller, model) {
    controller.set('content', model);

    var contacts = null
    var select_options = null
    var response = ic.ajax.request('/api/v1/contacts');
    response.then( function() {
      controller.set('contacts', response._detail);
    });
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
      model.set("amount_cents", cents);
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
    goTo: function(route, object, state) {
      if (typeof object !== 'undefined') {
        this.transitionTo(route, object, {queryParams: {sortBy: state}});
      } else {
        this.transitionTo(route, {queryParams: {sortBy: state}});
      }
    },
  }
});
