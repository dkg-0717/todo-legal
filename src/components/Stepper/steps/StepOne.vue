<template>
  <main class="step-1">
    <section class="section">
      <h1 class="txt-how-works txt-center">¿Cómo funciona?</h1>
      <img src="" alt="">
      <p>Este es un servicio gratuito de <span class="txt-blue">todolegal</span></p>
    </section>
    <section class="section">
      <p class="txt-upload-docs">Carga de Documentos</p>
      <p class="txt-docs-ordered">Sube tus documentos y ordénalos</p>
      <FileUpload />
      <button class="next-button">Siguiente</button>
    </section>
  </main>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStepperStore } from '@/stores/stepper';
import FileUpload from '../FileUpload/FileUpload.vue'

const stepperStore = useStepperStore()
const { index } = storeToRefs(stepperStore)

console.log(index.value)

</script>

<style scoped>
.step-1 {
  gap: 30px;
  width: 100%;
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.section {
  padding: 25px 50px;
  background: #fff;
  border-radius: 8px;
}

.txt-upload-docs {
  font-size: 1.25rem;
  font-weight: bold;
}

.txt-docs-ordered {
  margin-block-start: 10px;
}

.txt-how-works {
  font-size: 3rem;
}

.next-button {
  border: 0;
  color: #fff;
  display: block;
  cursor: pointer;
  font-weight: bold;
  border-radius: 8px;
  background: blue;
  padding: 20px 60px;
  margin-inline: auto;
  margin-block-start: 170px;
}
</style>