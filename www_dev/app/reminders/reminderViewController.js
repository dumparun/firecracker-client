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
				'ReminderViewController',
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

							$scope.getRowClass = function(reminder, paid) {

								if(paid != '0'){
									return "item row row-item allgood";
								}
								var rem = new Date(reminder).getDate();
								var today = new Date().getDate();

								var remains = rem - today;
								var cl = 'undercontrol';
								if (remains <= 0) {
									cl = 'overshoot';
								} else if (remains > 0 && remains < 4) {
									cl = 'nearingLimit';
								} else if (remains > 0 && remains < 7) {
									cl = 'halfed';
								}
								return "item row row-item " + cl;
							}

							$scope.resetReminder = function() {
								ReminderService.resetReminder().then(
										function() {
											$state.go('home', {}, {
												reload : true
											});
										});
							}
							
							$scope.paid = function(sequence){
								ReminderService.paid(sequence).then(
										function() {
											$state.go('home', {}, {
												reload : true
											});
										});
							}

							$scope.reminders = HomeDataService.getExpenseList();
						} ])