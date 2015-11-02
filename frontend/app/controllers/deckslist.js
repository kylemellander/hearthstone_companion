import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['playerClass'],
  playerClass: null,
  filteredDecks: Ember.computed.filter('model.decks', function(deck) {
    return this.get('playerClass') === null || deck.get('playerClass') === this.get('playerClass');
  }).property('model.decks', 'playerClass')
});
