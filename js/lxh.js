function refresh_chart(){
    var str_start_idx = $("#control-panel #start-idx").val();
    var str_interval = $("#control-panel #interval").val();
    var str_sort_range = $("#control-panel #sort-range").val();
    var str_window = $("#control-panel #window").val();

    var reg = /^\d+$/;

    var window = null;
    if (reg.test(str_window)){
        window = parseInt(str_window);
    } else {
        var str_window = $("#control-panel #window").val("10");
        alert("起始值必須是整数");
        return;
        window = 10;
    }

    var start_idx = null;
    if (reg.test(str_start_idx)){
        start_idx = parseInt(str_start_idx)
    } else {
        $("#control-panel #start-idx").val("0");
        alert("n必須是整数");
        return;
        start_idx=0;
    }

    var interval = null;
    if (reg.test(str_interval)){
        interval = parseInt(str_interval);
    } else {
        $("#control-panel #interval").val("1");
        alert("间距必須是整数");
        return;
        interval=1;
    }


    var range_st = null;
    var range_ed = null;
    if (! reg.test(str_sort_range)){
        var idx = str_sort_range.indexOf('-');
        if (idx == -1){
            $("#control-panel #sort-range").val("");
        } else {
            var part1 = str_sort_range.substring(0, idx);
            var part2 = str_sort_range.substring(idx + 1,);
            if (! reg.test(part1) || ! reg.test(part2)){
                $("#control-panel #sort-range").val("");
                alert("区间格式不符");
                return;
                range_st = -1;
                range_ed = -1;
            } else {
                range_st = parseInt(part1);
                range_ed = parseInt(part2);
                if (range_st > range_ed){
                    alert("区间格式不符");
                    return;
                }
            }
        }
    } else {
        range_st = parseInt(str_sort_range);
        range_ed = parseInt(str_sort_range);
    }

    //console.log(sort_range);

    var params = {
        window: window,
        start_idx: start_idx,
        interval: interval,
        range_st: range_st,
        range_ed: range_ed,
    }

    $.get('http://127.0.0.1:8000/test', params, function(ret){
        var div_chart = $("<div></div>").attr("style", "width: 1000px; height:550px");
        $("#chartframe").html(div_chart);

        var chart = echarts.init(div_chart[0]);
        var options = eval(ret);
        options.legend['formatter'] = function(name){
            return (name.length > 16 ? (name.slice(0,16)+"...") : name );
        }
        chart.setOption(options);
    });
}

function show_gamecrate_cratetest(){
    activate_left_nav("cratetest");
    $("#explore-container").append(
            '<div id="control-panel">'+
            '   <label style="padding:5px">首n局</label><input type="text" id="window" style="width:100px; margin-right:30px" value="10" />'+
            '   <label style="padding:5px">起始</label><input type="text" id="start-idx" style="width:100px; margin-right:30px" value="0"/>'+
            '   <label style="padding:5px">間隔</label><input type="text" id="interval" style="width:100px; margin-right:30px" value="1" />'+
            '   <label style="padding:5px">排序區間</label><input type="text" id="sort-range" style="width:400px; margin-right:30px" value="1-10" placeholder="如3或3-5"/>'+
            '   <input type="button" value="刷新" onclick="refresh_chart()" />'+
            '</div>'
        );

    var div_frame = $('<div id="chartframe"></div>');
    $("#explore-container").append(div_frame);
    refresh_chart();
}

/*
function show_gamecrate_cratetest(){
    activate_left_nav("cratetest");

    $.get('http://127.0.0.1:8000/test', function(ret){
        var data = eval(ret);

        var div_chart = $("<div></div>").attr("style", "width: 400px; height:400px");
        var chart = echarts.init(div_chart[0]);
        var option = {
            title: {
                text: '第n回合再玩率分佈'
            },
            tooltip: {},
            yAxis: {},
            xAxis: {data:[1, 2, 3, 4, 5, 6]},
            legend: {
                data:['line1', 'line2'],
                right:10,
            },
            series: [
                {name: 'line1', type: 'line', data: [5, 20, 36, 10, 10, 20]},
                {name: 'line2', type: 'line', data: [25, 15, 20, 5, 3, 20]}
            ]
        };
        chart.setOption(option);



        $("#explore-container").append(div_chart);
    });
}

*/


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


