angular.module('mainApp',['ngRoute'])
// 配置路由
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/',{templateUrl: 'views/main.html'})
    .when('/scopemanagement',{templateUrl: 'views/scopemanagement.html'})
    .when('/scope',{templateUrl: 'views/scope.html'})
    .when('/scopemgtproject',{templateUrl: 'views/scopemgtproject.html'})
    .otherwise({redirectTo:'/'});
}])
// 主页面controller
.controller('homeCtrl', function($scope, $http) {

	// 用于分页，每页显示的个数
	$scope.workdatalength = 5;
	$scope.taskdatalength = 5;
	$scope.newsdatalength = 3;

	$scope.homerighttab = true;

	$scope.chartdatasource = {};
	$scope.timelinedata = {};
	$scope.chartbinddata = {};
	// 获取本地json数据，用于绑定table
	$http({
		method: 'GET',
		url: './datasource/tabledata.json'
	}).then(function successCallback(response) {
			// 处理获取到的数据
			console.log(response);
			// 保留源数据，为后续处理分页使用
			$scope.workdatasource = response.data.data.projecttask;
			$scope.taskdatasource = response.data.data.projecttask;
			$scope.newsdatasource = response.data.data.newsandnotice;

			// 获取初始值，根据每页显示个数的不同获取数据
			$scope.workdata = $scope.workdatasource.slice(0, $scope.workdatalength);
			$scope.taskdata = $scope.workdatasource.slice(0, $scope.taskdatalength);
			$scope.newsdata = $scope.newsdatasource.slice(0, $scope.newsdatalength);

			// 获取年度目标数据
			$scope.yearlygoalssource = response.data.data.yearlygoals;
			$scope.yearlygoals = response.data.data.yearlygoals['lastyear'];

			// 获取首页三个chart的数据，然后处理数据，整理成echart可以使用的格式
			$scope.chartdatasource = response.data.data.projectprocess;
			$chartbinddata = $scope.chartdatasource[0].project_a.chartdata;


		}, function errorCallback(response) {
			// 请求失败执行代码
			console.log(response);
	});

	// 点击下一页的次数，用于计算当前应该显示第几页的数据
	// 利用a的classname和table绑定的model重名来判断不同table的点击事件，从而处理对应table的数据，避免相互影响
	$clicknextnum = 0; 
	$scope.nextPage = function (event) {
		var dataModel = $scope[event.currentTarget.className],
			dataSource = $scope[event.currentTarget.className + 'source'],
			displayLength = $scope[event.currentTarget.className + 'length'];

		$clicknextnum++;
		if (!dataSource[displayLength*$clicknextnum]) {
			// 点击下一页时，如果下一页没有数据，点击次数减一，然后return
			$clicknextnum--;
			return;
		}
		$scope[event.currentTarget.className] = dataSource.slice(displayLength*$clicknextnum, displayLength*($clicknextnum + 1));
	}
	$scope.prevPage = function (event) {
		var dataModel = $scope[event.currentTarget.className],
			dataSource = $scope[event.currentTarget.className + 'source'],
			displayLength = $scope[event.currentTarget.className + 'length'];

		if ($clicknextnum === 0)
			return;
		else {
			$clicknextnum--;
			$scope[event.currentTarget.className] = dataSource.slice(displayLength*$clicknextnum, displayLength*($clicknextnum + 1));
		}
	}

	// 按年份更改年度目标
	// 还需要改进，具体数据格式需要和后端协商
	$scope.changeYearGoals = function (year) {
		var currentYear = new Date().getUTCFullYear().toString();
		if (year === currentYear)
			year = "lastyear";
		$scope.yearlygoals = $scope.yearlygoalssource[year];
	}

	// 表格和图表(chart)切换功能
	$scope.changetab = function (event) {
		console.log(event);
		if (event.target.className === "allplan") {
			$scope.homerighttab = true;
		} else {
			$scope.homerighttab = false;

			// 根据项目的不同对chart赋予不同的数据，从而实现后三个tab的切换
			if (event.target.className.indexOf("aprocess") >= 0) {
				// 动态更新timeline的数据
				$scope.timelinedata = $scope.chartdatasource[0].project_a;

				// 将chart中的data数据更换为a项目的数据
				$chartbinddata = $scope.timelinedata.chartdata;
				// 利用闭包向setTimeout函数里传递局部变量chartdata
				setTimeout(function() {
					drawChart($chartbinddata);
				}, 100);  // 延迟0.1s, 目的是先让div显示, 然后再绘制图形
			} else if (event.target.className.indexOf("bprocess") >= 0) {
				$scope.timelinedata = $scope.chartdatasource[1].project_b;

				$chartbinddata= $scope.timelinedata.chartdata;
				setTimeout(function() {
					drawChart($chartbinddata);
				}, 100);
			} else if (event.target.className.indexOf("cprocess") >= 0) {
				$scope.timelinedata = $scope.chartdatasource[2].project_c;

				$chartbinddata = $scope.timelinedata.chartdata;
				setTimeout(function() {
					drawChart($chartbinddata);
				}, 100);
			} else {
				$scope.homerighttab = true;
				console.log('其他选项条件不正确....');
			}
		}
	}

	$scope.$on('$viewContentLoaded', function(){  // 判断view渲染完成
		drawChart($chartbinddata);  // 当从主页跳转到scope页面，然后再跳回来，重新渲染chart, 否则返回主页时，chart 不显示
	});
});