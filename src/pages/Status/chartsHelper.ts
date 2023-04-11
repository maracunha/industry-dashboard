import Highcharts from 'highcharts';

const gaugeOptions = {
  chart: {
    type: 'solidgauge',
  },

  title: null,

  pane: {
    center: ['50%', '85%'],
    size: '140%',
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor: Highcharts.defaultOptions.legend?.backgroundColor || '#EEE',
      innerRadius: '60%',
      outerRadius: '100%',
      shape: 'arc',
    },
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  // the value axis
  yAxis: {
    stops: [
      [0.1, '#55BF3B'], // green
      [0.5, '#DDDF0D'], // yellow
      [0.9, '#DF5353'], // red
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -70,
    },
    labels: {
      y: 16,
    },
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true,
      },
    },
  },
};

// The speed gauge
// const chartSpeed = Highcharts.chart(
//   'container-speed',
//   Highcharts.merge(gaugeOptions, {
//     yAxis: {
//       min: 0,
//       max: 200,
//       title: {
//         text: 'Speed',
//       },
//     },
//
//     credits: {
//       enabled: false,
//     },
//
//     series: [
//       {
//         name: 'Speed',
//         data: [80],
//         dataLabels: {
//           format:
//             '<div style="text-align:center">' +
//             '<span style="font-size:25px">{y}</span><br/>' +
//             '<span style="font-size:12px;opacity:0.4">km/h</span>' +
//             '</div>',
//         },
//         tooltip: {
//           valueSuffix: ' km/h',
//         },
//       },
//     ],
//   }),
// );

// The RPM gauge
const chartRpm: Highcharts.Options = {
  ...gaugeOptions,
  type: 'container-rpm',
  //  chart: {
  //    yAxis: {
  //      min: 0,
  //      max: 5,
  //      title: {
  //        text: 'RPM',
  //      },
  //    },
  //  },

  series: [
    {
      name: 'RPM',
      // data: [1],
      dataLabels: {
        format:
          '<div style="text-align:center">' +
          '<span style="font-size:25px">{y:.1f}</span><br/>' +
          '<span style="font-size:12px;opacity:0.4">' +
          '* 1000 / min' +
          '</span>' +
          '</div>',
      },
      tooltip: {
        valueSuffix: ' revolutions/min',
      },
    },
  ],
};

// ******************************

// const options: Highcharts.Options = {
//   title: {
//     text: 'Asset Health Score',
//     align: 'left',
//   },
//   series: asset.healthHistory.map(
//     (a, i) => ({
//       type: 'line',
//       name: a.status,
//       data: [2 + i * 2],
//     }),
//     [],
//   ),
// };

const color = {
  inOperation: 'green',
  inAlert: 'red',
  plannedStop: 'orange',
  notplannetStop: 'darkcyan',
  inDowntime: 'gray',
};

const dataChartPie = [
  {
    status: 'In alert',
    y: 2,
    color: 'red',
  },
  {
    status: 'In operation',
    y: 28,
    color: 'green',
  },
];

function healthPie(healthHistory) {
  const chartData = healthHistory.reduce((acc, cur) => {
    const status = cur.status;
    const timestamp = new Date(cur.timestamp).getTime();
    if (!acc[status]) {
      acc[status] = { value: 0, color: color[status] };
    }

    if (acc.lastTimestamp) {
      acc[status] += (timestamp - acc.lastTimestamp) / (1000 * 60 * 60 * 24);
    }

    acc.lastStatus = status;
    acc.lastTimestamp = timestamp;
    return acc;
  }, {});

  //    const x = healthHistory.reduce((acc, curr) => {
  //      const day = new Date(curr.timestamp).toDateString().split(' ')[2]
  //
  //      return {...acc, [+day]: curr.status}
  //      }, {});
  //

  //    const y = Object.keys(x).reduce((acc, curr) => ({...acc, [x[curr]]: 0}), {})

  //    const zaz = Object.keys(y).map((item, i) => {
  //      return {
  //        status: item,
  //        color: color[item],
  //        y:9
  //        }
  //      })

  return chartData;
}

// function charDataPie(healthHistory: HealthHistory[], bla = {}) {
//   if (healthHistory.length == 0) {
//     return bla;
//   }

//   const {status, timestamp} = healthHistory.pop() as HealthHistory;

//   if (bla[status]) {

//     }
//
//   console.log({ status, timestamp });

// }

//  const data = charDataPie(asset.healthHistory);
// console.log({ data });

export const optionsChartPie: Highcharts.Options = {
  xAxis: {},
  yAxis: {},
  title: {
    text: 'Timeline of Space Exploration',
  },
  series: [
    {
      type: 'pie',
      data: dataChartPie.map(
        (a) => ({
          name: a.status,
          y: a.y,
          color: a.color,
        }),
        [],
      ),
    },
  ],
};

// works ...
// const bla: Highcharts.Options = {
//   accessibility: {
//     screenReaderSection: {
//       beforeChartFormat:
//         '<h5>{chartTitle}</h5>' +
//         '<div>{typeDescription}</div>' +
//         '<div>{chartSubtitle}</div>' +
//         '<div>{chartLongdesc}</div>' +
//         '<div>{viewTableButton}</div>',
//     },
//     point: {
//       valueDescriptionFormat: '{index}. {point.label}. {point.description}.',
//     },
//   },
//   xAxis: {
//     visible: false,
//   },
//   yAxis: {
//     visible: false,
//   },
//   title: {
//     text: 'Timeline of Space Exploration',
//   },
//   series: [
//     {
//       type: 'line',
//       data: asset.healthHistory.map(
//         (a) => ({
//           name: `${a.status} | bla`,
//           description: new Date(a.timestamp).toDateString(),
//           color: color[a.status],
//         }),
//         [],
//       ),
//     },
//   ],
// };
