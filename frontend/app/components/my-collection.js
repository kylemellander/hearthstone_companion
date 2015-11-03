import Ember from 'ember';

export default Ember.Component.extend({
  showAsTable: false,
  sortedCardsOrder: ['cost', 'card_type:desc', 'name'],
  sortedCards: Ember.computed.sort('cardUsers.@each.card', 'sortedCardsOrder'),
  cardSearch: "",
  cardSet: "",
  cardClass: "All",
  cardRarity: "All",
  cardCost: "All",
  showSort: false,
  submit: function(e) {
    e.preventDefault();
  },
  filteredCards: Ember.computed.filter('sortedCards', function(userCard) {

    var search = this.get('cardSearch') || "";
    return  userCard.get('card').get('name').toLowerCase().indexOf(search.toLowerCase()) > -1 &&
            (this.get('cardSet') === "" ||
            userCard.get('card').get('cardSet') === this.get('cardSet')) &&
            (this.get('cardClass') === "All" ||
            userCard.get('card').get('playerClass') === this.get('cardClass')) &&
            (this.get('cardRarity') === "All" ||
            userCard.get('card').get('rarity') === this.get('cardRarity')) &&
            (this.get('cardCost') === "All" ||
            userCard.get('card').get('cost') === parseInt(this.get('cardCost')) ||
            (parseInt(this.get('cardCost')) === 7 && userCard.get('card').get('cost') >= 7)) &&
            userCard.get('count') !== 0;
  }).property('cardSearch', 'cardSet', 'cardClass', 'cardRarity', 'cardCost', 'userCards', 'sortedCards', 'showSort'),
  actions: {
    addCard(userCards, card, count) {
      this.sendAction('addCard', userCards, card, count);
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
      var names = {"": "All", "Classic": "Classic", "Naxxramas": "Naxx", "Goblins vs Gnomes": "GVG", "Blackrock Mountain": "BRM", "The Grand Tournament": "TGT"};
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
