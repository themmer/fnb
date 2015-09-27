import Ember from 'ember';

export default Ember.Component.extend({
	isIntroDone: null,

	 actions: {
    takeTheSurveyAction: function() {
      this.set('isIntroDone', true);
    }
  }

});
