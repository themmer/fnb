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
  debt: computed({
    get() {
      // TODO: Tim, you need to add proper debt.
      return [
        ['Good Debt', 300],
        ['Bad Debt', 500]
      ];
    }
  }),

  /**
   Available income

   @private
   @property income
   @type object
   */
  income: computed('session.user', 'user.monthlyIncome', {
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