import { defineStore } from 'pinia';

export const useStepperStore = defineStore('stepper', {

  state: () => ({
    index: 0,
    hasFiles: false,
    canAddFiles: true
  }),

  actions: {
    setHasFiles(value) {
      this.hasFiles = value
    },
    setCanAddFiles(value) {
      this.canAddFiles = value
    },
    setIncrementIndex() {
      console.log('--- increment ---')
      this.index = this.index + 1
    }
  }

})
