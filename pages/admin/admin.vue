<script setup>
    const { signOut } = useSignOut()
    const supabase = useSupabaseClient()

    const data = ref(null);
    const error = ref(null);

    onMounted(async () => {
        const result = await supabase.rpc('group_by_user_id');
        data.value = result.data;
        error.value = result.error;
    });

    const sessionsData = computed(() => {
        return data.value;
    });

    const columns = [
    {field: 'user_id', header: 'User ID'},
    {field: 'count', header: 'Logins'},
];

</script>

<template>
    <div>
        <div class="card">
        <DataTable :value="sessionsData" tableStyle="min-width: 50rem">
            <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header"></Column>
        </DataTable>
    </div>

        <Button label="Sign Out" @click="signOut"/>
    </div>
</template>