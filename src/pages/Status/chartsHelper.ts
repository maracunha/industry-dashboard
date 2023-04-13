import Highcharts from 'highcharts';
import solidGauge from 'highcharts/modules/solid-gauge';
import highchartsMore from 'highcharts/highcharts-more';
import { HealthHistory } from '../../services/interfaces';

interface PieData {
  [K: string]: {
    status: string;
    y: number;
    color: string;
  };
}

type ConfigData = { [K: string]: { name: string; color: string } };

const configData: ConfigData = {
  inOperation: { name: 'In Operation', color: 'green' },
  inAlert: { name: 'In Alert', color: 'red' },
  plannedStop: { name: 'Planned Stop', color: 'orange' },
  unplannedStop: { name: 'Not Planned Stop', color: 'darkcyan' },
  inDowntime: { name: 'In Downtime', color: 'gray' },
};

export function creatPieData(historyValues: HealthHistory[], acc: PieData): PieData {
  if (historyValues.length < 1) {
    return acc;
  }

  const data: HealthHistory | undefined = historyValues.pop();
  if (!data) {
    return acc;
  }

  const pieDataKey = data.status;
  const pieDataValue = acc && acc[pieDataKey];

  // Here we create our structure
  if (!pieDataValue) {
    const baseData = {
      status: configData[pieDataKey].name,
      y: 1,
      color: configData[pieDataKey].color,
    };
    return creatPieData(historyValues, { ...acc, [pieDataKey]: baseData });
  }

  pieDataValue.y++;
  return creatPieData(historyValues, acc);
}

export function optionsChartPie(healthHistory: HealthHistory[]): Highcharts.Options {
  const pieData = creatPieData([...healthHistory], {});

  return {
    chart: {
      type: 'pie',
    },
    xAxis: {},
    yAxis: {},
    title: {
      text: 'Health History over this Month',
    },
    series: [
      {
        type: 'pie',
        data: Object.keys(pieData).map(
          (key) => ({
            name: pieData[key].status,
            y: pieData[key].y,
            color: pieData[key].color,
          }),
          [],
        ),
      },
    ],
  };
}

export function optionsChartGauge(healthScore: number): Highcharts.Options {
  highchartsMore(Highcharts);
  solidGauge(Highcharts);

  return {
    title: {
      text: 'Health Score',
    },
    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: [
        {
          backgroundColor: '#EEE',
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc',
        },
      ],
    },

    exporting: {
      enabled: false,
    },

    tooltip: {
      enabled: false,
    },

    credits: {
      enabled: false,
    },

    // the value axis
    yAxis: {
      stops: [
        [0.1, '#DF5353'], // red
        [0.5, '#DDDF0D'], // yellow
        [0.9, '#55BF3B'], // green
      ],
      lineWidth: 0,
      tickWidth: 0,
      minorTickInterval: null,
      tickAmount: 2,
      min: 0,
      max: 100,
      labels: {
        enabled: false,
      }
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
    series: [
      {
        type: 'solidgauge',
        data: [healthScore],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            '<span style="font-size:25px">{y} %</span><br/>' +
            '</div>',
        },
      },
    ],
  };
}
