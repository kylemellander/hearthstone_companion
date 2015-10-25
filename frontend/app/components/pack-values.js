import Ember from 'ember';

export default Ember.Component.extend({
  filteredCardUsers: Ember.computed.filter('cardUsers', function(cardUser) {
    return cardUser.get('card').get('cardSet') === this.get('title');
  }).property('cardUsers', 'title'),
  filteredCards: Ember.computed.filter('cards', function(card) {
    return card.get('cardSet') === this.get('title');
  }).property('cards', 'title'),
  filteredCommonCardUsers: Ember.computed.filter('filteredCardUsers', function(cardUser) {
    return cardUser.get('card').get('rarity') === "Common";
  }).property('filteredCardUsers'),
  filteredCommonCards: Ember.computed.filter('filteredCards', function(card) {
    return card.get('rarity') === "Common";
  }).property('filteredCards'),
  commonValue: Ember.computed('filteredCommonCards', 'filteredCommonCardUsers', function() {
    var ownedCount = this.get('filteredCommonCardUsers').getEach('count').reduce(add, 0);
    function add(a, b) { return a + b; }
    var totalCount = this.get('filteredCommonCards').get('length') * 2;
    return Math.round(((ownedCount * 5 + (totalCount - ownedCount) * 40) / totalCount)*100)/100;
  }),
  filteredRareCardUsers: Ember.computed.filter('filteredCardUsers', function(cardUser) {
    return cardUser.get('card').get('rarity') === "Rare";
  }).property('filteredCardUsers'),
  filteredRareCards: Ember.computed.filter('filteredCards', function(card) {
    return card.get('rarity') === "Rare";
  }).property('filteredCards'),
  rareValue: Ember.computed('filteredRareCards', 'filteredRareCardUsers', function() {
    var ownedCount = this.get('filteredRareCardUsers').getEach('count').reduce(add, 0);
    function add(a, b) { return a + b; }
    var totalCount = this.get('filteredRareCards').get('length') * 2;
    return Math.round(((ownedCount * 20 + (totalCount - ownedCount) * 100) / totalCount)*100)/100;
  }),
  filteredEpicCardUsers: Ember.computed.filter('filteredCardUsers', function(cardUser) {
    return cardUser.get('card').get('rarity') === "Epic";
  }).property('filteredCardUsers'),
  filteredEpicCards: Ember.computed.filter('filteredCards', function(card) {
    return card.get('rarity') === "Epic";
  }).property('filteredCards'),
  epicValue: Ember.computed('filteredEpicCards', 'filteredEpicCardUsers', function() {
    var ownedCount = this.get('filteredEpicCardUsers').getEach('count').reduce(add, 0);
    function add(a, b) { return a + b; }
    var totalCount = this.get('filteredEpicCards').get('length') * 2;
    return Math.round(((ownedCount * 100 + (totalCount - ownedCount) * 400) / totalCount)*100)/100;
  }),
  filteredLegendaryCardUsers: Ember.computed.filter('filteredCardUsers', function(cardUser) {
    return cardUser.get('card').get('rarity') === "Legendary";
  }).property('filteredCardUsers'),
  filteredLegendaryCards: Ember.computed.filter('filteredCards', function(card) {
    return card.get('rarity') === "Legendary";
  }).property('filteredCards'),
  legendaryValue: Ember.computed('filteredLegendaryCards', 'filteredLegendaryCardUsers', function() {
    var ownedCount = this.get('filteredLegendaryCardUsers').getEach('count').reduce(add, 0);
    function add(a, b) { return a + b; }
    var totalCount = this.get('filteredLegendaryCards').get('length') * 2;
    return Math.round(((ownedCount * 400 + (totalCount - ownedCount) * 1600) / totalCount)*100)/100;
  }),
  commonPercent: 71.41,
  rarePercent: 22.91,
  epicPercent: 4.49,
  legendaryPercent: 1.19,
});
