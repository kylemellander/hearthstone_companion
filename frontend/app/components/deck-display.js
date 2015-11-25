import Ember from 'ember';

export default Ember.Component.extend({
  sortedCardDecks: Ember.computed('cardDecks', function() {
    var cardDecks = this.get('cardDecks');
    function compare(a,b) {
      if (a.get('card').get('cost') < b.get('card').get('cost')) {
        return -1;
      } else if (a.get('card').get('cost') > b.get('card').get('cost')) {
        return 1;
      } else if (a.get('card').get('cardType') > b.get('card').get('cardType')) {
        return -1;
      } else if (a.get('card').get('cardType') < b.get('card').get('cardType')) {
        return 1;
      } else if (a.get('card').get('name') < b.get('card').get('name')) {
        return -1;
      } else if (a.get('card').get('name') > b.get('card').get('name')) {
        return 1;
      } else {
        return 0;
      }
    }
    return cardDecks.toArray().sort(compare);
  }),
  cardDecksYouHave: Ember.computed.filter('sortedCardDecks', function(cardDeck) {
    return cardDeck.get('card').get('count') >= cardDeck.get('count');
  }),
  cardDecksMissing: Ember.computed.filter('sortedCardDecks', function(cardDeck) {
    return cardDeck.get('card').get('count') < cardDeck.get('count');
  }),
  incomplete: Ember.computed('cardDecksMissing', function() {
    return this.get('cardDecksMissing').get('length') > 0;
  })
});
