import DS from 'ember-data';

export default DS.Model.extend({
  card: DS.belongsTo('card', {async: true}),
  count: DS.attr('number')
});
