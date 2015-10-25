import Ember from 'ember';

export function dustValueOfPack(params/*, hash*/) {
  return Math.round(5 * (params[0] * params[1]/100 +
         params[2] * params[3]/100 +
         params[4] * params[5]/100 +
         params[6] * params[7]/100)*100)/100;
}

export default Ember.Helper.helper(dustValueOfPack);
