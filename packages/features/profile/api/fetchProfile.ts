// packages/features/profile/api/fetch-profile.ts

export async function fetchProfile(userId: string) {
  return fetch(`/api/profile/${userId}`).then((res) => res.json())
}
