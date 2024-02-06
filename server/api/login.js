import { serverSupabaseClient } from '#supabase/server'
import { insertUser } from '../utils/insertUser'
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
      throw error
    }

    else {
      await insertUser(event, data.user.id)
      setCookie(event, 'userCookie', data.user.id)
      setCookie(event, 'accessTokenCookie', data.session.access_token)
      const userType = await getUserDataType(event, data.user.id)
      console.log("user type is: ", userType)
      if (userType === 'admin') {
        console.log('admin logged in!')
        setCookie(event, 'userTypeCookie', 'admin')      
      } else if (userType === 'regular') {
        console.log('user logged in!')
        setCookie(event, 'userTypeCookie', 'regular')
      } else {
        console.log('user type not found')
      }

      console.log('data to be sent to client', data) 
      return data
    }
    
  })
  