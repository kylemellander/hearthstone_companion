import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return Ember.RSVP.hash({
      cards: this.store.findAll('card'),
      cardUsers: this.store.findAll('cardUser')
    })
  },
  actions: {
    addCard(userCards, card, count) {
      var found = false;
      var self = this;
      userCards.content.forEach(function(userCard) {
        var currentUserCard = userCard.record;
        if (currentUserCard.get('card').get('id') === card.get('id')) {
          var newCount = currentUserCard.get('count') + count;
          if (newCount <= 0) {
            currentUserCard.destroyRecord();
          } else if (!(card.get('rarity') === "Legendary" && newCount > 1) && newCount <= 2) {
            currentUserCard.set('count', newCount);
            currentUserCard.save();
          }
          found = true;
        }
      })
      if (found === false && count > 0) {
        var cardUserParams = {card: card, count: count};
        var newCardUser = this.store.createRecord('user-card', cardUserParams);
        newCardUser.save();
      }
    }
  }
});
