import Ember from 'ember';

export function collectionCalc(params/*, hash*/) {
  var sum = 0;
  params[0].forEach(function(object) {
    var card;
    if (params[1] === "your") {
      card = object.get('card');
    } else {
      card = object;
    }
    if (params[3] === "total" || card.get(params[3]) === params[4]) {
      if (params[2] === "unique" || card.get('rarity') === "Legendary") {
        sum += 1;
      } else if (params[1] === "your"){
        sum += object.get('count');
      } else if (card.get('rarity') === "Legendary") {
        sum += 1;
      } else {
        sum += 2;
      }
    }
    if (params[4] === "Promotion") {
      if (card.get(params[3]) === "Reward") {
        if (params[2] === "unique") {
          sum += 1;
        } else if (params[1] === "your"){
          sum += object.get('count');
        } else if (card.get('rarity') === "Legendary") {
          sum += 1;
        } else {
          sum += 2;
        }
      }
    }
  });
  return sum;
}

export default Ember.Helper.helper(collectionCalc);
