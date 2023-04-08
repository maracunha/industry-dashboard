import { Card, Divider, Empty, Skeleton } from 'antd';
import DetailCard from '../../components/DetailCard';
import InfoCard from '../../components/InfoCard';
import { Asset } from '../../services/inderfaces';
import { useAssetsList } from '../../services/queries';
import { useUserSlice } from '../../services/useUserSlice';
import DashboardSkeleton from './DashboardSkeleton';

function DashBoard() {
  const user = useUserSlice((state) => state.user);
  const userId = user?.id;

  const [assets, status] = useAssetsList();

  if (!userId) {
    return <Empty />;
  }

  const userAssets: Asset[] = assets.filter((asset) => asset.assignedUserIds.includes(userId));

  if (status == 'loading') {
    return <DashboardSkeleton />
  }

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-2">
        <InfoCard status="inOperation" />
        <InfoCard status="inAlert" />
        <InfoCard status="plannedStop" />
        <InfoCard status="notplannetStop" />
        <InfoCard status="inDownTime" />
      </div>

      <Divider orientation="left" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {userAssets.map((asset) => (
          <DetailCard
            key={asset.id}
            name={asset.name}
            model={asset.model}
            cardStatus={asset.status}
            healthScore={20}
            id={asset.id}
          />
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
