<script setup>
    useHead({
        title: 'Unauthorized',
        meta: [
            {
                name: 'description',
                content: 'You are not authorized to view this page'
            }
        ]
    })

</script>

<template>
    <div class="flex font-inter dark:bg-gray-900 justify-center items-center h-screen">
        <div class="text-center">
        <h1 class="text-4xl font-bold dark:text-gray-100">Unauthorized</h1>
        <p class="text-lg dark:text-gray-300">You are not authorized to view this page</p>
        <Button @click="goBack" class="mt-4" label="Go Back" />
        </div>
    </div>

</template>
```