//水球图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".model2"));

// ECharts 水球图插件，需要额外插件脚本，参见上方“脚本”
// 完整配置参数参见：https://github.com/ecomfe/echarts-liquidfill

var option = {
    series: [{
        type: 'liquidFill',
        data: [0, 0, 0, 0],
        animationDuration: 0,
        animationDurationUpdate: 2000,
        animationEasingUpdate: 'cubicOut',
        color: ['#1c58a3', '#1c58a3', '#1c58a3','#1c58a3'],
                    outline: {
             
             itemStyle: {
                 borderWidth: 10,
                 borderColor: '#1c58a3'}},
                 

    }]
};



setTimeout(function () {
    myChart.setOption({
        series: [{
            type: 'liquidFill',
            data: [0.8, 0.6, 0.4, 0.2],
            backgroundStyle: {
                
                shadowColor: 'rgba(0, 0, 0, 0.4)',
                shadowBlur: 0
            },
            color: ['#8182b9','#eec0d9','#1c58a3','#212d5b'],
            outline: {
             
             itemStyle: {
                 borderWidth: 10,
                 borderColor: '#1c58a3'}}
                   

        }]
    })
}, 2000);

   
  
  
    // 3. 把配置和数据给实例对象
    myChart.setOption(option);
  
    // 重新把配置好的新数据给实例对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  })();

  //疫情地图


//旭日图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".model5"));
    var data = [{
        name: '正面',
        children: [{
            name: '娱乐',
            value: 15,
            children: [{
                name: '好玩',
                value: 4
            }, {
                name: '可玩性高',
                value: 5,
                children: [{
                    name: '小孩子喜好',
                    value: 4
                }]
            }, {
                name: '放松',
                value: 4
            }]
        }, {
            name: '设施',
            value: 10,
            children: [{
                name: '娱乐项目',
                value: 5
            }, {
                name: '建筑',
                value: 3
            }]
        }]
    }, {
        name: '负面',
        value:11,
        children: [{
            name: '人流',
            children: [{
                name: '人太多',
                value: 5
            }, {
                name: '排队',
                value: 4
            }]
        }]
    }];
    
    var option = {
        title: {
            text: "景点评论分析",
            textStyle: {
                color: '#eee'
            },
            left: '5%',
            top:'9%',
        },
        series: {
            type: 'sunburst',
            //highlightPolicy: 'ancestor',
            data: data,
            radius: [0, '90%'],
            center:['50%','54%'],
            label: {
                rotate: 'radial',
                color:'rgba(212,218,220,.7)',
                fontSize:13,
            },
            itemStyle:{
                borderColor:'rgb(108,1,243)',
                borderWidth:1,
                shadowBlur:10,
                shadowColor:'rgba(162,1,243,.5)',
            },
            levels:[
                {
                    itemStyle:{
                        color:'rgba(108,100,243,.3)',
                    }
                },
                {
                    itemStyle:{
                        color:'rgba(108,1,243,.3)',
                    }
                },
                {
                    itemStyle:{
                        color:'rgba(162,1,243,.3)',
                    }
                },
                {
                    itemStyle:{
                        color:'rgba(1,94,243,.3)',
                    }
                },
                {
                    itemStyle:{
                        color:'rgba(124,94,243,.3)',
                    }
                }
            ]
        }
    };
    
      
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      
        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      })();

//折线图
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".model4"));

    var option = {
        title: {
            text: '评论趋势',
            top:'25pt',
            left:'25pt',
            textStyle: {
                color: '#eee'
            },
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            orient:'vertical' ,
            data: ['正向评价', '负向评价'],
            top:'35pt',
            left:'75%',
            textStyle:{
                color:'rgba(255,255,255,.8)',
                fontWeight:'normal',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show:false
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,//坐标轴两边留白
            data: ['13', '14', '15','16','17','18','19','20','21', '22', '23','24'],
            axisLabel: { //坐标轴刻度标签的相关设置。
                interval: 0,//设置为 1，表示『隔一个标签显示一个标签』
            //	margin:15,
                textStyle: {
                    color: '#a8aab0',
                    fontStyle: 'normal',
                    fontFamily: '微软雅黑',
                    fontSize: 12,
                },
                formatter:function(params) {
                    var newParamsName = "";
                    var paramsNameNumber = params.length;
                    var provideNumber = 4;  //一行显示几个字
                    var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
                    if (paramsNameNumber > provideNumber) {
                        for (var p = 0; p < rowNumber; p++) {
                            var tempStr = "";
                            var start = p * provideNumber;
                            var end = start + provideNumber;
                            if (p == rowNumber - 1) {
                                tempStr = params.substring(start, paramsNameNumber);
                            } else {
                                tempStr = params.substring(start, end) + "\n";
                            }
                            newParamsName += tempStr;
                        }
    
                    } else {
                        newParamsName = params;
                    }
                    return newParamsName
                },
                //rotate:50,
            },
            axisTick:{//坐标轴刻度相关设置。
                show: false,
            },
            axisLine:{//坐标轴轴线相关设置
                show:false,
            },
            splitLine: { //坐标轴在 grid 区域中的分隔线。
                show: false,
                lineStyle: {
                    color: '#E5E9ED',
                // 	opacity:0.1
                }
            }
        },
        yAxis: [
            {
                type: 'value',
                splitNumber: 5,
                axisLabel: {
                    textStyle: {
                        color: '#a8aab0',
                        fontStyle: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 12,
                    }
                },
                axisLine:{
                    show: false
                },
                axisTick:{
                    show: false
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: '#E5E9ED',
                    // 	opacity:0.1
                    }
                }
    
            }
        ],
        series: [
            {
                name: '正向评价',
                type: 'line',
                itemStyle: {
                    normal: {
                        color:'#A201F3',
                        lineStyle: {
                            color: "#A201F3",
                            width:3
                        },
                        areaStyle: { 
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(150,2,213,0)'
                            }, {
                                offset: 1,
                                color: 'rgba(150,2,213,0.45)'
                            }]),
                        }
                    }
                },
                data: [ 17, 14, 11, 15, 12, 9, 14, 23, 14, 15, 10, 14]
            },
            {
                name: '负向评价',
                type: 'line',
                itemStyle: {
                    normal: {
                        color:'#6D02F4',
                        lineStyle: {
                            color: "#6D02F4",
                            width:3
                        },
                        areaStyle: { 
                            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: 'rgba(108,1,243,0)'
                            }, {
                                offset: 1,
                                color: 'rgba(108,1,243,0.35)'
                            }]),
                        }
                    }
                },
                data: [4,4,3,2,2,3,2,7,1,1,0,0]
            }
        ]
    };
    
    
      
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      
        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      })();


