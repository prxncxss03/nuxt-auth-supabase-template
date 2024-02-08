<script setup>

const { label, id, error } = defineProps(['label', 'id', 'error', 'errorMessage']);

</script>


<template>
    <div class="mb-4">
      <label :for="id" class="block mb-1 dark:text-green-200">{{ label }}</label>
      <slot></slot>
      <div v-if="error" class="mt-1 dark:text-red-200 text-red-400">{{ errorMessage }}</div>
    </div>
</template>
  
 