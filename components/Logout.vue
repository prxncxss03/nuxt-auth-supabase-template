<script setup>

    const { signOut } = useSignOut()

</script>

<template>
  <div class="flex self-end">
        <Button @click="signOut" class="mt-4 mr-2" label="Logout" />
  </div>
</template>       