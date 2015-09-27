import Ember from 'ember';

export default Ember.Component.extend({
	isIntroDone: null,

	 actions: {
    takeTheSurveyAction: function() {
    	console.log('clicked');
      this.set('isIntroDone', true);
    }
  }

});
