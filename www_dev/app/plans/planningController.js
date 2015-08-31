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
		.module('planApp')

		.controller(
				'PlanningController',
				[
						'$scope',
						'$state',
						'HomeDataService',
						'PlanningService',
						function($scope, $state, HomeDataService,
								PlanningService) {

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

							$scope.submitExpense = function(expenseSubmitForm) {
								if (expenseSubmitForm.$invalid) {
									return;
								}

								PlanningService.submitExpense($scope.data).then(
										function() {
											$state.go('submitExpense', {}, {
												reload : true
											});
										});
							}

						} ])