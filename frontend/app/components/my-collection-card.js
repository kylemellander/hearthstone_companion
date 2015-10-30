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
  },
  mouseMove: function(e) {
    this.$('.img-container').append('<img src="'+this.get('cardUser').get('card').get('img')+'">');
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
