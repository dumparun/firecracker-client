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
						function($scope, $state, HomeDataService) {

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

							$scope.getRowClass = function(reminder) {

								var rem = new Date(reminder).getDate();
								var today = new Date().getDate();

								var remains = rem - today;
								console.log(remains);
								var cl = 'undercontrol';
								if (remains == 0 || remains == -1) {
									cl = 'overshoot';
								} else if (remains > 0 && remains < 4) {
									cl = 'nearingLimit';
								} else if (remains >  0 && remains < 7) {
									cl = 'halfed';
								}
								return "item row row-item " + cl;
							}

							$scope.reminders = HomeDataService.getExpenseList();
						} ])