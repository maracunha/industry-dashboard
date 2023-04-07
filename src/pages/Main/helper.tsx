import { AppstoreOutlined, DashboardOutlined, CalendarOutlined } from '@ant-design/icons';

import type { MenuProps } from 'antd';

export const items: MenuProps['items'] = [
  {
    label: 'Service Orders',
    key: 'workorders',
    icon: <CalendarOutlined />,
  },
  {
    label: 'Dashboard',
    key: 'dashboard',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Status',
    key: 'status',
    icon: <DashboardOutlined />,
  },
];
