<script setup>
  const user = useSupabaseUser()
  console.log("user inside confirm", user)

  watch(user, () => {
    if (user.value) {
        console.log('user has value')
      return navigateTo('/login')
    }
  }, { immediate: true })
</script>

<template>
  <p class="font-bold">Waiting for login</p>
</template>