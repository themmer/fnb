import Ember from 'ember';

let alias = Ember.computed.alias;
let computed = Ember.computed;

export default Ember.Component.extend({
  user: alias('session.user'),

  hasGoals: alias('session.user.hasGoals'),
  hasDebtGoals: alias('session.user.hasDebtGoals'),
  hasInvestmentGoals: alias('session.user.hasInvestmentGoals'),
  hasShoppingGoals: alias('session.user.hasShoppingGoals'),

  debtGoals: computed('session.user.goalList.[]', {
    get() {
      let goalList = this.get('session.user.goalList');

      if (Ember.isArray(goalList)) {
        return goalList.filter(goal => goal.type === 'DEBT');
      }
      return [];
    }
  }),

  investmentGoals: computed('session.user.goalList.[]', {
    get() {
      let goalList = this.get('session.user.goalList');

      if (Ember.isArray(goalList)) {
        return goalList.filter(goal => goal.type === 'INVESTMENT');
      }
      return [];
    }
  }),

  shoppingGoals: computed('session.user.goalList.[]', {
    get() {
      let goalList = this.get('session.user.goalList');

      if (Ember.isArray(goalList)) {
        return goalList.filter(goal => goal.type === 'SHOPPING');
      }
      return [];
    }
  }),

  // New goal
  goalName: '',
  goalAmount: 0,
  goalCompletionTime: 5,
  isHighPriority: false,
  availableIncome: computed('session.user.availableIncome',
    'isHighPriority', {
    get() {
      let isHighPriority = this.get('isHighPriority');
      let availableIncome = this.get('user.availableIncome');
      let actualIncome = 0;

      // Tim, introduce your percentage stuff here.
      if (availableIncome > 0) {
        actualIncome = isHighPriority ?
          availableIncome * 0.4 :
          availableIncome * 0.2;
      }

      return actualIncome;
    }
  }),

  actions: {
    noop: function () {},
    saveGoal: function () {
      let user = this.get('user');
      let goalList = user.get('goalList');
      let goal = {
        name: this.get('goalName'),
        amount: this.get('goalAmount'),
        completionTime: this.get('goalCompletionTime'),
        priority: this.get('isHighPriority'),
        type: 'SHOPPING'
      };

      if (Ember.isArray(goalList)) {
        goalList.pushObject(goal);
      } else {
        user.set('goalList', [goal]);
      }

      user.save()
        .then(() => {
          this.setProperties({
            goalName: '',
            goalAmount: 0,
            goalCompletionTime: 5,
            isHighPriority: false,
          });
        });
    }
  }
});