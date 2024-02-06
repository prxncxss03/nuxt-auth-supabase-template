
export const useSignOut = () => { 
    const signOut = async () => {
        const response = await $fetch('/api/logout')
        if (response.error) {
            console.error('Error logging out:', response.error)
            return
        }
        await navigateTo('/login')
    }
    return { signOut }
}
