import { useWorkordersList } from '../../services/queries';

function WorkOrders() {
  const [works, status] = useWorkordersList();
  console.log({works, status })

  return <div>work orders</div>
}

export default WorkOrders;
