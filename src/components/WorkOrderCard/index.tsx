import { Avatar, Card, Descriptions, Tag, Tooltip } from 'antd';
import Table from './Table';
import { Workorder } from '../../services/interfaces';
import { useUSerAvatar } from '../../hooks/useUserAvatar';

import styles from './styles.module.css';

interface WorkOrderCardProp {
  orders: Workorder;
}

function WorkOrderCard({ orders }: WorkOrderCardProp) {
  const { id, title, description, status, priority, assignedUserIds, checklist } = orders;
  const avatars = useUSerAvatar(assignedUserIds);

  const statusColor = {
    completed: 'green',
    'in progress': 'blue',
  }[status];

  return (
    <Card
      title={title}
      extra={
        <Tag color={statusColor} className="uppercase">
          {status}
        </Tag>
      }
      bodyStyle={{ padding: 0 }}
      headStyle={{ textAlign: 'center' }}
    >
      <Descriptions title={description} column={1} className="mt-6 mx-12">
        <Descriptions.Item label="Priority ">{priority}</Descriptions.Item>

        <Descriptions.Item label="Checklist ">
          <Table checklist={checklist} id={id} />
        </Descriptions.Item>

        <Descriptions.Item label="Assigned Users" className={styles.assigned}>
          {avatars.map((a) => (
            <Tooltip key={`${id}-${a}`} title={a} placement="top" className="cursor-help">
              <Avatar className="mr-2">{a.charAt(0)}</Avatar>
            </Tooltip>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default WorkOrderCard;