//单轴图
(function() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.querySelector(".model7"));
    
        var hours = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

        // Generate data
var category = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
var dottedBase = +new Date();
var lineData = [164*7,423*7,314*7,205*7,629*7,321*7,153*7,187*7,228*7,522*7,151*7,172*7];
var barData = [164,423,314,205,629,321,153,187,228,522,151,172];



// option
option = {
    backgroundColor: '#fff',
    title: {
        text: '人流趋势',
        top:'0pt',
        left:'25pt',
        textStyle: {
            color: '#666'
        },
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                backgroundColor: '#111'
            }
        }
    },
    legend: {
        data: ['预计人数', '评论数'],
        textStyle: {
            color: '#ccc'
        }
    },
    xAxis: {
        data: category,
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    yAxis: {
        splitLine: {show: false},
        axisLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: [{
        name: '预计人数',
        type: 'line',
        smooth: true,
        showAllSymbol: true,
        symbol: 'emptyCircle',
        symbolSize: 15,
        data: lineData
    }, {
        name: '评论数',
        type: 'bar',
        barWidth: 10,
        itemStyle: {
            normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: '#f478d4'},
                        {offset: 1, color: '#c3eef6'}
                    ]
                )
            }
        },
        data: barData
    }, {
        name: 'line',
        type: 'bar',
        barGap: '-100%',
        barWidth: 10,
        itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        {offset: 0, color: 'rgba(20,200,212,0.5)'},
                        {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                        {offset: 1, color: 'rgba(20,200,212,0)'}
                    ]
                )
            }
        },
        z: -12,
        data: lineData
    }, {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        itemStyle: {
            normal: {
                color: '#dfd7df'
            }
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        z: -10,
        data: lineData
    }]
};
        
          
            // 3. 把配置和数据给实例对象
            myChart.setOption(option);
          
            // 重新把配置好的新数据给实例对象
            myChart.setOption(option);
            window.addEventListener("resize", function() {
              myChart.resize();
            });
          })();

//柱状图



//词云
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".model16"));
//跳转代码
myChart.on('click', function(params) {
    console.log(params.name);
    window.open(params.data.url);
    // window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.value));
});

var colorList = [[
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
    '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
    ],
    [
    '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
    '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
    '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
    '#6b8e23', '#86C3F8', '#3cb371', '#b8860b', '#30e0e0'
    ],
    [
    '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
    '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51', 
    '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe', 
    '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
    ]][2];

