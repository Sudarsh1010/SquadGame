// app/actions.ts
'use server'

import { cookies } from 'next/headers'

export async function checkAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get('jwt')

  return token ? token.value : null
}
