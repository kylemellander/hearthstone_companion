import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  actions: {
    scrape() {
      if(this.get('session').isAuthenticated) {
        var context = this;
        $.ajax({
          beforeSend: function(request) {
            request.setRequestHeader("X-Mashape-Key", 'J5KEJHfdbymsh8nfjXGgbwooeaaNp1hPQEdjsn363la5ffVLkn');
          },
          dataType: 'json',
          url: 'https://omgvamp-hearthstone-v1.p.mashape.com/cards?collectible=1&locale=enUS',
        }).then(function(response) {
          var newData = [];
          for (var key in response) {
            if (response.hasOwnProperty(key)) {
              for (var prop in response[key]) {
                if (response[key].hasOwnProperty(prop)) {
                  if (response[key][prop].type !== "Hero") {
                    if(response[key][prop].cardSet === "Basic") {
                      var rarity = "Basic";
                      var cardSet = "Classic";
                    } else {
                      var rarity = response[key][prop].rarity;
                      var cardSet = response[key][prop].cardSet;
                    }
                    var params = {
                      hearthstoneId: response[key][prop].cardId,
                      name: response[key][prop].name,
                      cardSet: cardSet,
                      rarity: rarity,
                      cost: response[key][prop].cost,
                      playerClass: response[key][prop].playerClass || "",
                      img: response[key][prop].img,
                      cardType: response[key][prop].type,
                    };
                    var newCard = context.store.createRecord('card', params);
                    newCard.save();
                  }
                }
              }
            }
          };
        })
      } else {
        $('#messages').empty().append("You need to be logged in to scrape the cards").removeClass("success").addClass("error");
      }
    }
  }
});
