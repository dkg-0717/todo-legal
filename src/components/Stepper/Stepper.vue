<template>
  <main class="stepper-container">
    <HeaderStepper />
    <main class="main-stepper">
      <component :is="renderStep" />
    </main>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia';
import { useStepperStore } from '@/stores/stepper';

import HeaderStepper from './HeaderStepper.vue';
import StepOne from './steps/StepOne.vue'
import StepTwo from './steps/StepTwo.vue'
import StepThree from './steps/StepThree.vue'

const stepperStore = useStepperStore()
const { index } = storeToRefs(stepperStore)

const stepsComponents = {
  0: StepOne,
  1: StepTwo,
  2: StepThree
}

const renderStep = computed(() => {
  return stepsComponents[index.value]
})

</script>

<style scoped>
.stepper-container {
  gap: 30px;
  display: flex;
  padding: 0 1.9rem 9.0rem;
  margin-block-start: 30px;
  justify-content: center;
  flex-direction: column;
}

.main-stepper {
  width: 100%;
  margin-inline: auto;
  max-inline-size: 1500px;
}
</style>