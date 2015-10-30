import Ember from 'ember';

export function deckDustCost(params/*, hash*/) {
  return params[0]*50 + params[1]*100 + params[2]*400 + params[3]*1600;
}

export default Ember.Helper.helper(deckDustCost);
