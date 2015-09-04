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
		.module('reminderApp')

		.controller(
				'ReminderSubmitController',
				[
						'$scope',
						'$state',
						'HomeDataService',
						'ReminderService',
						function($scope, $state, HomeDataService,
								ReminderService) {

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

							$scope.openDt = function($event) {
								$scope.statusDt.opened = true;
							};

							$scope.statusDt = {
								opened : false
							};

							$scope.dateOptions = {
								formatYear : 'yy',
								startingDay : 1
							};

							$scope.formats = [ 'dd-MMMM-yyyy', 'yyyy/MM/dd',
									'dd.MM.yyyy', 'shortDate' ];
							$scope.format = $scope.formats[0];

							$scope.submitReminder = function(form) {
								if (form.$invalid) {
									return;
								}
								ReminderService.addReminder($scope.data).then(
										function() {
											$state.go('home', {}, {
												reload : true
											});
										});
							}

						} ])