import Ember from 'ember';

let computed = Ember.computed;
let alias = computed.alias;

export default Ember.Component.extend({
		/**
   The currently active user

   @private
   @property user
   @type object
   */
  user: alias('session.user'),

  debtList: computed('user.debtList.[]', {
    get() {
      let debtList = this.get('user.debtList');

      if (Ember.isArray(debtList)) {
        return debtList.sort((a, b) => b.interestRate - a.interestRate);
      }

      return [];
    }
  }),

  // For select menu
  debtTypes: [
    {type: 'CAR', name: 'Car'},
    {type: 'CREDIT', name: 'Credit'},
    {type: 'Other', name: 'Other'},
  ],

  // Add debt items
  debtTotalAmount: 0,
  debtInterestRate: 0,
  debtMonthlyPayment: 0,
  debtName: '',
  debtType: 'CREDIT',

	actions: {
    noop: function() {},

    debtDoneAction: function() {
      this.set('user.isDebtDone', true);
    },

    updateDebtList: function() {
      let user = this.get('user');
      let debtList = user.get('debtList');
      let debt = {
        interestRate: this.get('debtInterestRate'),
        monthlyPayment: this.get('debtMonthlyPayment'),
        name: this.get('debtName'),
        totalAmount: this.get('debtTotalAmount'),
        type: this.get('debtType')
      };

      if (debtList) {
        user.get('debtList').pushObject(debt);
      } else {
        user.set('debtList', [debt]);
      }

      this.setProperties({
        debtInterestRate: 0,
        debtMonthlyPayment: 0,
        debtName: '',
        debtTotalAmount: 0,
        debtType: 'CREDIT',
      });
    }
  }
});
