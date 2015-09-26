import DS from 'ember-data';
let attr = DS.attr;

export default DS.Model.extend({
  /** string, number, date, boolean */

  // User attributes acquired via the short survey
  name: attr('string'),
  age: attr('number'),
  email: attr('string'),
  phone: attr('string'),

  /** HIGHSCHOOL, COLLEGE, CAREER  **/
  stageInLife: attr('string', {defaultValue: 'HIGHSCHOOL'}),

  monthlyIncome: attr('number'),
  disposableIncome: attr('number'),

  // .25 percent of income by default
  livingExpenses: attr('number', {defaultValue: 25}),

  // GOALS HERE
  goals: attr(),
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
  debt: attr(),
  /** CREDIT, CAR, STUDENT_LOAN */
  // type: attr('string'),
  // name: attr('string'),
  // totalAmout: attr('number'),
  // monthlyPayment: attr('number'),
  // interestRate: attr('number'),

  // INVESTMENTS HERE - All computed on the fly
  // investments: attr(),

  // FLAGS - could be computed properties, but we want to persist the data
  isSurveyDone: attr('boolean', { defaultValue: false }),
  hasMonthlyIncome: attr('boolean', { defaultValue: false }),

  // SETTINGS HERE
  settings: attr({defaultValue: function() {
    return {
      hasEmailNotifications: true,
      hasTextNotificaitons: true,
      // in months
      frequencyNotification: 3
    };
  }})
});