import { lazy, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { useUserSlice } from '../../services/useUserSlice';
import Dashboard from '../Dashboard';
import Header from '../../components/Header';

import type { MenuProps } from 'antd';

import { items } from './helper';
import styles from './styles.module.css';

const { Content } = Layout;

const Status = lazy(() => import('../Status'));
const WorkOrders = lazy(() => import('../WorkOrders'));

function Main() {
  const [current, setCurrent] = useState('dashboard');
  const navigate = useNavigate();
  const location = useLocation();

  const user = useUserSlice((state) => state.user);
  const userId = user?.id ?? 0;

  const { pathname } = location;

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(`/${e.key}`);
    setCurrent(e.key);
  };

  useEffect(() => {
    const path = pathname.substring(1);
    if (path) {
      setCurrent(path);
    }
  }, [pathname]);

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
          <Route path="/" element={<Dashboard userId={userId} />} />
          <Route path="/dashboard" element={<Dashboard userId={userId} />} />
          <Route path="/status" element={<Status />} />
          <Route path="/workorders" element={<WorkOrders userId={userId} />} />
        </Routes>
      </Content>
    </Layout>
  );
}

export default Main;
