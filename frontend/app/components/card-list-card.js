import Ember from 'ember';

export default Ember.Component.extend({
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
