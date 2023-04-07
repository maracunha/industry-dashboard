import { Asset } from '../../services/inderfaces';

function Status() {
  const asset: Asset = null;

  if (!asset) {
    return <div>Choose one asset at Dashboard</div>;
  }

  return <div>status</div>;
}

export default Status;
