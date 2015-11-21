import Ember from 'ember';

export function cardsInDeckYouHaveByType(params/*, hash*/) {
  var sum = 0;
  params[0].forEach(function(cardDeck) {
    if (params[1] === "total" || cardDeck.get('card').get('rarity') === params[1]) {
      var userCount = cardDeck.get('card').get('count');
      var deckCount = cardDeck.get('count');
      if( userCount >= deckCount ) {
        sum += deckCount;
      } else {
        sum += userCount;
      }
    }
  });
  return sum;
}

export default Ember.Helper.helper(cardsInDeckYouHaveByType);
