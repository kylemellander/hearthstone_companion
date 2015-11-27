import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signup(email, password) {
      var user = this.store.createRecord('user', {
        email: email,
        password: password
      });
      user.save().catch(function(response) {
        user.set('password', "[protected]");
        var message = "<ul>";
        response.errors.forEach(function(error) {
          if (error.source.pointer === "/data/attributes/email") {
            message += "<li>Email " + error.detail + ".</li>";
          } else if (error.source.pointer === "/data/attributes/password") {
            message += "<li>Password " + error.detail + ".</li>";
          }
        });
        message += "</ul>";
        Ember.$('#messages').empty().append(message).removeClass("success").addClass("error");
      }).then(function(response) {
        user.set('password', "[protected]");
        if (response) {
          Ember.$('#messages').html("Your account has been created successfully!").removeClass("error").addClass("success").show();
          Ember.$("#messages").delay(3000).fadeOut(1000, function() {Ember.$(this).empty();});
        }
      });
    },
    authenticate(email, password) {
      var data = {identification: email, password: password };
      var self = this;
      return this.get('session').authenticate('simple-auth-authenticator:devise', data).then(function() {
        if (email.toLowerCase() === "kylemellander@gmail.com") {
          self.get('session').content.admin = true;
        }
        Ember.$('#messages').empty().append("You are successfully logged in.").removeClass("error").addClass("success").show();
        Ember.$("#messages").delay(3000).fadeOut(1000, function() {Ember.$(this).empty();});
      }, function() {
        Ember.$('#messages').empty().append("Your username and/or password are incorrect.").removeClass("success").addClass("error").show();
        Ember.$("#messages").delay(3000).fadeOut(1000, function() {Ember.$(this).empty();});
      });
    }
  }
});
