import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

let cards = [];

moduleForComponent('collection-stats', 'Integration | Component | collection stats', {
  integration: true,
  needs: ['model:card'],
  beforeEach: function() {
    // Ember.inject.service('store');
    // cards = Ember.store.findAll('card');
  }
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{collection-stats}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#collection-stats}}
      template block text
    {{/collection-stats}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
