<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
import { isDark } from '~/composables'

useHead({
  title: 'Lucas Fell',
  meta: [
    { name: 'description', content: 'Who am I and what I do' },
    {
      name: 'theme-color',
      content: computed(() => isDark.value ? '#ff5722' : '#ffffff'),
    },
  ],
})
</script>

<template>
  <RouterView />
</template>
