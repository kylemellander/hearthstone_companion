import Ember from 'ember';

export function yourPlayableCardsPercentage(params/*, hash*/) {
  return Math.round(params[0]/params[1]*10000)/100;
}

export default Ember.Helper.helper(yourPlayableCardsPercentage);
