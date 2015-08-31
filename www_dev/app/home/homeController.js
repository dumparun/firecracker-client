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

angular.module('homeApp')

.controller(
		'HomeController',
		[ '$scope', '$state', 'HomeDataService', 'ExpenseService',
				function($scope, $state, HomeDataService, ExpenseService) {

					$scope.submitExpense = function() {
						HomeDataService.getStatus().setStatusCode(999);
						HomeDataService.getStatus().setStatusMessage("");
						$state.go('submitExpense');
					}

					$scope.viewExpense = function() {
						HomeDataService.getStatus().setStatusCode(999);
						HomeDataService.getStatus().setStatusMessage("");
						$state.go('viewExpenseCriteria');
					}

					$scope.makePlan = function() {
						HomeDataService.getStatus().setStatusCode(999);
						HomeDataService.getStatus().setStatusMessage("");
						$state.go('makePlan');
					}

				} ])