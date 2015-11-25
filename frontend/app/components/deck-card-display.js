import Ember from 'ember';

export default Ember.Component.extend({
  mouseEnter: function(e) {
    this.$('.float-container').append('booyah');
    this.$('.hover-float .float-container').show();
    this.$('.hover-float .float-container').offset({
      top: e,
      left: e
    });
  },
  mouseLeave: function() {
    this.$('.float-container').empty();
  }
});
