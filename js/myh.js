function show_gameattr_gametime(){
    activate_left_nav("gametime");
    var div_chart = $("<div></div>").attr("style", "width: 800px; height:500px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title : {
            text: '牌局平均时长分布', left: 'center',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
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
        xAxis : [
            {
                name : '平均时长(sec)',
                type : 'value'
            }
        ],
        yAxis : [
            {
                name : '牌局数',
                type : 'value'
            }
        ],
        series : [
            {
                name:'牌局平均时长',
                type:'line',
                data:[
                    [0, 8], [1, 368], [2, 1086], [3, 388], [4, 166], [5, 91], [6, 47], [7, 54], [8, 39], [9, 27], [10, 28], [11, 30], [12, 14], [13, 30], [14, 15], [15, 10], [16, 13], [17, 10], [18, 17], [19, 14], [20, 11], [21, 4], [22, 12], [23, 9], [24, 8], [25, 2], [26, 16], [27, 9], [28, 8], [29, 9], [30, 15]

                ]
            }
        ]
    };

    chart.setOption(option);
    $("#explore-container").append(div_chart);
}

$("#left-nav-gameattr #left-nav-winrate").click(function () {
    activate_left_nav("winrate");
    var div_chart = $("<div></div>").attr("style", "width: 800px; height:500px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title : {
            text: '牌局胜率分布', left: 'center',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
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
        xAxis : [
            {
                name : '胜率(%)',
                type : 'value'
            }
        ],
        yAxis : [
            {
                name:'牌局数',
                type : 'value'
            }
        ],
        series : [
            {
                name:'牌局胜率',
                type:'line',
                data:[
                    [0, 1621], [1, 27], [2, 85], [3, 88], [4, 116], [5, 91], [6, 87], [7, 71], [8, 55], [9, 44], [10, 45], [11, 40], [12, 46], [13, 38], [14, 40], [15, 26], [16, 34], [17, 24], [18, 25], [19, 17], [20, 47], [21, 20], [22, 22], [23, 12], [24, 8], [25, 43], [26, 15], [27, 14], [28, 17], [29, 15], [30, 12], [31, 6], [32, 5], [33, 44], [34, 6], [35, 14], [36, 6], [37, 10], [38, 7], [39, 3], [40, 13], [41, 5], [42, 7], [43, 1], [44, 6], [45, 7], [46, 1], [47, 4], [48, 3], [50, 43], [51, 3], [52, 8], [54, 3], [55, 2], [56, 3], [58, 3], [59, 1], [60, 5], [61, 1], [62, 2], [63, 2], [64, 3], [66, 9], [72, 1], [75, 6], [76, 1], [100, 44]

                ]
            }
        ]
    };

    chart.setOption(option);
    $("#explore-container").append(div_chart);
});

