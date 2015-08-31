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
		.module('mtureApp')

		.directive(
				'mtAlert',
				[
						'$timeout',
						'$document',
						function($timeout, $document) {

							return {
								restrict : 'AE',
								replace : true,
								template : '<div  ng-hide = "angular.isUndefined(alert)" class={{alert.type}}>{{alert.message}}</div>',
								link : function(scope, elem, attrs) {

									$timeout(function() {

										elem.remove();
									}, 5000);

									$document.bind('click', function() {

										elem.remove();
									});
								},
							};
						} ])

		.directive(
				'firecrackerCategory',
				[ function(value) {
					return {
						restrict : 'AE',
						replace : true,
						link : function(scope, elem, attrs) {
							var category = "";
							switch (attrs["text"]) {
							case '1':
								category = 'Credit Cards';
								break;
							case '2':
								category = 'Loans/Debts Paid Back';
								break;
							case '3':
								category = 'Food at Hotels';
								break;
							case '4':
								category = 'Grocery & Home Stuffs';
								break;
							case '5':
							default:
								category = 'Home Routine Expense';
								break;
							case '6':
								category = 'LIC/Investement';
								break;
							case '7':
								category = 'Educational Expense';
								break;
							case '8':
								category = 'Medical Expense';
								break;
							case '9':
								category = 'Others';
								break;
							case '10':
								category = 'Gas';
								break;
							case '11':
								category = 'Snacks';
								break;
							case '12':
								category = 'Leisure & Shopping';
								break;
							case '13':
								category = 'Vehicle Expenses';
								break;
							case '14':
								category = 'Business Initiative';
								break;
							case '15':
								category = 'Giving Back';
								break;
							case '16':
								category = 'Travelling Expense';
								break;
							}
							elem
									.replaceWith('<div class="col col-right col-sep">'+category+'</div>');
						}
					};
				} ])

		.directive(
				'firecrackerPaymenttype',
				[ function(value) {
					return {
						restrict : 'AE',
						replace : true,
						link : function(scope, elem, attrs) {
							var paymentType = "";
							switch (attrs["text"]) {
							case '1':
							default:
								paymentType = 'CASH';
								break;
							case '2':
								paymentType = 'Amex';
								break;
							case '3':
								paymentType = 'BOA';
								break;
							case '4':
								paymentType = 'CITI';
								break;
							case '5':
								paymentType = 'USBank';
								break;
							case '6':
								paymentType = 'CapitalOne';
								break;
							}
							elem
									.replaceWith('<div class="col col-right col-sep"><img src="css/images/'+ paymentType +'.png" width=30px"/></div>');
						}
					};
				} ]);
