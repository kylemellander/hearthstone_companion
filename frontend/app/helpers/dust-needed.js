import Ember from 'ember';

export function dustNeeded(params/*, hash*/) {
  return params[1] - params[0];
}

export default Ember.Helper.helper(dustNeeded);
