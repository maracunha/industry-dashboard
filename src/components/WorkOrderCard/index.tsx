import { Avatar, Card, Descriptions, Tag } from 'antd';
import Table from './Table';
import { Workorder } from '../../services/interfaces';

interface WorkOrderCardProp {
  orders: Workorder;
}

function WorkOrderCard({ orders }: WorkOrderCardProp) {
  const { id, title, description, status, priority, assignedUserIds, checklist } = orders;

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
        <Descriptions.Item label="Priority: ">{priority}</Descriptions.Item>

        <Descriptions.Item label="Checklist: ">
          <Table checklist={checklist} id={id} />
        </Descriptions.Item>

        <Descriptions.Item label="Assened Users: ">
          {assignedUserIds.map((u) => (
            <Avatar key={`${id}-${u}`}>{u}</Avatar>
          ))}
        </Descriptions.Item>
      </Descriptions>
    </Card>
  );
}

export default WorkOrderCard;
