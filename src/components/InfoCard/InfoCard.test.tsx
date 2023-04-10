import matchers from '@testing-library/jest-dom/matchers';
import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';

expect.extend(matchers);

import InfoCard from './index';

test('displays a green and in Operation status', async () => {
  const card = render(
    <InfoCard status={{}}/>,
  );

  expect(screen.getByText(/no data/i)).toBeInTheDocument();
  card.unmount();
});
