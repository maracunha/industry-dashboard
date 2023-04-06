import { Card } from 'antd';
import styles from './styles.module.css';

interface DetailCardProp {
  name: string;
  model: string;
  status: 'inAlert' | 'inOperation' | 'inDownTime' | 'notplannetStop' | 'plannedStop';
  time: number;
  healthScore: number;
}

function DetailCard({ name, model, status = 'inAlert', time, healthScore }: DetailCardProp) {

  return (
    <Card title={name} extra={<a href="#">Status</a>} bodyStyle={{ padding: 0 }} headStyle={{ textAlign: 'center' }}>
      <div className="flex flex-col text-center mt-6 gap-6">
        <p>Model: {model} </p>
        <p>Heath Score: {healthScore}%</p>
        <div className={styles[status]}>
          <span>{status}</span>
          <span>{time}</span>
        </div>
      </div>
    </Card>
  );
}

export default DetailCard;
