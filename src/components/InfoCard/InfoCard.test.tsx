import matchers from '@testing-library/jest-dom/matchers';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

expect.extend(matchers);

import InfoCard from './index';

test('displays a green and in Operation status', async () => {
  const status = {
    inOperation: 0,
    inAlert: 0,
    plannedStop: 0,
    notplannetStop: 0,
    inDowntime: 0,
  };
  const card = render(<InfoCard status={status} />);

  expect(screen.getByText(/no data/i)).toBeInTheDocument();
  card.unmount();
});
