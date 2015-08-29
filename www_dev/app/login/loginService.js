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
        'LoginService',
        [
                'CommsService', 'CommsDataService', 'HomeDataService',
                function( CommsService, CommsDataService, HomeDataService) {

	                return {
		                login : function(accessToken) {

			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Logging In ...");
			                commsData.setBaseURL("");
			                commsData.setMethod("GET");
			                commsData.setURLPath("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token="+accessToken);
			                return new CommsService.communicate(commsData).then(function(response) {

			                	console.log(response.data);
			                	HomeDataService.getStatus().setStatusCode(0);
			                	HomeDataService.getStatus().setStatusMessage("Welcome "+ response.data.email);
			                	HomeDataService.setEmailID(response.data.email); 
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	HomeDataService.getStatus().setStatusCode(901);
			                	HomeDataService.getStatus().setStatusMessage("This is not how this was supposed to behave... Try again please !!!");
			                });
		                },
	                }
                }
        ]);