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
    <div class="flex font-inter dark:bg-gray-900 justify-center items-center h-screen">
      <h3 class="text-2xl dark:text-green-200">Oops! There was a problem</h3>
        <NuxtLink to="/register" class="dark:text-blue-400 text-blue-500">Go back</NuxtLink>
    </div> 
  </template>
  