import { Card } from 'antd';
import Title from 'antd/es/typography/Title';
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  PauseCircleOutlined,
  StopOutlined,
} from '@ant-design/icons';

function InfoCard({ status = 'inAlert' }) {
  const info = {
    inAlert: {
      title: 'Alert',
      icon: <ExclamationCircleOutlined style={{ color: 'red', fontSize: 'xx-large' }} />,
    },
    inOperation: {
      title: 'Operation',
      icon: <CheckCircleOutlined style={{ color: 'green', fontSize: 'xx-large' }} />,
    },
    inDownTime: {
      title: 'Down Time',
      icon: <StopOutlined style={{ color: 'gray', fontSize: 'xx-large' }} />,
    },
    notplannetStop: {
      title: 'Not Planned Stop',
      icon: <PauseCircleOutlined style={{ color: 'darkcyan', fontSize: 'xx-large' }} />,
    },
    plannedStop: {
      title: 'Planned Stop',
      icon: <PauseCircleOutlined style={{ color: 'orange', fontSize: 'xx-large' }} />,
    },
  }[status];

  return (
    <Card className="flex justify-center">
      <Title level={4}>{info?.title}</Title>
      <div className="flex flex-row items-center gap-2 justify-center text-2xl">
        {info?.icon}
        <span className="font-bold">09</span>
      </div>
    </Card>
  );
}

export default InfoCard;
