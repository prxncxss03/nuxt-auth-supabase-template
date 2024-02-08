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
    const { signOut } = useSignOut()
</script>

<template>
    <div class="flex font-inter dark:bg-gray-900 justify-center items-center h-screen">
        <div class="text-center">
        <h1 class="text-4xl font-bold dark:text-gray-100">Welcome User!</h1>
        <p class="text-lg dark:text-gray-300">You are now logged in</p>
        <Button @click="signOut" class="mt-4" label="Logout" />
        </div>
    </div>
</template>