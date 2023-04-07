import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { User } from '../../services/inderfaces';

export function createUserList(users: User[]): MenuItemType[] {
  return users.map((user) => {
    return {
      label: user.name,
      key: user.id,
    };
  }, []);
}
