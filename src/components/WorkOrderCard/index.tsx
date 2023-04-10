import { Card, Descriptions } from 'antd';
import styles from './styles.module.css';
import { Workorder } from '../../services/interfaces';

const { Meta } = Card;

interface WorkOrderCardProp {
  orders: Workorder;
}

function WorkOrderCard({ orders }: WorkOrderCardProp) {
  const { title, description, status, priority } = orders;

  return (
    <Card title={title} bodyStyle={{ padding: 0 }} headStyle={{ textAlign: 'center' }}>
      <Meta description={description} />
      <Descriptions column={1} className={styles.description}>
        <Descriptions.Item label="Priority: ">{priority}</Descriptions.Item>
      </Descriptions>

      <div className={styles[status]}>
        <span>{status}</span>
      </div>
    </Card>
  );
}

export default WorkOrderCard;
