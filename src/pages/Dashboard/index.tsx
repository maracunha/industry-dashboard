import { useMemo } from 'react';
import { Divider, Empty } from 'antd';

import DashboardSkeleton from './DashboardSkeleton';
import DetailCard from '../../components/DetailCard';
import InfoCard from '../../components/InfoCard';
import { Asset } from '../../services/interfaces';

import { useAssetsList } from '../../services/queries';
import { useUserSlice } from '../../services/useUserSlice';
import { assetsStatus } from './helper';

function DashBoard() {
  const user = useUserSlice((state) => state.user);
  const userId = user?.id;

  const [assets, reqStatus] = useAssetsList();

  if (!userId) {
    return <Empty />;
  }

  const userAssets: Asset[] = useMemo(
    () => assets.filter((asset) => asset.assignedUserIds.includes(userId)),
    [assets, userId],
  );

  const status = useMemo(() => assetsStatus(userAssets), [userAssets]);

  if (reqStatus == 'loading') {
    return <DashboardSkeleton />;
  }

  return (
    <div>
      <InfoCard status={status} />

      <Divider orientation="left" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {userAssets.map((asset) => (
          <DetailCard
            key={asset.id}
            name={asset.name}
            model={asset.model}
            cardStatus={asset.status}
            healthScore={asset.healthscore}
            id={asset.id}
          />
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
