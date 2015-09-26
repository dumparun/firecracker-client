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

							$scope.currentCardList = HomeDataService
									.getExpenseList().current;
							
							$scope.nextCardList = HomeDataService
							.getExpenseList().next;
					
							$scope.currentTotal = $scope.currentCardList.Total;
							delete $scope.currentCardList.Total;
							
							$scope.nextTotal = $scope.nextCardList.Total;
							delete $scope.nextCardList.Total;

						} ])