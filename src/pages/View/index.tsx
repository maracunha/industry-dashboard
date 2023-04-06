import { Divider } from 'antd';
import DetailCard from '../../components/DetailCard';
import InfoCard from '../../components/InfoCard';

function View() {
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
        <DetailCard name="Bomba" model="bla bal" status="inAlert" time={3} healthScore={20} />
        <DetailCard name="Man" model="bla bal" status="inOperation" time={3} healthScore={20} />
        <DetailCard name="Maria" model="bla bal" status="plannedStop" time={3} healthScore={20} />
        <DetailCard name="Bom" model="bla bal" status="notplannetStop" time={3} healthScore={20} />
        <DetailCard name="Boeee" model="bla bal" status="inDownTime" time={3} healthScore={20} />
      </div>
    </div>
  );
}

export default View;
