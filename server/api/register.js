import { serverSupabaseClient } from '#supabase/server'
import { insertUserOnUsers } from '../utils/insertUserOnUsers'

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { name, email, password } = await readBody(event)
    const { data, error } = await client.auth.signUp({
        name,
        email,
        password,
    })

    if (error) {
        console.error('Error during login:', error)
        throw error
    }

    else {
        //check if the user already exists
        

        console.log('data from register:', data)
        return { data: 'registered waiting for verification'}
    }
    
  })
  