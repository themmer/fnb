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
  debtList(i) {
    return [{
      interestRate: 12 + i,
      monthlyPayment: 20 + (i * 5),
      name: ['Amex', 'US Bank', 'Capital One', 'Chase', 'Discover'][i],
      totalAmout: 2000 * i,
      type: 'CREDIT'
    }]
  isSurveyDone(i) {
    if(i < 5) {
      return true;
    } else {
      return false;
    }
  },
  isIncomeDone(i) {
    if(i < 5) {
      return true;
    } else {
      return false;
    }
  },
  // Bam Bam is sugar daddy
  hasDebt(i) {
    if(i === 0) {
      return false;
    } else {
      return true;
    }
  },
  isDebtDone(i) {
    if(i < 5) {
      return true;
    } else {
      return false;
    }
  }
});