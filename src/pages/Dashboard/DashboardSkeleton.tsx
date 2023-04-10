import { Card, Divider, Skeleton } from 'antd';

function DashboardSkeletn() {
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map((item) => (
          <Card loading key={`up-${item}`}>
            <Skeleton active loading paragraph={{ rows: 2 }} />;
          </Card>
        ))}
      </div>

      <Divider orientation="left" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {[1, 2, 3].map((item) => (
          <Card loading key={`down-${item}`}>
            <Skeleton active loading paragraph={{ rows: 2 }} />;
          </Card>
        ))}
      </div>
    </div>
  );
}

export default DashboardSkeletn;
