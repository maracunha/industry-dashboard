import { AppstoreOutlined, DashboardOutlined, CalendarOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';

export const items: MenuProps['items'] = [
  {
    label: 'Service Order',
    key: 'workorders',
    icon: <CalendarOutlined />,
  },
  {
    label: 'Over View',
    key: 'dashboard',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Status',
    key: 'status',
    icon: <DashboardOutlined />,
  },
];
