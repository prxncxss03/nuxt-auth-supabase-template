import { serverSupabaseClient } from '#supabase/server'

export const insertUserOnUsers = async (event, userId, name,) => {
    const client = await serverSupabaseClient(event)
    const { data, error } = await client.from('users').insert({ user_id: userId , name: name, user_type: 'regular'})
    if (error) {
        console.error('Error during user insertion:', error)
        throw error
    }
    return data
}