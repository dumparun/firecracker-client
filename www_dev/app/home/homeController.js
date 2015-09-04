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
		[
				'$scope',
				'$state',
				'HomeDataService',
				'PlanningService',
				'IncomeService',
				'ReminderService',
				function($scope, $state, HomeDataService, PlanningService,
						IncomeService, ReminderService) {

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

					$scope.submitIncome = function() {
						IncomeService.getIncome().then(
								function() {
									if (HomeDataService.getStatus()
											.getStatusCode() != 0) {
										$state.go($state.current.name, {}, {
											reload : true
										});
									} else {
										HomeDataService.getStatus()
												.setStatusCode(999);
										HomeDataService.getStatus()
												.setStatusMessage("");
										$state.go('submitIncome');
									}

								});
					}

					$scope.viewIncome = function() {
						IncomeService.getIncome().then(
								function() {
									if (HomeDataService.getStatus()
											.getStatusCode() != 0) {
										$state.go($state.current.name, {}, {
											reload : true
										});
									} else {
										HomeDataService.getStatus()
												.setStatusCode(999);
										HomeDataService.getStatus()
												.setStatusMessage("");
										$state.go('viewIncome');
									}

								});
					}

					$scope.makePlan = function() {
						PlanningService.getPlan("true").then(
								function() {
									if (HomeDataService.getStatus()
											.getStatusCode() != 0) {
										$state.go($state.current.name, {}, {
											reload : true
										});
									} else {
										HomeDataService.getStatus()
												.setStatusCode(999);
										HomeDataService.getStatus()
												.setStatusMessage("");
										$state.go('makePlan');
									}

								});
					}

					$scope.howBad = function() {
						PlanningService.getPlan("false").then(
								function() {
									if (HomeDataService.getStatus()
											.getStatusCode() != 0) {
										$state.go($state.current.name, {}, {
											reload : true
										});
									} else {
										HomeDataService.getStatus()
												.setStatusCode(999);
										HomeDataService.getStatus()
												.setStatusMessage("");
										$state.go('howBad');
									}

								});
					}


					$scope.reminderSubmit = function() {
						HomeDataService.getStatus().setStatusCode(999);
						HomeDataService.getStatus().setStatusMessage("");
						$state.go('reminderSubmit');
					}
					
					$scope.reminderView = function() {
						ReminderService.getReminder().then(
								function() {
									if (HomeDataService.getStatus()
											.getStatusCode() != 0) {
										$state.go($state.current.name, {}, {
											reload : true
										});
									} else {
										HomeDataService.getStatus()
												.setStatusCode(999);
										HomeDataService.getStatus()
												.setStatusMessage("");
										$state.go('reminderView');
									}

								});
					}
					
				} ])