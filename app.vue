<script setup>
  useHead ({
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap'
      }
    ]
  })

</script>

<template>
    <div class="h-screen">
      <NuxtLink to="/login">Login</NuxtLink>
      <NuxtLink to="/register">Register</NuxtLink>
    </div>
  <NuxtPage />
</template>
