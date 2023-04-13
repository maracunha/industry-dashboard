import { expect, test } from 'vitest';
import { creatPieData } from './chartsHelper';

test('Format health info correctly', () => {
  let health = [
    {
      status: 'inOperation',
      timestamp: '2022-12-01T00:00:00.000Z',
    },
    {
      status: 'inOperation',
      timestamp: '2022-12-08T00:00:00.000Z',
    },
    {
      status: 'inOperation',
      timestamp: '2022-12-15T00:00:00.000Z',
    },
    {
      status: 'inAlert',
      timestamp: '2022-12-22T00:00:00.000Z',
    },
    {
      status: 'inOperation',
      timestamp: '2022-12-29T00:00:00.000Z',
    },
  ];

  const pieData = creatPieData([...health], {});

  expect(pieData.inOperation.y).toStrictEqual(4);
  expect(pieData.inAlert.y).toStrictEqual(1);
});
