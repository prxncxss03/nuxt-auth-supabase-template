import { serverSupabaseClient } from '#supabase/server'

export const insertUserOnSessions = async (event, userId) => {
    const client = await serverSupabaseClient(event)
    const { data, error } = await client.from('sessions').insert({ user_id: userId })
    if (error) {
        console.error('Error during user insertion:', error)
        throw error
    }
    return data
}
