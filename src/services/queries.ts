import { QueryStatus, useQuery } from '@tanstack/react-query';
import { fetchApi } from './api';
import type { Asset, Company, Unit, User, Workorder } from './interfaces';

export function useAssetsList() {
  const results = useQuery(['assets'], { queryFn: () => fetchApi('assets') });

  return [results?.data ?? [], results.status] as [Asset[], QueryStatus];
}

export function useUsersList() {
  const results = useQuery(['users'], { queryFn: () => fetchApi('users') });

  return [results?.data ?? [], results.status] as [User[], QueryStatus];
}

export function useCompaniesList() {
  const results = useQuery(['companies'], { queryFn: () => fetchApi('companies') });

  return [results?.data ?? [], results.status] as [Company[], QueryStatus];
}

export function useWorkordersList() {
  const results = useQuery(['workorders'], { queryFn: () => fetchApi('workorders') });

  return [results?.data ?? [], results.status] as [Workorder[], QueryStatus];
}

export function useUnitsList() {
  const results = useQuery(['units'], { queryFn: () => fetchApi('units') });

  return [results?.data ?? [], results.status] as [Unit[], QueryStatus];
}
