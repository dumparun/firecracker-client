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
				'ViewExpenseCriteriaController',
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

							$scope.today = function() {
								$scope.data.calDate = new Date();
							};

							$scope.clear = function() {
								$scope.data.calDate = null;
							};

							$scope.open = function($event) {
								$scope.status.opened = true;
							};

							$scope.dateOptions = {
								formatYear : 'yy',
								startingDay : 1
							};

							$scope.formats = [ 'dd-MMMM-yyyy', 'yyyy/MM/dd',
									'dd.MM.yyyy', 'shortDate' ];
							$scope.format = $scope.formats[0];

							$scope.status = {
								opened : false
							};

							$scope.years = [ '2010', '2011', '2012', '2013',
									'2014', '2015' ];

							$scope.months = [ 'January', 'February', 'March',
									'April', 'May', 'June', 'July', 'August',
									'September', 'October', 'November',
									'December' ];

							$scope.viewChoice = function(
									expenseViewCriteriaForm) {

								ExpenseService.getExpense($scope.data).then(
										function() {
											$state.go('viewExpense', {}, {
												reload : true
											});
										});
							}

						} ])