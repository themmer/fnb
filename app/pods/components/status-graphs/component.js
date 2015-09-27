import Ember from 'ember';

let computed = Ember.computed;

export default Ember.Component.extend({
  /**
   The currently active user.

   @private
   @property user
   @type Object
   */
  user: ('session.user'),

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
      ]
    }
  }),

  /**
   Available income

   @private
   @property income
   @type object
   */
  income: computed('user.monthlyIncome', {
    get() {

      // TODO: Tim, you need to add proper available income.
      let monthlyIncome = this.get('user.monthlyIncome');
      let usedIncome = this.get('user.availableIncome') || 100;
      let availableIncome = monthlyIncome - usedIncome;

      return [
        ['Available Income', availableIncome],
        ['Used Income', usedIncome]
      ]
    }
  })
});
