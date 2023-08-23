<template>
  <main>
    <h1 class="txt-how-works txt-center">Step Two</h1>
    <button class="next-button" @click="stepperStore.setIncrementIndex()">Siguiente</button>
  </main>
</template>

<script setup>
import { useStepperStore } from '@/stores/stepper';
const stepperStore = useStepperStore()
</script>