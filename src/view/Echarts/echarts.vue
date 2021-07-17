<template>
  <div class="echarts-container">
    <!-- 标题部分 -->
    <header>
      <h1 style="color: #fff; font-size: 25px; text-align: center;">Echarts-前端就业行情</h1>
      <div class="showTime"></div>
    </header>
    <!-- 静态图表数据 -->
    <div class="mainbox">
      <!-- 左侧 -->
      <div class="column">
        <div class="panel">
          <h2 style="font-size: 15px; color: #fff; text-align: center; font-weight: 400;line-height: 40px;">柱形图-就业行业</h2>
          <div id="chart1"></div>
          <div class="footer"></div>
        </div>

        <div class="panel">
          <h2 style="font-size: 15px; color: #fff; text-align: center; font-weight: 400;line-height: 40px;">折线图-人员变化</h2>
          <div id="chart2"></div>
          <div class="footer"></div>
        </div>

        <div class="panel">
          <h2 style="font-size: 15px; color: #fff; text-align: center; font-weight: 400;line-height: 40px;">饼形图-年龄分布</h2>
          <div id="chart3"></div>
          <div class="footer"></div>
        </div>
      </div>
      <!-- 中间 -->
      <div class="column">
        <!-- 数字 -->
        <div class="no">
          <div class="no-head">
            <ul>
              <li>195480958</li>
              <li>268445128</li>
            </ul>
          </div>
          <div class="no-bd">
            <ul>
              <li>我的QQ号</li>
              <li>意义不明的数字</li>
            </ul>
          </div>
        </div>
        <!-- 地图 -->
        <div class="map">
          <div id="chinaMap"></div>
        </div>
      </div>
      <!-- 右边 -->
      <div class="column">
        <div class="panel">
          <h2 style="font-size: 15px; color: #fff; text-align: center; font-weight: 400; line-height: 30px;">柱形图-技能掌握</h2>
          <div id="chart4"></div>
          <div class="footer"></div>
        </div>

        <div class="panel">
          <h2 style="font-size: 15px; color: #fff; text-align: center; font-weight: 400; line-height: 30px;">折线图-访问量</h2>
          <div id="chart5"></div>
          <div class="footer"></div>
        </div>

        <div class="panel">
          <h2 style="font-size: 15px; color: #fff; text-align: center; font-weight: 400; line-height: 30px;">饼形图-地区分布</h2>
          <div id="chart6"></div>
          <div class="footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  data () {
    return {
    }
  },
  methods: {
    setChart1 () {
      let myChart = echarts.init(document.getElementById('chart1'))
      myChart.setOption({
        color: ['#2f89cf'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: "0%",
          top: "10px",
          right: "10%",
          bottom: "4%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["旅游", "教育", "游戏", "医疗", "电商", "社交", "金融"],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
            // 刻度标签的样式
              color: "rgba(255,255,255,.6",
              fontSize: "12"
            },
            axisLine: {
              show: false //隐藏X刻度轴的线
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: "12"
            },
            axisLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 2,
                type: "solid"
              }
            },
            splitLine: {
            //Y轴分割线
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              }
            },
          }
        ],
        series: [
          {
            name: '行业份额',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
              borderRadius: 5,
            }
          }
        ]
      })
    },
    setChart2 () {
      let yearData = [
        {
          year: "2019",
          data: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
          ]
        },
        {
          year: "2020",
          data: [
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
          ]
        }
      ]
      let myChart = echarts.init(document.getElementById('chart2'))
      myChart.setOption({
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: ["离职", "入职"],
          textStyle: {
            color: "#4c9bfd"
          },
          right: "10%"
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
          show: true,
          borderColor: "#012f4a"
        },
        toolbox: {
          iconStyle: {
            color: "#333333"
          },
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#4c9bfd"
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisTick: {
            show: false
          },
          axisLabel: {
            color: "#4c9bfd"
          },
          axisLine: {
            show: false
          },
          splitLine: {
          //Y轴分割线
            lineStyle: {
              color: "#012f4a"
            }
          }
        },
        series: [
          {
            name: "离职",
            type: "line",
            smooth: true,
            data: yearData[0].data[0]
          },
          {
            name: "入职",
            type: "line",
            smooth: true,
            data: yearData[0].data[1]
          }
        ]
      })
    },
    setChart3 () {
      let myChart = echarts.init(document.getElementById('chart3'))
      myChart.setOption({
        color: ["#065aab", "#066eab", "#0682ab", "#0696ab", "#06a0ab"],
        tooltip: {
          trigger: "item",
          backgroundColor: 'rgba(50,50,50,0.7)',
          borderWidth: 0,
          formatter: "{a} <br/>{b}: {c} ({d}%)",
          textStyle: {
            color: '#ffffff'
          }
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["20岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
          textStyle: {
            color: "rgba(255,255,255,.5)",
            fontSize: "12"
          }
        },
        series: [
          {
            name: "年龄分布",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "20",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 72, name: "20岁以下" },
              { value: 580, name: "20-29岁" },
              { value: 221, name: "30-39岁" },
              { value: 204, name: "40-49岁" },
              { value: 127, name: "50岁以上" }
            ]
          }
        ]
      })
    },
    setChart4 () {
      const chartsColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
      let myChart = echarts.init(document.getElementById('chart4'))
      const option = {
        grid: {
          top: '10%',
          left: '22%',
          bottom: '10%'
        },
        xAxis: {
          show: false
        },
        yAxis: [
          // 第一个y轴
          {
            inverse: true,
            type: 'category',
            data: ['Html5', 'Css3', 'javaScript', 'Vue', 'node'],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#ffffff'
            }
          },
          // 第二个y轴
          {
            inverse: true,
            type: 'category',
            data: ['700', '300', '200', '500', '842'],
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#ffffff'
            }
          }
        ],
        series: [
          // 对应第一个y轴
          {
            yAxisIndex: 0,
            name: '条',
            type: 'bar',
            data: [70, 34, 60, 78, 69],
            itemStyle: {
              borderRadius: 15,
              color: function (params) {
                return chartsColor[params.dataIndex]
              }
            },
            barCategoryGap: 35,
            barWidth: 15,
            label: {
              fontSize: 12,
              show: true,
              position: 'inside',
              formatter: '{c}%'
            }
          },
          // 对应第二个y轴
          {
            yAxisIndex: 1,
            name: '框',
            type: 'bar',
            data: ['100', '100', '100', '100', '100'],
            barWidth: 15,
            barCategoryGap: 35,
            itemStyle: {
              borderRadius: 15,
              color: 'none',
              boderWidth: 3,
              borderColor: '#00c1de'
            }
          }
        ]
      }
      myChart.setOption(option)
    },
    setChart5 () {
      let myChart = echarts.init(document.getElementById('chart5'))
      const option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data:['Google', 'Baidu'],
          textStyle: {
            color: 'rgba(255,255,255,.5',
            fontSize: 12
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12,
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.2)'
              }
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            axisTick: { show: false },
            axisLabel: {
              color: "rgba(255,255,255,.6)",
              fontSize: 12
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            },
            splitLine: {
              lineStyle: {
                color: 'rgba(255,255,255,.1)'
              }
            }
          }
        ],
        series: [
          {
            name: 'Google',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            areaStyle: {
              //填充颜色
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                }
              ], false),
              shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            itemStyle: {
              color: '#0184d5'
            },
            lineStyle: {
              color: '#0184d5'
            },
            data: [20, 50, 40, 29, 100, 90, 55, 75, 45, 60, 50, 41]
          },
          {
            name: 'Baidu',
            type: 'line',
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
              color: '#00d887'
            },
            itemStyle: {
              color: '#00d887'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)",
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)",
                },
              ],false),
              shadowColor: 'rgba(0,0,0,.1)'
            },
            data: [100, 120, 150, 115, 120, 140, 160, 200, 165, 140, 180, 195]
          }
        ]
      }
      myChart.setOption(option)
    },
    setChart6 () {
      let myChart = echarts.init(document.getElementById('chart6'))
      myChart.setOption({
        color: ["#006cff", "#60cda0", "#ed8884", "#ff9f7f", "#0096ff", "#9fe6b8", "#32c5e9", "#1d9dff"],
        tooltip: {
          trigger: 'item'
        },
        legend: {
          bottom: 0,
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: 'rgba(255, 255, 255, .5)',
            fontSize: 12
          }
        },
        series: [
          {
            type: 'pie',
            name: '面积模式',
            radius: ['10%', '70%'],
            center: ['50%', '50%'],
            roseType: "radius",
            label: {
              show: true
            },
            data: [
              { value: 25, name: '北京' },
              { value: 10, name: '长沙' },
              { value: 20, name: '深圳' },
              { value: 40, name: '上海' },
              { value: 18, name: '广州' },
              { value: 30, name: '成都' },
              { value: 35, name: '海南' },
              { value: 22, name: '武汉' }
            ]
          }
        ]
      })
    },
    setMap () {
      let myChart = echarts.init(document.getElementById('chinaMap'))
      // 转化成航线对象？
      function convertData (data) {
        const res = []
        for (const i in data) {
          let dataItem = data[i]
          let fromCoord = geoCoordMap[dataItem[0].name]
          let toCoord = geoCoordMap[dataItem[1].name]
          if (fromCoord && toCoord) {
            res.push({
              fromName: dataItem[0].name,
              toName: dataItem[1].name,
              coords: [fromCoord, toCoord],
              value: dataItem[1].value
            })
          }
        }
        return res
      }
      var geoCoordMap = {
        上海: [121.4648, 31.2891],
        东莞: [113.8953, 22.901],
        东营: [118.7073, 37.5513],
        中山: [113.4229, 22.478],
        临汾: [111.4783, 36.1615],
        临沂: [118.3118, 35.2936],
        丹东: [124.541, 40.4242],
        丽水: [119.5642, 28.1854],
        乌鲁木齐: [87.9236, 43.5883],
        佛山: [112.8955, 23.1097],
        保定: [115.0488, 39.0948],
        兰州: [103.5901, 36.3043],
        包头: [110.3467, 41.4899],
        北京: [116.4551, 40.2539],
        北海: [109.314, 21.6211],
        南京: [118.8062, 31.9208],
        南宁: [108.479, 23.1152],
        南昌: [116.0046, 28.6633],
        南通: [121.1023, 32.1625],
        厦门: [118.1689, 24.6478],
        台州: [121.1353, 28.6688],
        合肥: [117.29, 32.0581],
        呼和浩特: [111.4124, 40.4901],
        咸阳: [108.4131, 34.8706],
        哈尔滨: [127.9688, 45.368],
        唐山: [118.4766, 39.6826],
        嘉兴: [120.9155, 30.6354],
        大同: [113.7854, 39.8035],
        大连: [122.2229, 39.4409],
        天津: [117.4219, 39.4189],
        太原: [112.3352, 37.9413],
        威海: [121.9482, 37.1393],
        宁波: [121.5967, 29.6466],
        宝鸡: [107.1826, 34.3433],
        宿迁: [118.5535, 33.7775],
        常州: [119.4543, 31.5582],
        广州: [113.5107, 23.2196],
        廊坊: [116.521, 39.0509],
        延安: [109.1052, 36.4252],
        张家口: [115.1477, 40.8527],
        徐州: [117.5208, 34.3268],
        德州: [116.6858, 37.2107],
        惠州: [114.6204, 23.1647],
        成都: [103.9526, 30.7617],
        扬州: [119.4653, 32.8162],
        承德: [117.5757, 41.4075],
        拉萨: [91.1865, 30.1465],
        无锡: [120.3442, 31.5527],
        日照: [119.2786, 35.5023],
        昆明: [102.9199, 25.4663],
        杭州: [119.5313, 29.8773],
        枣庄: [117.323, 34.8926],
        柳州: [109.3799, 24.9774],
        株洲: [113.5327, 27.0319],
        武汉: [114.3896, 30.6628],
        汕头: [117.1692, 23.3405],
        江门: [112.6318, 22.1484],
        沈阳: [123.1238, 42.1216],
        沧州: [116.8286, 38.2104],
        河源: [114.917, 23.9722],
        泉州: [118.3228, 25.1147],
        泰安: [117.0264, 36.0516],
        泰州: [120.0586, 32.5525],
        济南: [117.1582, 36.8701],
        济宁: [116.8286, 35.3375],
        海口: [110.3893, 19.8516],
        淄博: [118.0371, 36.6064],
        淮安: [118.927, 33.4039],
        深圳: [114.5435, 22.5439],
        清远: [112.9175, 24.3292],
        温州: [120.498, 27.8119],
        渭南: [109.7864, 35.0299],
        湖州: [119.8608, 30.7782],
        湘潭: [112.5439, 27.7075],
        滨州: [117.8174, 37.4963],
        潍坊: [119.0918, 36.524],
        烟台: [120.7397, 37.5128],
        玉溪: [101.9312, 23.8898],
        珠海: [113.7305, 22.1155],
        盐城: [120.2234, 33.5577],
        盘锦: [121.9482, 41.0449],
        石家庄: [114.4995, 38.1006],
        福州: [119.4543, 25.9222],
        秦皇岛: [119.2126, 40.0232],
        绍兴: [120.564, 29.7565],
        聊城: [115.9167, 36.4032],
        肇庆: [112.1265, 23.5822],
        舟山: [122.2559, 30.2234],
        苏州: [120.6519, 31.3989],
        莱芜: [117.6526, 36.2714],
        菏泽: [115.6201, 35.2057],
        营口: [122.4316, 40.4297],
        葫芦岛: [120.1575, 40.578],
        衡水: [115.8838, 37.7161],
        衢州: [118.6853, 28.8666],
        西宁: [101.4038, 36.8207],
        西安: [109.1162, 34.2004],
        贵阳: [106.6992, 26.7682],
        连云港: [119.1248, 34.552],
        邢台: [114.8071, 37.2821],
        邯郸: [114.4775, 36.535],
        郑州: [113.4668, 34.6234],
        鄂尔多斯: [108.9734, 39.2487],
        重庆: [107.7539, 30.1904],
        金华: [120.0037, 29.1028],
        铜川: [109.0393, 35.1947],
        银川: [106.3586, 38.1775],
        镇江: [119.4763, 31.9702],
        长春: [125.8154, 44.2584],
        长沙: [113.0823, 28.2568],
        长治: [112.8625, 36.4746],
        阳泉: [113.4778, 38.0951],
        青岛: [120.4651, 36.3373],
        韶关: [113.7964, 24.7028]
      }

      const color = ['#a6c84c', '#ffa022', '#46bee9']; //航线的颜色
      const series = []
      const XAData = [
        [{ name: '上海' }, { name: '郑州', value: 100 }],
        [{ name: '西安' }, { name: '上海', value: 100 }],
        [{ name: "西安" }, { name: "拉萨", value: 100 }],
        [{ name: "西安" }, { name: "杭州", value: 100 }],
        [{ name: "广州" }, { name: "拉萨", value: 100 }]
      ]

      const XNData = [
        [{ name: "杭州" }, { name: "郑州", value: 100 }],
        [{ name: "郑州" }, { name: "银川", value: 100 }],
        [{ name: "郑州" }, { name: "宁波", value: 100 }],
        [{ name: "西宁" }, { name: "西安", value: 100 }],
        [{ name: "宁波" }, { name: "西宁", value: 100 }]
      ]

      const YCData = [
        [{ name: "银川" }, { name: "北京", value: 100 }],
        [{ name: "银川" }, { name: "广州", value: 100 }],
        [{ name: "杭州" }, { name: "哈尔滨", value: 100 }],
        [{ name: "北京" }, { name: "广州", value: 100 }],
        [{ name: "拉萨" }, { name: "哈尔滨", value: 100 }]
      ]
      const planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
      const arr = [[ '西安', XAData ], [ '西宁', XNData ], [ '银川', YCData ]]
      arr.forEach(function (item, i) {
        series.push(
          {
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 1,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.7,
              color: 'red', //arrow箭头的颜色
              symbolSize: 3
            },
            lineStyle: {
              color: color[i],
              width: 0,
              curveness: 0.2,
            },
            data: convertData(item[1])
          },
          {
            name: item[0] + ' Top3',
            type: 'lines',
            zlevel: 2,
            symbol: ['none', 'arrow'],
            symbolSize: 10,
            effect: {
              show: true,
              period: 6,
              trailLength: 0,
              symbol: planePath,
              symbolSize: 15,
            },
            lineStyle: {
              color: color[i],
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            },
            data: convertData(item[1])
          },
          {
            name: item[0] +' Top3',
            type: "effectScatter",
            coordinateSystem: "geo",
            zlevel: 2,
            rippleEffect: {
              brushType: "stroke",
            },
            label: {
              show: true,
              position: "right",
              formatter: "{b}",
            },
            symbolSize: function (val) {
              return val[2] / 8;
            },
            itemStyle: {
              color: color[i],
              emphasis: {
                areaColor: "#2B91B7",
              }
            },
            data: item[1].map(function (dataItem) {
              return {
                name: dataItem[1].name,
                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
              }
            })
          }
        )
      })
      myChart.setOption({
        tooltip: {
          trigger: 'item',  // 鼠标移到图里面的浮动提示框
          formatter: function (params, ticket, callback) {
            if (params.seriesType == 'effectScatter') {
              return '线路：' + params.data.name + '' + params.data.value[2]
            } else if (params.seriesType == 'lines') {
              return (
                params.data.fromName + '>' + params.data.toName + '<br />' + params.data.value
              )
              } else { return params.name }
          }
        },
        legend: {
          orient: "vertical",
          top: 'bottom',
          left: 'right',
          data: ["西安 Top3", "西宁 Top3", "银川 Top3"],
          textStyle: {
            color: '#fff'
          },
          selectedMode: 'multiple'
        },
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: true,
          zoom: 1.2,
          selectedMode: 'single',
          label: {
           show: true, // 是否显示对应地名
           color: 'rgba(0,0,0,0.4)'
          },
          itemStyle: {
            areaColor: 'rgba(20, 41, 87, 0.7)',
            borderColor: '#195BB9'
          },
          emphasis: {
            itemStyle: {
              areaColor: '#2B91B7'
            }
          }
        },
        series: series
      })
    }
  },
  mounted () {
    this.setChart1()
    this.setChart2()
    this.setChart3()
    this.setChart4()
    this.setChart5()
    this.setChart6()
    this.setMap()
  }
}
</script>

