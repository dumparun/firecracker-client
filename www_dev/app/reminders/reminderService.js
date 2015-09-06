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

angular.module('reminderApp')

.service(
        'ReminderService',
        [
                'CommsService', 'CommsDataService', 'HomeDataService',
                function( CommsService, CommsDataService, HomeDataService) {

	                return {
		                getReminder : function() {

		                	var postData = {};
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Getting Reminder...");
			                commsData.setURLPath("V1/Expense/getReminder");
			                commsData.setPostData(postData);
			                
			                return new CommsService.communicate(commsData).then(function(response) {

			                	console.log(response.data);
			                	HomeDataService.getStatus().setStatusCode(response.data.status.code);
			                	HomeDataService.getStatus().setStatusMessage(response.data.status.message);
			                	HomeDataService.setExpenseList(response.data.listOfExpenses);
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	HomeDataService.getStatus().setStatusCode(901);
			                	HomeDataService.getStatus().setStatusMessage("Reminder Was not Submitted, Please try again");
			                });
		                },
		                
		                resetReminder : function() {

		                	var postData = {};
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Resetting Reminder...");
			                commsData.setURLPath("V1/Expense/resetReminders");
			                commsData.setPostData(postData);
			                
			                return new CommsService.communicate(commsData).then(function(response) {

			                	console.log(response.data);
			                	HomeDataService.getStatus().setStatusCode(response.data.status.code);
			                	HomeDataService.getStatus().setStatusMessage(response.data.status.message);
			                	HomeDataService.setExpenseList(response.data.listOfExpenses);
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	HomeDataService.getStatus().setStatusCode(901);
			                	HomeDataService.getStatus().setStatusMessage("Reminder Was not Submitted, Please try again");
			                });
		                },
		                
		                paid : function(sequence) {

		                	var postData = {
		                			'itemId' : sequence
		                	};
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Setting up Payment...");
			                commsData.setURLPath("V1/Expense/updatePayment");
			                commsData.setPostData(postData);
			                
			                return new CommsService.communicate(commsData).then(function(response) {

			                	console.log(response.data);
			                	HomeDataService.getStatus().setStatusCode(response.data.status.code);
			                	HomeDataService.getStatus().setStatusMessage(response.data.status.message);
			                	HomeDataService.setExpenseList(response.data.listOfExpenses);
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	HomeDataService.getStatus().setStatusCode(901);
			                	HomeDataService.getStatus().setStatusMessage("Reminder Was not Submitted, Please try again");
			                });
		                },
		                
		                addReminder : function(reminder) {

		                	var postData = {
		                			'item' : reminder.item,
		                			'reminder' : reminder.reminder
		                	};
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Updating Reminder...");
			                commsData.setURLPath("V1/Expense/addReminder");
			                commsData.setPostData(postData);
			                
			                return new CommsService.communicate(commsData).then(function(response) {

			                	console.log(response.data);
			                	HomeDataService.getStatus().setStatusCode(response.data.status.code);
			                	HomeDataService.getStatus().setStatusMessage(response.data.status.message);
			                	HomeDataService.setExpenseList(response.data.listOfExpenses);
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	HomeDataService.getStatus().setStatusCode(901);
			                	HomeDataService.getStatus().setStatusMessage("Reminder Was not Submitted, Please try again");
			                });
		                },
		                
		                updatePlan : function(planningList) {

		                	var postData = {
		                			'planList' : planningList
		                	};
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Updating Plan...");
			                commsData.setURLPath("V1/Expense/updatePlan");
			                commsData.setPostData(postData);
			                
			                return new CommsService.communicate(commsData).then(function(response) {

			                	console.log(response.data);
			                	HomeDataService.getStatus().setStatusCode(response.data.status.code);
			                	HomeDataService.getStatus().setStatusMessage(response.data.status.message);
			                	HomeDataService.setExpenseList(response.data.listOfExpenses);
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	HomeDataService.getStatus().setStatusCode(901);
			                	HomeDataService.getStatus().setStatusMessage("Expense Was not Submitted, Please try again");
			                });
		                },
	                }
                }
        ]);