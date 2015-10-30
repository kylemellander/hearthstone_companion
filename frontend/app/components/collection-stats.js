import Ember from 'ember';

var yourPlayableCalc = function(userCards, searchParam, searchValue) {
  var sum = 0;
  userCards.forEach(function(joinItem) {
    if (joinItem.get('card').get(searchParam) === searchValue) {
      sum += joinItem.get('count');
    }
  });
  return sum;
};
var totalPlayableCalc = function(cards, searchParam, searchValue) {
  var sum = 0;
  cards.forEach(function(card) {
    if (card.get(searchParam) === searchValue) {
      if (card.get('rarity') === "Legendary") { sum += 1; } else { sum += 2; }
    }
  });
  return sum;
};
var yourUniqueCalc = function(userCards, searchParam, searchValue) {
  var sum = 0;
  userCards.forEach(function(joinItem) {
    if (joinItem.get('card').get(searchParam) === searchValue) { sum += 1; }
  });
  return sum;
};
var totalUniqueCalc = function(cards, searchParam, searchValue) {
  var sum = 0;
  cards.forEach(function(card) {
    if (card.get(searchParam) === searchValue) { sum += 1; }
  });
  return sum;
};

export default Ember.Component.extend({
  yourPlayable: Ember.computed('userCards', function() {
    var sum = this.get('userCards').getEach('count').reduce(add, 0);
    function add(a, b) { return a + b; }
    return sum;
  }),
  totalPlayable: Ember.computed(function() {
    var count = 0;
    this.get('cards').forEach(function(card) {
      if (card.get('rarity') === "Legendary") { count += 1; } else { count += 2; }
    });
    return count;
  }),
  yourPlayableBasic: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "rarity", "Basic");
  }),
  totalPlayableBasic: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "rarity", "Basic");
  }),
  yourPlayableCommon: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "rarity", "Common");
  }),
  totalPlayableCommon: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "rarity", "Common");
  }),
  yourPlayableRare: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "rarity", "Rare");
  }),
  totalPlayableRare: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "rarity", "Rare");
  }),
  yourPlayableEpic: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "rarity", "Epic");
  }),
  totalPlayableEpic: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "rarity", "Epic");
  }),
  yourPlayableLegendary: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "rarity", "Legendary");
  }),
  totalPlayableLegendary: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "rarity", "Legendary");
  }),
  yourPlayableClassic: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "Classic");
  }),
  totalPlayableClassic: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "Classic");
  }),
  yourPlayablePromotion: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "Promotion") +
           yourPlayableCalc(this.get('userCards'), "cardSet", "Reward");
  }),
  totalPlayablePromotion: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "Promotion") +
           totalPlayableCalc(this.get('cards'), "cardSet", "Reward");
  }),
  yourPlayableNaxx: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "Naxxramas");
  }),
  totalPlayableNaxx: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "Naxxramas");
  }),
  yourPlayableGVG: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "Goblins vs Gnomes");
  }),
  totalPlayableGVG: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "Goblins vs Gnomes");
  }),
  yourPlayableBRM: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "Blackrock Mountain");
  }),
  totalPlayableBRM: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "Blackrock Mountain");
  }),
  yourPlayableTGT: Ember.computed('userCards', function() {
    return yourPlayableCalc(this.get('userCards'), "cardSet", "The Grand Tournament");
  }),
  totalPlayableTGT: Ember.computed(function() {
    return totalPlayableCalc(this.get('cards'), "cardSet", "The Grand Tournament");
  }),
  yourUnique: Ember.computed('userCards', function() {
    return this.get('userCards').get('length');
  }),
  totalUnique: Ember.computed(function() {
    return this.get('cards').get('length');
  }),
  yourUniqueBasic: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "rarity", "Basic");
  }),
  totalUniqueBasic: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "rarity", "Basic");
  }),
  yourUniqueCommon: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "rarity", "Common");
  }),
  totalUniqueCommon: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "rarity", "Common");
  }),
  yourUniqueRare: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "rarity", "Rare");
  }),
  totalUniqueRare: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "rarity", "Rare");
  }),
  yourUniqueEpic: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "rarity", "Epic");
  }),
  totalUniqueEpic: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "rarity", "Epic");
  }),
  yourUniqueLegendary: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "rarity", "Legendary");
  }),
  totalUniqueLegendary: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "rarity", "Legendary");
  }),
  yourUniqueClassic: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "Classic");
  }),
  totalUniqueClassic: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "Classic");
  }),
  yourUniquePromotion: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "Promotion") +
           yourUniqueCalc(this.get('userCards'), "cardSet", "Reward");
  }),
  totalUniquePromotion: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "Promotion") +
           totalUniqueCalc(this.get('cards'), "cardSet", "Reward");
  }),
  yourUniqueNaxx: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "Naxxramas");
  }),
  totalUniqueNaxx: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "Naxxramas");
  }),
  yourUniqueGVG: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "Goblins vs Gnomes");
  }),
  totalUniqueGVG: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "Goblins vs Gnomes");
  }),
  yourUniqueBRM: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "Blackrock Mountain");
  }),
  totalUniqueBRM: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "Blackrock Mountain");
  }),
  yourUniqueTGT: Ember.computed('userCards', function() {
    return yourUniqueCalc(this.get('userCards'), "cardSet", "The Grand Tournament");
  }),
  totalUniqueTGT: Ember.computed(function() {
    return totalUniqueCalc(this.get('cards'), "cardSet", "The Grand Tournament");
  }),
});
