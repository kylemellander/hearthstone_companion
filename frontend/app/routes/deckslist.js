import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(data) {
    var context = this;
    $.ajax({
      dataType: 'json',
      url: "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20data.html.cssselect%20WHERE%20url%3D'http%3A%2F%2Fwww.hearthpwn.com%2Fdecks'%20AND%20css%3D'table.listing-decks%20tbody%20tr'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
    }).then(function(jsonDecks) {
      var remoteDecks = jsonDecks.query.results.results.tr;
      remoteDecks.forEach(function(deck) {
        var partialUrl = deck.td[0].div.span.a.href;
        var id = partialUrl.replace("/decks/", "").split("-")[0];
        var url = "http://www.hearthpwn.com" + partialUrl;
        var params = {
          name: deck.td[0].div.span.a.content,
          url: url,
          playerClass: deck.td[3].content,
          remoteId: id
        }
        context.store.queryRecord('deck', {filter: {remote_id: id}}).then(function(deck) {
          if ( deck === undefined ) {
            var newDeck = context.store.createRecord('deck', params);
            newDeck.save();
          }
        })
      });
    });
  },
  model() {
    return Ember.RSVP.hash({
      decks: this.store.findAll('deck'),
      cardUsers: this.store.findAll('cardUser'),
      cards: this.store.findAll('card')
    });
  },
  actions: {
    test(model) {
      debugger;
    }
  }
});
