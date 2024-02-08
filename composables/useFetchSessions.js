export const useFetchSessions = () => {
    const user = useSupabaseUser()
    const sessions = ref(null);

    onMounted( () => {
        fetchSessions();
    });

    const fetchSessions = async () => {
        const { data } = await $fetch('/api/admin/getSessions');
        sessions.value = data;
    }
    
    const sessionsData = computed(() => {

        if (sessions.value) {
            return sessions.value.map((item) => {
                const userCookie = useCookie('userCookie');
                const isCurrentUser = userCookie.value === item.user_id;
                console.log(`user_id: ${item.user_id}, isCurrentUser: ${isCurrentUser}`);
                return {
                    user_id: item.user_id,
                    count: item.count,
                    badge: isCurrentUser ? 'You' : ''
                }
            });
        }
        return [];
    });
  

    const columns = [
        {field: 'user_id', header: 'User ID'},
        {field: 'count', header: 'Logins'},
        {field: 'badge', header: ''}
    ];

    return {
        sessionsData,
        columns
    }
}

