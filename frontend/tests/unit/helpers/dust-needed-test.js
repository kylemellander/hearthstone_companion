import { dustNeeded } from '../../../helpers/dust-needed';
import { module, test } from 'qunit';

module('Unit | Helper | dust needed');

test('it works', function(assert) {
  var result = dustNeeded([0, 100]);
  assert.equal(result, 100);
});
