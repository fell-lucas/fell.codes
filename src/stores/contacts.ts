import { defineStore } from 'pinia'

export const useContactsStore = defineStore('contacts', {
  state: () => ({ isOpen: false }),
  actions: {
    toggle() {
      // eslint-disable-next-line no-console
      console.log(this.isOpen)

      this.isOpen = !this.isOpen
    },
  },
})
