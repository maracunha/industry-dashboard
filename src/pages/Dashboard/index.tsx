import { useState } from 'react';

import { Dropdown, Layout, Menu, Space } from 'antd';
import {
  AppstoreOutlined,
  DashboardOutlined,
  CalendarOutlined,
  DownOutlined,
} from '@ant-design/icons';
import View from '../View';
import type { MenuProps } from 'antd';
import styles from './styles.module.css';

const { Header, Content } = Layout;

const users: MenuProps['items'] = [
  {
    label: 'Maria',
    key: 'user1',
  },
  {
    label: 'Jon tra vocta',
    key: 'user2',
  },
  {
    label: 'Coisa lindo',
    key: 'user3',
  },
];

const items: MenuProps['items'] = [
  {
    label: 'Service Order',
    key: 'services',
    icon: <CalendarOutlined />,
  },
  {
    label: 'Over View',
    key: 'view',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'Status',
    key: 'status',
    icon: <DashboardOutlined />,
  },
];

function Dashboard() {
  const [current, setCurrent] = useState('view');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header className={styles.header}>
        <span className="w-44">
          <a href="/">
            <h1>The Best Company</h1>
          </a>
        </span>
        <div className="justify-between w-full">
          <span className="ml-8">units</span>
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Jose Maria
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
      <Menu
        className={styles.menu}
        onClick={onClick}
        selectedKeys={[current]}
        defaultSelectedKeys={['view']}
        mode="horizontal"
        items={items}
      />
      <Content>
        <View />
      </Content>
    </Layout>
  );
}

export default Dashboard;
