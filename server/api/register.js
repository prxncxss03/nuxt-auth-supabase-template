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
        console.log('data from register:', data)
        

        console.log('data.user.confirmed_at', data.user.confirmed_at)
        
        if(data.user.confirmed_at){
            console.log("user confirmed----------")
            await insertUserOnUsers(event, data.user.id, name)
        }
        return data
    }
    
  })
  