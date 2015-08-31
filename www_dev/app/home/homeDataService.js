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

angular.module('homeApp').service('HomeDataService',
		[ 'ResponseStatusDataService', function(ResponseStatusDataService) {

			// private variables
			var emailId = '';

			var status = new ResponseStatusDataService();

			var listOfExpenses = {};

			this.setEmailID = function(emailId) {
				this.emailId = emailId;
			};

			this.getEmailID = function() {
				return this.emailId;
			};

			this.setStatus = function(stat) {

				status.setStatus(stat);
			};

			this.getStatus = function() {
				return status;
			};

			this.setExpenseList = function(exp) {
				this.listOfExpenses = exp;
			}

			this.getExpenseList = function() {
				return this.listOfExpenses;
			}
		} ]);