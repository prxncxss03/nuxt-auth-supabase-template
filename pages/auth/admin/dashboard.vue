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
    
   const { sessionsData, columns } = useFetchSessions()

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