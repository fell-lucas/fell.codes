<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="prose prose-sm m-auto text-left">
    <h4 text="[#ea580c] lg opacity-100" font="medium" class="not-prose">
      {{ t('index.me') }}
    </h4>
    <h1>
      Lucas Fell.
    </h1>
    <h3>{{ t('index.subtitle') }}</h3>
    <p>
      {{ t('index.p1') }} <a href="https://zallpy.com/en" target="_blank" rel="noopener">Zallpy Digital</a>.
    </p>
    <p>
      {{ t('index.p2') }}
      <a href="/projects">{{ t('index.p2a') }}</a>.
    </p>
    <p>
      {{ t('index.p3') }} <strong>{{ t('index.p3aa') }}</strong>, {{ t('index.p3a') }}
    </p>
    <hr>
    <p>
      {{ t('index.p4') }}
      <a href="https://github.com/fell-lucas" target="_blank" rel="noopener">GitHub</a>,
      <a href="https://www.twitter.com/fell_codes" target="_blank" rel="noopener">Twitter</a>
      (<s>{{ t('index.p4a') }}</s>)
      {{ t('index.p4b') }}
      <a href="https://www.linkedin.com/in/lucas-fell/" target="_blank" rel="noopener">LinkedIn</a>.
      <br>
    </p>
    <p>
      {{ t('index.p5') }} <a :href="`mailto:${t('index.p5a')}@fell.codes`">{{ t('index.p5a') }}@fell.codes</a>.<br>
    </p>
  </div>
</template>
