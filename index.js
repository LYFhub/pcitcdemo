angular.module('mainApp',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl: 'views/main.html'})
    .when('/scopemanagement',{templateUrl: 'views/scopemanagement.html'})
    .when('/scope',{templateUrl: 'views/scope.html'})
    .otherwise({redirectTo:'/'});
}])
.controller('homeCtrl', function($scope, $http) {
	$http({
		method: 'GET',
		url: './datasource/tabledata.json'
	}).then(function successCallback(response) {
			// 处理获取到的数据
			console.log(response);
			// 保留源数据，为后续处理分页使用
			$scope.worktabledata = response.data.data.projecttask;
			$scope.tasktabledata = response.data.data.newsandnotice;
			$scope.workdata = $scope.worktabledata.slice(0,5);  // 初始值获取前五个，表示每页显示5条记录
			$scope.taskdata = $scope.worktabledata.slice(0,5);
		}, function errorCallback(response) {
			// 请求失败执行代码
			console.log(response);
	});
	$clicknextnum = 0;  // 点击下一页的次数，用于计算当前应该显示第几页的数据
	$scope.nextPage = function (event) {
		$clicknextnum++;
		if (!$scope.worktabledata[5*$clicknextnum]) { // 点击下一页时，如果下一页没有数据，点击次数减一，然后return
			$clicknextnum--;
			return;
		}
		$scope.workdata = $scope.worktabledata.slice(5*$clicknextnum, 5*($clicknextnum + 1)); 
		// 需要区分不同控件的点击事件，避免相互影响
		$scope.taskdata = $scope.worktabledata.slice(5*$clicknextnum, 5*($clicknextnum + 1));
	}
	$scope.prevPage = function (event) {
		if ($clicknextnum === 0)
			return;
		else {
			$clicknextnum--;
			$scope.workdata = $scope.worktabledata.slice(5*$clicknextnum, 5*($clicknextnum + 1));
			$scope.taskdata = $scope.worktabledata.slice(5*$clicknextnum, 5*($clicknextnum + 1));
		}
	}
});