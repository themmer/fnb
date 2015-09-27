import Ember from 'ember';

export default Ember.Component.extend({
	/**
   The currently active user

   @private
   @property user
   @type object
   */
  user: Ember.computed.alias('session.user'),

	actions: {
    incomeDoneAction: function() {
      this.set('user.isIncomeDone', true);
    }
  }
});
