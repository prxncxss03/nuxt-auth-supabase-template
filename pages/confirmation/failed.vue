<script setup>
  useHead ({
    title: 'Failed',
    meta: [
      {
        name: 'description',
        content: 'Failed to confirm your account'
      }
    ]
  })
</script>

<template>
    <div class="flex font-inter flex-col dark:bg-gray-900 justify-center items-center h-screen">
      <h3 class="text-2xl dark:text-red-200 ">Failed to confirm your account. 😥</h3>
      <Button @click="goBack" class="mt-4" label="Go Back" />
    </div>
</template>
  