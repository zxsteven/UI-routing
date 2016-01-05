var app = angular.module('app', ['ui.router'])

	.config(['$logProvider', '$stateProvider', function ($logProvider, $stateProvider) {

	$logProvider.debugEnabled(true);

		$stateProvider
			.state('home', {
					url: '/',
					templateUrl: '/public/app/templates/home.html',
					controller: 'HomeController',
					controllerAs: 'home'
			})
			.state('schools', {
					url: '/schools',
					controller: 'AllSchoolsController',
					controllerAs: 'schools',
					templateUrl: '/public/app/templates/allSchools.html'
			})
			.state('classrooms', {
					url: '/classrooms',
					controller: 'AllClassroomsController',
					controllerAs: 'classrooms',
					templateUrl: '/public/app/templates/allClassrooms.html',
					onEnter: function ($log) {
							$log.debug('Entering the classrooms state.');
					},
					onExit: function ($log) {
							$log.debug('Exiting the classrooms state.');
					}
			})
			.state('activities', {
					url: '/activities',
					controller: 'AllActivitiesController',
					controllerAs: 'activities',
					templateUrl: '/public/app/templates/allActivities.html',
					resolve: {
							activities: function (dataService) {
									return dataService.getAllActivities();
							}
					},
					data: {
							name: 'My Activity',
							desc: 'Fun!'
					},
					foo: {
							myFoo: 'bar'
					}
			})
			.state('classroom_summary', {
					url: '/classrooms/:id',
					templateUrl: '/public/app/templates/classroom.html',
					controller: 'ClassroomController',
					controllerAs: 'classroom'
			})
			.state('classroom_detail', {
					url: '/classrooms/{id:[0-9]}/detail/{month}',
					templateUrl: '/public/app/templates/classroomDetail.html',
					controller: 'ClassroomController',
					controllerAs: 'classroom',
					params: {
							classroomMessage: { value: 'Learning is fun!' }
					}
			});


}]);

