export default Ember.Route.extend({
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
      return alert('Send the message to person');
    }
  }
});
