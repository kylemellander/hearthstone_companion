import Ember from 'ember';

export default Ember.Component.extend({
  click: function() {
    var card = this.get('card');
    var newCount = card.get('count') - 1;
    if (!(card.get('rarity') === "Legendary" && newCount > 1) && newCount <= 2 && newCount >= 0) {
      card.set('count', newCount);
    }
    this.sendAction('addCard', card);
  },
  contextMenu: function() {
    var card = this.get('card');
    var newCount = card.get('count') + 1;
    if (!(card.get('rarity') === "Legendary" && newCount > 1) && newCount <= 2 && newCount >= 0) {
      card.set('count', newCount);
    }
    this.sendAction('addCard', card);
    return false;
  },
  mouseMove: function(e) {
    this.$('.img-container').append('<img src="'+this.get('card').get('img')+'">');
    this.$('.hover-image img').stop(1,1).fadeIn();
    this.$('.hover-image img').offset({
      top: e.pageY + 3,
      left: e.pageX - 100
    });
  },
  mouseLeave: function() {
    this.$('.img-container').empty();
  }
});
