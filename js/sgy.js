function show_userbehaviour_userreturning() {
    activate_left_nav("userreturning");
    var div_chart = $("<div></div>").attr("style", "width: 1100px; height:900px");
    var chart = echarts.init(div_chart[0]);
    //var after_days = ['1', '2', '3', '4', '5', '6', '7'];
    var after_days = new Array(32);
    for (var i = 0; i < after_days.length; i++) {
        after_days[i] = (i + 1).toString();
    }
    var days = ["0414", "0415", "0416", "0417", "0418", "0419", "0420", "0421", "0422", "0423", "0424", "0425", "0426", "0427", "0428", "0429", "0430", "0501", "0502", "0503", "0504", "0505", "0506", "0507", "0508", "0509", "0510", "0511", "0512", "0513", "0514", "0515", "0520"];
    var data = [[0, 0, 1], [0, 1, 0], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 0], [0, 12, 0], [0, 13, 0], [0, 14, 0], [0, 15, 0], [0, 16, 0], [0, 17, 0], [0, 18, 0], [0, 19, 0], [0, 20, 0], [0, 21, 0], [0, 22, 0], [0, 23, 0], [0, 24, 0], [0, 25, 0], [0, 26, 0], [0, 27, 0], [0, 28, 0], [0, 29, 0], [0, 30, 0], [0, 31, 0], [0, 32, 0], [1, 0, 12], [1, 1, 8], [1, 2, 5], [1, 3, 6], [1, 4, 5], [1, 5, 5], [1, 6, 5], [1, 7, 4], [1, 8, 5], [1, 9, 6], [1, 10, 5], [1, 11, 5], [1, 12, 5], [1, 13, 2], [1, 14, 2], [1, 15, 1], [1, 16, 1], [1, 17, 3], [1, 18, 2], [1, 19, 2], [1, 20, 3], [1, 21, 2], [1, 22, 2], [1, 23, 1], [1, 24, 2], [1, 25, 2], [1, 26, 2], [1, 27, 2], [1, 28, 1], [1, 29, 1], [1, 30, 1], [1, 31, 0], [2, 0, 20], [2, 1, 10], [2, 2, 11], [2, 3, 9], [2, 4, 8], [2, 5, 9], [2, 6, 10], [2, 7, 11], [2, 8, 10], [2, 9, 9], [2, 10, 9], [2, 11, 8], [2, 12, 6], [2, 13, 7], [2, 14, 7], [2, 15, 6], [2, 16, 6], [2, 17, 7], [2, 18, 7], [2, 19, 6], [2, 20, 6], [2, 21, 5], [2, 22, 4], [2, 23, 5], [2, 24, 6], [2, 25, 5], [2, 26, 4], [2, 27, 3], [2, 28, 3], [2, 29, 1], [2, 30, 0], [3, 0, 26], [3, 1, 14], [3, 2, 13], [3, 3, 12], [3, 4, 15], [3, 5, 12], [3, 6, 13], [3, 7, 10], [3, 8, 10], [3, 9, 11], [3, 10, 11], [3, 11, 9], [3, 12, 7], [3, 13, 8], [3, 14, 8], [3, 15, 10], [3, 16, 8], [3, 17, 9], [3, 18, 10], [3, 19, 8], [3, 20, 9], [3, 21, 7], [3, 22, 8], [3, 23, 9], [3, 24, 7], [3, 25, 6], [3, 26, 5], [3, 27, 4], [3, 28, 1], [3, 29, 0], [4, 0, 24], [4, 1, 15], [4, 2, 13], [4, 3, 14], [4, 4, 14], [4, 5, 13], [4, 6, 14], [4, 7, 13], [4, 8, 11], [4, 9, 14], [4, 10, 12], [4, 11, 10], [4, 12, 11], [4, 13, 12], [4, 14, 11], [4, 15, 11], [4, 16, 12], [4, 17, 12], [4, 18, 11], [4, 19, 10], [4, 20, 8], [4, 21, 9], [4, 22, 9], [4, 23, 8], [4, 24, 8], [4, 25, 8], [4, 26, 5], [4, 27, 1], [4, 28, 0], [5, 0, 23], [5, 1, 13], [5, 2, 13], [5, 3, 11], [5, 4, 11], [5, 5, 12], [5, 6, 13], [5, 7, 11], [5, 8, 11], [5, 9, 11], [5, 10, 8], [5, 11, 9], [5, 12, 10], [5, 13, 11], [5, 14, 11], [5, 15, 9], [5, 16, 10], [5, 17, 8], [5, 18, 8], [5, 19, 8], [5, 20, 8], [5, 21, 9], [5, 22, 9], [5, 23, 8], [5, 24, 6], [5, 25, 5], [5, 26, 1], [5, 27, 0], [6, 0, 40], [6, 1, 29], [6, 2, 23], [6, 3, 20], [6, 4, 19], [6, 5, 20], [6, 6, 21], [6, 7, 19], [6, 8, 19], [6, 9, 17], [6, 10, 19], [6, 11, 20], [6, 12, 17], [6, 13, 17], [6, 14, 16], [6, 15, 17], [6, 16, 16], [6, 17, 15], [6, 18, 14], [6, 19, 16], [6, 20, 15], [6, 21, 13], [6, 22, 11], [6, 23, 11], [6, 24, 6], [6, 25, 2], [6, 26, 0], [7, 0, 78], [7, 1, 47], [7, 2, 44], [7, 3, 40], [7, 4, 41], [7, 5, 38], [7, 6, 38], [7, 7, 37], [7, 8, 33], [7, 9, 36], [7, 10, 35], [7, 11, 34], [7, 12, 30], [7, 13, 31], [7, 14, 34], [7, 15, 35], [7, 16, 31], [7, 17, 28], [7, 18, 28], [7, 19, 30], [7, 20, 27], [7, 21, 21], [7, 22, 23], [7, 23, 13], [7, 24, 2], [7, 25, 0], [8, 0, 75], [8, 1, 51], [8, 2, 44], [8, 3, 46], [8, 4, 40], [8, 5, 44], [8, 6, 40], [8, 7, 43], [8, 8, 41], [8, 9, 38], [8, 10, 41], [8, 11, 37], [8, 12, 38], [8, 13, 35], [8, 14, 36], [8, 15, 37], [8, 16, 33], [8, 17, 33], [8, 18, 36], [8, 19, 28], [8, 20, 22], [8, 21, 24], [8, 22, 16], [8, 23, 2], [8, 24, 0], [9, 0, 76], [9, 1, 49], [9, 2, 47], [9, 3, 43], [9, 4, 45], [9, 5, 43], [9, 6, 39], [9, 7, 42], [9, 8, 39], [9, 9, 40], [9, 10, 39], [9, 11, 40], [9, 12, 35], [9, 13, 40], [9, 14, 38], [9, 15, 32], [9, 16, 34], [9, 17, 38], [9, 18, 29], [9, 19, 23], [9, 20, 26], [9, 21, 16], [9, 22, 3], [9, 23, 0], [10, 0, 77], [10, 1, 48], [10, 2, 43], [10, 3, 49], [10, 4, 46], [10, 5, 39], [10, 6, 40], [10, 7, 38], [10, 8, 40], [10, 9, 37], [10, 10, 38], [10, 11, 33], [10, 12, 38], [10, 13, 34], [10, 14, 32], [10, 15, 32], [10, 16, 32], [10, 17, 28], [10, 18, 24], [10, 19, 24], [10, 20, 17], [10, 21, 3], [10, 22, 0], [11, 0, 74], [11, 1, 46], [11, 2, 47], [11, 3, 46], [11, 4, 40], [11, 5, 40], [11, 6, 41], [11, 7, 40], [11, 8, 40], [11, 9, 36], [11, 10, 36], [11, 11, 40], [11, 12, 34], [11, 13, 33], [11, 14, 33], [11, 15, 32], [11, 16, 32], [11, 17, 23], [11, 18, 26], [11, 19, 16], [11, 20, 3], [11, 21, 0], [12, 0, 72], [12, 1, 52], [12, 2, 43], [12, 3, 38], [12, 4, 37], [12, 5, 37], [12, 6, 43], [12, 7, 37], [12, 8, 34], [12, 9, 35], [12, 10, 40], [12, 11, 35], [12, 12, 32], [12, 13, 34], [12, 14, 35], [12, 15, 32], [12, 16, 26], [12, 17, 26], [12, 18, 18], [12, 19, 2], [12, 20, 0], [13, 0, 87], [13, 1, 57], [13, 2, 53], [13, 3, 49], [13, 4, 48], [13, 5, 51], [13, 6, 46], [13, 7, 49], [13, 8, 40], [13, 9, 48], [13, 10, 46], [13, 11, 43], [13, 12, 41], [13, 13, 40], [13, 14, 36], [13, 15, 32], [13, 16, 33], [13, 17, 27], [13, 18, 5], [13, 19, 0], [14, 0, 77], [14, 1, 50], [14, 2, 52], [14, 3, 50], [14, 4, 50], [14, 5, 48], [14, 6, 43], [14, 7, 42], [14, 8, 45], [14, 9, 40], [14, 10, 45], [14, 11, 44], [14, 12, 37], [14, 13, 36], [14, 14, 33], [14, 15, 32], [14, 16, 27], [14, 17, 5], [14, 18, 0], [15, 0, 75], [15, 1, 54], [15, 2, 51], [15, 3, 52], [15, 4, 50], [15, 5, 48], [15, 6, 42], [15, 7, 43], [15, 8, 44], [15, 9, 41], [15, 10, 40], [15, 11, 39], [15, 12, 34], [15, 13, 30], [15, 14, 28], [15, 15, 24], [15, 16, 4], [15, 17, 0], [16, 0, 78], [16, 1, 58], [16, 2, 55], [16, 3, 54], [16, 4, 52], [16, 5, 44], [16, 6, 48], [16, 7, 49], [16, 8, 47], [16, 9, 45], [16, 10, 46], [16, 11, 39], [16, 12, 34], [16, 13, 32], [16, 14, 27], [16, 15, 5], [16, 16, 0], [17, 0, 76], [17, 1, 53], [17, 2, 56], [17, 3, 52], [17, 4, 49], [17, 5, 47], [17, 6, 45], [17, 7, 43], [17, 8, 45], [17, 9, 45], [17, 10, 35], [17, 11, 35], [17, 12, 32], [17, 13, 23], [17, 14, 6], [17, 15, 0], [18, 0, 85], [18, 1, 59], [18, 2, 54], [18, 3, 56], [18, 4, 54], [18, 5, 54], [18, 6, 48], [18, 7, 48], [18, 8, 51], [18, 9, 44], [18, 10, 37], [18, 11, 32], [18, 12, 25], [18, 13, 6], [18, 14, 0], [19, 0, 83], [19, 1, 56], [19, 2, 53], [19, 3, 51], [19, 4, 50], [19, 5, 48], [19, 6, 48], [19, 7, 50], [19, 8, 41], [19, 9, 35], [19, 10, 35], [19, 11, 28], [19, 12, 6], [19, 13, 0], [20, 0, 92], [20, 1, 56], [20, 2, 53], [20, 3, 58], [20, 4, 50], [20, 5, 50], [20, 6, 51], [20, 7, 42], [20, 8, 37], [20, 9, 37], [20, 10, 29], [20, 11, 6], [20, 12, 0], [21, 0, 110], [21, 1, 67], [21, 2, 66], [21, 3, 54], [21, 4, 59], [21, 5, 59], [21, 6, 51], [21, 7, 45], [21, 8, 43], [21, 9, 31], [21, 10, 5], [21, 11, 0], [22, 0, 113], [22, 1, 69], [22, 2, 60], [22, 3, 61], [22, 4, 63], [22, 5, 53], [22, 6, 47], [22, 7, 47], [22, 8, 35], [22, 9, 6], [22, 10, 0], [23, 0, 118], [23, 1, 70], [23, 2, 72], [23, 3, 70], [23, 4, 62], [23, 5, 50], [23, 6, 52], [23, 7, 39], [23, 8, 9], [23, 9, 0], [24, 0, 107], [24, 1, 74], [24, 2, 67], [24, 3, 64], [24, 4, 53], [24, 5, 53], [24, 6, 45], [24, 7, 8], [24, 8, 0], [25, 0, 111], [25, 1, 72], [25, 2, 64], [25, 3, 55], [25, 4, 52], [25, 5, 44], [25, 6, 10], [25, 7, 0], [26, 0, 121], [26, 1, 72], [26, 2, 61], [26, 3, 60], [26, 4, 45], [26, 5, 11], [26, 6, 0], [27, 0, 114], [27, 1, 70], [27, 2, 64], [27, 3, 49], [27, 4, 11], [27, 5, 0], [28, 0, 114], [28, 1, 71], [28, 2, 55], [28, 3, 13], [28, 4, 0], [29, 0, 110], [29, 1, 59], [29, 2, 14], [29, 3, 0], [30, 0, 85], [30, 1, 13], [30, 2, 0], [31, 0, 18], [31, 1, 0], [32, 0, 1]];

    option = {
        title: {
            text: '用户留存率分析', left: 'center',
        },
        animation: false,
        grid: {
            height: '50%',
            y: '10%'
        },
        xAxis: {
            type: 'category',
            data: days,
            name: '安装日期',
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: after_days,
            name: '安装后日数',
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 121,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%'
        },
        series: [{
            name: '用户留存',
            type: 'heatmap',
            data: data,
            label: {
                normal: {
                    show: true
                }
            },
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    chart.setOption(option);
    $("#explore-container").append(div_chart);
}

$("#left-nav-userbehaviour #left-nav-sessionweekday").click(function () {
    activate_left_nav("sessionweekday");
    var div_chart = $("<div></div>").attr("style", "width: 600px; height:500px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title: {
            text: '周内session数目分布', left: 'center',
        },
        //右上角工具条
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        },
        yAxis: {
            type: 'value'
        },

        series: [
            {
                name: 'session数',
                type: 'bar',
                barWidth: '50%',
                data: [322, 342, 378, 435, 420, 378, 307]
            }
        ]
    };
    chart.setOption(option);
    $("#explore-container").append(div_chart);
});

