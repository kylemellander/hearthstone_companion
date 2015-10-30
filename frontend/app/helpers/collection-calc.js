import Ember from 'ember';

export function collectionCalc(params/*, hash*/) {
  var sum = 0;
  if (params[1] === "your") {
    params[0].forEach(function(cardUser) {
      if (params[3] === "total" || cardUser.get('card').get(params[3]) === params[4]) {
        if (params[2] === "unique") {
          sum += 1;
        } else {
          sum += cardUser.get('count');
        }
      }
      if (params[4] === "Promotion") {
        if (cardUser.get('card').get(params[3]) === "Reward") {
          if (params[2] === "unique") {
            sum += 1;
          } else {
            sum += cardUser.get('count');
          }
        }
      }
    });
  } else {
    params[0].forEach(function(card) {
      if (params[3] === "total" || card.get(params[3]) === params[4]) {
        if (card.get('rarity') === "Legendary" || params[2] === "unique") {
          sum += 1;
        } else {
          sum += 2;
        }
      }
      if (params[4] === "Promotion") {
        if (card.get(params[3]) === "Reward") {
          if (card.get('rarity') === "Legendary" || params[2] === "unique") {
            sum += 1;
          } else {
            sum += 2;
          }
        }
      }
    })
  }
  return sum;
}

export default Ember.Helper.helper(collectionCalc);
