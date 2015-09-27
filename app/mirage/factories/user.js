import Mirage from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  id(i) {
    return i + 1;
  },
  name(i) {
    return ['Bam Bam', 'Barney', 'Fred'][i];
  },
  age(i) {
    return 15 + (i * 10);
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
    return 500 * i + 1000;
  },
  usedIncome() {
    return 0;
  },
  debtList(i) {
    return [{
      interestRate: 12 + i,
      monthlyPayment: 100 + 100 * i,
      name: ['Amex', 'US Bank', 'Capital One'][i],
      totalAmount: 200 * i + 250,
      type: 'CREDIT'
    },
    {
      interestRate: 7 + i,
      monthlyPayment: 100 + (i * 25),
      name: ['Honda', 'Nissan', 'Chevy'][i],
      totalAmount: 20000 + (i * 1000),
      type: 'CAR'
    }];
  },
  isSurveyDone(i) {
    if(i < 3) {
      return true;
    } else {
      return false;
    }
  },
  isIncomeDone(i) {
    if(i < 3) {
      return true;
    } else {
      return false;
    }
  },
  // Bam Bam is sugar daddy
  hasDebt(i) {
    if(i === 2) {
      return false;
    } else {
      return true;
    }
  },
  isDebtDone(i) {
    if(i < 3) {
      return true;
    } else {
      return false;
    }
  },
  stageInLife(i) {
    return ['HIGHSCHOOL', 'COLLEGE', 'CAREER'][i];
  },
  hasMonthlyIncome(i) {
    return [true, true, true][i];
  }
});