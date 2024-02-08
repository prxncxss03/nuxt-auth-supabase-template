import { serverSupabaseClient } from '#supabase/server'
import { insertIfNotExists } from '../utils/insertIfNotExist'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { name, email, password } = await readBody(event)
    const { data, error } = await client.auth.signUp({
        name,
        email,
        password,
    })

    if (error) {
        console.error('Error during register:', error)
        throw error
    }

    else {
        const noAccount = await insertIfNotExists(event, data.user.id, name)
        console.log('noAccount:', noAccount)
        if (!noAccount){
            return { data: 'User has already been registered. Please login.'}
        }
        console.log('data from register:', data)
        return { data: 'registered waiting for verification'}
    }
    
  })
  