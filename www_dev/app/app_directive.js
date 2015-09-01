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
								category = 'CC';
								break;
							case '2':
								category = 'loans';
								break;
							case '3':
								category = 'hotel';
								break;
							case '4':
								category = 'grocery';
								break;
							case '5':
							default:
								category = 'home';
								break;
							case '6':
								category = 'investement';
								break;
							case '7':
								category = 'education';
								break;
							case '8':
								category = 'medical';
								break;
							case '9':
								category = 'others';
								break;
							case '10':
								category = 'gas';
								break;
							case '11':
								category = 'snacks';
								break;
							case '12':
								category = 'shopping';
								break;
							case '13':
								category = 'vehicle';
								break;
							case '14':
								category = 'business';
								break;
							case '15':
								category = 'givingback';
								break;
							case '16':
								category = 'travel';
								break;
							}
							elem
									.replaceWith('<div class="col col-right col-sep  col-15"><img src="css/images/'+ category +'.png" width=30px"/></div>');
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
									.replaceWith('<div class="col col-right col-sep  col-15"><img src="css/images/'+ paymentType +'.png" width=30px"/></div>');
						}
					};
				} ]);
