import { Dropdown, Layout, Space, Typography } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

import { useCompaniesList, useUnitsList, useUsersList } from '../../services/queries';
import { User } from '../../services/inderfaces';
import { useState } from 'react';

const { Header: AntdHeader } = Layout;
const { Text } = Typography;

function bla(users: User[]): MenuItemType[] {
  return users.map((user) => {
    return {
      label: user.name,
      key: user.id,
    };
  }, []);
}

function Header() {
  const [user, setUser] = useState('');

  const [companies] = useCompaniesList();
  const [users] = useUsersList();
  const [units] = useUnitsList();
  const companyName = companies[0]?.name ?? '';

  console.log({ users, units });

  const items = bla(users);

  const onClick = ({ key }: { key: string }) => {
    const name = items?.find((i) => i?.key == key)?.label as string;

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
        <span className="ml-8 text-white">units</span>
        <Dropdown menu={{ items, onClick }}>
          <Space className="text-white">
            {user}
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </AntdHeader>
  );
}

export default Header;
