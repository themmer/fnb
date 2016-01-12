import Ember from 'ember';

let computed = Ember.computed;

export default Ember.Component.extend({

	interestRate: 0,
	label: '',

	retirementAge: 67,

	years: computed('session.user.age', 'retirementAge', {
    get() {
    	let retirementAge = this.get('retirementAge');
    	var age = this.get('session.user.age');
    	if(age < retirementAge) {
    		return retirementAge - age;	
    	} else {
    		return 0;
    	}
    	
    }
	}),
  investments: computed('session.user', 'session.user.age', 'session.user.availableIncome', 'years', {
    get() {
    	// let availableIncome = this.get('session.user.availableIncome');
    	
    	// let stageInLife = this.get('session.user.stageInLife');
    	// let investmentOptions = [];
    	// this is where add the types based on the type of person
    	// if('HIGHSCHOOL' === stageInLife) {

    	// } else if('HIGHSCHOOL' === stageInLife) {

    	// } else if('HIGHSCHOOL' === stageInLife) {

    	// } 

	  	var age = this.get('session.user.age');
		  var yearArray = ['x'];
		  var years = this.get('years');

		  let count = 0;
		  for(; count <= years; count = count + 1){
	    	yearArray.pushObject(parseInt(age, 10) + count); 
	    }

	    this.set('interestRate', 0.5);
	    this.set('label', 'Savings');
	    var savingsArray = this.get('getArray');

	    this.set('interestRate', 3);
	    this.set('label', 'Bonds');
	    var bondsArray = this.get('getArray');

	   	this.set('interestRate', 6);
	   	this.set('label', 'Stocks');
	    var stocksArray = this.get('getArray');

    	return [
          yearArray,
          savingsArray,
          bondsArray,
          stocksArray
      ];
		 }
  }),

	// label triggers the change here
	getArray: computed('label', {
    get() {
    var retDataArray = [];
		var years = this.get('years');
		var interest = this.get('interestRate');
		var label = this.get('label');
		var monthlyPayment = this.get('session.user.availableIncome');
		retDataArray.pushObject(label);

    var i = interest / 100;
    i = i / 12;
    var principal = 0;
    var payments = years * 12;
    let count = 0;

    retDataArray.pushObject(parseInt(principal, 10));
    while(count < payments) {
      var newprin = principal + monthlyPayment;
      principal = newprin + (newprin * i);
      count = count + 1;
      if((count) % 12 === 0) {
        retDataArray.pushObject(parseInt(principal, 10));
      }
    }

      return retDataArray;
    }
  })
});
