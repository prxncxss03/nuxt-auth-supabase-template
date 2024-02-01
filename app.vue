<script setup>
  import { ref } from 'vue';

  const value = ref(null);

</script>

<template>
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet">
    </div>
    <div class="card flex justify-center font-inter">
        <div class="flex flex-col gap-2">
            <label for="username">Username</label>
            <InputText id="username" v-model="value" aria-describedby="username-help" />
            <small id="username-help">Enter your username to reset your password.</small>
        </div>
    </div>


</template>
