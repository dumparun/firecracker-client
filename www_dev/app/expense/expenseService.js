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

angular.module('loginApp')

.service(
        'ExpenseService',
        [
                'CommsService', 'CommsDataService', 'HomeDataService',
                function( CommsService, CommsDataService, HomeDataService) {

	                return {
		                submitExpense : function(data) {

		                	var postData = {
		                			'date' : data.date,
		                			'description' : data.description,
		                			'category' : data.category,
		                			'paymentType' : data.paymentType,
		                			'amount' : data.amount
		                	}
		                	
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Submitting Expense ...");
			                commsData.setURLPath("V1/Expense/submitDailyExpense");
			                commsData.setPostData(postData);
			                
			                return new CommsService.communicate(commsData).then(function(response) {

			                	console.log(response.data);
			                	HomeDataService.getStatus().setStatusCode(response.data.status.code);
			                	HomeDataService.getStatus().setStatusMessage(response.data.status.message);
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	HomeDataService.getStatus().setStatusCode(901);
			                	HomeDataService.getStatus().setStatusMessage("Expense Was not Submitted, Please try again");
			                });
		                },
		                
		                getExpense : function(data) {

		                	var postData = {
		                			'date' : data.date,
		                			'month' : data.month,
		                			'year' : data.year,
		                	}
		                	
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Retrieving Expense ...");
			                commsData.setURLPath("V1/Expense/getExpense");
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