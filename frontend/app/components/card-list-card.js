import Ember from 'ember';

export default Ember.Component.extend({
  owned: Ember.computed('userCards', 'card', function() {
  }),
  click: function() {
    var card = this.get('card');
    var userCards = this.get('userCards');
    var count = 1;
    this.sendAction('addCard', userCards, card, count);
  },
  contextMenu: function() {
    var card = this.get('card');
    var userCards = this.get('userCards');
    var count = -1;
    this.sendAction('addCard', userCards, card, count);
    return false;
  }
});
