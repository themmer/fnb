import Ember from 'ember';

export default Ember.Component.extend({
	/**
   The currently active user

   @private
   @property user
   @type object
   */
  user: Ember.computed.alias('session.user'),

  isCareerChecked: Ember.computed({
    get() {
			return 'CAREER' === this.get('user.stageInLife');
    }
  }),

	isCollegeChecked: Ember.computed({
    get() {
			return 'COLLEGE' === this.get('user.stageInLife');
		}
	}),

	isHighSchoolChecked: Ember.computed({
    get() {
    	return 'HIGHSCHOOL' === this.get('user.stageInLife');
    }
	}),

	isIntroDone: null,

	actions: {
    surveyDoneAction: function() {
      this.get('user').set('isSurveyDone', true);
    },

    stageInLifeAction: function (val) {
      let value = val.get('value');

      this.get('user').set('stageInLife', value);
    }
  }
});
