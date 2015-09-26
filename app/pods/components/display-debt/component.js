import Ember from 'ember';

export default Ember.Component.extend({
	debtList: [
		{type: 'CREDIT', name: 'Discover', totalAmout: 1000, monthlyPayment: 29, interestRate: 19.00}
	]
});
