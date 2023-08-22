<template>
  <section class="header-stepper">
    <p>Firmar nuevo documento</p>
    <ul class="stepper-list">
      <li v-for="(option, index) in stepperOptions">
        <p>{{ index + 1 }}</p>
        <p>{{ option }}</p>
      </li>
    </ul>
  </section>
</template>

<script setup>
const stepperOptions = [
  "Cargar documento",
  "Indicar firmantes",
  "Personalizaciones Opcionales"
]
</script>

<style>
@import url('../../assets/css/stepper.css');
</style>