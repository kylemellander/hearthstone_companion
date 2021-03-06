import Ember from 'ember';

export function collectionCalc(params/*, hash*/) {
  var sum = 0;
  let cards = params[0];
  let collected = params[1];
  let unique = params[2];
  let filter = params[3];
  let value = params[4];

  cards.forEach(function(card) {
    if ((filter === "total" || card.get(filter) === value) && value !== "Promotion") {
      if (collected) {
        if (unique) {
          if (card.get('count') > 0) {
            sum += 1;
          }
        } else {
          sum += card.get('count');
        }
      } else if (card.get('rarity') === "Legendary" || unique) {
        sum += 1;
      } else {
        sum += 2;
      }
    }
    if (value === "Promotion" && (card.get(filter) === "Reward" || card.get(filter) === "Promotion")) {
      if (collected) {
        sum += card.get('count');
      } else if (unique || card.get('rarity') === "Legendary") {
        sum += 1;
      } else {
        sum += 2;
      }
    }
  });
  return sum;
}

export default Ember.Helper.helper(collectionCalc);
