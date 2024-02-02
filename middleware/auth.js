export default defineNuxtRouteMiddleware((to, _from) => {
    const user = useSupabaseUser()
    console.log("user", user)
  
    if (!user.value) {
      return navigateTo('/login')
    }
  })
  