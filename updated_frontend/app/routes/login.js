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
        var message = "<ul>";
        response.errors.forEach(function(error) {
          if (error.source.pointer === "/data/attributes/email") {
            message += "<li>Email " + error.detail + ".</li>"
          }
        });
        message += "</ul>"
        $('#messages').empty().append(message);
      }).then(function(response) {
        debugger;
      });

    }
  }
});
