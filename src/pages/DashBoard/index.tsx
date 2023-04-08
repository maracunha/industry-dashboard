import { Divider } from 'antd';
import DetailCard from '../../components/DetailCard';
import InfoCard from '../../components/InfoCard';
import { useAssetsList } from '../../services/queries';
import { useUserSlice } from '../../services/useUserSlice';

function DashBoard() {
  const user = useUserSlice((state) => state.user);
  const userUnitId = user?.unitId;
  const userId = user?.id;

  const [assets, status] = useAssetsList();

  if (!userId) {
    // return some nice thing here
    return;
  }

  const foo = assets.filter((asset) => asset.assignedUserIds.includes(userId));

  if (!foo) return;

  console.log({ assets, status, userUnitId, userId, foo });

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
        {foo.map((asset) => (
          <DetailCard
            name={asset.name}
            model={asset.model}
            status={asset.status}
            time={3}
            healthScore={20}
          />
        ))}
      </div>
    </div>
  );
}

export default DashBoard;
