<script lang="ts">
import { useContactsStore } from '~/stores/contacts'

export default {
  setup() {
    const contacts = useContactsStore()
    return { contacts }
  },
}
</script>

<template>
  <div mx-6>
    <div md:hidden relative>
      <a icon-btn @click="contacts.toggle">
        <div i-fluent-contact-card-link-16-regular />
      </a>
      <div v-if="contacts.isOpen" flex flex-col absolute left--5 p-1 py-2 mt-2 rounded shadow-md gap-2>
        <LinkedIn>
          <div flex gap-2>
            <div i-eva-linkedin-outline /> LinkedIn
          </div>
        </LinkedIn>
        <GitHub>
          <div flex gap-2>
            <div i-eva-github-outline /> GitHub
          </div>
        </GitHub>
        <Twitter>
          <div flex gap-2>
            <div i-eva-twitter-outline /> Twitter
          </div>
        </Twitter>
        <PlayStore>
          <div flex gap-2>
            <div i-eva-google-outline /> <p class="whitespace-nowrap">
              Play Store
            </p>
          </div>
        </PlayStore>
      </div>
    </div>
    <div lt-md:hidden>
      <LinkedIn />
      <GitHub />
      <Twitter />
      <PlayStore />
      <Email />
    </div>
  </div>
</template>
