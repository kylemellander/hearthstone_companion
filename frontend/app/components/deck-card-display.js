import Ember from 'ember';

export default Ember.Component.extend({
  owned: Ember.computed('cardDeck', function() {
    return this.get('card').get('count') >= this.get('cardDeck').get('count');
  }),
  mouseMove: function(e) {
    this.$('.img-container').append('<img src="'+this.get('card').get('img')+'">');
    this.$('.hover-image img').show();
    this.$('.hover-image img').offset({
      top: e.pageY + 3,
      left: e.pageX - 100
    });
  },
  mouseLeave: function() {
    this.$('.img-container').empty();
  }
});
