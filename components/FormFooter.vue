<script setup>

const { path, label, title } = defineProps(['path', 'label', 'title', ]);

</script>


<template>
    <p class="text-center mt-2 dark:text-green-200"> {{ title }} <NuxtLink :to="path" class="dark:text-blue-400">{{ label }}</NuxtLink></p>
</template>
  