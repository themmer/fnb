import Ember from 'ember';

let computed = Ember.computed;
let alias = computed.alias;

export default Ember.Component.extend({
  user: alias('session.user'),

  /**
   Whether to show the debt pane.

   @private
   @property isAddingDebt
   @type Boolean
   */
  isAddingDebt: false,

  debtList: computed('user.debtList.[]', {
    get() {
      let debtList = this.get('user.debtList');

      if (Ember.isArray(debtList)) {
        return debtList.sort((a, b) => b.interestRate - a.interestRate);
      }

      return [];
    }
  }),

  // Add debt items
  debtTotalAmount: 0,
  debtInterestRate: 0,
  debtMonthlyPayment: 0,
  debtName: '',
  debtType: '',

  selectedGoals: [],

  actions: {
    noop: function() {}
  }
});