import { Card, Skeleton } from 'antd';

function WorkOrderSkeleton() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {[1, 2, 3].map((item) => (
          <Card loading key={`down-${item}`}>
            <Skeleton active loading paragraph={{ rows: 2 }} />;
          </Card>
        ))}
    </div>
  );
}

export default WorkOrderSkeleton;
