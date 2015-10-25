import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pack-value-gvg', 'Integration | Component | pack value gvg', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pack-value-gvg}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pack-value-gvg}}
      template block text
    {{/pack-value-gvg}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
