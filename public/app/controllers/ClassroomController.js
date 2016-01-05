angular.module('app')
	.controller('ClassroomController', 'notifier', '$stateParams', [ClassroomController]);

function ClassroomController(dataService, notifier, $stateParams) {

	var vm = this;
	
	vm.month = $stateParams.month;
	
	if ($stateParams.month) {
		if (classroom.activities.length > 0) {
				vm.timePeriod = dataService.getMonthName($stateParams.month);
		}
		else {
				vm.timePeriod = 'No activities this month';
		}
		}
		else {
				vm.timePeriod = 'All activities';
		}

})
.catch(showError);

	dataService.getClassroom($stateParams.id)
		.then(function (classroom){
			vm.currentClassroom = classroom = $stateParams.month
		})
		.catch(showError);
	
	function showError(message) {
		notifier.error(message);
	}
};
