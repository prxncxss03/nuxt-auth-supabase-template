<script>
    const { signOut } = useSignOut()
</script>

<template>
    <div>
        <h1>Regular</h1>
        <p>Regular page</p>
        <Button label="Sign Out" @click="signOut"/>
    </div>
</template>