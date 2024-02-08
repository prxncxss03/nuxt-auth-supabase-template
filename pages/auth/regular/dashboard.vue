<script setup>
    useHead({
        title: 'Regular User',
        meta: [
            {
                name: 'description',
                content: 'Dashboard'
            }
        ]
    })

    definePageMeta({
        middleware: [
            'auth'
        ]
    })
</script>

<template>
    <div class="flex flex-col font-inter dark:bg-gray-900  h-screen items-center ">
            <Logout/>
            <div class="flex flex-col justify-center items-center h-full">
                <div class="text-center">
                <h1 class="text-4xl font-bold dark:text-gray-100">Welcome User!</h1>
                <p class="text-lg dark:text-gray-300 mb-2">You are now logged in</p>
                </div>
            </div>
    </div>
</template>