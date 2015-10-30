import { moduleForModel, test } from 'ember-qunit';

moduleForModel('deck', 'Unit | Serializer | deck', {
  // Specify the other units that are required for this test.
  needs: ['serializer:deck', 'model:card-deck', 'model:card']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();
  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
