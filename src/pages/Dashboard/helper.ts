import { Asset, AssetsStatus } from '../../services/interfaces';

export function assetsStatus(assets: Asset[]): AssetsStatus {
  const status = {
    inOperation: 0,
    inAlert: 0,
    plannedStop: 0,
    notplannetStop: 0,
    inDowntime: 0,
  };

  for (let asset of assets) {
    status[asset.status]++
  }

  return status;
}
