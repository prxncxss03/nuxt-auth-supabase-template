<script setup>
   definePageMeta({
    title: 'Admin Dashboard',
    middleware: [
    
    ]
   })
    const { signOut } = useSignOut()
    const user = useSupabaseUser()

    const sessions = ref(null);
    const error = ref(null);
    

    onMounted( () => {
        fetchSessions();
        console.log("User from admin: ", user.value);
       
    });

    const fetchSessions = async () => {
        const { data } = await $fetch('/api/admin/getSessions');
        console.log("Data from admin: ", data);
        sessions.value = data;
    }
    

    const sessionsData = computed(() => {
        console.log("Data Value: ", sessions.value);

        if (sessions.value) {
            return sessions.value.map((item) => {
                const userCookie = useCookie('userCookie');
                console.log("User Cookie: ", userCookie);
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

</script>

<template>
    <div>
        <div class="card">
            <DataTable :value="sessionsData" tableStyle="min-width: 50rem"> 
                <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
                    <template v-if="col.field === 'badge'" #body="slotProps">
                        <Tag v-if="slotProps.data.badge" value="You" rounded></Tag>
                    </template>
                </Column>
            </DataTable>
        </div>
        <Button label="Sign Out" @click="signOut"/>
    </div>
</template>