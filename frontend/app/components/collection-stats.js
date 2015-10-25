import Ember from 'ember';

var percentage = function(number, total) {
  return Math.round(number/total*10000)/100;
};
var yourPlayableCalc = function(userCards, searchParam, searchValue) {
  var sum = 0;
  userCards.forEach(function(joinItem) {
    if (joinItem.get('card').get(searchParam) === searchValue) {
      sum += joinItem.get('count');
    }
  });
  return sum;
}
var totalPlayableCalc = function(cards, searchParam, searchValue) {
  var sum = 0;
  cards.forEach(function(card) {
    if (card.get(searchParam) === searchValue) {
      if (card.get('rarity') === "Legendary") { sum += 1 } else { sum += 2 }
    }
  });
  return sum;
}
var yourUniqueCalc = function(userCards, searchParam, searchValue) {
  var sum = 0;
  userCards.forEach(function(joinItem) {
    if (joinItem.get('card').get(searchParam) === searchValue) { sum += 1 }
  });
  return sum;
}
var totalUniqueCalc = function(cards, searchParam, searchValue) {
  var sum = 0;
  cards.forEach(function(card) {
    if (card.get(searchParam) === searchValue) { sum += 1 }
  });
  return sum;
}

export default Ember.Component.extend({
  yourPlayable: Ember.computed('userCards', function() {
    var sum = this.get('userCards').getEach('count').reduce(add, 0);
    function add(a, b) { return a + b; }
    return sum;
  }),
  totalPlayable: Ember.computed(function() {
    var count = 0;
    this.get('cards').forEach(function(card) {
      if (card.get('rarity') === "Legendary") { count += 1 } else { count += 2 };
    });
    return count;
  }),
  playablePercentage: Ember.computed('yourPlayable', function() {
    return percentage(this.get('yourPlayable'), this.get('totalPlayable'));
  }),
  yourPlayableBasic: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "rarity", "Basic");
  }),
  totalPlayableBasic: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "rarity", "Basic");
  }),
  playablePercentageBasic: Ember.computed('yourPlayableBasic', function() {
    return percentage(this.get('yourPlayableBasic'), this.get('totalPlayableBasic'));
  }),
  yourPlayableCommon: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "rarity", "Common");
  }),
  totalPlayableCommon: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "rarity", "Common");
  }),
  playablePercentageCommon: Ember.computed('yourPlayableCommon', function() {
    return percentage(this.get('yourPlayableCommon'), this.get('totalPlayableCommon'));
  }),
  yourPlayableRare: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "rarity", "Rare");
  }),
  totalPlayableRare: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "rarity", "Rare");
  }),
  playablePercentageRare: Ember.computed('yourPlayableRare', function() {
    return percentage(this.get('yourPlayableRare'), this.get('totalPlayableRare'));
  }),
  yourPlayableEpic: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "rarity", "Epic");
  }),
  totalPlayableEpic: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "rarity", "Epic");
  }),
  playablePercentageEpic: Ember.computed('yourPlayableEpic', function() {
    return percentage(this.get('yourPlayableEpic'), this.get('totalPlayableEpic'));
  }),
  yourPlayableLegendary: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "rarity", "Legendary");
  }),
  totalPlayableLegendary: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "rarity", "Legendary");
  }),
  playablePercentageLegendary: Ember.computed('yourPlayableLegendary', function() {
    return percentage(this.get('yourPlayableLegendary'), this.get('totalPlayableLegendary'));
  }),
  yourPlayableClassic: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "Classic");
  }),
  totalPlayableClassic: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "Classic");
  }),
  playablePercentageClassic: Ember.computed('yourPlayableClassic', function() {
    return percentage(this.get('yourPlayableClassic'), this.get('totalPlayableClassic'));
  }),
  yourPlayablePromotion: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "Promotion") +
           yourPlayableCalc(this.get('userCards'), "cardSet", "Reward");
  }),
  totalPlayablePromotion: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "Promotion") +
           totalPlayableCalc(this.get('cards'), "cardSet", "Reward");
  }),
  playablePercentagePromotion: Ember.computed('yourPlayablePromotion', function() {
    return percentage(this.get('yourPlayablePromotion'), this.get('totalPlayablePromotion'));
  }),
  yourPlayableNaxx: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "Naxxramas");
  }),
  totalPlayableNaxx: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "Naxxramas");
  }),
  playablePercentageNaxx: Ember.computed('yourPlayableNaxx', function() {
    return percentage(this.get('yourPlayableNaxx'), this.get('totalPlayableNaxx'));
  }),
  yourPlayableGVG: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "Goblins vs Gnomes");
  }),
  totalPlayableGVG: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "Goblins vs Gnomes");
  }),
  playablePercentageGVG: Ember.computed('yourPlayableGVG', function() {
    return percentage(this.get('yourPlayableGVG'), this.get('totalPlayableGVG'));
  }),
  yourPlayableBRM: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "Blackrock Mountain");
  }),
  totalPlayableBRM: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "Blackrock Mountain");
  }),
  playablePercentageBRM: Ember.computed('yourPlayableBRM', function() {
    return percentage(this.get('yourPlayableBRM'), this.get('totalPlayableBRM'));
  }),
  yourPlayableTGT: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "The Grand Tournament");
  }),
  totalPlayableTGT: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "The Grand Tournament");
  }),
  playablePercentageTGT: Ember.computed('yourPlayableTGT', function() {
    return percentage(this.get('yourPlayableTGT'), this.get('totalPlayableTGT'));
  }),
  yourUnique: Ember.computed('userCards', function() {
    return this.get('userCards').get('length');
  }),
  totalUnique: Ember.computed(function() {
    return this.get('cards').get('length');
  }),
  uniquePercentage: Ember.computed('yourUnique', function() {
    return percentage(this.get('yourUnique'), this.get('totalUnique'));
  }),
  yourUniqueBasic: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "rarity", "Basic");
  }),
  totalUniqueBasic: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "rarity", "Basic");
  }),
  uniquePercentageBasic: Ember.computed('yourUniqueBasic', function() {
    return percentage(this.get('yourUniqueBasic'), this.get('totalUniqueBasic'));
  }),
  yourUniqueCommon: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "rarity", "Common");
  }),
  totalUniqueCommon: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "rarity", "Common");
  }),
  uniquePercentageCommon: Ember.computed('yourUniqueCommon', function() {
    return percentage(this.get('yourUniqueCommon'), this.get('totalUniqueCommon'));
  }),
  yourUniqueRare: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "rarity", "Rare");
  }),
  totalUniqueRare: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "rarity", "Rare");
  }),
  uniquePercentageRare: Ember.computed('yourUniqueRare', function() {
    return percentage(this.get('yourUniqueRare'), this.get('totalUniqueRare'));
  }),
  yourUniqueEpic: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "rarity", "Epic");
  }),
  totalUniqueEpic: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "rarity", "Epic");
  }),
  uniquePercentageEpic: Ember.computed('yourUniqueEpic', function() {
    return percentage(this.get('yourUniqueEpic'), this.get('totalUniqueEpic'));
  }),
  yourUniqueLegendary: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "rarity", "Legendary");
  }),
  totalUniqueLegendary: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "rarity", "Legendary");
  }),
  uniquePercentageLegendary: Ember.computed('yourUniqueLegendary', function() {
    return percentage(this.get('yourUniqueLegendary'), this.get('totalUniqueLegendary'));
  }),
  yourUniqueClassic: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "Classic");
  }),
  totalUniqueClassic: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "Classic");
  }),
  uniquePercentageClassic: Ember.computed('yourUniqueClassic', function() {
    return percentage(this.get('yourUniqueClassic'), this.get('totalUniqueClassic'));
  }),
  yourUniquePromotion: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "Promotion") +
           yourUniqueCalc(this.get('userCards'), "cardSet", "Reward");
  }),
  totalUniquePromotion: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "Promotion") +
           totalUniqueCalc(this.get('cards'), "cardSet", "Reward");
  }),
  uniquePercentagePromotion: Ember.computed('yourUniquePromotion', function() {
    return percentage(this.get('yourUniquePromotion'), this.get('totalUniquePromotion'));
  }),
  yourUniqueNaxx: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "Naxxramas");
  }),
  totalUniqueNaxx: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "Naxxramas");
  }),
  uniquePercentageNaxx: Ember.computed('yourUniqueNaxx', function() {
    return percentage(this.get('yourUniqueNaxx'), this.get('totalUniqueNaxx'));
  }),
  yourUniqueGVG: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "Goblins vs Gnomes");
  }),
  totalUniqueGVG: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "Goblins vs Gnomes");
  }),
  uniquePercentageGVG: Ember.computed('yourUniqueGVG', function() {
    return percentage(this.get('yourUniqueGVG'), this.get('totalUniqueGVG'));
  }),
  yourUniqueBRM: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "Blackrock Mountain");
  }),
  totalUniqueBRM: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "Blackrock Mountain");
  }),
  uniquePercentageBRM: Ember.computed('yourUniqueBRM', function() {
    return percentage(this.get('yourUniqueBRM'), this.get('totalUniqueBRM'));
  }),
  yourUniqueTGT: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "The Grand Tournament");
  }),
  totalUniqueTGT: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "The Grand Tournament");
  }),
  uniquePercentageTGT: Ember.computed('yourUniqueTGT', function() {
    return percentage(this.get('yourUniqueTGT'), this.get('totalUniqueTGT'));
  }),
});
