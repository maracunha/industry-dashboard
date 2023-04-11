import { useLocation } from 'react-router-dom';
import { Avatar, Card, Descriptions, Empty, Tooltip } from 'antd';

import { useAssetsList } from '../../services/queries';
import styles from './styles.module.css';
import { optionsChartPie } from './chartsHelper';
import Chart from '../../components/Chart';
import { useUSerAvatar } from '../../hooks/useUserAvatar';

function Status() {
  const { state } = useLocation();
  const [assets] = useAssetsList();
  const [asset] = assets.filter((asset) => asset.id == state);

  const avatars = useUSerAvatar(asset?.assignedUserIds);

  if (!state || !asset) {
    return <Empty />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8">
      <div>
        <Card cover={<img alt="example" src={asset.image} />}>
          <Descriptions title={asset.name} column={1} className={styles.description}>
            <Descriptions.Item label="Model: ">{asset.model}</Descriptions.Item>
            <Descriptions.Item label="Sensors: ">{asset.sensors[0]}</Descriptions.Item>
            <Descriptions.Item label="Max Temp: ">
              {asset.specifications.maxTemp} c
            </Descriptions.Item>
            <Descriptions.Item label="Healh Score: ">{asset.healthscore} %</Descriptions.Item>
            <Descriptions.Item label="Assigned Users" className={styles.assigned}>
              {avatars.map((a) => (
                <Tooltip key={`${asset.id}-${a}`} title={a} placement="top" className="cursor-help">
                  <Avatar className="mr-2">{a.charAt(0)}</Avatar>
                </Tooltip>
              ))}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
      <div className="col-span-2">
        <Card>
          <Chart options={optionsChartPie} />
        </Card>
      </div>
    </div>
  );
}

export default Status;
