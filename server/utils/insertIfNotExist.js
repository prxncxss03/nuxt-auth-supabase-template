import { serverSupabaseClient } from '#supabase/server'

export const insertIfNotExists = async (event, userId) => {
    const client = await serverSupabaseClient(event)
    const { data, error } = await client.rpc('insert_if_not_exists', { _user_id: userId });

    if (error) {
        console.error('Error during user insertion:', error)
        throw error
    }
    return data
}