$("#left-nav-gameattr #left-nav-gametime-winrate").click(function () {
    activate_left_nav("gametime-winrate");
    var div_chart = $("<div></div>").attr("style", "width: 800px; height:500px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title : {
            text: '牌局胜率时长联合分布', left: 'center',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
        },
        xAxis : [
            {
                name : '牌局胜率(%)',
                type : 'value'
            }
        ],
        yAxis : [
            {
                name : '牌局时长(sec)',
                type : 'value'
            }
        ],
        series : [
            {
                name:'胜率-时长',
                type:'scatter',
                data:[
                    {value:[1,101],symbolSize:5}, {value:[3,132],symbolSize:5}, {value:[0,59],symbolSize:5}, {value:[12,61],symbolSize:5}, {value:[6,26],symbolSize:5}, {value:[3,1],symbolSize:15}, {value:[0,7],symbolSize:20}, {value:[9,9],symbolSize:5}, {value:[0,54],symbolSize:5}, {value:[0,20],symbolSize:10}, {value:[12,85],symbolSize:5}, {value:[0,33],symbolSize:5}, {value:[20,90],symbolSize:5}, {value:[1,1],symbolSize:50}, {value:[27,3],symbolSize:5}, {value:[0,19],symbolSize:5}, {value:[29,107],symbolSize:5}, {value:[2,2],symbolSize:5}, {value:[27,109],symbolSize:5}, {value:[31,83],symbolSize:5}, {value:[6,1],symbolSize:10}, {value:[11,53],symbolSize:5}, {value:[0,74],symbolSize:5}, {value:[6,53],symbolSize:5}, {value:[6,80],symbolSize:5}, {value:[8,101],symbolSize:5}, {value:[4,9],symbolSize:10}, {value:[28,60],symbolSize:5}, {value:[39,67],symbolSize:5}, {value:[0,4],symbolSize:30}, {value:[0,130],symbolSize:5}, {value:[14,4],symbolSize:5}, {value:[0,40],symbolSize:5}, {value:[30,13],symbolSize:5}, {value:[0,21],symbolSize:15}, {value:[0,68],symbolSize:5}, {value:[11,3],symbolSize:5}, {value:[0,12],symbolSize:10}, {value:[5,21],symbolSize:5}, {value:[0,51],symbolSize:5}, {value:[0,80],symbolSize:5}, {value:[5,59],symbolSize:5}, {value:[39,3],symbolSize:5}, {value:[1,12],symbolSize:5}, {value:[17,54],symbolSize:5}, {value:[0,85],symbolSize:5}, {value:[4,5],symbolSize:5}, {value:[1,22],symbolSize:5}, {value:[0,1],symbolSize:190}, {value:[1,47],symbolSize:5}, {value:[36,87],symbolSize:5}, {value:[18,6],symbolSize:5}, {value:[5,64],symbolSize:5}, {value:[1,2],symbolSize:15}, {value:[25,70],symbolSize:5}, {value:[0,70],symbolSize:5}, {value:[0,25],symbolSize:10}, {value:[15,69],symbolSize:5}, {value:[13,58],symbolSize:5}, {value:[4,2],symbolSize:10}, {value:[35,119],symbolSize:5}, {value:[1,195],symbolSize:5}, {value:[14,45],symbolSize:5}, {value:[21,72],symbolSize:5}, {value:[11,71],symbolSize:5}, {value:[0,15],symbolSize:10}, {value:[21,109],symbolSize:5}, {value:[35,104],symbolSize:5}, {value:[2,8],symbolSize:5}, {value:[2,12],symbolSize:5}, {value:[22,83],symbolSize:5}, {value:[3,6],symbolSize:5}, {value:[0,128],symbolSize:5}, {value:[0,56],symbolSize:5}, {value:[6,61],symbolSize:5}, {value:[19,52],symbolSize:5}, {value:[12,98],symbolSize:5}, {value:[9,109],symbolSize:5}, {value:[11,113],symbolSize:5}, {value:[6,75],symbolSize:5}, {value:[12,53],symbolSize:5}, {value:[25,49],symbolSize:5}, {value:[13,33],symbolSize:5}, {value:[45,84],symbolSize:5}, {value:[2,1],symbolSize:5}, {value:[5,57],symbolSize:5}, {value:[0,30],symbolSize:5}, {value:[0,23],symbolSize:5}, {value:[0,53],symbolSize:5}, {value:[14,176],symbolSize:5}, {value:[3,10],symbolSize:5}, {value:[11,37],symbolSize:5}, {value:[0,16],symbolSize:10}, {value:[9,2],symbolSize:5}, {value:[24,77],symbolSize:5}, {value:[2,9],symbolSize:5}, {value:[0,38],symbolSize:10}, {value:[27,89],symbolSize:5}, {value:[0,3],symbolSize:50}, {value:[0,217],symbolSize:5}, {value:[11,28],symbolSize:5}, {value:[15,230],symbolSize:5}, {value:[3,25],symbolSize:5}, {value:[22,61],symbolSize:5}, {value:[4,14],symbolSize:5}, {value:[37,89],symbolSize:5}, {value:[1,65],symbolSize:5}, {value:[0,106],symbolSize:5}, {value:[0,72],symbolSize:5}, {value:[3,39],symbolSize:5}, {value:[6,5],symbolSize:5}, {value:[22,59],symbolSize:5}, {value:[5,63],symbolSize:5}, {value:[20,94],symbolSize:5}, {value:[1,5],symbolSize:5}, {value:[2,113],symbolSize:5}, {value:[4,4],symbolSize:5}, {value:[9,158],symbolSize:5}, {value:[19,15],symbolSize:5}, {value:[0,17],symbolSize:15}, {value:[0,93],symbolSize:5}, {value:[5,22],symbolSize:5}, {value:[4,82],symbolSize:5}, {value:[25,127],symbolSize:5}, {value:[14,10],symbolSize:5}, {value:[8,4],symbolSize:5}, {value:[0,49],symbolSize:5}, {value:[12,72],symbolSize:10}, {value:[4,42],symbolSize:5}, {value:[7,5],symbolSize:5}, {value:[29,115],symbolSize:5}, {value:[1,3],symbolSize:10}, {value:[5,40],symbolSize:5}, {value:[0,24],symbolSize:5}, {value:[12,1],symbolSize:5}, {value:[12,110],symbolSize:5}, {value:[0,55],symbolSize:5}, {value:[12,39],symbolSize:5}, {value:[4,119],symbolSize:5}, {value:[0,41],symbolSize:10}, {value:[9,133],symbolSize:5}, {value:[20,32],symbolSize:5}, {value:[16,156],symbolSize:5}, {value:[8,52],symbolSize:5}, {value:[0,79],symbolSize:5}, {value:[25,112],symbolSize:5}, {value:[5,88],symbolSize:5}, {value:[8,1],symbolSize:15}, {value:[34,41],symbolSize:5}, {value:[6,72],symbolSize:5}, {value:[5,1],symbolSize:20}, {value:[13,38],symbolSize:5}, {value:[0,5],symbolSize:20}, {value:[28,124],symbolSize:5}, {value:[28,89],symbolSize:5}, {value:[1,53],symbolSize:10}, {value:[3,80],symbolSize:5}, {value:[0,18],symbolSize:5}, {value:[1,7],symbolSize:5}, {value:[5,61],symbolSize:5}, {value:[2,93],symbolSize:5}, {value:[40,5],symbolSize:5}, {value:[3,37],symbolSize:5}, {value:[0,62],symbolSize:5}, {value:[10,104],symbolSize:5}, {value:[7,54],symbolSize:5}, {value:[7,2],symbolSize:5}, {value:[10,136],symbolSize:5}, {value:[0,11],symbolSize:10}, {value:[9,95],symbolSize:5}, {value:[11,141],symbolSize:5}, {value:[0,29],symbolSize:15}, {value:[25,192],symbolSize:5}, {value:[0,6],symbolSize:20}, {value:[6,40],symbolSize:5}, {value:[9,115],symbolSize:5}, {value:[2,48],symbolSize:5}, {value:[8,6],symbolSize:5}, {value:[21,58],symbolSize:5}, {value:[45,79],symbolSize:5}, {value:[0,2],symbolSize:95}, {value:[4,53],symbolSize:5}, {value:[4,15],symbolSize:5}, {value:[3,26],symbolSize:5}, {value:[1,54],symbolSize:5}, {value:[16,63],symbolSize:5}, {value:[25,1],symbolSize:5}, {value:[33,57],symbolSize:5}, {value:[13,47],symbolSize:5}, {value:[10,34],symbolSize:5}, {value:[16,13],symbolSize:5}, {value:[10,50],symbolSize:5}, {value:[5,33],symbolSize:5}, {value:[0,57],symbolSize:5}, {value:[10,2],symbolSize:5}, {value:[1,29],symbolSize:5}, {value:[5,8],symbolSize:5}, {value:[20,63],symbolSize:5}, {value:[24,101],symbolSize:5}, {value:[0,10],symbolSize:20}, {value:[12,2],symbolSize:5}, {value:[0,90],symbolSize:5}, {value:[3,43],symbolSize:5}, {value:[7,93],symbolSize:5}

                ]
            }
        ]
    };

    chart.setOption(option);
    $("#explore-container").append(div_chart);
});

