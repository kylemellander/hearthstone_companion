import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    signup() {
      var data = btoa(this.controller.identification + ":" + this.controller.password);
      var response = Ember.$.ajax({
        type: "POST",
        url: "http://localhost:3000/users",
        data: { signup_token: data },
        async: false
      });
      debugger;

    }
  }
});
