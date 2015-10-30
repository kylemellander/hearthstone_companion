import { moduleForModel, test } from 'ember-qunit';

moduleForModel('card-user', 'Unit | Model | card user', {
  // Specify the other units that are required for this test.
  needs: ['model:card', 'model:user']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
