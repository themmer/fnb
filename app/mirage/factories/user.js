import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id(i) {
    return i + 1;
  },
  name(i) {
    return ['Bam Bam', 'Fred', 'Wilma', 'Barney', 'Betty'][i];
  },
  age(i) {
    return 15 + (i * 5);
  },
  email(i) {
    return `user${i}@fnb.com`;
  },
  phone(i) {
    return `402-888-${8000 + i}`;
  },
  goalList(i) {
    return [{
      name: `Debt ${i}`,
      amount: 20 + i,
      payoff: 5 + (i * 2),
      totalSaved: 100 + (i * 10),
      type: 'DEBT'
    }];
  },
  monthlyIncome(i) {
    return 1000 * i;
  },
  isSurveyDone(i) {
    if(i < 5) {
      return true;
    } else {
      return false;
    }
  }
});