const supabase = useSupabaseClient()

export const useSignOut = () => { 
    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        if (error) console.log(error)
        console.log("signed out")
        await navigateTo('/login')
    }
    return { signOut }
}
