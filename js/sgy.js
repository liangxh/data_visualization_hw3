function show_userbehaviour_userreturning() {
    activate_left_nav("userreturning");
    $("#explore-container").html("<h2>HELLO WORLD to USERRETURNING</h2>");
}


$("#left-nav-userbehaviour #left-nav-sessionnum").click(function () {
    $.getJSON('data/session_distribution.json', function (mydata) {
        activate_left_nav("sessionnum");
        var div_chart = $("<div></div>").attr("style", "width: 800px; height:400px");
        var chart = echarts.init(div_chart[0]);

        var data = [];
        // var now = +new Date(1997, 9, 3);
        // var oneDay = 24 * 3600 * 1000;
        //
        // function randomData() {
        //     now = new Date(+now + oneDay);
        //     value = value + Math.random() * 21 - 10;
        //     return {
        //         name: now.toString(),
        //         value: [
        //             [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
        //             Math.round(value)
        //         ]
        //     }
        // }


        $.each(mydata, function (name, value) {
            now = new Date(name.substr(0,4),name.substr(4,2),name.substr(6,2));
            data.push({
                time: now.toString(),
                value: [
                            [now.getFullYear(), now.getMonth(), now.getDate()].join('/'),
                            Math.round(value)
                ]
            })
        });


        // alert(data);
        // var value = Math.random() * 1000;
        // for (var i = 0; i < 1000; i++) {
        //     data.push(randomData());
        // }

        var option = {
            title: {
                text: '每日局数分析'
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

