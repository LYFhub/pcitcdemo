// 声明函数
function drawChart(num){
	// 基于准备好的dom，初始化echarts实例
    var barChart = echarts.init($('.barchart')[num]);
    var pieChart = echarts.init($('.piechart')[num]);
    var lineChart = echarts.init($('.linechart')[num]);

    // 指定图表的配置项和数据
    var barOption = {
        title: {
            text: '资源'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },	
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {
        	text: '天数'
        },
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    barChart.setOption(barOption);

    // 指定图表的配置项和数据
    var pieOption = {
        title: {
            text: '成本'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        series: [{
            name: '销量',
            type: 'pie',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    pieChart.setOption(pieOption);

    // 指定图表的配置项和数据
    var lineOption = {
        title: {
            text: '进度'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },	
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {
        	text: '天数'
        },
        series: [{
            name: '销量',
            type: 'line',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    lineChart.setOption(lineOption);
}
