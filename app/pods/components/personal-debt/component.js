import Ember from 'ember';

export default Ember.Component.extend({
	/**
   The currently active user

   @private
   @property user
   @type object
   */
  user: Ember.computed.alias('session.user'),

	hasDebt: Ember.computed({
    get() {
			return this.get('user.hasDebt');
    }
  }),

	noDebt: Ember.computed({
    get() {
			return !this.get('user.hasDebt');
		}
	}),

  actions: {
    debtDoneAction: function() {
      this.set('user.isDebtDone', true);
    },

    debtAction: function (val) {
      let value = val.get('value');
      let user = this.get('user');

      if (value === 'hasDebt') {
        user.set('hasDebt', true);
      } else {
        user.set('hasDebt', false);
      }
    }
  }
});
