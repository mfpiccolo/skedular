var Router = Ember.Router.extend({
  location: 'history'
});

Router.map(function() {
  this.route('signUp', {path: '/sign-up'});
  this.route('dashboard');
  this.route('navbar');
  this.route('calendar');
  this.resource('contacts', function() {
    this.route('show', {path: ':contact_id'});
  });
  this.resource('clients', function() {
    this.route('new');
    this.route('edit', {path: ':client_id/edit'});

    this.resource('clients.show', {path: ':client_id'}, function() {
      this.resource('invoice_items', function() {
        this.route('payment');
        this.route('new');
        this.route('show', {path: ':invoice_item_id'});
        this.route('edit', {path: ':invoice_item_id/edit'});
      });
    });
  });
});

export default Router;
