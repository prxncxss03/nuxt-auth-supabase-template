
export const useSignOut = () => { 
    const signOut = async () => {
        const supabase = useSupabaseClient()
        const { error } = await supabase.auth.signOut()
        if (error) console.log(error)
        const userTypeCookie = useCookie('userTypeCookie')
        userTypeCookie.value = ''
        return navigateTo('/login')
    }
    return { signOut }
}
