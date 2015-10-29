import Ember from 'ember';

export default Ember.Component.extend({
  showAsTable: false,
  sortedCardsOrder: ['cost', 'card_type:desc', 'name'],
  sortedCards: Ember.computed.sort('cards', 'sortedCardsOrder'),
  cardSearch: "",
  cardSet: "",
  cardClass: "All",
  cardRarity: "All",
  cardCost: "All",
  hideOwned: false,
  lastClicked: "",
  submit: function(e) {
    e.preventDefault();
  },

  filteredCards: Ember.computed.filter('sortedCards', function(card) {
    var search = this.get('cardSearch').toLowerCase();
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
            (card.get('cardUser').content === null ||
            (card.get('rarity') !== "Legendary" &&
            card.get('cardUser').content.get('count') !== 2)));
  }).property('cardSearch', 'cardSet', 'cardClass', 'cardRarity', 'cardCost', 'sortedCards', 'hideOwned', 'lastClicked'),
  actions: {
    addCard(userCards, card, count) {
      this.set('lastClicked', card.get('name'));
      this.sendAction('addCard', userCards, card, count);
    },
    toggleDisplay() {
      if(this.get('showAsTable')) {
        this.set('showAsTable', false);
      } else {
        this.set('showAsTable', true);
      }
    },
    setCardSet(str) {
      var names = {"": "All", "Classic": "Classic", "Naxxramas": "Naxx", "Goblins vs Gnomes": "GVG", "Blackrock Mountain": "BRM", "The Grand Tournament": "TGT"};
      this.set('cardSet', str);
      Ember.$(".set-display").removeClass("active");
      var thisClass = ".set-display." + names[str];
      Ember.$(thisClass).addClass("active");
    },
    setCardClass(str) {
      this.set('cardClass', str);
      Ember.$(".class-display").removeClass("active");
      if (str === "") {
        Ember.$(".class-display.Neutral").addClass("active");
      } else {
        Ember.$(".class-display." + str).addClass("active");
      }
    },
    setCardRarity(str) {
      this.set('cardRarity', str);
      Ember.$(".rarity-display").removeClass("active");
      Ember.$(".rarity-display." + str).addClass("active");
    },
    setCardCost(str) {
      this.set('cardCost', str);
      Ember.$(".cost-display").removeClass("active");
      Ember.$(".cost-display." + str).addClass("active");
    },
    addAll(filteredCards) {
      var userCards = this.get('userCards');
      var self = this;
      var count
      filteredCards.forEach(function(card) {
        if (card.get('rarity') === "Legendary") {
          count = 1;
        } else {
          count = 2;
        }
        self.sendAction('addCard', userCards, card, count);
      })
    }
  }
});
