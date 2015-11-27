import Ember from 'ember';

export default Ember.Component.extend({
  sortedCardsOrder: ['cost', 'cardType:desc', 'name'],
  sortedCards: Ember.computed('cards', function() {
    var cards = this.get('cards');
    function compare(a,b) {
      if (a.get('cost') < b.get('cost')) {
        return -1;
      } else if (a.get('cost') > b.get('cost')) {
        return 1;
      } else if (a.get('cardType') > b.get('cardType')) {
        return -1;
      } else if (a.get('cardType') < b.get('cardType')) {
        return 1;
      } else if (a.get('name') < b.get('name')) {
        return -1;
      } else if (a.get('name') > b.get('name')) {
        return 1;
      } else {
        return 0;
      }
    }
    return cards.toArray().sort(compare);
  }).property('cards', 'cards.count'),
  cardSearch: "",
  cardSet: "",
  cardClass: "All",
  cardRarity: "All",
  cardCost: "All",
  showSort: false,
  submit: function(e) {
    e.preventDefault();
  },
  filteredCards: Ember.computed.filter('sortedCards', function(card) {
    var search = this.get('cardSearch') || "";
    return  card.get('count') !== 0 &&
            card.get('name').toLowerCase().indexOf(search.toLowerCase()) > -1 &&
            (this.get('cardSet') === "" ||
            card.get('cardSet') === this.get('cardSet')) &&
            (this.get('cardClass') === "All" ||
            card.get('playerClass') === this.get('cardClass')) &&
            (this.get('cardRarity') === "All" ||
            card.get('rarity') === this.get('cardRarity')) &&
            (this.get('cardCost') === "All" ||
            card.get('cost') === parseInt(this.get('cardCost')) ||
            (parseInt(this.get('cardCost')) === 7 && card.get('cost') >= 7));
  }).property('cardSearch', 'cardSet', 'cardClass', 'cardRarity', 'cardCost', 'sortedCards.@each.count', 'showSort'),
  actions: {
    addCard(card) {
      this.sendAction('addCard', card);
    },
    toggleSort() {
      if(this.get('showSort')) {
        this.set('showSort', false);
        this.set('cardSearch', "");
        this.set("cardSet", "");
        this.set("cardClass", "All");
        this.set("cardRarity", "All");
        this.set("cardCost", "All");
      } else {
        this.set('showSort', true);
      }
    },
    setCardSet(str) {
      var names = {"": "All", "Classic": "Classic", "Naxxramas": "Naxx", "Goblins vs Gnomes": "GVG", "Blackrock Mountain": "BRM", "The Grand Tournament": "TGT", "The League of Explorers": "LOE"};
      this.set('cardSet', str);
      Ember.$(".set-link").removeClass("active");
      var thisClass = ".set-link." + names[str];
      Ember.$(thisClass).addClass("active");
    },
    setCardClass(str) {
      this.set('cardClass', str);
      Ember.$(".class-link").removeClass("active");
      if (str === "") {
        Ember.$(".class-link.Neutral").addClass("active");
      } else {
        Ember.$(".class-link." + str).addClass("active");
      }
    },
    setCardRarity(str) {
      this.set('cardRarity', str);
      Ember.$(".rarity-link").removeClass("active");
      Ember.$(".rarity-link." + str).addClass("active");
    },
    setCardCost(str) {
      this.set('cardCost', str);
      Ember.$(".cost-link").removeClass("active");
      Ember.$(".cost-link." + str).addClass("active");
    }
  }
});
