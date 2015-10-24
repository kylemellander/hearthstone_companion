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
  submit: function(e) {
    e.preventDefault();
  },
  filteredCards: Ember.computed.filter('sortedCards', function(card) {
    var search = this.get('cardSearch').toLowerCase();
    return  card.get('name').toLowerCase().indexOf(search) > -1 &&
            (this.get('cardSet') === "" ||
            card.get('card_set') === this.get('cardSet')) &&
            (this.get('cardClass') === "All" ||
            card.get('player_class') === this.get('cardClass')) &&
            (this.get('cardRarity') === "All" ||
            card.get('rarity') === this.get('cardRarity')) &&
            (this.get('cardCost') === "All" ||
            card.get('cost') === parseInt(this.get('cardCost')) ||
            (parseInt(this.get('cardCost')) === 7 && card.get('cost') >= 7))
  }).property('cardSearch', 'cardSet', 'cardClass', 'cardRarity', 'cardCost', 'sortedCards'),
  // filteredCardsAndHide: Ember.computed.filter('hideOwnedCards', function(card) {
  //   var search = this.get('cardSearch').toLowerCase();
  //   return  card.get('name').toLowerCase().indexOf(search) > -1 &&
  //           (this.get('cardSet') === "" ||
  //           card.get('card_set') === this.get('cardSet')) &&
  //           (this.get('cardClass') === "All" ||
  //           card.get('player_class') === this.get('cardClass')) &&
  //           (this.get('cardRarity') === "All" ||
  //           card.get('rarity') === this.get('cardRarity')) &&
  //           (this.get('cardCost') === "All" ||
  //           card.get('cost') === parseInt(this.get('cardCost')) ||
  //           (parseInt(this.get('cardCost')) === 7 && card.get('cost') >= 7))
  // }).property('cardSearch', 'cardSet', 'cardClass', 'cardRarity', 'cardCost', 'hideOwnedCards'),
  // hideOwnedCards: Ember.computed.filter('userCards', function(card) {
  //   for (var key in this.get('userCards').content) {
  //     if (this.get('userCards').content.hasOwnProperty(key)) {
  //       if (this.get('userCards').content[key].record.get('card').content.id === card.id) {
  //         return false;
  //       }
  //     }
  //   }
  // }).property('userCards'),
  actions: {
    addCard(userCards, card, count) {
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
      $(".set-display").removeClass("active");
      var thisClass = ".set-display." + names[str];
      $(thisClass).addClass("active");
    },
    setCardClass(str) {
      this.set('cardClass', str);
      $(".class-display").removeClass("active");
      if (str === "") {
        $(".class-display.Neutral").addClass("active");
      } else {
        $(".class-display." + str).addClass("active");
      }
    },
    setCardRarity(str) {
      this.set('cardRarity', str);
      $(".rarity-display").removeClass("active");
      $(".rarity-display." + str).addClass("active");
    },
    setCardCost(str) {
      this.set('cardCost', str);
      $(".cost-display").removeClass("active");
      $(".cost-display." + str).addClass("active");
    }
  }
});
