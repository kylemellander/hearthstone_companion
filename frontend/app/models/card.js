import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  playerClass: DS.attr(),
  cardSet: DS.attr(),
  rarity: DS.attr(),
  cost: DS.attr('number'),
  cardType: DS.attr(),
  img: DS.attr(),
  hearthstoneId: DS.attr(),
  cardUser: DS.belongsTo('cardUser', {async: true}),
  count: DS.attr('number'),
});