var option = {
    // 图表标题
    title: {
        show:true,//显示策略，默认值true,可选为：true（显示） | false（隐藏）
        text: '景区评价图谱',//主标题文本，'\n'指定换行
        x: 'center',        // 水平安放位置，默认为左对齐，可选为：
                          // 'center' ¦ 'left' ¦ 'right'
                          // ¦ {number}（x坐标，单位px）
        y: 'bottom',             // 垂直安放位置，默认为全图顶端，可选为：
                          // 'top' ¦ 'bottom' ¦ 'center'
                          // ¦ {number}（y坐标，单位px）
        //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
        backgroundColor: 'rgba(0,0,0,.0)',
        borderColor: '#ccc',    // 标题边框颜色
        borderWidth: 0,         // 标题边框线宽，单位px，默认为0（无边框）
        padding: 5,             // 标题内边距，单位px，默认各方向内边距为5，
                                // 接受数组分别设定上右下左边距，同css
        itemGap: 10,            // 主副标题纵向间隔，单位px，默认为10，
        textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#eee'        // 主标题文字颜色
        },
        subtextStyle: {
            color: '#aaa'        // 副标题文字颜色
        }
    },
    backgroundColor: 'rgba(0,0,0,.0)',
    tooltip: {},
    animationDurationUpdate: function(idx) {
        // 越往后的数据延迟越大
        return idx * 100;
    },
    animationEasingUpdate: 'bounceIn',
    color: ['#fff', '#fff', '#fff'],
    series: [{
        type: 'graph',
        layout: 'force',
        force: {
            repulsion: 200,
            edgeLength: 10
        },
        roam: true,
        label: {
            normal: {
                show: true
            }
        },
        data: [
          {"name": "游戏项目不错", "value": 2058124, "symbolSize": 143, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[1], "color": colorList[1] } } },
{"name": "管控程度挺好的", "value": 1751491, "symbolSize": 132, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[2], "color": colorList[2] } } },
{"name": "景区的人好多", "value": 1642587, "symbolSize": 128, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[3], "color": colorList[3] } } },
{"name": "打卡圣地", "value": 1524287, "symbolSize": 123, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[4], "color": colorList[4] } } },
{"name": "觉得很开心", "value": 1435649, "symbolSize": 119, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[5], "color": colorList[5] } } },
{"name": "春天游玩很棒", "value": 1301903, "symbolSize": 114, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[6], "color": colorList[6] } } },
{"name": "未来还会更好", "value": 1008954, "symbolSize": 100, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[8], "color": colorList[8] } } },
{"name": "我们不能停滞不前", "value": 966638, "symbolSize": 98, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[9], "color": colorList[9] } } },
{"name": "非常推荐的游玩去处", "value": 942399, "symbolSize": 97, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[10], "color": colorList[10] } } },
{"name": "景色不错", "value": 777198, "symbolSize": 88, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[11], "color": colorList[11] } } },
{"name": "人是真的多", "value": 726378, "symbolSize": 85, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[12], "color": colorList[12] } } },
{"name": "下次还会再来", "value": 624773, "symbolSize": 79, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[13], "color": colorList[13] } } },
{"name": "打卡", "value": 620858, "symbolSize": 78, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[14], "color": colorList[14] } } },
{"name": "挺不错的经历", "value": 565363, "symbolSize": 75, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[15], "color": colorList[15] } } },
{"name": "不建议来", "value": 534676, "symbolSize": 73, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[16], "color": colorList[16] } } },
{"name": "小黄人景区有些失望", "value": 504716, "symbolSize": 71, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[17], "color": colorList[17] } } },
{"name": "好想再来一次", "value": 494101, "symbolSize": 70, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[18], "color": colorList[18] } } },
{"name": "不错的体验哦", "value": 440445, "symbolSize": 66, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[19], "color": colorList[19] } } },
{"name": "真好", "value": 403092, "symbolSize": 63, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[0], "color": colorList[0] } } },
{"name": "不错", "value": 399236, "symbolSize": 63, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[1], "color": colorList[1] } } },
{"name": "挺好", "value": 390904, "symbolSize": 62, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[2], "color": colorList[2] } } },
{"name": "真不错", "value": 368912, "symbolSize": 60, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[3], "color": colorList[3] } } },
{"name": "非常值得一来的好地方，娱乐性极高", "value": 368366, "symbolSize": 60, "draggable": true, "itemStyle": {"normal": { "shadowBlur": 10, "shadowColor": colorList[4], "color": colorList[4] } } }
            ]
    }]
}
    
      
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      
        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      })();

//12
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".model12"));

    function roundDatas(num) {
        var datas = [];
        for (var i = 0; i < num; i++) {
            datas.push({
                name: 'circle' + i
            });
        }
        return datas;
    }
   
      option = {
        backgroundColor: '#fff',
        animationDurationUpdate: 1500,
        roam: true, //鼠标缩放及平移
        focusNodeAdjacency: true, //是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点
        title: {
            text: '景区标签',
            top:'25pt',
            left:'25pt',
            textStyle: {
                color: '#666'
            },
        },
        series: [
            {
            type: 'graph',
            tooltip: {},
            ribbonType: true,
            layout: 'circular',
            hoverAnimation: true,
            layoutAnimation: true,
            width: '40%',
            height: '40%',
            circular: {
                rotateLabel: true
            },
            symbolSize: 1,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    color: '#6E7467',
                },
                emphasis: {
                    label: {
                        show: false,
                    }
                }
            },
        }, 
        {
            type: 'graph',
            tooltip: {},
            ribbonType: true,
            layout: 'circular',
            hoverAnimation: true,
            layoutAnimation: true,
            width: '75%',
            height: '75%',
            circular: {
                rotateLabel: true
            },
            symbolSize:5,
            data: roundDatas(300),
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    color: '#6E7467',
                },
                emphasis: {
                    label: {
                        show: false,
                    }
                }
            },
        }, 
        {
            type: 'graph',
            tooltip: {},
            ribbonType: true,
            layout: 'circular',
            width: '75%',
            height: '75%',
            symbolSize: 60,
       
            startAngle: 0,
            itemStyle: {
                normal: {
                    
                    label: {
                        show: true,
                        position: 'inside',
                        opacity : 0,
                    },
                    border: 'none',
                    borderWidth: 3,
                    color:'#ED7E74',
                     "symbolSize":60,
                      value: 125
                },
   
            },
   
            data: [{
                name: '北京通州区',
              
            }, {
                name: '度假村',
               
               
            }, {
                name: '游乐场',
               
              
            }, {
                name: '嗨玩乐园',
               
                
            }
       
            ],
        },
        ]
    };



    
      
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      
        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });

        setTimeout(() => {
            window.onresize = () =>{
                draw.resize();
            }},500)
      })();


