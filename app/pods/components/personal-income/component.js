import Ember from 'ember';

export default Ember.Component.extend({
	/**
   The currently active user

   @private
   @property user
   @type object
   */
  user: Ember.computed.alias('session.user'),

  hasIncomeChecked: Ember.computed('user.hasMonthlyIncome', {
    get() {
      return this.get('user.hasMonthlyIncome');
    }
  }),

  // hasIncomeNotChecked: Ember.computed('user.hasMonthlyIncome', {
  //   get() {
  //     return !this.get('user.hasMonthlyIncome');
  //   }
  // }),

	actions: {
    incomeDoneAction: function() {
      Ember.set(this, 'user.isIncomeDone', true);
    },
    hasIncomeCheckedAction: function() {
      Ember.set(this, 'user.hasMonthlyIncome', true);
    },
    hasIncomeNotCheckedAction: function() {
      Ember.set(this, 'user.hasMonthlyIncome', false);
    }
  }
});
