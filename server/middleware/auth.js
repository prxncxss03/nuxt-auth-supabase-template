import { serverSupabaseUser } from '#supabase/server';

export default defineEventHandler(async (event) => {

    const user = await serverSupabaseUser(event)
    if (event.path.startsWith('/auth') && !user ) {
        throw createError({
            status: 401,
            message: 'Unauthorized',
        })

    }
    
})
 