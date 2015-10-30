import Ember from 'ember';

export default Ember.Component.extend({
  cardsYouHave: Ember.computed.filter('cardUsers', function(cardUser) {
    var bool = false;
    this.get('cardDecks').forEach(function(cardDeck) {
      if (cardUser.get('card').get('id') === cardDeck.get('card').get('id')) {
        bool = true;
        return bool;
      }
    });
    return bool;
  }),
});
