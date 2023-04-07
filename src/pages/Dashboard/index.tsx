import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  DashboardOutlined,
  CalendarOutlined,
} from '@ant-design/icons';

import View from '../View';
import styles from './styles.module.css';
import Status from '../Status';
import WorkOrders from '../WorkOrders';

import type { MenuProps } from 'antd';
// import { useAssetsList, useWorkordersList } from '../../services/queries';
import Header from '../../components/Header';

const { Content } = Layout;

const items: MenuProps['items'] = [
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

function Dashboard() {
  const navigate = useNavigate();
  // const [assets, status] = useAssetsList();
  // const [works] = useWorkordersList();

  const [current, setCurrent] = useState('view');

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`/${e.key}`);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header />
      <Menu
        className={styles.menu}
        onClick={onClick}
        selectedKeys={[current]}
        defaultSelectedKeys={['view']}
        mode="horizontal"
        items={items}
      />
      <Content>
        <Routes>
          <Route path="/dashboard" element={<View />} />
          <Route path="/status" element={<Status />} />
          <Route path="/workorders" element={<WorkOrders />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default Dashboard;
