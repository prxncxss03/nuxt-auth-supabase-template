export default defineNuxtRouteMiddleware((to, from)=>{
    const router = useRouter()
    const userTypeCookie = useCookie('userTypeCookie')
    const accessTokenCookie = useCookie('accessTokenCookie')
    if (to.path.startsWith('/auth/admin') && userTypeCookie.value !== 'admin') {
        console.log("not admin")
        return navigateTo('/error/unauthorized')
    }

    if (to.path.startsWith('/auth/regular') && userTypeCookie.value !== 'regular') {
        return navigateTo('/error/unauthorized')
    }
    
    if (to.path.startsWith('/auth') && !accessTokenCookie.value){
        console.log("not logged in")
       return navigateTo('/login')
    }

})