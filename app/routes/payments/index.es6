export default Ember.Route.extend({
  model: function() {
    console.log(this.store.find('payment'))
    return this.store.find('payment');
  }
});
