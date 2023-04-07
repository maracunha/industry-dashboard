import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import DashBoard from '../DashBoard';
import styles from './styles.module.css';
import Status from '../Status';
import WorkOrders from '../WorkOrders';

import Header from '../../components/Header';
import { items } from './helper';

import type { MenuProps } from 'antd';

const { Content } = Layout;

function Dashboard() {
  const [current, setCurrent] = useState('dashboard');
  const navigate = useNavigate();

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
        mode="horizontal"
        items={items}
      />
      <Content>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/status" element={<Status />} />
          <Route path="/workorders" element={<WorkOrders />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default Dashboard;