$("#left-nav-userbehaviour #left-nav-paijuweekday").click(function () {
    activate_left_nav("paijuweekday");
    var div_chart = $("<div></div>").attr("style", "width: 600px; height:500px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title: {
            text: '周内局数数目分布', left: 'center',
        },
        //右上角工具条
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        },
        yAxis: {
            type: 'value'
        },

        series: [{
            name: '牌局数',
            type: 'bar',
            barWidth: '50%',
            data: [13065, 13308, 12847, 15359, 15094, 11891, 12156]
        }
        ]
    };
    chart.setOption(option);
    $("#explore-container").append(div_chart);
});

$("#left-nav-userbehaviour #left-nav-sessionnum").click(function () {
    $.getJSON('data/session_distribution.json', function (mydata) {
        activate_left_nav("sessionnum");
        var div_chart = $("<div></div>").attr("style", "width: 1000px; height:500px");
        var chart = echarts.init(div_chart[0]);

        var data = [];

        $.each(mydata, function (name, value) {
            now = new Date(name.substr(0, 4), name.substr(4, 2), name.substr(6, 2));
            data.push({
                time: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth(), now.getDate()].join('/'),
                    Math.round(value)
                ]
            })
        });

        var option = {
            title: {
                text: '每日session数量分布', left: 'center',
            },
            //右上角工具条
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    return params.value[0] + "</br>" + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                },
                splitNumber: 6,
                name: '时间',
                boundaryGap: false

            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },

            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        };

        chart.setOption(option);
        $("#explore-container").append(div_chart);
    });
});

