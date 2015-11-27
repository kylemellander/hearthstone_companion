import Ember from 'ember';

export function cardsInDeckByType(params/*, hash*/) {
  var sum = 0;
  console.log(params);
  params[0].forEach(function(cardDeck) {
    if(params[1] === "total" || cardDeck.get('card').get('rarity') === params[1]) {
      sum += cardDeck.get('count');
    }
  });
  return sum;
}

export default Ember.Helper.helper(cardsInDeckByType);
