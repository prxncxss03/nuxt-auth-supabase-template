export default defineNuxtRouteMiddleware((to, from)=>{
    const userTypeCookie = useCookie('userTypeCookie')
    const accessTokenCookie = useCookie('accessTokenCookie')
    if (to.path.startsWith('/auth/admin') && userTypeCookie.value !== 'admin') {
        console.log("not admin")
        return navigateTo(-1)
    }

    if (to.path.startsWith('/auth/regular') && userTypeCookie.value !== 'regular') {
        console.log("not regular")
        return navigateTo(-1)
    }
    
    if (to.path.startsWith('/auth') && !accessTokenCookie.value){
        console.log("not logged in")
       return navigateTo('/login')
    }

})