$("#left-nav-gameattr #left-nav-replayrate").click(function () {
    activate_left_nav("replayrate");
    var div_chart = $("<div></div>").attr("style", "width: 800px; height:500px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title : {
            text: '牌局重玩率分布', left: 'center',
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross'
            }
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
        xAxis : [
            {
                name : '重玩率(%)',
                type : 'value'
            }
        ],
        yAxis : [
            {
                name:'牌局数',
                type : 'value'
            }
        ],
        series : [
            {
                name:'牌局重玩率(%)',
                type:'line',
                data:[
                    [0, 2645], [1, 64], [2, 93], [3, 66], [4, 47], [5, 37], [6, 25], [7, 21], [8, 16], [9, 7], [10, 11], [11, 5], [12, 7], [13, 2], [14, 5], [15, 2], [16, 4], [17, 2], [18, 2], [20, 4], [21, 2], [22, 2], [25, 8], [27, 1], [30, 1], [33, 7], [38, 1], [44, 1], [50, 12], [53, 1], [66, 1], [71, 1], [75, 1], [80, 2], [83, 2], [96, 1], [100, 24]

                ]
            }
        ]
    };

    chart.setOption(option);
    $("#explore-container").append(div_chart);
});

$("#left-nav-gameattr #left-nav-replayrate-winrate").click(function () {
    activate_left_nav("replayrate-winrate");
    var div_chart = $("<div></div>").attr("style", "width: 800px; height:500px");
    var chart = echarts.init(div_chart[0]);

    var option = {
        title : {
            text: '牌局胜率重玩率联合分布', left: 'center',
        },
        tooltip : {
            trigger: 'axis'
        },
        xAxis : [
            {
                name : '胜率(%)',
                type : 'value'
            }
        ],
        yAxis : [
            {
                name : '重玩率(%)',
                type : 'value'
            }
        ],
        series : [
            {
                name : '胜率-再玩率',
                type:'scatter',
                data:[
                    {value:[1,8],symbolSize:5}, {value:[6,9],symbolSize:5}, {value:[11,3],symbolSize:5}, {value:[3,1],symbolSize:25}, {value:[0,7],symbolSize:20}, {value:[0,44],symbolSize:5}, {value:[1,1],symbolSize:30}, {value:[27,3],symbolSize:5}, {value:[12,2],symbolSize:10}, {value:[4,0],symbolSize:30}, {value:[13,0],symbolSize:5}, {value:[10,5],symbolSize:10}, {value:[8,3],symbolSize:5}, {value:[29,4],symbolSize:5}, {value:[9,3],symbolSize:15}, {value:[15,3],symbolSize:5}, {value:[24,14],symbolSize:5}, {value:[8,0],symbolSize:15}, {value:[19,3],symbolSize:5}, {value:[25,3],symbolSize:5}, {value:[5,2],symbolSize:15}, {value:[3,0],symbolSize:15}, {value:[0,4],symbolSize:10}, {value:[37,2],symbolSize:5}, {value:[14,4],symbolSize:5}, {value:[7,1],symbolSize:5}, {value:[11,0],symbolSize:15}, {value:[0,21],symbolSize:5}, {value:[2,4],symbolSize:5}, {value:[1,0],symbolSize:65}, {value:[34,3],symbolSize:5}, {value:[4,1],symbolSize:15}, {value:[13,1],symbolSize:5}, {value:[9,0],symbolSize:5}, {value:[13,6],symbolSize:5}, {value:[1,17],symbolSize:5}, {value:[5,5],symbolSize:5}, {value:[30,3],symbolSize:5}, {value:[0,1],symbolSize:135}, {value:[14,7],symbolSize:5}, {value:[1,2],symbolSize:10}, {value:[12,0],symbolSize:15}, {value:[27,1],symbolSize:5}, {value:[2,0],symbolSize:20}, {value:[4,2],symbolSize:10}, {value:[39,0],symbolSize:5}, {value:[16,0],symbolSize:5}, {value:[12,8],symbolSize:5}, {value:[2,8],symbolSize:5}, {value:[3,18],symbolSize:5}, {value:[0,6],symbolSize:10}, {value:[39,7],symbolSize:5}, {value:[1,9],symbolSize:5}, {value:[11,2],symbolSize:10}, {value:[7,7],symbolSize:5}, {value:[2,1],symbolSize:5}, {value:[11,5],symbolSize:5}, {value:[0,9],symbolSize:5}, {value:[0,30],symbolSize:5}, {value:[6,0],symbolSize:20}, {value:[12,3],symbolSize:5}, {value:[27,0],symbolSize:5}, {value:[33,7],symbolSize:5}, {value:[4,3],symbolSize:5}, {value:[8,2],symbolSize:5}, {value:[14,9],symbolSize:5}, {value:[0,3],symbolSize:15}, {value:[9,5],symbolSize:5}, {value:[28,1],symbolSize:5}, {value:[22,4],symbolSize:5}, {value:[25,0],symbolSize:15}, {value:[14,1],symbolSize:5}, {value:[3,5],symbolSize:5}, {value:[6,5],symbolSize:5}, {value:[7,3],symbolSize:5}, {value:[21,8],symbolSize:5}, {value:[1,5],symbolSize:5}, {value:[36,3],symbolSize:5}, {value:[21,10],symbolSize:5}, {value:[12,6],symbolSize:5}, {value:[10,1],symbolSize:5}, {value:[5,7],symbolSize:5}, {value:[31,3],symbolSize:5}, {value:[25,7],symbolSize:5}, {value:[24,10],symbolSize:5}, {value:[8,4],symbolSize:5}, {value:[0,0],symbolSize:440}, {value:[20,4],symbolSize:5}, {value:[1,3],symbolSize:10}, {value:[28,4],symbolSize:10}, {value:[12,1],symbolSize:5}, {value:[45,7],symbolSize:5}, {value:[16,1],symbolSize:5}, {value:[6,6],symbolSize:5}, {value:[2,7],symbolSize:5}, {value:[17,5],symbolSize:5}, {value:[10,0],symbolSize:5}, {value:[5,6],symbolSize:5}, {value:[9,1],symbolSize:5}, {value:[8,1],symbolSize:5}, {value:[5,1],symbolSize:20}, {value:[0,5],symbolSize:15}, {value:[19,0],symbolSize:5}, {value:[20,1],symbolSize:10}, {value:[0,96],symbolSize:5}, {value:[16,4],symbolSize:5}, {value:[9,13],symbolSize:5}, {value:[40,5],symbolSize:5}, {value:[3,8],symbolSize:10}, {value:[25,10],symbolSize:5}, {value:[10,3],symbolSize:5}, {value:[6,3],symbolSize:10}, {value:[0,11],symbolSize:5}, {value:[12,4],symbolSize:5}, {value:[35,0],symbolSize:5}, {value:[22,1],symbolSize:10}, {value:[20,9],symbolSize:5}, {value:[15,1],symbolSize:5}, {value:[0,2],symbolSize:30}, {value:[5,0],symbolSize:25}, {value:[18,1],symbolSize:5}, {value:[21,0],symbolSize:5}, {value:[6,4],symbolSize:5}, {value:[7,0],symbolSize:5}, {value:[45,2],symbolSize:5}, {value:[35,1],symbolSize:5}, {value:[29,1],symbolSize:5}, {value:[0,10],symbolSize:10}, {value:[13,3],symbolSize:5}

                ]
            }
        ]
    };

    chart.setOption(option);
    $("#explore-container").append(div_chart);
});

