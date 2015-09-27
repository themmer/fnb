import Ember from 'ember';
import DS from 'ember-data';

let attr = DS.attr;
let computed = Ember.computed;

export default DS.Model.extend({
  /** string, number, date, boolean */

  // User attributes acquired via the short survey
  name: attr('string'),
  age: attr('number'),
  email: attr('string'),
  phone: attr('string'),

  /** HIGHSCHOOL, COLLEGE, CAREER  **/
  stageInLife: attr('string', {
    defaultValue: 'HIGHSCHOOL'
  }),

  monthlyIncome: attr('number', {defaultValue: 0}),
  monthlyCash: attr('number'),

  // .25 percent of income by default
  livingExpenses: attr('number'),

  // GOALS HERE
  goalList: attr(),
  // name: attr('string'),
  /** DEBT, INVESTMENT, SHOPPING **/
  // type: attr('string'),
  /** Can use for debt and investment **/
  // currentMonthlyPayment: attr('number'),
  // selectedMonthlyPayment attr('number'),
  // ** use for total cost or total amount **/
  // totalAmout: attr('number'),
  /** HIGH, LOW **/
  // priorityType: attr('string'),

  // DEBTS HERE
  debtList: attr(),
  hasDebt: attr('boolean', {
    defaultValue: true
  }),
  /** CREDIT, CAR, STUDENT_LOAN */
  // type: attr('string'),
  // name: attr('string'),
  // totalAmout: attr('number'),
  // monthlyPayment: attr('number'),
  // interestRate: attr('number'),

  // INVESTMENTS HERE - All computed on the fly
  // investments: attr(),

  // FLAGS - could be computed properties, but we want to persist the data
  isSurveyDone: attr('boolean', {
    defaultValue: false
  }),
  isIncomeDone: attr('boolean', {
    defaultValue: false
  }),
  isDebtDone: attr('boolean', {
    defaultValue: false
  }),
  hasMonthlyIncome: attr('boolean', {
    defaultValue: true
  }),

  // SETTINGS HERE
  settings: attr({
    defaultValue: function() {
      return {
        hasEmailNotifications: true,
        hasTextNotificaitons: true,
        // in months
        frequencyNotification: 3
      };
    }
  }),

  // Various boolean checks
  hasGoals: computed('goalList.[]', {
    get() {
      let goalList = this.get('goalList');
      return goalList && goalList.length;
    }
  }),

  hasDebtGoals: computed('goalList.[]', {
    get() {
      let goalList = this.get('goalList');

      if (Ember.isArray(goalList)) {
        return goalList.filter(goal => goal.type === 'DEBT').length;
      }

      return false;
    }
  }),

  hasInvestmentGoals: computed('goalList.[]', {
    get() {
      let goalList = this.get('goalList');

      if (Ember.isArray(goalList)) {
        return goalList.filter(goal => goal.type === 'INVESTMENT').length;
      }

      return false;
    }
  }),

  hasShoppingGoals: computed('goalList.[]', {
    get() {
      let goalList = this.get('goalList');

      if (Ember.isArray(goalList)) {
        return goalList.filter(goal => goal.type === 'SHOPPING').length;
      }

      return false;
    }
  }),

  totalMonthlyDebt: computed('debtList.[]', {
    get() {
      let debtList = this.get('debtList');

      if (Ember.isEmpty(debtList)) {
        return 0;
      }

      return debtList.reduce((previous, current) => {
        return previous + +current.monthlyPayment;
      },0);
    }
  }),

  availableIncome: computed('livingExpenses', 'debtList.[]', 'monthlyIncome', {
    get() {
      let monthlyIncome = this.get('monthlyIncome');
      let debtList = this.get('debtList');
      let livingExpenses = this.get('livingExpenses');
      let availableIncome = 0;
      let usedIncome = 0;

      if (!Ember.isEmpty(debtList)) {
        usedIncome = debtList.reduce((previous, current) => {
          return previous + current.monthlyPayment;
        }, 0);
      }

      if (!Ember.isEmpty(monthlyIncome) && monthlyIncome > 0) {
        availableIncome = monthlyIncome - usedIncome;

        if (availableIncome > livingExpenses) {
          availableIncome -= livingExpenses;
        }
      }

      return availableIncome;
    }
  })
});