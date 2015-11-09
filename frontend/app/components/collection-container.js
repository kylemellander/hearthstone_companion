import Ember from 'ember';

export default Ember.Component.extend({
  showList: true,
  actions: {
    toggleShowList(bool) {
      this.set('showList', bool);
    },
    addCard(card) {
      this.sendAction('addCard', card);
    },
  }
});
