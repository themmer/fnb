import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('finance', {path: '/'});
  this.route('goals');
  this.route('resources');
  this.route('survey');
  this.route('investment');
});

export default Router;
