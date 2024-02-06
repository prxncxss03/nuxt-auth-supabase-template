// This function is used to get the user type of a user from the users table in the database
import { serverSupabaseClient } from '#supabase/server'

export const getUserDataType = async (event, userId) => {
    const client = await serverSupabaseClient(event)
    const { data, error } = await client
    .from('users')
    .select('user_type')
    .eq('user_id', userId)
    .single()
    if (error) {
        console.error('Error getting user type:', error)
        throw error
    }
    return data.user_type
}