import Ember from 'ember';

export default Ember.Component.extend({
	/**
   The currently active user

   @private
   @property user
   @type object
   */
  user: Ember.computed.alias('session.user'),

	isCareerChecked: function() {
		return "CAREER" === user.stageInLife;
	},

	isCollegeChecked: function() {
		return "COLLEGE" === user.stageInLife;
	},

	isHighSchoolChecked: function() {
		return "HIGHSCHOOL" === user.stageInLife;
	}

	isIntroDone: null,

});
