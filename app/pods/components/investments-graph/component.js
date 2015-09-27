import Ember from 'ember';

let computed = Ember.computed;

export default Ember.Component.extend({

	retirementAge: 67,

	years: computed('session.user.age', {
    get() {
    	let retirementAge = this.get('retirementAge');
    	var age = this.get('session.user.age');
    	return retirementAge - age;
    }
	}),
	availbleIncome: computed('session.user.usedIncome', 'session.user.monthlyIncome', {
    get() {
  		var usedIncome = this.get('session.user.usedIncome');
  		var monthlyIncome = this.get('session.user.monthlyIncome');
  		return monthlyIncome - usedIncome;
    }
	}),
  investments: computed('session.user', 'availbleIncome', 'session.user.stageInLife', 'years', {
    get() {
    	let availbleIncome = this.get('availbleIncome');
    	let stageInLife = this.get('session.user.stageInLife');

    	// let investmentOptions = [];

    	// this is where add the types based on the type of person
    	if('HIGHSCHOOL' === stageInLife) {

    	} else if('HIGHSCHOOL' === stageInLife) {

    	} else if('HIGHSCHOOL' === stageInLife) {

    	} 

    	// var returnArray = [];
    	// assume average rate for each available option from investmentOptions

    	console.log('ava income', availbleIncome);
    	availbleIncome = 100;

   //  	var interest = 0;

			// var i = interest;
	  //   if (i > 1.0) {
	  //   	i = interest / 100;
	  //   }
	  //   i /= 12;
	  //   var ma = availbleIncome;
	  //   var prin = 0;
	  //   var pmts = years * 12;
	  //   var count = 0;
	 
	  //   while(count < pmts) {
   //      var newprin = prin + ma;
   //      prin = (newprin * i) + prin + ma;
   //      count = count + 1;
   //      console.log(prin);
   //    }

	  //   var futureVale = prin;
	  //   console.log('fv', futureVale);


		  var yearArray = ['x'];
		  var years = this.get('years');
		  var age = this.get('age');
		  var count = age;
		  var retirementAge = this.get('retirementAge');
		  for(; count < retirementAge; count = count + 1){
	    	yearArray.pushObject(years); 
	    }
	    console.log('year array', yearArray);

	    var hello = this.get('getArray');
	    console.log('hello', hello);


    	return [
          ['x', '45', '46', '47', '48', '49', '50'],
          ['IRA', 30, 200, 100, 400, 150, 250],
          ['Savings', 130, 340, 200, 500, 250, 350],
          ['Total', 500, 600, 800, 700, 850, 850]
      ];
		 }
  }),
	getArray: computed('years', 'availbleIncome', {
    get() {
    var retDataArray = [];
		var years = this.get('years');

		var monthlyPayment = this.get('availbleIncome');

		monthlyPayment = 100;
		years = 1;
		var interest = 1;

			var i = interest;
	    if (i > 1.0) {
	    	i = interest / 100;
	    }
	    i /= 12;
	    var ma = monthlyPayment;
	    var prin = 0;
	    var pmts = years * 12;
	    var count = 0;
	 
	    while(count < pmts) {
        var newprin = prin + ma;
        prin = (newprin * i) + prin + ma;
        count = count + 1;
        console.log(prin);
				retDataArray.pushObject(prin);
      }

	    var futureVale = prin;
	    console.log('fv', futureVale);
	    return retDataArray;
		}
	})
});
