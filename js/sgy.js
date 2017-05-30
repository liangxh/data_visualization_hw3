function show_userbehaviour_userreturning() {
    activate_left_nav("userreturning");
}

$("#left-nav-userbehaviour #left-nav-sessionweekday").click(function () {
    activate_left_nav("sessionweekday");
    var div_chart = $("<div></div>").attr("style", "width: 800px; height:400px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title: {
            text: '周内session数目分布'
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

$("#left-nav-userbehaviour #left-nav-paijuweekday").click(function () {
    activate_left_nav("paijuweekday");
    var div_chart = $("<div></div>").attr("style", "width: 800px; height:400px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title: {
            text: '周内局数数目分布'
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
            barWidth: '30%',
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
        var div_chart = $("<div></div>").attr("style", "width: 800px; height:400px");
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
                text: '每日session数量分布'
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



$("#left-nav-userbehaviour #left-nav-paijunnum").click(function () {
    $.getJSON('data/paiju.json', function (mydata) {
        activate_left_nav("paijunum");
        var div_chart = $("<div></div>").attr("style", "width: 800px; height:400px");
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
                text: '每日牌局数量分布'
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

/* TODO
 this is the EMPLATE for new entry page
 在index.html中<ul id="left-nav-behaviour">下参考现有的<li>添加自己的子页

 ```
 $("#left-nav-${COLUMN_NAME} #left-nav-${ENTRY_NAME}").click(function(){
 activate_left_nav("${ENTRY_NAME}");
 var data = Array(); //把准备好的數據直接放在这里或js的其他地方

 var html="HELLO WORLD";
 $("#explore-container").html(html);
 });
 ```

 ${COLUMN_NAME}为"userbehaviour"
 ${ENTRY_NAME} 为对应分析的東西,自己随便改名字
 */

var show_first_userbehaviour = show_userbehaviour_userreturning;
$("#left-nav-userbehaviour #left-nav-userreturning").click(show_userbehaviour_userreturning);

$("#nav-userbehaviour").click(function () {
    reset_active_nav();
    $("#nav-userbehaviour").addClass("active");
    $("#left-nav-userbehaviour").show();
    show_first_userbehaviour();
});

