import Ember from 'ember';

export default Ember.Component.extend({
  filteredCards: Ember.computed.filter('cards', function(card) {
    return card.get('cardSet') === this.get('title');
  }).property('cards', 'title'),
  filteredCommonCards: Ember.computed.filter('filteredCards', function(card) {
    return card.get('rarity') === "Common";
  }).property('filteredCards'),
  commonValue: Ember.computed('filteredCommonCards', function() {
    var ownedCount = this.get('filteredCommonCards').getEach('count').reduce(add, 0);
    function add(a, b) { return a + b; }
    var totalCount = this.get('filteredCommonCards').get('length') * 2;
    return Math.round(((ownedCount * 5 + (totalCount - ownedCount) * 40) / totalCount)*100)/100;
  }),
  filteredRareCards: Ember.computed.filter('filteredCards', function(card) {
    return card.get('rarity') === "Rare";
  }).property('filteredCards'),
  rareValue: Ember.computed('filteredRareCards', function() {
    var ownedCount = this.get('filteredRareCards').getEach('count').reduce(add, 0);
    function add(a, b) { return a + b; }
    var totalCount = this.get('filteredRareCards').get('length') * 2;
    return Math.round(((ownedCount * 20 + (totalCount - ownedCount) * 100) / totalCount)*100)/100;
  }),
  filteredEpicCards: Ember.computed.filter('filteredCards', function(card) {
    return card.get('rarity') === "Epic";
  }).property('filteredCards'),
  epicValue: Ember.computed('filteredEpicCards', function() {
    var ownedCount = this.get('filteredEpicCards').getEach('count').reduce(add, 0);
    function add(a, b) { return a + b; }
    var totalCount = this.get('filteredEpicCards').get('length') * 2;
    return Math.round(((ownedCount * 100 + (totalCount - ownedCount) * 400) / totalCount)*100)/100;
  }),
  filteredLegendaryCards: Ember.computed.filter('filteredCards', function(card) {
    return card.get('rarity') === "Legendary";
  }).property('filteredCards'),
  legendaryValue: Ember.computed('filteredLegendaryCards', function() {
    var ownedCount = this.get('filteredLegendaryCards').getEach('count').reduce(add, 0);
    function add(a, b) { return a + b; }
    var totalCount = this.get('filteredLegendaryCards').get('length');
    return Math.round(((ownedCount * 400 + (totalCount - ownedCount) * 1600) / totalCount)*100)/100;
  }),
  commonPercent: 71.41,
  rarePercent: 22.91,
  epicPercent: 4.49,
  legendaryPercent: 1.19,
  dustValueOfPack: Ember.computed(function() {
    return Math.round(5 * (this.get('commonValue') * this.get('commonPercent')/100 +
           this.get('rareValue') * this.get('rarePercent')/100 +
           this.get('epicValue') * this.get('epicPercent')/100 +
           this.get('legendaryValue') * this.get('legendaryPercent')/100)*100)/100;
  }),
  willInsertElement() {
    var packType = this.get('title');
    var packValue = this.get('dustValueOfPack');
    this.sendAction("packValueSet", packType, packValue);
  }
});
