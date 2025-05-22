// packages/features/profile/hooks/useProfile.ts

import useSWR from 'swr'
import { fetcher } from '../libs/fetcher'

export const useProfile = (userId: string) => {
  const { data, error } = useSWR(`/api/profile/${userId}`, fetcher)
  return { data, error }
}
