import Ember from 'ember';

export default Ember.Component.extend({
  tooltip: Ember.computed(function() {
    var result =  "<h4>" + this.get('card').get('name') + "</h4>" +
                  "<p>Cost to craft: " + this.get('costToCraft') + "</p>";

    return result;
  }),
  costToCraft: Ember.computed(function() {
    let result;
    let rarity = this.get('card').get('rarity');
    if (rarity === "Legendary") {
      result = 1600;
    } else if (rarity === "Epic") {
      result = 400;
    } else if (rarity === "Rare") {
      result = 100;
    } else {
      result = 40;
    }
    return rarity !== "Legendary" && this.get('card').get('count') === 0 ? result * 2 : result;
  }),
  mouseEnter: function() {
    this.$('.float-container').html(this.get('tooltip'));
  },
  mouseMove: function(e) {
    this.$('.hover-float .float-container').show();
    this.$('.hover-float .float-container').offset({
      top: e.pageY,
      left: e.pageX + 20
    });
  },
  mouseLeave: function() {
    this.$('.float-container').empty();
    this.$('.float-container').hide();
  }
});
