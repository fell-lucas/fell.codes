<script setup lang="ts">
import { toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav>
    <RouterLink class="mx-2 icon-btn align-top" to="/blog" :title="t('button.blog')">
      <h3>
        {{ t('button.blog') }}
      </h3>
    </RouterLink>
    <RouterLink class="mx-2 icon-btn align-top" to="/projects" :title="t('button.projects')">
      <h3>
        {{ t('button.projects') }}
      </h3>
    </RouterLink>

    <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <div i-carbon-dicom-overlay />
    </RouterLink>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <div i-carbon-logo-github />
    </a>

    <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
      <div i-carbon-language />
    </a>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
  </nav>
</template>
