import { useUsersList } from '../services/queries';

export function useUSerAvatar(usersId: number[] = []): string[] {
  let names = [];
  const [users] = useUsersList();

  for (let id of usersId) {
    const user = users?.find((user) => user.id == id);
    if (user?.name) {
      names.push(user.name);
    }
  }

  return names;
}
