import Ember from 'ember';

export default Ember.Component.extend({
  showAsTable: false,
  sortedCardsOrder: ['cost', 'cardType:desc', 'name'],
  sortedCards: Ember.computed.sort('cards', 'sortedCardsOrder'),
  cardSearch: "",
  cardSet: "",
  cardClass: "All",
  cardRarity: "All",
  cardCost: "All",
  hideOwned: false,
  submit: function(e) {
    e.preventDefault();
  },
  filteredCards: Ember.computed.filter('sortedCards', function(card) {
    var search = this.get('cardSearch') || "";
    search = search.toLowerCase();
    return  card.get('name').toLowerCase().indexOf(search) > -1 &&
            (this.get('cardSet') === "" ||
            card.get('cardSet') === this.get('cardSet')) &&
            (this.get('cardClass') === "All" ||
            card.get('playerClass') === this.get('cardClass')) &&
            (this.get('cardRarity') === "All" ||
            card.get('rarity') === this.get('cardRarity')) &&
            (this.get('cardCost') === "All" ||
            card.get('cost') === parseInt(this.get('cardCost')) ||
            (parseInt(this.get('cardCost')) === 7 && card.get('cost') >= 7)) &&
            (!(this.get('hideOwned')) ||
            (card.get('count') === 0 ||
            (card.get('rarity') !== "Legendary" &&
            card.get('count') !== 2)));
  }).property('cardSearch', 'cardSet', 'cardClass', 'cardRarity', 'cardCost', 'sortedCards.@each.count', 'hideOwned', 'lastClicked'),
  actions: {
    addCard(card) {
      this.sendAction('addCard', card);
    },
    setCardSet(str) {
      var names = {"": "All", "Classic": "Classic", "Naxxramas": "Naxx", "Goblins vs Gnomes": "GVG", "Blackrock Mountain": "BRM", "The Grand Tournament": "TGT"};
      this.set('cardSet', str);
      this.$(".set-display").removeClass("active");
      var thisClass = ".set-display." + names[str];
      this.$(thisClass).addClass("active");
    },
    setCardClass(str) {
      this.set('cardClass', str);
      this.$(".class-display").removeClass("active");
      if (str === "") {
        this.$(".class-display.Neutral").addClass("active");
      } else {
        this.$(".class-display." + str).addClass("active");
      }
    },
    setCardRarity(str) {
      this.set('cardRarity', str);
      this.$(".rarity-display").removeClass("active");
      this.$(".rarity-display." + str).addClass("active");
    },
    setCardCost(str) {
      this.set('cardCost', str);
      this.$(".cost-display").removeClass("active");
      this.$(".cost-display." + str).addClass("active");
    },
    addAll(filteredCards) {
      var self = this;
      filteredCards.forEach(function(card) {
        if (card.get('rarity') === "Legendary") {
          card.set('count', 1);
        } else {
          card.set('count', 2);
        }
        self.sendAction('addCard', card);
      });
    }
  }
});
