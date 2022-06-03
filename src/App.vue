<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { isDark } from '~/composables'

useHead({
  title: 'Lucas Fell',
  meta: [
    { name: 'description', content: 'Lucas Fell\'s Portfolio' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#ea580c' : '#ffffff'),
    },
  ],
})
</script>

<template>
  <main class="px-4 py-6 text-center text-gray-700 dark:text-gray-200">
    <Nav class="mb-18" />
    <RouterView />
    <WIP />
  </main>
</template>
