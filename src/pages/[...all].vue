<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: t('not-found'),
})
</script>

<template>
  <div class="prose prose-sm m-auto text-left">
    <h4 text="[#ea580c] lg opacity-100" font="medium" class="not-prose">
      404
    </h4>
    <h1>
      {{ t('not-found') }}
    </h1>
    <p>{{ t('not-found-msg') }}</p>
  </div>
</template>
