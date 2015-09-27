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

  hasIncome: computed('user.availableIncome', {
    get() {
      return this.get('user.availableIncome') > 0;
    }
  }),

  hasDebtListItems: computed('user.debtList.[]', {
    get() {
      let debtList = this.get('user.debtList');

      return !Ember.isEmpty(debtList) && debtList.length;
    }
  }),

  recommendedDebtList: computed('user.debtList.[]', {
    get() {
      let debtList = this.get('user.debtList');
      // let availableAmount = this.get('user.availableIncome');

      if (Ember.isArray(debtList)) {
        return debtList.map((debt) => {
          // Recommend paying 5% more?  This needs a better
          // calculation.  We also need to error check
          let recommendedIncrease = +debt.monthlyPayment * (5 / 100);

          if (debt.monthlyPayment > recommendedIncrease) {
            debt.recommendedPayment = debt.monthlyPayment + recommendedIncrease;

            // TODO: Tim, need formula for calculating money saved.
            debt.totalSaved = 50;
          }

          return debt;
        }).sort((a, b) => b.interestRate - a.interestRate);
      }

      return [];
    }
  }),

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
    noop: function() {},

    updateGoal: function(val) {
      let value = val.get('name');
      let user = this.get('user');
      let debtList = user.get('debtList');
      let goalList = user.get('goalList');
      let goal;

      let goalItem = debtList.filter(debt => debt.name === value)[0];

      goal = {
        type: 'DEBT',
        name: goalItem.name,
        amount: goalItem.recommendedPayment,
        payoff: 5, // Static number due to lack of time
        totalSaved: goalItem.totalSaved
      };

      if (!Ember.isArray(goalList)) {
        user.set('goalList', [goal]);
      } else if (goalList.length && !goalList.findBy('name', goalItem.name)) {
        goalList.pushObject(goal);
      }
    }
  }
});