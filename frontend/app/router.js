import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('protected');
  this.route('login');
  this.route('collection');
  this.route('scrape');
  this.route('packs');
});

export default Router;
