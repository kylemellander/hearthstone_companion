import { yourPlayableCardsPercentage } from '../../../helpers/your-playable-cards-percentage';
import { module, test } from 'qunit';

module('Unit | Helper | your playable cards percentage');

test('it works', function(assert) {
  var result = yourPlayableCardsPercentage([100, 1000]);
  assert.equal(result, 10);
});
