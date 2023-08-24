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
          <img class="remove-files-image" @click="removeFiles" src="../../../assets/images/icon-navigation.svg"
            v-show="hasFiles">
          Carga de Documentos
        </p>
        <p class="txt-docs-ordered">Sube tus documentos y ordénalos</p>
      </section>
      <FileUpload />
      <div class="buttons_container">
        <button class="back-button pointer" @click="stepperStore.setHasFiles(false)"
          v-if="hasFiles && mqLarge.matches">Regresar</button>
        <button class="next-button pointer" @click="saveData">{{ buttonTxt }}</button>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia';
import { useStepperStore } from '@/stores/stepper';
import { saveUserData } from '@/services/webhook';
import FileUpload from '../FileUpload/FileUpload.vue';

let buttonTxt = ref('Siguiente')
const mqLarge = window.matchMedia('(max-width: 600px)');
const stepperStore = useStepperStore()
const { hasFiles } = storeToRefs(stepperStore)

const removeFiles = () => {
  stepperStore.setHasFiles(false)
}

const saveData = async () => {
  buttonTxt.value = 'Cargando...'
  const webResponse = await saveUserData()
  buttonTxt.value = 'Siguiente'
  console.log(webResponse)
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
  border-radius: var(--borderRadius);
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

@media (max-width: 900px) {
  .step-1 {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {

  .step-1 {
    gap: 3.9rem;
  }

  .txt-free-service {
    display: none;
  }

  .section-1 {
    gap: 1.5rem;
    display: flex;
    align-items: center;
    padding: 1.0rem 3.0rem;
    justify-content: space-around;
  }

  .section-2 {
    padding: 1.8rem 2.0rem 2.7rem;
  }

  .section .buttons_container {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 0;
  }

  .buttons_container {
    display: flex;
    border: 1px solid var(--lightBlue);

    .back-button,
    .next-button {
      border: 0;
      font-size: 1.4rem;
      border-radius: 0;
      padding: 1.8rem 4.6rem;
    }

    .back-button {
      color: var(--lightBlue);
      flex-grow: 1;
    }

    .next-button {
      flex-grow: 1;
    }
  }

  .section .next-button {
    margin-block-start: 0;
    border-radius: 0;
  }

  .txt-how-works {
    order: 1;
    font-size: 1.8rem;
  }

  .desktop-image {
    max-width: 11.0rem;
    margin-block-start: 0;
  }

  .txt-upload-docs {
    font-size: 1.8rem;
  }

  .txt-docs-ordered {
    font-size: 1.4rem;
  }

  .remove-files-image {
    display: none;
  }
}
</style>