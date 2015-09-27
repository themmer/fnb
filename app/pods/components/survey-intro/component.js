import Ember from 'ember';

export default Ember.Component.extend({
  /**
    Whether the intro survey has started.

    @private
    @property isIntroDone
    @type Boolean
    */
  isIntroDone: false,

  actions: {
    takeTheSurveyAction: function() {
      this.set('isIntroDone', true);
    }
  }
});