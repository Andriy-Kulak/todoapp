var app = angular.module('ToDo', []);

app.controller('todoController',['$scope', function($scope){

	//list of todos
	$scope.todos = [
		{'title':'Test 1', 'done': false},
		{'title':'Test 2', 'done': false},
		{'title':'Test 3', 'done': false},
		{'title':'Test 4', 'done': false}
	];

	//method to add to list
	$scope.addToDo = function(){
		$scope.todos.push({'title': $scope.newToDo, 'done': false});
		$scope.newToDo = '';

	};

	//method to clear rows that are checked off
	$scope.clearCompleted = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done;
		})
	};

	$scope.likeCount = 0;
	$scope.fuckCount = 0;



	var commands = {
		'new item *val' : function(val){
			$scope.newToDo = val;
			$scope.addToDo();
			$scope.$apply();
		},

		// LIKE TEST
		'like' : function(){
			$scope.likeCount++;
			$scope.$apply();
		},

		// FUCK TEST
		'fuck' : function(){
			$scope.fuckCount++;
			$scope.$apply();
		}

	};

	annyang.addCommands(commands);
	annyang.debug();
	annyang.start();

}]);



