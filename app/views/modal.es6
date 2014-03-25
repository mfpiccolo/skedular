var ModalView = Ember.View.extend({
  didInsertElement: function() {
    this.$('.modal').leanModal({ top : 200, overlay : 0.4, closeButton: ".modal_close" });
  }
});

export default ModalView;
