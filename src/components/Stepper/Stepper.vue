<template>
  <main class="stepper-container">
    <HeaderStepper />
    <main class="main-stepper">
      <StepOne />
    </main>
  </main>
</template>

<script setup>
import HeaderStepper from './HeaderStepper.vue';
import StepOne from './steps/StepOne.vue'
</script>

<style scoped>
.stepper-container {
  gap: 30px;
  display: flex;
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