//11
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".model11"));

    let dashedPic = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM8AAAAOBAMAAAB6G1V9AAAAD1BMVEX////Kysrk5OTj4+TJycoJ0iFPAAAAG0lEQVQ4y2MYBaNgGAMTQQVFOiABhlEwCugOAMqzCykGOeENAAAAAElFTkSuQmCC';
    let color = ['#FF8700', '#ffc300', '#00e473', '#009DFF'];
    let chartData = [{
            name: "成人票",
            value: 528,
            unit: '元'
        },
        {
            name: "老人票",
            value: 423,
            unit: '元'
        },
        {
            name: "学生票",
            value: 435,
            unit: '元'
        },
        {
            name: "儿童票",
            value: 0,
            unit: '元'
        }
    ];
    let arrName = [];
    let arrValue = [];
    let sum = 0;
    let pieSeries = [],
        lineYAxis = [];
    
    // 数据处理
    chartData.forEach((v, i) => {
        arrName.push(v.name);
        arrValue.push(v.value);
        sum = sum + v.value;
    })
    
    // 图表option整理
    chartData.forEach((v, i) => {
        pieSeries.push({
            name: '学历',
            type: 'pie',
            clockWise: false,
            hoverAnimation: false,
            radius: [65 - i * 15 + '%', 57 - i * 15 + '%'],
            center: ["30%", "50%"],
            label: {
                show: false
            },
            data: [{
                value: v.value,
                name: v.name
            }, {
                value: sum - v.value,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)"
                }
            }]
        });
        pieSeries.push({
            name: '',
            type: 'pie',
            silent: true,
            z: 1,
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            radius: [65 - i * 15 + '%',57 - i * 15 + '%'],
            center: ["30%", "50%"],
            label: {
                show: false
            },
            data: [{
                value: 7.5,
                itemStyle: {
                    color: "#E3F0FF"
                }
            }, {
                value: 2.5,
                name: '',
                itemStyle: {
                    color: "rgba(0,0,0,0)"
                }
            }]
        });
        v.percent = (v.value / sum * 100).toFixed(1) + "%";
        lineYAxis.push({
            value: i,
            textStyle: {
                rich: {
                    circle: {
                        color: color[i],
                        padding: [0, 5]
                    }
                }
            }
        });
    })
    
    option = {
        backgroundColor: '#fff',
        color: color,
        title: {
            text: '景区票价',
            top:'25pt',
            left:'25pt',
            textStyle: {
                color: '#666'
            },
        },
        grid: {
            top: '15%',
            bottom: '54%',
            left: "30%",
            containLabel: false
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                formatter: function(params) {
                    let item = chartData[params];
                    console.log(item)
                    return '{line|}{circle|●}{name|'+ item.name +'}{value|'+ item.value+'}{unit|元}'
                },
                interval: 0,
                inside: true,
                textStyle: {
                    color: "#333",
                    fontSize: 14,
                    rich: {
                        line: {
                            width: 170,
                            height: 10,
                            backgroundColor: {image: dashedPic}
                        },
                        name: {
                            color: '#666',
                            fontSize: 14,
                        },
                        bd: {
                            color: '#ccc',
                            padding: [0, 5],
                            fontSize: 14,
                        },
                        percent:{
                            color: '#333',
                            fontSize: 14,
                        },
                        value: {
                            color: '#333',
                            fontSize: 16,
                            fontWeight: 500,
                            padding: [0, 0, 0, 20]
                        },
                        unit: {
                            fontSize: 14
                        }
                    }
                },
                show: true
            },
            data: lineYAxis
        }],
        xAxis: [{
            show: false
        }],
        series: pieSeries
    };
    
      
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      
        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      })();




