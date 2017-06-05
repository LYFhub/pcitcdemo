// 声明函数
function drawChart(data) {
    // 基于准备好的dom，初始化echarts实例
    var barChart = echarts.init($('.barchart')[0]);
    var pieChart = echarts.init($('.piechart')[0]);
    var lineChart = echarts.init($('.linechart')[0]);

    console.log('配置chart数据:', data);

    var bar_series = {
        xAxisData: [],
        actual: [],
        plan: []
    };
    var pie_series = {
        legendData: [],
        seriesData: []
    };
    var line_series = {
        xAxisData: [],
        actual: [],
        plan: []
    };

    // 处理来自json文件中柱状图的数据
    for (var i = 0; i < data.bardata.length; i++) {
        bar_series.xAxisData.push(data.bardata[i].name);
        bar_series.actual.push(data.bardata[i].actual);
        bar_series.plan.push(data.bardata[i].plan);
    }

    // 处理来自json文件中折线图的数据
    for (var i = 0; i < data.linedata.length; i++) {
        line_series.xAxisData.push(data.linedata[i].name);
        line_series.actual.push(data.linedata[i].actual);
        line_series.plan.push(data.linedata[i].plan);
    }

    // 处理来自json文件中饼图的数据
    for (var i = 0; i < data.piedata.length; i++) {
        pie_series.legendData.push(data.piedata[i].name + ' ' + (data.piedata[i].percent * 100) + '%');
        pie_series.seriesData.push(data.piedata[i].percent * 360);
        if (data.piedata[i].value) {
            pie_series.allfee = data.piedata[i].name + data.piedata[i].value + "元";
        }
    }


    // 指定图表的配置项和数据
    var barOption = {
        color: ['#d3b56c', '#51769a'],
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
        textStyle: {
            fontSize: 12
        },
        legend: [{
            orient: 'vertical',
            left: 'left',
            bottom: 'bottom',
            data: [pie_series.legendData[0], pie_series.legendData[1], pie_series.legendData[2], pie_series.legendData[3]]
        }, {
            left: 'right',
            bottom: 'bottom',
            data: [pie_series.allfee] // 只能显示series -> data -> name的值
        }],
        series: [{
            type: 'pie',
            data: [{
                value: pie_series.seriesData[0],
                name: pie_series.legendData[0]
            }, {
                value: pie_series.seriesData[1],
                name: pie_series.legendData[1],
                itemStyle: {
                    normal: {
                        color: '#d3b56c'
                    }
                }
            }, {
                value: pie_series.seriesData[2],
                name: pie_series.legendData[2],
                itemStyle: {
                    normal: {
                        color: '#227191'
                    }
                }
            }, {
                value: pie_series.seriesData[3],
                name: pie_series.legendData[3],
                itemStyle: {
                    normal: {
                        color: '#9fb3c1'
                    }
                }
            }, {
                value: 0,
                name: pie_series.allfee
            }, ],
            itemStyle: {
                normal: {
                    color: '#94c8b1'
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
        color: ['#ec9856', '#227191'],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            left: 'center',
            bottom: 'bottom',
            data: ['实际', '预期']
        },
        grid: {
            containLabel: true // 防止标签溢出边界
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