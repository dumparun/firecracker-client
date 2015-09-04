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
angular.module('mtureApp')

.config(
		[ '$stateProvider', '$urlRouterProvider',
				function($stateProvider, $urlRouterProvider) {

					$stateProvider

					.state('login', {
						cache : false,
						url : '/login',
						templateUrl : 'app/login/loginView.htm',
						controller : 'LoginController'
					})

					.state('home', {
						cache : false,
						url : '/home',
						templateUrl : 'app/home/homeView.htm',
						controller : 'HomeController'
					})

					.state('submitExpense', {
						cache : false,
						url : '/submitExpense',
						templateUrl : 'app/expense/submitExpense.htm',
						controller : 'SubmitExpenseController'
					})

					.state('viewExpenseCriteria', {
						url : '/viewExpenseCriteria',
						templateUrl : 'app/expense/viewExpenseCriteria.htm',
						controller : 'ViewExpenseCriteriaController'
					})

					.state('viewExpense', {
						url : '/viewExpense',
						templateUrl : 'app/expense/viewExpense.htm',
						controller : 'ViewExpenseController'
					})

					.state('makePlan', {
						url : '/makePlan',
						templateUrl : 'app/plans/planning.htm',
						controller : 'PlanningController'
					})

					.state('howBad', {
						url : '/howBad',
						templateUrl : 'app/plans/planView.htm',
						controller : 'PlanViewController'
					})

					.state('submitIncome', {
						url : '/submitIncome',
						templateUrl : 'app/income/incomeSubmit.htm',
						controller : 'IncomeSubmitController'
					})

					.state('viewIncome', {
						url : '/viewIncome',
						templateUrl : 'app/income/incomeView.htm',
						controller : 'IncomeViewController'
					})

					.state('reminderSubmit', {
						url : '/reminderSubmit',
						templateUrl : 'app/reminders/reminderSubmit.htm',
						controller : 'ReminderSubmitController'
					})

					.state('reminderView', {
						url : '/reminderView',
						templateUrl : 'app/reminders/reminderView.htm',
						controller : 'ReminderViewController'
					});

					$urlRouterProvider.otherwise('/login');
				} ],

		// To be run in production mode to disable debug.
		// if you are running in debug mode, comment the below code out.
		[ '$compileProvider', function($compileProvider) {

			$compileProvider.debugInfoEnabled(false);
		} ]);