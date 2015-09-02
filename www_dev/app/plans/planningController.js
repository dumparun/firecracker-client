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
								var sum = 0;
								
								angular.forEach($scope.planningList, function(value, key) {
									sum += value.plannedAmount;
									}, sum);
								return sum;

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

							$scope.planningList = HomeDataService
									.getExpenseList();
							$scope.income = $scope.planningList.income;
							delete $scope.planningList.income;

							console.log($scope.planningList);
							
							$scope.submitPlan = function(planningForm) {
								if (planningForm.$invalid) {
									return;
								}
								PlanningService.updatePlan($scope.planningList)
										.then(function() {
											$state.go('home', {}, {
												reload : true
											});
										});
							}

						} ])