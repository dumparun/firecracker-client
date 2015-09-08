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
				'CardStatusViewController',
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

							$scope.getRowClass = function(plannedAmount,
									expenditure) {
								var cl = 'undercontrol';
								if (parseFloat(expenditure) == 0) {
									cl = 'undercontrol';
								} else if (parseFloat(plannedAmount) <= parseFloat(expenditure)) {
									cl = 'overshoot';
								} else if (parseFloat(expenditure) >= (parseFloat(plannedAmount) * 0.75)) {
									cl = 'nearingLimit';
								} else if (parseFloat(expenditure) >= (parseFloat(plannedAmount) * 0.5)) {
									cl = 'halfed';
								}
								return "item row row-item " + cl;
							}

							$scope.cardList = HomeDataService
									.getExpenseList();
							$scope.total = $scope.cardList.Total;
							delete $scope.cardList.Total;

						} ])