$("#left-nav-userbehaviour #left-nav-paijuhour").click(function () {
    activate_left_nav("paijuhour");
    var div_chart = $("<div></div>").attr("style", "width: 800px; height:500px");
    var chart = echarts.init(div_chart[0]);

    var data = echarts.dataTool.prepareBoxplotData(
        [[379, 531, 367, 213, 286, 98, 232, 367, 164, 23, 11, 0, 0, 0, 17, 68, 223, 336, 234, 251, 56, 91, 160, 288, 152, 218, 197, 702, 383, 87, 286, 138, 233], [268, 270, 382, 276, 346, 62, 310, 433, 204, 61, 74, 0, 0, 0, 88, 51, 743, 456, 387, 251, 130, 45, 48, 339, 183, 160, 192, 227, 231, 12, 259, 178, 106], [240, 264, 378, 200, 193, 200, 277, 435, 298, 18, 31, 0, 0, 0, 64, 12, 814, 149, 282, 138, 108, 56, 221, 298, 350, 221, 677, 202, 166, 29, 106, 90, 93], [208, 413, 298, 286, 250, 216, 207, 231, 243, 18, 36, 0, 0, 0, 63, 10, 472, 463, 281, 253, 185, 39, 210, 192, 357, 228, 532, 300, 214, 76, 294, 201, 191], [120, 349, 391, 226, 205, 166, 172, 286, 322, 4, 19, 19, 0, 11, 6, 9, 876, 379, 325, 396, 212, 54, 143, 160, 213, 266, 186, 261, 280, 83, 254, 232, 237], [153, 332, 400, 266, 196, 194, 127, 420, 353, 0, 11, 0, 0, 26, 1, 2, 705, 226, 264, 189, 254, 133, 193, 320, 216, 146, 312, 95, 185, 24, 224, 135, 182], [359, 399, 208, 262, 124, 110, 204, 376, 222, 0, 0, 0, 0, 0, 6, 7, 259, 123, 238, 397, 154, 24, 135, 425, 141, 171, 254, 159, 157, 35, 223, 195, 79], [231, 192, 198, 240, 73, 228, 91, 303, 91, 17, 2, 3, 0, 0, 27, 8, 157, 299, 248, 155, 103, 0, 183, 181, 97, 182, 152, 73, 75, 44, 174, 197, 74], [74, 77, 137, 63, 33, 61, 39, 194, 114, 4, 0, 4, 0, 0, 47, 46, 54, 210, 296, 73, 79, 0, 38, 67, 149, 165, 46, 32, 65, 0, 30, 45, 68], [77, 64, 35, 26, 4, 65, 33, 8, 12, 20, 3, 0, 11, 0, 3, 13, 66, 129, 80, 18, 38, 0, 24, 0, 11, 67, 39, 0, 37, 2, 1, 40, 51], [3, 95, 33, 6, 41, 6, 0, 21, 28, 0, 11, 0, 0, 0, 16, 0, 83, 12, 0, 4, 24, 0, 16, 3, 3, 0, 9, 0, 9, 6, 3, 13, 12], [15, 18, 10, 5, 76, 28, 0, 8, 61, 2, 10, 0, 0, 0, 9, 8, 13, 14, 12, 26, 53, 0, 12, 0, 2, 10, 9, 1, 0, 2, 0, 6, 7], [0, 3, 6, 0, 91, 4, 3, 0, 17, 24, 17, 0, 0, 0, 2, 24, 0, 86, 6, 47, 0, 0, 1, 0, 1, 35, 1, 31, 3, 24, 2, 0, 9], [2, 13, 49, 13, 18, 28, 0, 2, 5, 80, 32, 18, 0, 0, 0, 0, 77, 25, 53, 54, 6, 0, 24, 10, 26, 13, 0, 14, 9, 4, 1, 3, 51], [36, 23, 80, 18, 99, 97, 1, 71, 17, 21, 15, 29, 0, 0, 15, 0, 16, 34, 65, 58, 25, 0, 42, 12, 55, 5, 87, 14, 30, 4, 31, 8, 65], [24, 123, 215, 121, 41, 103, 73, 95, 126, 8, 50, 0, 0, 0, 30, 21, 48, 20, 92, 69, 57, 0, 172, 65, 118, 46, 90, 41, 136, 95, 73, 71, 104], [59, 217, 119, 226, 165, 124, 69, 82, 210, 44, 13, 11, 0, 0, 18, 59, 75, 107, 113, 92, 59, 0, 144, 163, 159, 82, 15, 258, 118, 18, 97, 101, 192], [51, 269, 54, 101, 131, 157, 126, 87, 207, 17, 0, 16, 0, 0, 0, 0, 114, 58, 85, 69, 59, 0, 155, 189, 251, 151, 106, 113, 64, 88, 120, 79, 85], [108, 218, 211, 196, 99, 107, 143, 339, 153, 8, 16, 0, 0, 0, 24, 31, 164, 106, 153, 57, 134, 0, 20, 125, 172, 158, 106, 102, 58, 67, 147, 93, 67], [73, 397, 443, 150, 209, 77, 109, 361, 347, 12, 69, 0, 0, 0, 7, 10, 151, 256, 144, 84, 66, 0, 72, 111, 238, 221, 91, 206, 133, 34, 245, 193, 205], [126, 147, 305, 32, 92, 25, 273, 688, 255, 46, 38, 0, 0, 0, 10, 8, 217, 208, 148, 156, 121, 0, 90, 141, 206, 35, 281, 112, 119, 69, 121, 140, 180], [158, 342, 162, 112, 246, 135, 190, 149, 301, 48, 28, 3, 0, 0, 32, 30, 143, 402, 73, 153, 29, 0, 177, 95, 263, 307, 262, 70, 68, 91, 214, 350, 81], [218, 371, 274, 95, 229, 163, 342, 415, 227, 15, 54, 3, 0, 0, 47, 34, 110, 92, 155, 121, 56, 0, 292, 47, 97, 312, 221, 326, 150, 30, 216, 65, 132], [264, 244, 382, 150, 320, 224, 227, 478, 326, 56, 30, 5, 0, 0, 18, 42, 262, 426, 241, 140, 197, 0, 404, 118, 139, 418, 180, 356, 204, 425, 433, 109, 125]]
    );

    var option = {
        title: [
            {
                text: '24小时牌局数量分布',
                left: 'center',
            },
            {
                text: 'upper: Q3 + 1.5 * IRQ \nlower: Q1 - 1.5 * IRQ',
                borderColor: '#999',
                borderWidth: 1,
                textStyle: {
                    fontSize: 14
                },
                left: '10%',
                top: '90%'
            }
        ],
        grid: {
            left: '10%',
            right: '10%',
            bottom: '15%'
        },
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'shadow'
            }
        },
        xAxis: {
            type: 'category',
            name: '时',
            data: data.axisData
        },
        yAxis: {
            type: 'value',
            name: '牌局数',
            splitArea: {
                show: true
            }
        },
        series: [
            {
                name: 'boxplot',
                type: 'boxplot',
                data: data.boxData,
                tooltip: {
                    formatter: function (param) {
                        return [
                            'Hour ' + param.name + ': ',
                            'upper: ' + param.data[4],
                            'Q3: ' + param.data[3],
                            'median: ' + param.data[2],
                            'Q1: ' + param.data[1],
                            'lower: ' + param.data[0]
                        ].join('<br/>')
                    }
                }
            },
            {
                name: 'outlier',
                type: 'scatter',
                data: data.outliers
            }
        ]
    };

    chart.setOption(option);
    $("#explore-container").append(div_chart);
});

