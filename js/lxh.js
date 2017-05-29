function show_gamecrate_cratetest(){
    activate_left_nav("cratetest");

    var div_chart = $("<div></div>").attr("style", "width: 400px; height:400px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title: {
            text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
            data:['销量']
        },
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    };

    chart.setOption(option);
    $("#explore-container").append(div_chart);
}


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


var show_first_gamecrate = show_gamecrate_cratetest;
$("#left-nav-gamecrate #left-nav-cratetest").click(show_gamecrate_cratetest);

$("#nav-gamecrate").click(function(){
    reset_active_nav();
    $("#nav-gamecrate").addClass("active");
    $("#left-nav-gamecrate").show();
    show_first_gamecrate();
});


