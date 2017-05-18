// 声明函数
function drawChart (data) {
    // 基于准备好的dom，初始化echarts实例
    var barChart = echarts.init($('.barchart')[0]);
    var pieChart = echarts.init($('.piechart')[0]);
    var lineChart = echarts.init($('.linechart')[0]);

    console.log('配置chart数据',data);

    var bar_series = {
        xAxisData: [],
        actual: [],
        plan: []
    };
    var pie_series = {};
    var line_series = {
        xAxisData: [],
        actual: [],
        plan: []
    };

    // 处理来自json文件中柱状图的数据
    for (var i = 0, arr = []; i < data.bardata.length; i++) {
        bar_series.xAxisData.push(data.bardata[i].name);
        bar_series.actual.push(data.bardata[i].actual);
        bar_series.plan.push(data.bardata[i].plan);
    }

    // 处理来自json文件中折线图的数据
    for (var i = 0, arr = []; i < data.linedata.length; i++) {
        line_series.xAxisData.push(data.linedata[i].name);
        line_series.actual.push(data.linedata[i].actual);
        line_series.plan.push(data.linedata[i].plan);
    }

    // 处理来自json文件中柱状图的数据
    // for (var i = data.bardata.length - 1, arr = []; i >= 0; i--) {
    //     bar_series.xAxisData.push(data.bardata[i].name);
    //     bar_series.actual.push(data.bardata[i].actual);
    //     bar_series.plan.push(data.bardata[i].plan);
    // }


    // 指定图表的配置项和数据
    var barOption = {
        color: ['#cccccc', '#999999'],
        title: {
            text: '资源'
        },
        textStyle: {
            fontSize: 12
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            orient: 'horizontal',
            left: 'center',
            bottom: 'bottom',
            data: ['计划', '实际']
        },
        grid: {
            containLabel: true
        },
        xAxis: {
            data: bar_series.xAxisData,
            axisLabel: {
                rotate: 30
            },
        },
        yAxis: {
            text: '天数',
            axisLabel: {
                margin: 4,
                rotate: 30
            }
        },
        series: [{
            name: '计划',
            type: 'bar',
            data: bar_series.actual
        }, {
            name: '实际',
            type: 'bar',
            data: bar_series.plan
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
        legend: [{
            orient: 'vertical',
            left: 'left',
            bottom: 'bottom',
            data: ['料', '工', '费', '剩余']
        }, {
            left: 'right',
            bottom: 'bottom',
            data: ['工料费总量']  // 只能显示series -> data -> name的值
        }],
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
            }, {
                value: 0,
                name: '工料费总量'
            }, ],
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
            }
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    pieChart.setOption(pieOption);

    // 指定图表的配置项和数据
    var lineOption = {
        title: {
            text: '进度'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            left: 'center',
            bottom: 'bottom',
            data: ['实际', '预期']
        },
        grid: {
            containLabel: true  // 防止标签溢出边界
        },
        xAxis: {
            data: line_series.xAxisData
        },
        yAxis: {
            text: '天数'
        },
        series: [{
            name: '实际',
            type: 'line',
            data: line_series.actual
        }, {
            name: '预期',
            type: 'line',
            data: line_series.plan
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    lineChart.setOption(lineOption);
}