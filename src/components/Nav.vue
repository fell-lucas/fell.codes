<script setup lang="ts">
import { isDark, toggleDark } from '~/composables'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav flex justify-between>
    <RouterLink class="icon-btn" to="/" :title="t('button.home')">
      <Logo :fill="isDark ? '#fff' : '#000'" />
    </RouterLink>
    <div class="inline-flex items-start">
      <RouterLink lt-md:hidden class="mx-2 icon-btn align-top" to="/posts" title="Blog">
        <h3>
          Blog
        </h3>
      </RouterLink>

      <RouterLink class="mx-2 icon-btn align-top" to="/projects" :title="t('button.projects')">
        <h3>
          {{ t('button.projects') }}
        </h3>
      </RouterLink>

      <RouterLink md:hidden class="mx-2 icon-btn align-top" to="/posts" title="Blog">
        <div i-carbon-blog />
      </RouterLink>

      <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
        <div i-carbon-user />
      </RouterLink>

      <RouterLink class="icon-btn mx-2" to="/education" :title="t('button.education')">
        <div i-carbon-education />
      </RouterLink>

      <RouterLink class="icon-btn mx-2" to="/work" :title="t('button.work')">
        <div i-carbon-portfolio />
      </RouterLink>

      <Contacts />

      <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
        <div i-eva-globe-outline />
      </a>

      <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="eva-sun-outline dark:eva-moon-outline" />
      </button>
    </div>
  </nav>
</template>
