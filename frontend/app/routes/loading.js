import Ember from 'ember';

export default Ember.Route.extend({
  activate: function(){
    Ember.$('body').toggleClass("loading")
  },
  deactivate: function(){
    Ember.$('body').toggleClass("loading")
  }
});
