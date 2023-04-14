import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown, Layout, Space, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import { useCompaniesList, useUnitsList, useUsersList } from '../../services/queries';
import { useUserSlice } from '../../services/useUserSlice';
import { createUserList } from './helper';

const { Header: AntdHeader } = Layout;
const { Text } = Typography;

function Header() {
  const navigate = useNavigate();
  const user = useUserSlice((state) => state.user);
  const setUser = useUserSlice((state) => state.setUser);

  const [companies] = useCompaniesList();
  const [users] = useUsersList();
  const [units] = useUnitsList();

  useEffect(() => {
    if (!user) {
      setUser(users[0]);
    }
  }, [users]);

  const companyName = companies.find((c) => c.id === user?.companyId)?.name ?? '';
  const unitName = units.find((c) => c.id === user?.unitId)?.name ?? '';
  const items = createUserList(users);

  const onClick = ({ key }: { key: string }) => {
    const name = users.find((user) => user.id == +key);

    if (!name) {
      return;
    }
    setUser(name);
    navigate('/dashboard');
  };

  return (
    <AntdHeader className="flex sticky top-0 bg-blue-700 z-20">
      <span className="w-44">
        <Link to="/dashboard">
          <Text className="text-white">{companyName}</Text>
        </Link>
      </span>
      <div className="flex justify-between w-full">
        <span className="ml-8 text-white">{unitName}</span>
        <Dropdown menu={{ items, onClick }}>
          <Space className="text-white">
            {user?.name}
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </AntdHeader>
  );
}

export default Header;
