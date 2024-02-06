import { serverSupabaseClient } from '#supabase/server'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { error } = await client.auth.signOut()
    if (error) {
      console.error('Error during logout:', error)
      throw error
    }
    setCookie(event, 'userCookie', '')
    setCookie(event, 'accessTokenCookie', '')
    setCookie(event, 'userTypeCookie', '')
    return { data: 'logged out' }
})