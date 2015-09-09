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
				'ViewExpenseController',
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

							$scope.data.cashTotal = 0;
							$scope.data.cardTotal = 0;
							$scope.data.total = 0;

							$scope.findTotal = function(rowAmount, paymentType) {
								if (paymentType == '1') {
									$scope.data.cashTotal = (parseFloat($scope.data.cashTotal) + parseFloat(rowAmount))
											.toFixed(2);
								} else {
									$scope.data.cardTotal = (parseFloat($scope.data.cardTotal) + parseFloat(rowAmount))
											.toFixed(2);
								}
								$scope.data.total = (parseFloat($scope.data.cashTotal)
										+ parseFloat($scope.data.cardTotal)).toFixed(2);
							}
							$scope.data.expenseList = HomeDataService
									.getExpenseList();

						} ])