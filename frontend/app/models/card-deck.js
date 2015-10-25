import DS from 'ember-data';

export default DS.Model.extend({
  card: DS.belongsTo('card', {async:true}),
  deck: DS.belongsTo('deck', {async:true}),
  count: DS.attr('number')
});
