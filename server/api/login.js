import { serverSupabaseClient } from '#supabase/server'
import { insertUserOnSessions } from '../utils/insertUserOnSessions'
import { insertIfNotExists } from '../utils/insertIfNotExist'
import { getUserDataType } from '../utils/getUserDataType'

export default eventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const { email, password } = await readBody(event)
    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('Error during login:', error)
      return error
    }

    else {
      await insertUserOnSessions(event, data.user.id)

      setCookie(event, 'userCookie', data.user.id)
      setCookie(event, 'accessTokenCookie', data.session.access_token)
      const userType = await getUserDataType(event, data.user.id)
      console.log("user type is: ", userType)
      if (userType === 'admin') {
        setCookie(event, 'userTypeCookie', 'admin')      
      } else if (userType === 'regular') {
        setCookie(event, 'userTypeCookie', 'regular')
      } else {
        console.log('user type not found')
      }
      return data
    }
    
  })
  