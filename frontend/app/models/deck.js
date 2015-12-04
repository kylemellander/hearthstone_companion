import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  url: DS.attr(),
  playerClass: DS.attr(),
  deckType: DS.attr(),
  position: DS.attr('number'),
  remoteId: DS.attr(),
  cardDecks: DS.hasMany('cardDeck', {async:true}),
  cards: DS.hasMany('card', {async:true})
});
