//100
(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".model100"));
    var option = {
 
        xAxis: {
            min: 0,
            max: 1000,
            show: false,
            type: 'value'
        },
        yAxis: {
            min: 0,
            max: 1000,
            show: false,
            type: 'value'
        },
        
        legend:{
            left:'right',
            top:'bottom',
            orient:'vertical',
            selectedMode:'single',
            textStyle:{
                color:'write',
                fontSize:18
            },
            data:[{
                name:'最新实况'
            },{
                name:'相关标准'
            },{
                name:'法律法规'
            },]
        },
        tooltip:{
            enterable: true,
            textStyle: {
                color: '#000',
                decoration: 'none',
            },
        },
        series:[{
            name:'最新实况',
            type:'graph',
            draggable: false,
            coordinateSystem: "cartesian2d",
            itemStyle:{
                color:'#5B44D3'
            },
            label:{
                show:true,
                position:'right',
                fontSize:15
            },
            data:[{
                name:'2020.12.30',
                value:[250,850],
                label:{
                    position:'left',
                    offset:[-30,0]
                },
                symbolSize:100,
                
            },{
                name:'石家庄一确诊病例曾到贵州茅台酒厂卸货！相关部门：正在排查，酒厂仍在营业',
                value:[650,850],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,

                    
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '印发时间：'+'2020.12.30'+
                                  '<br>石家庄一确诊病例曾到贵州茅台酒厂卸货！相关部门：正在排查，酒厂仍在营业'+
                                  
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'2020.12.29',
                value:[250,650],
                symbolSize:80,
                label:{
                    position:'left',
                    offset:[-30,0]
                },
                
            },{
                name:'石家庄共有56名确诊者参加过婚宴，同场婚礼患者增至14人',
                value:[650,700],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '印发时间：'+'2020.12.29'+
                                  '<br>石家庄共有56名确诊者参加过婚宴，同场婚礼患者增至14人'+
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'河北确诊病例曾来汉：汉正街相关场所已封控消杀，所涉商场已恢复营业',
                value:[650,650],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '印发时间：'+'2020.12.29'+
                                  '<br>河北确诊病例曾来汉：汉正街相关场所已封控消杀，所涉商场已恢复营业'+
                                 
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'沈阳通报5起涉疫违法犯罪：有人造谣“某医院确诊30多例',
                value:[650,600],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '发布日期：'+'2020.12.28'+
                                  '<br>沈阳通报5起涉疫违法犯罪：有人造谣“某医院确诊30多例”'+
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'2020.12.28',
                value:[250,500],
                symbolSize:60,
                label:{
                    position:'left',
                    offset:[-30,0]
                },
               
            },{
                name:'除夕火车票即将开售 铁路部门提示注意疫情防控要求',
                value:[650,550],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '发布时间：'+'2020.12.28'+
                                  '<br>除夕火车票即将开售 铁路部门提示注意疫情防控要求'+
                                 
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'河北石家庄疫情呈高度聚集性 一天确诊病例中33人住同一乡镇 ',
                value:[650,500],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '实施日期：'+'2020.12.28'+
                                  '<br>河北石家庄疫情呈高度聚集性 一天确诊病例中33人住同一乡镇  '+
                         
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'在北京西城庄胜广场上班的固安确诊病例行程轨迹披露！',
                value:[650,450],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '发布日期：'+'2020.12.28'+
                                  '<br>在北京西城庄胜广场上班的固安确诊病例行程轨迹披露！'+
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                
                name:'2020.12.27',
                value:[250,350],
                symbolSize:40,
                label:{
                    position:'left',
                    offset:[-30,0]
                },
                
            },{
                name:'黑龙江望奎县：未经县疫情防控工作指挥部同意不允许离开县境',
                value:[650,400],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '发布日期：'+'2020.12.27'+
                                  '<br>黑龙江望奎县：未经县疫情防控工作指挥部同意不允许离开县境'+
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'多名匈牙利赴华旅客入境后确诊新冠，大使馆：18日起只接受静脉抽血采样',
                value:[650,350],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '发布日期：'+'2020.12.27'+
                                  '<br>多名匈牙利赴华旅客入境后确诊新冠，大使馆：18日起只接受静脉抽血采样'+
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'北京网约车疫情防控升级：拼车取消，乘车需扫码',
                value:[650,300],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '发布日期：'+'2020.12.27'+
                                  '<br>北京网约车疫情防控升级：拼车取消，乘车需扫码'+
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'2020.12.26',
                value:[250,200],
                symbolSize:30,
                label:{
                    position:'left',
                    offset:[-30,0]
                },
                
            },{
                name:'石景山通报13家疫情防控不到位单位：涉及两家超市',
                value:[650,230],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '发布日期：'+'2020.12.26'+
                                  '<br>石景山通报13家疫情防控不到位单位：涉及两家超市'+
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'菲律宾新增新冠肺炎确诊病例1524例 累计确诊超49万例',
                value:[650,170],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '发布日期：'+'2020.12.26'+
                                  '<br>菲律宾新增新冠肺炎确诊病例1524例 累计确诊超49万例'+
                               
                                  '</div>';
                        return tipHtml;
                    }
                },
            },{
                name:'2020.12.25',
                value:[250,50],
                symbolSize:30,
                label:{
                    position:'left',
                    offset:[-30,0]
                },
                
            },{
                name:'石家庄“疫”下寄宿制校园：封闭管理严把门 防疫学习两不误',
                value:[650,50],
                symbolSize:15,
                tooltip:{
                    show:true,
                    padding:0,
                    formatter:function(params){
                        var tipHtml = '';
                        tipHtml = '<div style="height:130px;width:460px;border-radius:25px;background:#5B44D3;color:white">' +
                                  '发布日期：'+'2020.12.25'+
                                  '<br>石家庄“疫”下寄宿制校园：封闭管理严把门 防疫学习两不误'+
                               
                                  '</div>';
                        return tipHtml;
                    }
                },
             
            }],
        },{
            name:'政策规划',
            type:"effectScatter",
            coordinateSystem:'cartesian2d',
            silent:true,
            rippleEffect:{
                brushType:'stroke',
                scale:1.7
            },
            itemStyle:{
                color:'#5B44D3'
            },
            data:[{
                value:[250,850],
                symbolSize:100
            },{
                value:[250,650],
                symbolSize:80
            },{
                value:[250,500],
                symbolSize:60
            },{
                value:[250,350],
                symbolSize:40
            },{
                value:[250,200],
                symbolSize:30
            },{
                value:[250,50],
                symbolSize:30
            },]
        },{
            name:'政策规划',
            type:'lines',
            coordinateSystem:'cartesian2d',
            zlevel:2,
            effect:{
                show:true,
                symbolSize:13,
                symbol:'triangle'
            },
            tooltip:{
                show:false
            },
            lineStyle:{
                curveness:0.1,
                opacity:0.2,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0, color: '#5B44D3'
                }, {
                    offset: 1, color: '#F58158'
                }], false),
                width: 5,
            },
            data:[
                  {coords:[[250,650],[250,850]],lineStyle:{curveness:0}},
                  {coords:[[250,500],[250,650]],lineStyle:{curveness:0}},
                  {coords:[[250,350],[250,500]],lineStyle:{curveness:0}},
                  {coords:[[250,200],[250,350]],lineStyle:{curveness:0}},
                  {coords:[[250,50],[250,200]],lineStyle:{curveness:0}},
                  {coords:[[250,850],[650,850]]},
                  {coords:[[250,650],[650,700]]},
                  {coords:[[250,650],[650,650]]},
                  {coords:[[250,500],[650,600]]},
                  {coords:[[250,500],[650,550]]},
                  {coords:[[250,500],[650,500]]},
                  {coords:[[250,500],[650,450]]},
                  {coords:[[250,350],[650,400]]},
                  {coords:[[250,350],[650,350]]},
                  {coords:[[250,200],[650,300]]},
                  {coords:[[250,200],[650,230]]},
                  {coords:[[250,200],[650,170]]},
                  {coords:[[250,50],[650,50]]},
                ]
        }],
        animationDuration:5000,
        animationDelay:500
    }

        // 3. 把配置和数据给实例对象
        myChart.setOption(option);
      
        // 重新把配置好的新数据给实例对象
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize();
        });
})();
      