<template>
  <main class="step-1">
    <section class="section section-1">
      <h1 class="txt-how-works txt-center">¿Cómo funciona?</h1>
      <img class="desktop-image" src="../../../assets/images/desktop.png" alt="Imagen de una mujer en una pc">
      <p class="txt-free-service txt-center">Este es un servicio gratuito de <span class="txt-blue">todolegal</span></p>
    </section>
    <section class="section section-2">
      <section>
        <p class="txt-upload-docs">
          <img @click="removeFiles" src="../../../assets/images/icon-navigation.svg" v-show="hasFiles"> Carga de
          Documentos
        </p>
        <p class="txt-docs-ordered">Sube tus documentos y ordénalos</p>
      </section>
      <FileUpload />
      <button class="next-button" @click="stepperStore.setIncrementIndex()">Siguiente</button>
    </section>
  </main>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStepperStore } from '@/stores/stepper';
import FileUpload from '../FileUpload/FileUpload.vue'

const stepperStore = useStepperStore()
const { hasFiles } = storeToRefs(stepperStore)

const removeFiles = () => {
  stepperStore.setHasFiles(false)
}

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

.section-1 {
  padding: 44px 58px;
}

.section-2 {
  padding: 3.5rem 3.0rem 5.4rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.desktop-image {
  max-width: 700px;
  width: 100%;
  max-height: 378px;
  object-fit: contain;
  margin-block-start: 125px;
}

.txt-upload-docs {
  gap: 1rem;
  display: flex;
  cursor: pointer;
  font-size: 2.4rem;
  font-weight: bold;
  color: var(--darkBlue);
}

.txt-docs-ordered {
  font-size: 2.0rem;
  margin-block-start: 10px;
}

.txt-how-works {
  margin: 0;
  color: var(--blue);
  font-size: 6.0rem;
}

.txt-free-service {
  font-size: 2.8rem;
  margin-block-start: 55px;
  color: var(--minusLightGray);
}
</style>