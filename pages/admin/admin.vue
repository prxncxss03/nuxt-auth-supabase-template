<script setup>
    const { signOut } = useSignOut()
    const supabase = useSupabaseClient()
    const user = useSupabaseUser()

    const data = ref(null);
    const error = ref(null);
    

    onMounted(async () => {

        
        const result = await supabase.rpc('group_by_user_id');
        data.value = result.data;
        error.value = result.error;
    });

    const sessionsData = computed(() => {
    console.log("current user: ", user.value.id);
    console.log("Data Value: ", data.value);
    if (data.value) {
        return data.value.map((item) => {
            const isCurrentUser = user.value.id === item.user_id;
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
    console.log("Data Value 1: ", data.value);

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