import { Card } from 'antd';
import Title from 'antd/es/typography/Title';
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  PauseCircleOutlined,
  StopOutlined,
} from '@ant-design/icons';
import { AssetsStatus } from '../../services/inderfaces';

function InfoCard({ status }: {status: AssetsStatus}) {

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
      <Card className="flex justify-center">
        <Title level={4}>Operation</Title>
        <div className="flex flex-row items-center gap-2 justify-center text-2xl">
          <CheckCircleOutlined style={{ color: 'green', fontSize: 'xx-large' }} />
          <span className="font-bold">{status.inOperation}</span>
        </div>
      </Card>

      <Card className="flex justify-center">
        <Title level={4}>In Alert</Title>
        <div className="flex flex-row items-center gap-2 justify-center text-2xl">
          <ExclamationCircleOutlined style={{ color: 'red', fontSize: 'xx-large' }} />
          <span className="font-bold">{status.inAlert}</span>
        </div>
      </Card>

      <Card className="flex justify-center">
        <Title level={4}>Planned Stop</Title>
        <div className="flex flex-row items-center gap-2 justify-center text-2xl">
          <PauseCircleOutlined style={{ color: 'orange', fontSize: 'xx-large' }} />
          <span className="font-bold">{status.plannedStop}</span>
        </div>
      </Card>

      <Card className="flex justify-center">
        <Title level={4}>No Planned Stop</Title>
        <div className="flex flex-row items-center gap-2 justify-center text-2xl">
          <PauseCircleOutlined style={{ color: 'darkcyan', fontSize: 'xx-large' }} />
          <span className="font-bold">{status.notplannetStop}</span>
        </div>
      </Card>

      <Card className="flex justify-center">
        <Title level={4}>Downtime</Title>
        <div className="flex flex-row items-center gap-2 justify-center text-2xl">
          <StopOutlined style={{ color: 'gray', fontSize: 'xx-large' }} />
          <span className="font-bold">{status.inDowntime}</span>
        </div>
      </Card>
    </div>
  );
}

export default InfoCard;