$("#left-nav-userbehaviour #left-nav-rishi").click(function () {
    activate_left_nav("rishi");
    var div_chart = $("<div></div>").attr("style", "width: 1100px; height:800px");
    var chart = echarts.init(div_chart[0]);

    var day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    var time = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    var data = [
        [0, 0, 728], [0, 1, 730], [0, 2, 814], [0, 3, 788], [0, 4, 1025], [0, 5, 1717], [0, 6, 989], [1, 0, 780], [1, 1, 738], [1, 2, 1516], [1, 3, 927], [1, 4, 1206], [1, 5, 854], [1, 6, 751], [2, 0, 870], [2, 1, 1324], [2, 2, 1369], [2, 3, 728], [2, 4, 856], [2, 5, 697], [2, 6, 766], [3, 0, 735], [3, 1, 989], [3, 2, 977], [3, 3, 1182], [3, 4, 1074], [3, 5, 1157], [3, 6, 853], [4, 0, 818], [4, 1, 647], [4, 2, 1247], [4, 3, 901], [4, 4, 1202], [4, 5, 1273], [4, 6, 774], [5, 0, 759], [5, 1, 928], [5, 2, 1222], [5, 3, 732], [5, 4, 1023], [5, 5, 824], [5, 6, 796], [6, 0, 621], [6, 1, 747], [6, 2, 814], [6, 3, 561], [6, 4, 864], [6, 5, 1034], [6, 6, 805], [7, 0, 381], [7, 1, 691], [7, 2, 438], [7, 3, 680], [7, 4, 817], [7, 5, 497], [7, 6, 594], [8, 0, 322], [8, 1, 347], [8, 2, 201], [8, 3, 422], [8, 4, 508], [8, 5, 254], [8, 6, 256], [9, 0, 132], [9, 1, 125], [9, 2, 73], [9, 3, 168], [9, 4, 167], [9, 5, 133], [9, 6, 179], [10, 0, 28], [10, 1, 36], [10, 2, 143], [10, 3, 27], [10, 4, 49], [10, 5, 111], [10, 6, 63], [11, 0, 73], [11, 1, 53], [11, 2, 98], [11, 3, 23], [11, 4, 28], [11, 5, 52], [11, 6, 90], [12, 0, 79], [12, 1, 29], [12, 2, 93], [12, 3, 111], [12, 4, 14], [12, 5, 90], [12, 6, 21], [13, 0, 98], [13, 1, 30], [13, 2, 105], [13, 3, 68], [13, 4, 106], [13, 5, 150], [13, 6, 73], [14, 0, 44], [14, 1, 255], [14, 2, 142], [14, 3, 111], [14, 4, 184], [14, 5, 189], [14, 6, 148], [15, 0, 253], [15, 1, 309], [15, 2, 184], [15, 3, 354], [15, 4, 451], [15, 5, 337], [15, 6, 439], [16, 0, 405], [16, 1, 280], [16, 2, 421], [16, 3, 510], [16, 4, 430], [16, 5, 770], [16, 6, 393], [17, 0, 501], [17, 1, 350], [17, 2, 434], [17, 3, 498], [17, 4, 338], [17, 5, 552], [17, 6, 329], [18, 0, 462], [18, 1, 583], [18, 2, 412], [18, 3, 541], [18, 4, 604], [18, 5, 444], [18, 6, 336], [19, 0, 689], [19, 1, 539], [19, 2, 478], [19, 3, 678], [19, 4, 1025], [19, 5, 892], [19, 6, 413], [20, 0, 609], [20, 1, 1002], [20, 2, 460], [20, 3, 515], [20, 4, 714], [20, 5, 595], [20, 6, 494], [21, 0, 846], [21, 1, 576], [21, 2, 516], [21, 3, 868], [21, 4, 799], [21, 5, 649], [21, 6, 460], [22, 0, 896], [22, 1, 833], [22, 2, 433], [22, 3, 314], [22, 4, 710], [22, 5, 953], [22, 6, 770], [23, 0, 1027], [23, 1, 924], [23, 2, 718], [23, 3, 1140], [23, 4, 1165], [23, 5, 870], [23, 6, 1099]

    ];

    var option = {
        title: {
            text: '用户游戏的日时分布', left: 'center',
        },
        animation: false,
        grid: {
            height: '50%',
            y: '10%'
        },
        xAxis: {
            type: 'category',
            data: time,
            name: '时',
            splitArea: {
                show: true
            }
        },
        yAxis: {
            type: 'category',
            data: day,
            splitArea: {
                show: true
            }
        },
        visualMap: {
            min: 0,
            max: 1717,
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%'
        },
        series: [{
            name: '用户日时',
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
});

/* TODO
    在index.html中<ul id="left-nav-gameattr">下参考现有的<li>添加自己的子页

    ```
    $("#left-nav-${COLUMN_NAME} #left-nav-${ENTRY_NAME}").click(function(){
        activate_left_nav("${ENTRY_NAME}");
        var data = Array(); //把准备好的數據直接放在这里或js的其他地方

        var html="HELLO WORLD";
        $("#explore-container").html(html);
    });
    ```

${COLUMN_NAME}为"gameattr"
${ENTRY_NAME} 为对应分析的東西,自己随便改名字
*/

var show_first_gameattr = show_gameattr_gametime;
$("#left-nav-gameattr #left-nav-gametime").click(show_first_gameattr);

$("#nav-gameattr").click(function(){
    reset_active_nav();
    $("#nav-gameattr").addClass("active");
    $("#left-nav-gameattr").show();
    show_first_gameattr();
});

