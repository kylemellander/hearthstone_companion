import { moduleForModel, test } from 'ember-qunit';

moduleForModel('deck', 'Unit | Model | deck', {
  // Specify the other units that are required for this test.
  needs: ['model:card-deck', 'model:card']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
