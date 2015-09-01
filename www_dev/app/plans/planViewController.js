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
				'PlanViewController',
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
							$scope.plannedTotal = 0;
							$scope.spentTotal = 0;
							
							$scope.getRowClass = function(plannedAmount,expenditure){
								var cl = 'undercontrol';
								if(parseFloat(plannedAmount) <= parseFloat(expenditure)){
									cl = 'overshoot';
								}else if (parseFloat(plannedAmount) >= (parseFloat(expenditure) * 0.75)){
									cl = 'nearingLimit';
								}else if (parseFloat(plannedAmount) >= (parseFloat(expenditure) * 0.5)){
									cl = 'halfed';
								}
								console.log(parseFloat(plannedAmount));
								console.log(parseFloat(expenditure));
								console.log(cl);
								return "item row row-item " + cl;
							}
							
							$scope.findTotal = function(plannedAmount,expenditure){
								$scope.plannedTotal += parseFloat(plannedAmount);
								$scope.spentTotal += parseFloat(expenditure);
							}
							
							$scope.planningList = HomeDataService
									.getExpenseList();

						} ])