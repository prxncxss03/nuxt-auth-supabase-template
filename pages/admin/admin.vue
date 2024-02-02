<script setup>
    const { signOut } = useSignOut()
</script>

<template>
    <div>
        <h1>Admin</h1>
        <p>Admin page</p>
        <Button label="Sign Out" @click="signOut"/>
    </div>
</template>