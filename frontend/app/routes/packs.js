import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return Ember.RSVP.hash({
      cards: this.store.findAll('card'),
      cardUsers: this.store.findAll('cardUser')
    });
  }
});
