import Ember from 'ember';

export default Ember.Component.extend({
  click: function() {
    var card = this.get('card');
    var count = 1;
    this.sendAction('addCard', card, count);
  },
  contextMenu: function() {
    var card = this.get('card');
    var count = -1;
    this.sendAction('addCard', card, count);
    return false;
  }
});
