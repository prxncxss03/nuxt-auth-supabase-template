import { serverSupabaseClient } from '#supabase/server';
import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {
    const client = await serverSupabaseClient(event)
    const user = await serverSupabaseUser(event)
    let userTypeCookie = getCookie(event, 'userTypeCookie',)
    console.log("userTypeCookie", userTypeCookie)
    if (event.path.startsWith('/auth/admin') && userTypeCookie !== 'admin') {
        throw createError({
            status: 401,
            message: 'Unauthorized',
        })

    }
    
})