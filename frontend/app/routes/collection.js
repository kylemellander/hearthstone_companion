import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return Ember.RSVP.hash({
      cards: this.store.findAll('card'),
      cardUsers: this.store.findAll('cardUser')
    });
  },
  actions: {
    addCard(card, count) {
      var newCount = card.get('count') + count;
      if (!(card.get('rarity') === "Legendary" && newCount > 1) && newCount <= 2 && newCount >= 0) {
        card.set('count', newCount);
        card.save();
      }
    }
  }
});
