import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      deck: this.store.findRecord('deck', params.id),
      cards: this.store.findAll('card')
    });
  }
});
