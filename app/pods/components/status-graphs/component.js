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
        }).map(debt => debt.totalAmount);
        let badDebt = debtList.filter((debt) => {
          return debt.type && debt.type === 'CREDIT';
        }).map(debt => debt.totalAmount);

        goodDebt.unshift('Good Dept');
        badDebt.unshift('Bad Dept');

        console.log(goodDebt, badDebt);
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
  income: computed('session.user', 'session.user.monthlyIncome', {
    get() {
      // TODO: Tim, you need to add proper available income.
      let monthlyIncome = this.get('user.monthlyIncome');
      let usedIncome = this.get('user.availableIncome') || 0;
      let availableIncome;

      if (!Ember.isEmpty(monthlyIncome) && monthlyIncome > 0) {
        availableIncome = monthlyIncome - usedIncome;
      } else {
        availableIncome = 0;
      }
console.log('availableIncome,usedIncome', availableIncome,usedIncome);
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
    incomeTitle: computed('session.user', 'user.monthlyIncome', {
      get() {
        // TODO: Tim, you need to add proper available income.
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