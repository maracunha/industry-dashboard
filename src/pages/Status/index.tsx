import { useLocation } from 'react-router-dom';
import { Avatar, Card, Descriptions, Empty } from 'antd';

import { useAssetsList } from '../../services/queries';
import styles from './styles.module.css';

function Status() {
  const { state } = useLocation();
  const [assets] = useAssetsList();

  const [asset] = assets.filter((asset) => asset.id == state);

  console.log(asset, asset);

  if (!state || !asset) {
    return <Empty />;
  }

  const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

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
            <Descriptions.Item label="Assened Users: ">
              {asset.assignedUserIds.map((u) => (
                <Avatar>{u}</Avatar>
              ))}
            </Descriptions.Item>
          </Descriptions>
        </Card>
      </div>
      <div className="col-span-2">
        <Card title="Card Title">
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid hoverable={false} style={gridStyle}>
            Content
          </Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
          <Card.Grid style={gridStyle}>Content</Card.Grid>
        </Card>
      </div>
    </div>
  );
}

export default Status;
