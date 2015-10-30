import Ember from 'ember';

export function cardsInDeckYouHaveByType(params/*, hash*/) {
  var sum = 0;
  params[0].forEach(function(cardUser) {
    params[1].forEach(function(cardDeck) {
      if ((params[2] === "total" || cardDeck.get('card').get('rarity') === params[2]) && cardUser.get('card').get('id') === cardDeck.get('card').get('id')) {
        var userCount = cardUser.get('count');
        var deckCount = cardDeck.get('count');
        if( userCount >= deckCount ) {
          sum += deckCount;
        } else {
          sum += userCount;
        }
      }
    });
  });
  return sum;
}

export default Ember.Helper.helper(cardsInDeckYouHaveByType);
