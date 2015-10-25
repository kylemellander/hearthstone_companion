import Ember from 'ember';

export default Ember.Component.extend({
  bestPack: Ember.computed('classicValue', 'gvgValue', 'tgtValue', function() {
    if(this.get('gvgValue') > this.get('classicValue') && this.get('gvgValue') > this.get('tgtValue')) {
      return "Goblins vs Gnomes";
    } else if (this.get('tgtValue') > this.get('classicValue')) {
      return "The Grand Tournament";
    } else {
      return "Classic";
    }
  }).property('classicValue', 'gvgValue', 'tgtValue'),
  classicValue: 0,
  gvgValue: 0,
  tgtValue: 0,
  actions: {
    packValueSet(packType, packValue) {
      if (packType === "Classic") {
        this.set('classicValue', packValue);
      } else if (packType === "Goblins vs Gnomes") {
        this.set('gvgValue', packValue);
      } else if (packType === "The Grand Tournament") {
        this.set('tgtValue', packValue);
      }
    }
  }
});
