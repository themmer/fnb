import DS from 'ember-data';

export default DS.Model.extend({
  /** string, number, date, boolean */

  name: DS.attr('string'),
  age: DS.attr('number'),
  email: DS.attr('string'),
  phone: DS.attr('string'),
  
  /** HIGHSCHOOL, COLLEGE, CAREER  **/
  stageInLife: DS.attr('string', {defaultValue: 'HIGHSCHOOL'}),

  monthlyIncome: DS.attr('number'),
  disposableIncome: DS.attr('number'),

  // .25 percent of income by default
  livingExpenses: DS.attr('number'),

  // GOALS HERE
  goals: DS.attr(),
  // name: DS.attr('string'),
  /** DEBT, INVESTMENT, SHOPPING **/
  // type: DS.attr('string'),
  /** Can use for debt and investment **/
  // currentMonthlyPayment: DS.attr('number'),
  // selectedMonthlyPayment DS.attr('number'),
  // ** use for total cost or total amount **/
  // totalAmout: DS.attr('number'),
  /** HIGH, LOW **/
  // priorityType: DS.attr('string'),

  // DEBTS HERE
  debt: DS.attr(),
  /** CREDIT, CAR, STUDENT_LOAN */
  // type: DS.attr('string'),
  // name: DS.attr('string'),
  // totalAmout: DS.attr('number'),
  // monthlyPayment: DS.attr('number'),
  // interestRate: DS.attr('number'),

  // INVESTMENTS HERE - All computed on the fly
  // investments: DS.attr(),

  // FLAGS - could be computed properties, but we want to persist the data
  isSurveyDone: DS.attr('boolean', { defaultValue: false }),
  hasMonthlyIncome: DS.attr('boolean', { defaultValue: false }),

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
