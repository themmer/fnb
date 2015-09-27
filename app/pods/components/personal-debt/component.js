import Ember from 'ember';

export default Ember.Component.extend({
	/**
   The currently active user

   @private
   @property user
   @type object
   */
  user: Ember.computed.alias('session.user'),

	hasDebtChecked: Ember.computed('user.hasDebt', {
    get() {
			return this.get('user.hasDebt');
    }
  }),

	hasDebtNotChecked: Ember.computed('user.hasDebt', {
    get() {
			return !this.get('user.hasDebt');
		}
	}),
  
  actions: {
    hasDebtCheckedAction: function() {
      Ember.set(this, 'user.hasDebt', true);
    },
    hasDebtNotCheckedAction: function() {
      Ember.set(this, 'user.hasDebt', false);
    }
  }
});
