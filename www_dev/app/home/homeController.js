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
				'HomeDataService',
				function($scope, HomeDataService) {

					$scope.data = {};

					if (HomeDataService.getStatus().getStatusCode() == 0) {
						$scope.alert = {};
						$scope.alert.type = "success";
						$scope.alert.message = HomeDataService.getStatus()
								.getStatusMessage();
					}

					$scope.today = function() {
						$scope.data.date = new Date();
					};
					$scope.today();

					$scope.clear = function() {
						$scope.data.date = null;
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

					var tomorrow = new Date();
					tomorrow.setDate(tomorrow.getDate() + 1);
					var afterTomorrow = new Date();
					afterTomorrow.setDate(tomorrow.getDate() + 2);
					$scope.events = [ {
						date : tomorrow,
						status : 'full'
					}, {
						date : afterTomorrow,
						status : 'partially'
					} ];

					$scope.categories = [ 'Credit Cards',
							'Loans/Debts Paid Back', 'Food at Hotels',
							'Grocery & Home Stuffs', 'Home Routine Expense',
							'LIC/Investement', 'Educational Expense',
							'Medical Expense', 'Others', 'Gas', 'Snacks',
							'Leisure & Shopping', 'Vehicle Expenses',
							'Business Initiative', 'Giving Back',
							'Travelling Expense' ];

					$scope.paymentType = [ 'CASH', 'Amex', 'BOA', 'CITI',
							'US Bank', 'CapitalOne' ];

					$scope.submitExpense = function(expenseSubmitForm) {
						if (expenseSubmitForm.$invalid) {
							return;
						}

					}

				} ])