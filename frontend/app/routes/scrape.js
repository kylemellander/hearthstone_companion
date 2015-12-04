import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    scrape() {
      if(this.get('session').isAuthenticated) {
        var context = this;
        Ember.$.ajax({
          beforeSend: function(request) {
            request.setRequestHeader("X-Mashape-Key", 'J5KEJHfdbymsh8nfjXGgbwooeaaNp1hPQEdjsn363la5ffVLkn');
          },
          dataType: 'json',
          url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1&locale=enUS',
        }).then(function(response) {
          var rarity, cardSet;
          for (var key in response) {
            if (response.hasOwnProperty(key)) {
              for (var prop in response[key]) {
                if (response[key].hasOwnProperty(prop)) {
                  if (response[key][prop].type !== "Hero") {
                    if(response[key][prop].cardSet === "Basic") {
                      rarity = "Basic";
                      cardSet = "Classic";
                    } else if (response[key][prop].cardSet === "Reward") {
                      rarity = response[key][prop].rarity;
                      cardSet = "Promotion";
                    } else {
                      rarity = response[key][prop].rarity;
                      cardSet = response[key][prop].cardSet;
                    }
                    var params = {
                      hearthstoneId: response[key][prop].cardId,
                      name: response[key][prop].name,
                      cardSet: cardSet,
                      rarity: rarity,
                      cost: response[key][prop].cost,
                      playerClass: response[key][prop].playerClass || "",
                      img: response[key][prop].img.replace("http", "https"),
                      cardType: response[key][prop].type,
                    };
                    var newCard = context.store.createRecord('card', params);
                    newCard.save();
                  }
                }
              }
            }
          }
        }).then(function() {
          Ember.$('#messages').html("Scrape Completed").removeClass("error").addClass("success").show();
          Ember.$("#messages").delay(5000).fadeOut(1000, function() {Ember.$(this).empty();});
        });
      } else {
        Ember.$('#messages').html("You need to be logged in to scrape the cards").removeClass("success").addClass("error");
      }
    }
  }
});
