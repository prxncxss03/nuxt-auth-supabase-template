<script setup>
   useHead({
    title: 'Admin Dashboard',
    meta: [
      {
        name: 'description',
        content: 'Admin Dashboard'
      }
    ]
    })
    
   definePageMeta({
    middleware: [
        'auth',
    ]
   })
    const user = useSupabaseUser()
    const sessions = ref(null);

    onMounted( () => {
        fetchSessions();
        console.log("User from admin: ", user.value);
       
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

</script>

<template>
    <div class="flex flex-col font-inter dark:bg-gray-900  h-screen items-center ">
        <Logout/>
        <div class="flex flex-col justify-center items-center h-full">
            <div class="text-center">
            <h1 class="text-4xl font-bold dark:text-gray-100">Welcome Admin!</h1>
            <p class="text-lg dark:text-gray-300 mb-2">You are now logged in</p>
            </div>
            <div class="card">
                <DataTable  :value="sessionsData" tableStyle="min-width: 20rem"> 
                    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
                        <template v-if="col.field === 'badge'" #body="slotProps">
                            <Tag v-if="slotProps.data.badge" value="You" rounded></Tag>
                        </template>
                    </Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>