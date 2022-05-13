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
  <nav flex justify-between>
    <RouterLink class="icon-btn" to="/" :title="t('button.home')">
      <div i-cil-cat />
    </RouterLink>
    <div class="inline-flex items-start">
      <RouterLink class="mx-2 icon-btn align-top" to="/blog" title="Blog">
        <h3>Blog</h3>
      </RouterLink>
      <RouterLink class="mx-2 icon-btn align-top" to="/projects" :title="t('button.projects')">
        <h3>
          {{ t('button.projects') }}
        </h3>
      </RouterLink>

      <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
        <div i-carbon-dicom-overlay />
      </RouterLink>

      <RouterLink class="icon-btn mx-2" to="/education" :title="t('button.education')">
        <div i-carbon-education />
      </RouterLink>

      <RouterLink class="icon-btn mx-2" to="/work" :title="t('button.work')">
        <div i-carbon-portfolio />
      </RouterLink>

      <div mx-6>
        <a class="icon-btn mx-2" rel="noreferrer" href="https://www.linkedin.com/in/lucas-fell/" target="_blank" title="LinkedIn">
          <div i-eva-linkedin-outline />
        </a>

        <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/fell-lucas/" target="_blank" title="GitHub">
          <div i-eva-github-outline />
        </a>

        <a class="icon-btn mx-2" rel="noreferrer" href="https://twitter.com/fell_codes" target="_blank" title="Twitter">
          <div i-eva-twitter-outline />
        </a>

        <a class="icon-btn mx-2" rel="noreferrer" href="https://play.google.com/store/apps/developer?id=Lucas+Fell" target="_blank" title="Google Play">
          <div i-eva-google-outline />
        </a>

        <a class="icon-btn mx-2" rel="noreferrer" href="mailto:hi@fell.codes" target="_blank" title="Email">
          <div i-eva-email-outline />
        </a>
      </div>

      <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales">
        <div i-eva-globe-outline />
      </a>

      <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
        <div i="eva-sun-outline dark:eva-moon-outline" />
      </button>
    </div>
  </nav>
</template>