<style scoped>
.echarts-container{
  width: 100%;
  height: 100%;
  background: url('../../assets/img/bg.jpg');
}
header{
  height: 70px;
  line-height: 55px;
  background: url('../../assets/img/head_bg.png');
  background-size: 100%;
}
.mainbox{
  display: flex;
  width: 100%;
  padding: 10px;
}
.column{
  flex: 3;
}
.mainbox .column:nth-child(2){
  overflow: hidden;
  margin: 0 5px;
}
.mainbox .panel{
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
  margin-bottom: 5px;
}
.mainbox .panel::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    height: 10px;
    width: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
}
.mainbox .panel::after {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    height: 10px;
    width: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
}
.footer::before{
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  height: 10px;
  width: 10px;
  border-left: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
}
.footer::after{
  position: absolute;
  content: '';
  bottom: 0;
  right: 0;
  height: 10px;
  width: 10px;
  border-right: 2px solid #02a6b5;
  border-bottom: 2px solid #02a6b5;
}
.no{
  background: rgba(101, 132, 226, 0.1);
  padding: 10px;
}
.no-head{
  position: relative;
  border: 1px solid rgba(25, 186, 139, 0.17);
}
.no-head ul, .no-bd ul{
  display: flex;
  list-style: none;
}
.no-head ul li {
  position: relative;
  flex: 1;
  font-size: 40px;
  line-height: 60px;
  color: #FFEB7B;
  font-family: 'electronicFont';
  text-align: center;
}
.no-head ul li:first-child::after{
  position: absolute;
  top: 25%;
  right: 0;
  content: '';
  width: 1px;
  height: 50%;
  background: rgba(255, 255, 255, 0.2);
}
.no-bd ul li{
  flex: 1;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
}

#chart1, #chart2, #chart3, #chart5{
  height: 183px;
}
#chinaMap{
  height: 600px;
  width: 600px;
}
#chart6{
  height: 250px;
}
#chart4{
  height: 210px;
}
</style>