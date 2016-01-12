import Ember from 'ember';

let computed = Ember.computed;
let alias = computed.alias;

export default Ember.Component.extend({
  /**
   The currently active user.

   @private
   @property user
   @type Object
   */
  user: alias('session.user'),

  /**
   Available income

   @private
   @property debt
   @type object
   */
  debt: computed('session.user', 'session.user.debtList.[]', {
    get() {
      let debtList = this.get('user.debtList');
      let ret;

      if (Ember.isArray(debtList)) {
        let goodDebt = debtList.filter((debt) => {
          return debt.type && debt.type !== 'CREDIT';
        }).map(debt => debt.monthlyPayment);
        let badDebt = debtList.filter((debt) => {
          return debt.type && debt.type === 'CREDIT';
        }).map(debt => debt.monthlyPayment);

        goodDebt.unshift('Good Debt');
        badDebt.unshift('Bad Debt');

        ret = [
          goodDebt,
          badDebt
        ];
      } else {
        ret = [
          ['Good Debt'],
          ['Bad Debt']
        ];
      }

      return ret;
    }
  }),

  /**
   Available income

   @private
   @property income
   @type object
   */
  income: computed('session.user', 'session.user.monthlyIncome',
    'session.user.livingExpenses', 'session.user.debtList.[]', {
    get() {
      let monthlyIncome = this.get('user.monthlyIncome');
      let debtList = this.get('user.debtList');
      let livingExpenses = this.get('user.livingExpenses');
      let availableIncome = 0;
      let usedIncome = 0;

      if (!Ember.isEmpty(debtList)) {
        usedIncome = debtList.reduce((previous, current) => {
          return previous + current.monthlyPayment;
        }, 0);
      }

      if (!Ember.isEmpty(monthlyIncome) && monthlyIncome > 0) {
        availableIncome = monthlyIncome - usedIncome;

        // TODO this needs to be fixed ... handle negative flows
        // if (availableIncome > livingExpenses) {
        availableIncome -= livingExpenses;
        // }
      }

      return [
        ['Available Income', availableIncome],
        ['Used Income', usedIncome]
      ];
    },

    /**
     Income title

     @private
     @property incomeTitle
     @type String
     */
    incomeTitle: computed('session.user', 'session.user.monthlyIncome',
    'session.user.livingExpenses', 'session.user.debtList.[]', {
      get() {
        // TODO: This is not right - I would prefer we break this into more computed properties that have single responsibility principal
        // Also consider how we calculate available income along with negative income...0 isn't the solution here... how do we get people out of debt?
        let monthlyIncome = this.get('user.monthlyIncome');
        let usedIncome = this.get('user.availableIncome') || 0;
        let availableIncome;

        if (!Ember.isEmpty(monthlyIncome) && monthlyIncome > 0) {
          availableIncome = monthlyIncome - usedIncome;
        } else {
          availableIncome = 0;
        }

        return availableIncome;
      }
    })
  })
});