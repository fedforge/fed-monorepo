// packages/features/profile/libs/fetcher.ts

export async function fetcher(url: string, options?: RequestInit) {
  return fetch(url, options).then((res) => res.json())
}
