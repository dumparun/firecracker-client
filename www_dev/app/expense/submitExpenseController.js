/*
 *	"THE BEER-WARE LICENSE" (Revision 42): 
 *	arun@dumparun.info wrote this file. 
 * 	As long as you retain this notice you can do whatever you want with this stuff. 
 * 	If we meet some day, and you think this stuff is worth it, you can buy me a beer in return. 
 * 	arun@dumparun.info
 *
 *   http://en.wikipedia.org/wiki/Beerware
 *
 */

angular
		.module('expenseApp')

		.controller(
				'SubmitExpenseController',
				[
						'$scope',
						'$state',
						'HomeDataService',
						'ExpenseService',
						function($scope, $state, HomeDataService,
								ExpenseService) {

							$scope.data = {};

							$scope.alert = {};
							$scope.alert.message = HomeDataService.getStatus()
									.getStatusMessage();

							if (HomeDataService.getStatus().getStatusCode() == 999) {
								$scope.alert = undefined;
							} else if (HomeDataService.getStatus()
									.getStatusCode() == 0) {
								$scope.alert.type = "success";
							} else {
								$scope.alert.type = "error";
							}

							$scope.today = function() {
								$scope.data.calDate = new Date();
							};

							$scope.clear = function() {
								$scope.data.calDate = null;
							};

							$scope.open = function($event) {
								$scope.statusCt.opened = true;
							};

							$scope.openDt = function($event) {
								$scope.statusDt.opened = true;
							};

							$scope.open = function($event) {
								$scope.statusPt.opened = true;
							};

							$scope.statusDt = {
								opened : false
							};
							$scope.statusPt = {
								opened : false
							};

							$scope.statusCt = {
								opened : false
							};
							
							$scope.dateOptions = {
								formatYear : 'yy',
								startingDay : 1
							};

							$scope.formats = [ 'dd-MMMM-yyyy', 'yyyy/MM/dd',
									'dd.MM.yyyy', 'shortDate' ];
							$scope.format = $scope.formats[0];

							$scope.categories = [ 'Credit Cards',
									'Loans/Debts Paid Back', 'Food at Hotels',
									'Grocery & Home Stuffs',
									'Home Routine Expense', 'LIC/Investement',
									'Educational Expense', 'Medical Expense',
									'Others', 'Gas', 'Snacks',
									'Leisure & Shopping', 'Vehicle Expenses',
									'Business Initiative', 'Giving Back',
									'Travelling Expense' ];

							$scope.paymentType = [ 'CASH', 'Amex', 'BOA',
									'CITI', 'US Bank', 'CapitalOne' ];

							$scope.toggleDropdown = function($event) {
								$event.preventDefault();
								$event.stopPropagation();
								$scope.status.isopen = !$scope.status.isopen;
							};

							$scope.setCategory = function(choice) {
								$scope.data.category = choice;
							}

							$scope.setPaymentType = function(choice) {
								$scope.data.paymentType = choice;
							}

							$scope.data.category = "Others";

							$scope.data.paymentType = "CASH";

							$scope.submitExpense = function(expenseSubmitForm) {

								console.log($scope.data);
								if (expenseSubmitForm.$invalid) {
									return;
								}

								ExpenseService.submitExpense($scope.data).then(
										function() {
											$state.go('submitExpense', {}, {
												reload : true
											});
										});
							}

						} ])