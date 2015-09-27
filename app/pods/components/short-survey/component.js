import Ember from 'ember';

export default Ember.Component.extend({
	/**
   The currently active user

   @private
   @property user
   @type object
   */
  user: Ember.computed.alias('session.user'),

  isCareerChecked: Ember.computed('user.stageInLife', {
    get() {
			return 'CAREER' === this.get('user.stageInLife');
    }
  }),

	isCollegeChecked: Ember.computed('user.stageInLife', {
    get() {
			return 'COLLEGE' === this.get('user.stageInLife');
		}
	}),

	isHighSchoolChecked: Ember.computed('user.stageInLife', {
    get() {
    	return 'HIGHSCHOOL' === this.get('user.stageInLife');
    }
	}),

	isIntroDone: null,

	actions: {
    surveyDoneAction: function() {
      Ember.set(this, 'user.isSurveyDone', true);
    },
    careerSelected: function() {
      Ember.set(this, 'user.stageInLife', 'CAREER');
    },
    highSchoolSelected: function() {
      Ember.set(this, 'user.stageInLife', 'HIGHSCHOOL');
    },
    collegeSelected: function() {
      Ember.set(this, 'user.stageInLife', 'COLLEGE');
    },
  }
});
