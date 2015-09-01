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

angular.module('planApp')

.service(
        'PlanningService',
        [
                'CommsService', 'CommsDataService', 'HomeDataService',
                function( CommsService, CommsDataService, HomeDataService) {

	                return {
		                getPlan : function() {

		                	var postData = {};
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Getting Plan...");
			                commsData.setURLPath("V1/Expense/getPlanView");
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