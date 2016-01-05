var app = angular.module('app', ['ui.router'])

	.config(['$logProvider', '$stateProvider', function ($logProvider, $stateProvider) {

	$logProvider.debugEnabled(true);

	$stateProvider
		.state('name', {
			url: '/',
			templateUrl: '/public/app/templates/home.html',
			controller: 'HomeController',
			controllerAs: 'home'
		});
}]);
