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

  monthlyIncome: attr('number'),
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
    defaultValue: false
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
    defaultValue: false
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
  })
});