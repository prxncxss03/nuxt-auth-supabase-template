import { serverSupabaseClient } from '#supabase/server'

export const insertIfNotExists = async (event, userId, name) => {
    const client = await serverSupabaseClient(event)
    const { data, error } = await client.rpc('insert_if_not_exists', { _user_id: userId, _name: name});

    if (error) {
        console.error('Error during user insertion on users table:', error)
        throw error
    }
    return data
}
