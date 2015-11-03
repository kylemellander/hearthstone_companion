import Ember from 'ember';

export default Ember.Component.extend({
  signupValue: false,
  actions: {
    setSignup(bool) {
      this.set('signupValue', bool);
    },
    signup() {
      var email = this.get('identification');
      var password = this.get('password');
      this.sendAction('signup', email, password);
    },
    authenticate() {
      var email = this.get('identification');
      var password = this.get('password');
      this.sendAction('authenticate', email, password);
    }
  }
});
