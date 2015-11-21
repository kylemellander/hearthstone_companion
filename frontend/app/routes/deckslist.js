import Ember from 'ember';

let playerClass;

export default Ember.Route.extend({

  beforeModel(transition) {
    let context = this;
    playerClass = transition.queryParams.playerClass;
    let originUrl = "https://query.yahooapis.com/v1/public/yql?q=SELECT%20" +
                    "*%20FROM%20data.html.cssselect%20WHERE%20url%3D'" +
                    "http%3A%2F%2Fwww.hearthpwn.com%2Fdecks%3F";
    if (playerClass) {
      originUrl += "filter-class%3D";
      let classHash = { "Druid": "4",
                        "Hunter": "8",
                        "Mage": "16",
                        "Paladin": "32",
                        "Priest": "64",
                        "Rogue": "128",
                        "Shaman": "256",
                        "Warlock": "512",
                        "Warrior": "1024"
                      };
      originUrl += classHash[playerClass] + "%26";
    }
    originUrl +=  "filter-is-forge%3D2%26filter-deck-tag%3D1%26" +
                  "filter-deck-type-val%3D8%26filter-deck-type-op%3D4'%20AND" +
                  "%20css%3D'table.listing-decks%20tbody%20tr'&format=json" +
                  "&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

    $.ajax({
      dataType: 'json',
      url: originUrl
    }).then(function(jsonDecks) {
      let remoteDecks = jsonDecks.query.results.results.tr;
      remoteDecks.forEach(function(deck) {
        let partialUrl = deck.td[0].div.span.a.href;
        let id = partialUrl.replace("/decks/", "").split("-")[0];
        let url = "http://www.hearthpwn.com" + partialUrl;
        let params = {
          name: deck.td[0].div.span.a.content.replace("&#27;", "'"),
          url: url,
          playerClass: deck.td[3].content,
          remoteId: id
        };
        context.store.queryRecord('deck', {filter: {remote_id: id}}).then(function(deck) {
          if ( deck === undefined ) {
            let newDeck = context.store.createRecord('deck', params);
            newDeck.save();
          }
        });
      });
    });
  },

  queryParams: {
    playerClass: {
      refreshModel: true
    }
  },

  model(params) {
    let query = {start: 0, limit: 25};

    if (playerClass) {
      query["player_class"] = playerClass;
    }

    return Ember.RSVP.hash({
      cards: this.store.findAll('card'),
      decks: this.store.query('deck', query)
    });
  },

  afterModel(hash) {
    let context = this;

    hash.decks.forEach(function(deck) {
      if(deck.get('cardDecks').get('length') <= 15) {
        let yql = "https://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20data.html.cssselect" +
        "%20WHERE%20url%3D'http%3A%2F%2Fwww.hearthpwn.com" +
        deck.get('url').replace("http://www.hearthpwn.com/decks/", "%2Fdecks%2F") +
        "'%20AND%20css%3D'table.listing-cards-tabular%20tbody%20tr'" +
        "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
        $.ajax({
          dataType: 'json',
          url: yql,
        }).then(function(remoteDeck) {
          if (remoteDeck.query.results.results != null) {
            let tr = remoteDeck.query.results.results.tr;
            for(let k in tr) {
              if(tr.hasOwnProperty(k)) {
                let count = parseInt(tr[k].td[0].b.a["data-count"]);
                let cardName = tr[k].td[0].b.a.content.replace("&#27;", "'").trim();
                let card = hash.cards.findBy('name', cardName);
                let cardDeckParams = {card: card, deck: deck, count: count};
                let newCardDeck = context.store.createRecord('cardDeck', cardDeckParams);
                newCardDeck.save();
              }
            }
          } else {
            console.log(remoteDeck);
          }
        });
      }
    });
  },
});
