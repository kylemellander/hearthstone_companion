import { deckDustCost } from '../../../helpers/deck-dust-cost';
import { module, test } from 'qunit';

module('Unit | Helper | deck dust cost');

// Replace this with your real tests.
test('it works', function(assert) {
  var result = deckDustCost([1,2,3,4]);
  assert.equal(result, 7850);
});
