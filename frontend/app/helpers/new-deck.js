import Ember from 'ember';

export function newDeck(params/*, hash*/) {
  if (params[0].get('cardDecks').get('length') === 0) {
    return " <span class='new'>NEW</span>";
  }
}

export default Ember.Helper.helper(newDeck);
