export default defineEventHandler(async (event) => {

    const cookies = parseCookies(event);
    const accessToken = cookies['accessTokenCookie'];
    if (event.path.startsWith('/auth') && !accessToken ) {
        throw createError({
            status: 401,
            message: 'Unauthorized User',
        })

    }
    
})
 