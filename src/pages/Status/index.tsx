import { Empty } from 'antd';
import { useLocation } from 'react-router-dom';
import { Asset } from '../../services/inderfaces';

function Status() {
  const { state } = useLocation();

  console.log ( state )

  if (!state) {
    return <Empty />;
  }

  return <div>status</div>;
}

export default Status;
