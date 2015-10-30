import { moduleForModel, test } from 'ember-qunit';

moduleForModel('card-deck', 'Unit | Model | card deck', {
  // Specify the other units that are required for this test.
  needs: ['model:card', 'model:deck']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
