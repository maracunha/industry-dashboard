import { useMemo } from 'react';
import { Empty } from 'antd';

import { useWorkordersList } from '../../services/queries';
import { Workorder } from '../../services/interfaces';
import WorkOrderCard from '../../components/WorkOrderCard';
import WorkOrderSkeleton from './WorkOrdersSkeleton';

function WorkOrders({ userId }: { userId: number }) {
  const [works, status] = useWorkordersList();

  const userWorkOrders: Workorder[] = useMemo(
    () => works.filter((work) => work.assignedUserIds.includes(userId)),
    [works, userId],
  );

  if (status == 'loading') {
    return <WorkOrderSkeleton />;
  }

  if (userWorkOrders.length == 0) {
    return <Empty />;
  }


  console.log({userWorkOrders })

  return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {userWorkOrders.map((orders) => (
          <WorkOrderCard orders={orders}/>
        ))}
      </div>
  );

}

export default WorkOrders;
