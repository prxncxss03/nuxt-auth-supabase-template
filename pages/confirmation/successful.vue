<script setup>
  useHead ({
    title: 'Successful',
    meta: [
      {
        name: 'description',
        content: 'You have successfully registered'
      }
    ]
  })

  const goToLogin = () => {
    return navigateTo('/login')
  }
</script>

<template>
    <div class="flex font-inter flex-col dark:bg-gray-900 justify-center items-center h-screen">
      <h3 class="text-2xl dark:text-green-200">You have successfully registered! 🥳</h3>
      <Button @click="goToLogin" class="mt-4" label="Login" />
    </div>
</template>
  