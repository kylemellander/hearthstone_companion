import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      cards: this.store.findAll('card'),
      cardUsers: this.store.findAll('cardUser')
    });
  }
});
