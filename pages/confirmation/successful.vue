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
</script>

<template>
    <div class="flex font-inter dark:bg-gray-900 justify-center items-center h-screen">
      <h3 class="text-2xl dark:text-green-200">You have successfully registered</h3>
        <NuxtLink to="/login" class="dark:text-blue-400 text-blue-500">Login</NuxtLink>
    </div> 
  </template>
  