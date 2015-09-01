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

							$scope.total = function() {
								console.log($scope);
								return ($scope.data.creditcard || 0)
										+ ($scope.data.pbamount || 0)
										+ ($scope.data.fhamount || 0)
										+ ($scope.data.ghamount || 0)
										+ ($scope.data.hramount || 0)
										+ ($scope.data.licamount || 0)
										+ ($scope.data.edamount || 0)
										+ ($scope.data.meamount || 0)
										+ ($scope.data.otheramount || 0)
										+ ($scope.data.gasamount || 0)
										+ ($scope.data.snackamount || 0)
										+ ($scope.data.lshamount || 0)
										+ ($scope.data.veamount || 0)
										+ ($scope.data.gbamount || 0)
										+ ($scope.data.biamount || 0)
										+ ($scope.data.teamount || 0);

							};

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

							$scope.submitPlan= function(planningForm) {
								if (planningForm.$invalid) {
									return;
								}
								
								PlanningService.submitExpense($scope.data)
										.then(function() {
											$state.go('submitExpense', {}, {
												reload : true
											});
										});
							}

						} ])