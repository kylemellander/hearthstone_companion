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
  submit: function(e) {
    e.preventDefault();
  },
  filteredCards: Ember.computed.filter('sortedCards', function(userCard) {
    var search = this.get('cardSearch').toLowerCase();
    return  userCard.get('card').get('name').toLowerCase().indexOf(search) > -1 &&
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
  }).property('cardSearch', 'cardSet', 'cardClass', 'cardRarity', 'cardCost', 'userCards', 'sortedCards'),
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
      $(".set-link").removeClass("active");
      var thisClass = ".set-link." + names[str];
      $(thisClass).addClass("active");
    },
    setCardClass(str) {
      this.set('cardClass', str);
      $(".class-link").removeClass("active");
      if (str === "") {
        $(".class-link.Neutral").addClass("active");
      } else {
        $(".class-link." + str).addClass("active");
      }
    },
    setCardRarity(str) {
      this.set('cardRarity', str);
      $(".rarity-link").removeClass("active");
      $(".rarity-link." + str).addClass("active");
    },
    setCardCost(str) {
      this.set('cardCost', str);
      $(".cost-link").removeClass("active");
      $(".cost-link." + str).addClass("active");
    }
  }
});
