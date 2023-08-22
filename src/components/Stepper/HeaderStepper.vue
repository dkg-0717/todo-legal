<template>
  <section class="header-stepper">
    <p>Firmar nuevo documento</p>
    <ul class="stepper-list">
      <li v-for="(option, idx) in stepperOptions">
        <p class="step-circle" :class="{ 'step-active': index == idx }">
          {{ idx + 1 }}
        </p>
        <p>{{ option }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStepperStore } from '@/stores/stepper';

const stepperStore = useStepperStore()
const { index } = storeToRefs(stepperStore)

const stepperOptions = [
  "Cargar documento",
  "Indicar firmantes",
  "Personalizaciones Opcionales"
]
</script>

<style>
@import url('../../assets/css/stepper.css');
</style>