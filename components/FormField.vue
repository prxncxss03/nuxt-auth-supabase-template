<script setup>

const { label, id, error } = defineProps(['label', 'id', 'error', 'errorMessage']);

</script>


<template>
    <div class="mb-4">
      <label :for="id" class="block mb-1">{{ label }}</label>
      <slot></slot>
      <div v-if="error" class="text-red-500">{{ errorMessage }}</div>
    </div>
</template>
  
 