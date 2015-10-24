import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signup() {
      var email = this.controller.identification;
      var password = this.controller.password;

      var user = this.store.createRecord('user', {
        email: email,
        password: password
      });

      user.save().catch(function(response) {
        user.set('password', "[protected]")
        var message = "<ul>";
        response.errors.forEach(function(error) {
          if (error.source.pointer === "/data/attributes/email") {
            message += "<li>Email " + error.detail + ".</li>";
          } else if (error.source.pointer === "/data/attributes/password") {
            message += "<li>Password " + error.detail + ".</li>";
          }
        });
        message += "</ul>";
        $('#messages').empty().append(message).removeClass("success").addClass("error");
      }).then(function(response) {
        user.set('password', "[protected]")
        if (response) {
          $('#messages').empty().append("Your account has been created successfully!").removeClass("error").addClass("success");
        }
      });
    },
    authenticate() {
      var data = {identification: this.controller.identification, password: this.controller.password };
      return this.get('session').authenticate('simple-auth-authenticator:devise', data).then(function(response) {
        $('#messages').empty().append("You are successfully logged in.").removeClass("error").addClass("success");
      }, function(reason) {
        $('#messages').empty().append("Your username and/or password are incorrect.").removeClass("success").addClass("error");
        // rejection
      });
    }
  }
});
