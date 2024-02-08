export default defineEventHandler(async (event) => {

    const cookies = parseCookies(event);
    const accessToken = cookies['accessTokenCookie'];
    if (event.path.startsWith('/auth') && !accessToken ) {
        await sendRedirect(event, config.public.baseUrl + '/error/unauthorized')

    }
    
})
 