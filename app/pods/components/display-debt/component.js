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
        return debtList.sort((a, b) => b - a);
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
    noop: function() {},

    addDebt: function() {
      Ember.Logger.info('addDebt');
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
        debtType: '',
      });
    },

    toggleDebtPane: function() {
      this.toggleProperty('isAddingDebt');
    },

    updateGoal: function(a, b) {

    }
  }
});