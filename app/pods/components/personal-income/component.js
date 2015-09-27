import Ember from 'ember';

export default Ember.Component.extend({
	/**
   The currently active user

   @private
   @property user
   @type object
   */
  user: Ember.computed.alias('session.user'),

  hasMonthlyIncome: Ember.computed('user.hasMonthlyIncome', {

  }),

  hasIncome: Ember.computed({
    get() {
      return this.get('user.hasMonthlyIncome');
    }
  }),

  noIncome: Ember.computed({
    get() {
      return !this.get('user.hasMonthlyIncome');
    }
  }),

	actions: {
    incomeDoneAction: function() {
      Ember.set(this, 'user.isIncomeDone', true);
    },

    incomeAction: function (val) {
      let value = val.get('value');
      let hasMonthlyIncome = false;

      if (value === 'hasIncome') {
        hasMonthlyIncome = true;
      }

      this.get('user').set('hasMonthlyIncome', hasMonthlyIncome);
    }
  }
});
