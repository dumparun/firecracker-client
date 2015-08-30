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

.controller(
        'LoginController',
        [
                '$scope',
                '$rootScope',
                '$state',
                'LoginService',
                'HomeDataService',
                '$cordovaOauth',
                function($scope, $rootScope, $state, LoginService, HomeDataService, $cordovaOauth) {

                	var clientID = '615268675096-bh5f0cn7tbeaq75lke9b1o110gf5q616.apps.googleusercontent.com';
	                $scope.data = {};
	                
	                if (HomeDataService.getStatus().getStatusCode() != 0) {
		                $scope.alert = {};
		                $scope.alert.type = "error";
		                $scope.alert.message = HomeDataService.getStatus().getStatusMessage();
		                HomeDataService.getStatus().setStatusCode(0);
	                }
	                
	                $scope.signIn = function() {
	                	HomeDataService.getStatus().setStatusCode(0);
	                	HomeDataService.getStatus().setStatusMessage("Welcome");
	                	$state.go('home');
	                	return;
	                console.log("signing in");
	                $cordovaOauth.google(clientID, ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/userinfo.email"]).then(function(result) {
	                    console.log(JSON.stringify(result));
	                    LoginService.login(result.access_token).then(
		                        function() {

			                        if (HomeDataService.getStatus().getStatusCode() == 0) {
				                        $state.go('home');
			                        }
			                        else {
				                        $state.go($state.current.name, {}, {
					                        reload : true
				                        });
			                        }
		                        });
	                    
	                    console.log("Yes, logged in");
	                }, function(error) {
	                	console.log("Error while logging in");
	                    console.log(error);
	                });
	                
                }
                }
        ]);