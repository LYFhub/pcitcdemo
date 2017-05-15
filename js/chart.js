// 声明函数
function drawChart(num) {
    // 基于准备好的dom，初始化echarts实例
    var barChart = echarts.init($('.barchart')[num]);
    var pieChart = echarts.init($('.piechart')[num]);
    var lineChart = echarts.init($('.linechart')[num]);

    // 指定图表的配置项和数据
    var barOption = {
        color: ['#cccccc', '#999999'],
        title: {
            text: '资源'
        },
        tooltip: {},
        legend: {
            orient: 'horizontal',
            left: 'center',
            bottom: 'bottom',
            data: ['计划', '实际']
        },
        xAxis: {
            data: ["人物角色1", "人物角色2", "人物角色3", "人物角色4", "人物角色5"]
        },
        yAxis: {
            text: '天数'
        },
        series: [{
            name: '计划',
            type: 'bar',
            data: [50, 200, 310, 150, 200]
        }, {
            name: '实际',
            type: 'bar',
            data: [150, 250, 300, 100, 250]
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
            orient: 'vertical',
            left: 'left',
            bottom: 'bottom',
            data: ['料', '工', '费', '剩余']
        },
        series: [{
            type: 'pie',
            data: [{
                value: 170,
                name: '料'
            }, {
                value: 90,
                name: '工',
                itemStyle: {
                    normal: {
                        color: '#999999'
                    }
                }
            }, {
                value: 80,
                name: '费',
                itemStyle: {
                    normal: {
                        color: '#cccccc'
                    }
                }
            }, {
                value: 20,
                name: '剩余',
                itemStyle: {
                    normal: {
                        color: '#e6e6e6'
                    }
                }
            }],
            itemStyle: {
                normal: {
                    color: '#666666'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            label: {
                normal: {
                    show: false
                }
            },
            silent: true
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
            left: 'center',
            bottom: 'bottom',
            data: ['实际', '预期']
        },
        xAxis: {
            data: ["第1周", "第2周", "第3周", "第4周", "第5周", "第6周"]
        },
        yAxis: {
            text: '天数'
        },
        series: [{
            name: '实际',
            type: 'line',
            data: [35, 35, 30, 30, 25, 25]
        }, {
            name: '预期',
            type: 'line',
            data: [35, 25, 25, 20, 20, 22]
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    lineChart.setOption(lineOption);
}