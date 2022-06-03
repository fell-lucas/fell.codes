<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="prose prose-sm m-auto text-center">
    <div i-carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
    <h3>{{ t('button.about') }}</h3>
  </div>
</template>
