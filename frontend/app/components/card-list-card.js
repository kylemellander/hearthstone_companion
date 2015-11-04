import Ember from 'ember';

export default Ember.Component.extend({
  click: function() {
    var card = this.get('card');
    var newCount = card.get('count') + 1;
    if (!(card.get('rarity') === "Legendary" && newCount > 1) && newCount <= 2 && newCount >= 0) {
      card.set('count', newCount);
    }
    this.sendAction('addCard', card);
  },
  contextMenu: function() {
    var card = this.get('card');
    var newCount = card.get('count') - 1;
    if (!(card.get('rarity') === "Legendary" && newCount > 1) && newCount <= 2 && newCount >= 0) {
      card.set('count', newCount);
    }
    this.sendAction('addCard', card);
    return false;
  }
});
