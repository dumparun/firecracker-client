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
		.module('incomeApp')

		.controller(
				'IncomeSubmitController',
				[
						'$scope',
						'$state',
						'HomeDataService',
						'IncomeService',
						function($scope, $state, HomeDataService, IncomeService) {

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

							$scope.data = HomeDataService.getExpenseList();
							
							$scope.submitForm = function(form) {
								if (form.$invalid) {
									return;
								}

								IncomeService.submitIncome($scope.data).then(
										function() {
											$state.go('home', {}, {
												reload : true
											});
										});
							}

						} ])