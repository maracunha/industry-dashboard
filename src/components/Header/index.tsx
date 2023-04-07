import { Dropdown, Layout, Space, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

import { useCompaniesList, useUnitsList, useUsersList } from '../../services/queries';
import { User } from '../../services/inderfaces';
import { useUserSlice } from '../../services/store';
import { useEffect, useState } from 'react';

const { Header: AntdHeader } = Layout;
const { Text } = Typography;

function createUserList(users: User[]): MenuItemType[] {
  return users.map((user) => {
    return {
      label: user.name,
      key: user.id,
    };
  }, []);
}

function Header() {
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
  };

  return (
    <AntdHeader className="flex sticky top-0 bg-blue-700">
      <span className="w-44">
        <a href="/dashboard">
          <Text className="text-white">{companyName}</Text>
        </a>
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
