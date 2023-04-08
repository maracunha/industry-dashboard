import { Link } from 'react-router-dom';
import { Card, Descriptions } from 'antd';
import styles from './styles.module.css';

interface DetailCardProp {
  name: string;
  model: string;
  cardStatus: 'inAlert' | 'inOperation' | 'inDowntime' | 'notplannetStop' | 'plannedStop';
  healthScore: number;
  id: number;
}

function DetailCard({ name, model, cardStatus, healthScore, id }: DetailCardProp) {
  return (
    <Card
      title={name}
      extra={
        <Link to="/status" state={id} className={styles.button}>
          View Status
        </Link>
      }
      bodyStyle={{ padding: 0 }}
      headStyle={{ textAlign: 'center' }}
    >
      <Descriptions column={1} className={styles.description}>
        <Descriptions.Item label="Model: ">{model}</Descriptions.Item>
        <Descriptions.Item label="Healh Score: ">{healthScore} %</Descriptions.Item>
      </Descriptions>

      <div className={styles[cardStatus]}>
        <span>{cardStatus}</span>
      </div>

    </Card>
  );
}

export default DetailCard;
