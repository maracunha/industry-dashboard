import { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

function Chart({ options }: { options: Highcharts.Options }) {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  return <HighchartsReact ref={chartComponentRef} highcharts={Highcharts} options={options} />;
}

export default Chart;
