import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		goToInvestments() {
	  	this.transitionTo('investments');
	  },
	  goToGoals() {
	  	this.transitionTo('goals');
	  }
  }
});