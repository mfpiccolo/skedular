var PaymentsIndex = Ember.ArrayController.extend({
  queryParams: ['sortBy'],
  sortBy: 'lastName',
  sortProperties: function() {
    return [this.get('sortBy')];
  }.property('sortBy'),
  sortAscending: false,
  searchResults: null,
  selected: null,
  searchText: '',
  filteredPayments: function() {
    var searchText = this.get('searchText');

    if(searchText.length === 0) {
      return this;
    }

    var searchResults = this.filter(function(payment) {
      return !!payment.get('fullName').match(new RegExp(searchText, 'i'));
    });

    return searchResults;
  }.property('searchText', 'this.[]')

});

export default PaymentsIndex;