//14
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".model14"));

    var option = {
        title:{
            text:'评论内容占比',
            textStyle:{
                color: "rgba(255,255,255,.9)",
            },
            top:'15pt',
            left:'15pt'
        },
        legend: {
            orient: 'horizontal',
            top: "center",
            right: "10%",
            top: "90%",
            data: ['服务', '娱乐', '景点', '人数', '饮食'],
            textStyle: {
                color: "rgba(255,255,255,.7)",
                fontSize: 16
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
            name: '半径模式',
            type: 'pie',
            radius: ['30%', '80%'],
            center: ['55%', '50%'],
            roseType: 'radius',
            label: {
                show: true,
                normal: {
                    position: 'outside',
                    fontSize: 16
                }
            },
            labelLine: {
                length: 1,
                length2: 20,
                smooth: true
            },
            data: [{
                    value: 255+210,
                    name: '服务',
                    itemStyle: {
                        color: "rgba(250,2,213,0.7)",
                        borderColor: "rgba(250,2,213,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 1374+596,
                    name: '娱乐',
                    itemStyle: {
                        color: "rgba(50,123,250,0.7)",
                        borderColor: "rgba(50,123,250,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 217+27,
                    name: '景点',
                    itemStyle: {
                        color: "rgba(108,45,243,0.7)",
                        borderColor: "rgba(108,45,243,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 603+854,
                    name: '人数',
                    itemStyle: {
                        color: "rgba(122,60,235,0.7)",
                        borderColor: "rgba(122,60,235,1)",
                        borderWidth: 3
                    }
                },
                {
                    value: 223+155,
                    name: '饮食',
                    itemStyle: {
                        color: "rgba(1,94,243,0.7)",
                        borderColor: "rgba(1,94,243,1)",
                        borderWidth: 3
                    }
                }
            ]
        }]
    };
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      
        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      })();

//26


//22



//15
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".model15"));
// Schema:
// date,AQIindex,PM2.5,PM10,CO,NO2,SO2
const pathSymbols = {
    service:
      'path://M864.100967 1022.983836h-219.491512c-14.226302 0-25.40411-11.177808-25.40411-25.404111s11.177808-25.40411 25.40411-25.40411h219.491512c23.371781 0 42.170823-15.750548 42.170823-35.565754v-21.339453c-4.57274-23.371781-71.131508-64.018358-110.76192-86.882056-55.38096-31.501097-115.33466-59.445618-136.166031-64.018358-14.226302-3.048493-26.420275-11.685891-34.041508-23.371781s-9.653562-24.896028-6.096986-37.598083c1.016164-4.57274 3.048493-9.14548 5.588904-12.702056l2.540411-3.556575 3.556576-2.540411c26.928357-20.323288 52.332467-74.688084 68.591097-145.819592l3.556576-14.734384 14.734383-4.064658c28.452603-7.621233 47.251645-34.54959 53.348632-74.688084 1.524247-9.14548 4.064658-18.290959 6.096986-26.928357 6.096986-20.83137-11.685891-28.960686-19.815206-31.501096-6.096986-2.032329-11.685891-5.080822-15.750548-8.637398l-5.588904-4.57274-2.032329-7.11315c-5.588904-19.815206-7.113151-40.646576-5.080822-65.034522 6.096986-127.528633-12.702055-159.537812-32.009179-174.272196l-29.468768-22.355617 31.501097-19.307124c14.734384-9.14548 13.210137-13.210137 12.193973-16.25863-7.621233-19.307124-21.339453-25.40411-86.882057-12.702056-37.598083 7.113151-83.833564 16.258631-136.166031 9.653562-103.64877-13.718219-122.447811 16.258631-130.577126 28.452604l-5.588904 8.637397-10.161644 2.540411c-37.598083 8.637397-101.616441 46.743563-105.681099 201.708635l-0.508082 24.896028h-23.879863c-7.113151 0.508082-13.210137 3.556575-17.782877 8.637397-9.14548 10.161644-12.193973 29.468768-9.653562 58.429454 6.096986 69.09918 21.847535 84.341646 44.711234 86.882057 10.161644 1.016164 19.815206 5.588904 24.896028 12.193973l4.064657 5.080822 1.016165 6.096986c7.621233 38.106165 21.847535 90.438632 48.775891 123.463975 4.57274 6.096986 11.685891 12.702055 18.799042 19.815206 26.928357 26.420275 48.775892 50.300138 41.66274 74.180002-16.258631 55.38096-149.376168 121.939729-226.604662 156.489319-13.718219 6.096986-22.355617 18.290959-22.355617 31.501096v22.355617c0 19.815206 18.799042 35.565754 42.170823 35.565755h222.031923c14.226302 0 25.40411 11.177808 25.40411 25.40411s-11.177808 25.40411-25.40411 25.40411H161.42328c-51.316303 0-92.979043-38.614247-92.979044-86.373975v-22.355617c0-33.533425 19.815206-63.510275 52.332467-77.736577 147.343839-65.542604 186.466169-106.697263 196.119731-119.9074-3.556575-5.080822-10.669726-13.210137-25.912193-27.944521-8.129315-7.621233-16.258631-16.258631-22.863699-24.387946-28.960686-36.581919-45.727398-87.898221-55.38096-129.560962-68.591097-15.242466-75.704248-95.519454-78.752741-130.577126-4.064658-44.203152 3.048493-75.196166 22.355617-97.043701 8.637397-9.653562 18.799042-16.258631 29.97685-20.83137 7.621233-121.939729 55.889042-203.740964 134.133701-227.112745 31.501097-40.646576 87.390139-54.364796 174.272196-43.186987 44.203152 5.588904 85.865892-2.540411 119.9074-9.14548 47.251645-9.14548 118.383153-23.371781 144.295346 44.711234 5.080822 13.210137 8.637397 35.565754-9.14548 57.921371 26.420275 36.073836 35.057672 95.519454 30.484932 195.611648v1.016165c-1.016164 13.210137-1.016164 25.40411 1.016165 36.073836 38.106165 15.750548 56.905207 52.332467 46.23548 91.454797-2.032329 7.113151-4.064658 14.226302-5.080822 20.323288-7.621233 54.364796-35.057672 93.995208-75.196166 111.270003-11.685891 45.727398-34.041508 113.302331-72.655755 151.408496 37.090001 9.14548 110.253838 47.251645 148.360004 69.09918 118.383153 67.574933 132.101373 99.07603 135.657948 123.972058v2.032328l0.508082 6.096987v19.815206c-2.032329 45.219316-43.69507 84.341646-95.011372 84.341646z',
    entertainment:
      'path://M909.135926 920.271544 684.514075 920.271544c-0.206708-0.684592-0.446162-1.36509-0.730641-2.037403l-50.870598-120.131031c37.015032-14.876826 70.860884-36.009122 100.236935-62.078871l21.500687 21.499663-24.105001 24.105001c-7.79043 7.79043-7.79043 20.421098 0 28.211529 3.895727 3.89368 8.999978 5.842055 14.105253 5.842055s10.209526-1.948375 14.105253-5.842055l76.41846-76.41846c7.79043-7.79043 7.79043-20.421098 0-28.211529-7.792477-7.788383-20.419052-7.788383-28.211529 0l-24.102954 24.102954-21.439288-21.439288c50.609655-56.55404 82.84073-129.873929 87.193875-210.493062l28.603455 0 0 33.911344c0 11.016915 8.931416 19.947308 19.947308 19.947308s19.947308-8.930393 19.947308-19.947308L917.112598 423.574065c0-11.016915-8.931416-19.947308-19.947308-19.947308s-19.947308 8.930393-19.947308 19.947308l0 33.911344-28.754904 0c-4.828982-79.310324-36.633339-151.443178-86.342484-207.331046l20.738323-20.738323 24.102954 24.101931c3.895727 3.894703 8.999978 5.842055 14.105253 5.842055 5.106298 0 10.209526-1.948375 14.105253-5.843078 7.79043-7.79043 7.79043-20.420075 0-28.210505l-76.41846-76.416414c-7.792477-7.79043-20.419052-7.789407-28.211529 0.001023-7.79043 7.79043-7.79043 20.420075 0 28.210505l24.103978 24.102954-20.709671 20.709671c-56.417941-50.376341-129.473817-82.480526-209.794144-86.912465L524.142551 106.406448l33.911344 0c11.015891 0 19.947308-8.930393 19.947308-19.947308s-8.931416-19.947308-19.947308-19.947308L450.338638 66.511833c-11.015891 0-19.947308 8.930393-19.947308 19.947308s8.931416 19.947308 19.947308 19.947308l33.911344 0 0 28.694529c-79.846536 4.76656-152.438854 36.870746-208.53343 87.070055l-20.966521-20.966521 24.102954-24.102954c7.79043-7.79043 7.79043-20.421098 0-28.211529-7.792477-7.79043-20.419052-7.79043-28.211529 0l-76.416414 76.416414c-7.79043 7.79043-7.79043 20.421098 0 28.211529 3.894703 3.894703 9.001001 5.842055 14.105253 5.842055s10.210549-1.947352 14.105253-5.842055l24.102954-24.102954 21.026896 21.026896c-49.562812 55.847959-81.264838 127.869273-86.085634 207.043497l-30.30419 0 0-33.911344c0-11.016915-8.930393-19.947308-19.947308-19.947308s-19.947308 8.930393-19.947308 19.947308l0 107.717304c0 11.016915 8.930393 19.947308 19.947308 19.947308s19.947308-8.930393 19.947308-19.947308L131.175575 497.381048l30.153764 0c4.344958 80.482009 36.475749 153.690358 86.938048 210.204489l-21.727861 21.727861-24.102954-24.102954c-7.79043-7.786337-20.421098-7.788383-28.210505 0-7.79043 7.79043-7.791453 20.421098-0.001023 28.211529l76.416414 76.41846c3.895727 3.89368 8.999978 5.842055 14.105253 5.842055 5.104251 0 10.209526-1.948375 14.105253-5.842055 7.79043-7.79043 7.79043-20.421098 0-28.211529l-24.102954-24.103978 21.756513-21.756513c30.93557 27.514657 66.845431 49.541323 106.199741 64.549132l-47.684022 118.233821c-0.229221 0.568958-0.420579 1.144056-0.594541 1.720178L111.228267 920.271544c-11.016915 0-19.947308 8.931416-19.947308 19.947308s8.930393 19.947308 19.947308 19.947308l797.907659 0c11.015891 0 19.947308-8.931416 19.947308-19.947308S920.151817 920.271544 909.135926 920.271544zM617.355513 761.366418l-83.647095-197.532889c6.540973-2.212388 12.750395-5.145184 18.523889-8.725732l152.672168 152.671145C679.160137 730.269166 649.610124 748.500389 617.355513 761.366418zM454.918957 478.619752c0-27.600615 22.454408-50.053999 50.053999-50.053999 25.588795 0 46.739511 19.305695 49.687656 44.11473-0.373507 1.52575-0.593518 3.111874-0.593518 4.753257 0 1.882883 0.278339 3.697205 0.766456 5.423523-2.160199 25.622564-23.688515 45.815465-49.860595 45.815465C477.373365 528.672728 454.918957 506.219343 454.918957 478.619752zM484.249983 782.164093c-16.492626-1.11438-32.632211-3.532453-48.307216-7.182586l48.307216-119.777991L484.249983 782.164093zM524.145621 643.559315l55.108109 130.137942c-17.803481 4.483104-36.225039 7.385201-55.108109 8.565073L524.145621 643.559315zM733.176378 679.628812 580.664869 527.119349c5.760191-8.959046 9.983375-18.99154 12.273535-29.738301l215.703737 0C804.385187 567.007825 776.612657 630.374014 733.176378 679.628812zM808.490691 457.485409l-216.101803 0c-2.295276-9.492188-6.094812-18.399045-11.140735-26.456558l152.629189-152.629189C776.422322 326.979076 803.780413 389.164371 808.490691 457.485409zM705.694467 250.160503 553.141002 402.713968c-8.759501-5.579065-18.537192-9.685593-28.995381-11.965519L524.145621 174.97615C593.474616 179.308829 656.57884 206.954469 705.694467 250.160503zM484.249983 175.074388l0 216.032218c-10.006911 2.369977-19.367093 6.411013-27.777647 11.819187L303.96185 250.41633C352.754113 207.387327 415.393755 179.728384 484.249983 175.074388zM275.81172 278.688233l152.671145 152.671145c-4.942569 7.969509-8.665357 16.764825-10.92891 26.126031L201.454198 457.485409C206.15629 389.30047 233.412051 327.22467 275.81172 278.688233zM201.303772 497.381048l215.70169 0c2.261507 10.613732 6.407943 20.531616 12.059664 29.40675L276.512684 679.340239C233.222739 630.126374 205.552539 566.870702 201.303772 497.381048zM304.751842 707.523115 457.381032 554.894949c6.344498 3.972475 13.208836 7.184633 20.478404 9.488095L397.630183 763.311723C363.291097 750.321874 331.897086 731.296565 304.751842 707.523115zM420.865373 812.366975c20.467147 5.15951 41.657772 8.473999 63.384609 9.770528l0 30.312376-33.911344 0c-11.015891 0-19.947308 8.931416-19.947308 19.947308s8.931416 19.947308 19.947308 19.947308l107.717304 0c11.015891 0 19.947308-8.931416 19.947308-19.947308s-8.931416-19.947308-19.947308-19.947308l-33.911344 0 0-30.213116c24.365944-1.344624 48.058552-5.244444 70.827115-11.420097l46.350654 109.455901L377.347231 920.272567 420.865373 812.366975z',
    scenic:
      'path://M886.4768 748.71808H123.66848a27.22816 27.22816 0 1 0 0 54.4512H886.4768a27.22816 27.22816 0 0 0 0-54.4512z m-81.73568 108.90752H205.40416a27.22304 27.22304 0 0 0 0 54.4512h599.33696a27.22304 27.22304 0 1 0 0-54.4512z m80.59392-283.48928c2.2784 0.62976 4.61312 1.08544 6.94784 1.08544a27.24864 27.24864 0 0 0 22.21568-11.39712 283.15648 283.15648 0 0 0 53.65248-166.20544c-0.25088-157.84448-128.20992-285.70112-286.04928-285.824a287.83104 287.83104 0 0 0-261.95968 172.01664l-41.5232-58.09664a27.16672 27.16672 0 0 0-45.22496 1.36704l-272.44032 435.51744a27.2384 27.2384 0 0 0 46.19776 28.88192l250.84928-400.9984 248.74496 347.96544a27.1616 27.1616 0 0 0 21.13536 11.33568c8.54016 0.68608 16.51712-3.30752 21.92384-9.74336l114.1504-136.86784 142.80192 190.18752a27.22816 27.22816 0 1 0 43.57632-32.63488l-64.9984-86.58944z m-19.7632-26.3168l-78.71488-104.86272a27.34592 27.34592 0 0 0-42.71616-1.14176l-113.58208 136.2432-177.9456-248.90368a26.68544 26.68544 0 0 0 13.55776-14.46912 232.95488 232.95488 0 0 1 215.936-148.49536c127.7696 0.09728 231.35744 103.6032 231.54176 231.3728 0 48.47104-15.04256 94.9504-43.45856 134.48704a27.0336 27.0336 0 0 0-4.61824 15.7696z',
    lineup:
    'path://M232 795.2c8 20.8 27.2 33.6 49.6 33.6h460.8c22.4 0 41.6-12.8 49.6-33.6s3.2-43.2-12.8-57.6L537.6 512l235.2-219.2c17.6-16 22.4-40 14.4-62.4s-28.8-35.2-52.8-35.2H291.2c-24 0-44.8 14.4-52.8 35.2s-3.2 46.4 14.4 62.4L486.4 512l-240 225.6c-16 14.4-22.4 36.8-14.4 57.6z m35.2-552c1.6-3.2 8-16 22.4-16h443.2c16 0 20.8 11.2 22.4 16 1.6 3.2 4.8 16-6.4 27.2l-102.4 96H376l-102.4-96c-11.2-11.2-8-24-6.4-27.2z m126.4 137.6h236.8l-116.8 108.8H512l-1.6 1.6-116.8-110.4z m118.4 153.6l192 176H320l192-176zM267.2 760l35.2-33.6H720l35.2 33.6c9.6 9.6 6.4 20.8 4.8 24s-6.4 12.8-19.2 12.8H281.6c-12.8 0-19.2-9.6-19.2-12.8s-4.8-14.4 4.8-24z',
    food: 
    'path://M0 448V384h1024v64a511.872 511.872 0 0 1-263.936 448H263.936A511.872 511.872 0 0 1 0 448z m288 512h448a32 32 0 1 1 0 64h-448a32 32 0 1 1 0-64zM64 320a256.128 256.128 0 0 1 495.872 0H64z m359.808-235.904A320 320 0 0 1 960 320H625.536a320.576 320.576 0 0 0-201.728-235.904z'
  };
  const labelSetting = {
    show: true,
    position: 'right',
    offset: [10, 0],
    fontSize: 16,
    textStyle: {
        color: "#fff",
        fontSize: 14
    }
  };
  function makeOption(type, symbol) {
    return {
        title: {
            text: '正负评价对比',
            left: '25pt',
            top:'25pt',
            textStyle: {
                color: '#eee'
            },
        },
      legend: {
        bottom: 10,
        data: ['正面', '负面'],
        itemGap: 20,
        textStyle: {
            color: '#fff',
            fontSize: 14
        }
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      grid: {
        containLabel: true,
        left: 20
      },
      yAxis: {
        data: ['服务', '娱乐', '景点', '人数', '饮食'],
        inverse: true,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          margin: 10,
          color: '#ffffff',
          fontSize: 14
        },
        axisPointer: {
          label: {
            show: true,
            margin: 50
          }
        }
      },
      xAxis: {
        splitLine: { show: false },
        axisLabel: { show: false },
        axisTick: { show: false },
        axisLine: { show: false }
      },
      animationDurationUpdate: 500,
      series: [
        {
          name: '正面',
          id: 'bar1',
          type: type,
          label: labelSetting,
          itemStyle: {
                color: "rgba(122,60,235,0.7)",
            },
          symbolRepeat: true,
          symbolSize: ['80%', '60%'],
          barCategoryGap: '40%',
          universalTransition: {
            enabled: true,
            delay: function (idx, total) {
              return (idx / total) * 1000;
            }
          },
          data: [
            {
              value: 255,
              symbol: symbol || pathSymbols.service,
              itemStyle: {
                color: "rgba(122,60,235,0.7)",
            }
            },
            {
              value: 1374,
              symbol: symbol || pathSymbols.entertainment,
              itemStyle: {
                color: "rgba(122,60,235,0.7)",
            }
            },
            {
              value: 217,
              symbol: symbol || pathSymbols.scenic,
              itemStyle: {
                color: "rgba(122,60,235,0.7)",
            }
            },
            {
              value: 603,
              symbol: symbol || pathSymbols.lineup,
              itemStyle: {
                color: "rgba(122,60,235,0.7)",
            }
            },
            {
              value: 223,
              symbol: symbol || pathSymbols.food,
              itemStyle: {
                color: "rgba(122,60,235,0.7)",
            }
            }
          ]
        },
        {
          name: '负面',
          id: 'bar2',
          type: type,
          barGap: '10%',
          label: labelSetting,
          itemStyle: {
            color: "rgba(2,60,235,0.7)",
        },
          symbolRepeat: true,
          symbolSize: ['80%', '60%'],
          universalTransition: {
            enabled: true,
            delay: function (idx, total) {
              return (idx / total) * 1000;
            }
          },
          data: [
            {
              value: 210,
              symbol: symbol || pathSymbols.service,
              itemStyle: {
                color: "rgba(2,60,235,0.7)",
            }
            },
            {
              value: 596,
              symbol: symbol || pathSymbols.entertainment,
              itemStyle: {
                color: "rgba(2,60,235,0.7)",
            }
            },
            {
              value: 27,
              symbol: symbol || pathSymbols.scenic,
              itemStyle: {
                color: "rgba(2,60,235,0.7)",
            }
            },
            {
              value: 854,
              symbol: symbol || pathSymbols.lineup,
              itemStyle: {
                color: "rgba(2,60,235,0.7)",
            }
            },
            {
              value: 155,
              symbol: symbol || pathSymbols.food,
              itemStyle: {
                color: "rgba(2,60,235,0.7)",
            }
            }
          ]
        }
      ]
    };
  }
  const options = [
    makeOption('pictorialBar'),
    makeOption('bar'),
    makeOption('pictorialBar', 'diamond')
  ];
  var optionIndex = 0;
  option = options[optionIndex];
  setInterval(function () {
    optionIndex = (optionIndex + 1) % options.length;
    myChart.setOption(options[optionIndex]);
  }, 2500);


    
      
        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      
        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
      })();

//31


//32


//32