$("#left-nav-userbehaviour #left-nav-paijunum").click(function () {
    $.getJSON('data/paiju.json', function (mydata) {
        activate_left_nav("paijunum");
        var div_chart = $("<div></div>").attr("style", "width: 1000px; height:500px");
        var chart = echarts.init(div_chart[0]);

        var data = [];

        $.each(mydata, function (name, value) {
            now = new Date(name.substr(0, 4), name.substr(4, 2), name.substr(6, 2));
            data.push({
                time: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth(), now.getDate()].join('/'),
                    Math.round(value)
                ]
            })
        });

        var option = {
            title: {
                text: '每日牌局数量分布', left: 'center',
            },
            //右上角工具条
            toolbox: {
                show : true,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {show: true, type: ['line', 'bar']},
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    return params.value[0] + "</br>" + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                },
                splitNumber: 6,
                name: '时间',
                boundaryGap: false

            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },

            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        };

        chart.setOption(option);
        $("#explore-container").append(div_chart);
    });
});

$("#left-nav-userbehaviour #left-nav-sessionhour").click(function () {
    activate_left_nav("sessionhour");
    var div_chart = $("<div></div>").attr("style", "width: 1000px; height:500px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title: {
            text: '周内session数目分布', left: 'center',
        },
        //右上角工具条
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true}
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                alignWithLabel: true
            }
        },
        yAxis: {
            type: 'value'
        },

        series: [
            {
                name: 'session数',
                type: 'bar',
                barWidth: '30%',
                data: [322, 342, 378, 435, 420, 378, 307]
            }
        ]
    };
    chart.setOption(option);
    $("#explore-container").append(div_chart);
});

var show_first_userbehaviour = show_userbehaviour_userreturning;
$("#left-nav-userbehaviour #left-nav-userreturning").click(show_userbehaviour_userreturning);

$("#nav-userbehaviour").click(function () {
    reset_active_nav();
    $("#nav-userbehaviour").addClass("active");
    $("#left-nav-userbehaviour").show();
    show_first_userbehaviour();
});

