import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware'
import { User } from './interfaces';

interface State {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserSlice = create<State>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUser: (user) => set(() => ({ user })),
      }),
      {
        name: 'user-storage',
      }
    )
  )
)
