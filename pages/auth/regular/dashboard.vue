<script setup>
    definePageMeta({
        title: 'Regular User',
        middleware: [
            'auth'
        ]
    })
    const { signOut } = useSignOut()
</script>

<template>
    <div>
        <p class="text-2xl">Regular User</p>
        <Button label="Sign Out" @click="signOut"/>
    </div>
</template>