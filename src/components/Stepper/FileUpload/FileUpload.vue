<template>
  <section class="fileupload_container" :class="{ 'over-bg': isOver }" @dragover="setColorContainer"
    @dragleave="isOver = false" @drop="filesSaved('drag', $event)" v-show="files.length == 0">
    <img class="upload-image pointer" src="../../../assets/images/upload.png" alt="Imagen para subir archivos"
      @click="inputRef">
    <p class="txt-drop-files txt-center">Arrastra y suelta tus documentos aquí o <span class="txt-find-files"
        @click="inputRef">Buscar
        Archivo.</span></p>
    <input ref="input" class="file" type="file" id="files" name="files" accept="application/pdf"
      @change="filesSaved('input', $event)">
  </section>
  <section class="files_uploaded_container" v-if="files.length != 0">
    <img class="upload-image pointer" src="../../../assets/images/upload.png" alt="Imagen para subir archivos"
      @click="inputRef">
    <ul class="pdf_items_container" v-if="files.length > 0">
      <li class="pdf-file-item" v-for="(file, index) in files">
        <img class="move-icon" src="../../../assets/images/upload-move-icon.png" />
        <p class="pdf-item-name">{{ file.name }}</p>
        <img class="trash-icon" src="../../../assets/images/trash-icon.png" @click="removeFile(index)" />
      </li>
      <li class="pdf-file-item">
        <img src="../../../assets/images/plus-icon.svg" alt="">
        <button :class="{ 'txt-blue': files.length <= 5, 'txt-gray': files.length >= 5 }"
          class="txt-blue btn-add-new pointer" @click="inputRef" :disabled="files.length == 5">
          Añadir más documentos</button>
        <section>
          <p class="txt-blue txt-max">5 Max</p>
          <p class="txt-blue txt-max">20 Mb</p>
        </section>
      </li>
    </ul>
  </section>
  <p class="txt-danger txt-center" v-show="showAlert">Solo se admite archivos en formato PDF</p>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useStepperStore } from '@/stores/stepper';
import { ref, watch } from 'vue'

let isOver = ref(false)
let showAlert = ref(false)
let files = ref([])
let input = ref(null)
const stepperStore = useStepperStore()
const { hasFiles } = storeToRefs(stepperStore)

watch(hasFiles, (newValue) => {
  if (!newValue) {
    files.value = []
  }
})

const filesSaved = (evtType, evt) => {
  evt.preventDefault();
  let pdfFiles = (evtType == 'drag') ? [...evt.dataTransfer.files] : [...evt.target.files]
  const otherFiles = pdfFiles.filter(file => file.type != 'application/pdf')
  if (otherFiles.length > 0) showAlert.value = true
  pdfFiles = pdfFiles.filter(file => file.type == 'application/pdf')
  if (pdfFiles.length > 0) {
    stepperStore.setHasFiles(true)
    files.value = [...files.value, ...pdfFiles]
    files.value.forEach(file => {
      console.log((file.size / (1024 * 1024)).toFixed(2))
    })
    setTimeout(() => {
      showAlert.value = false
    }, 3000)
  }
}

const removeFile = (index) => {
  files.value.splice(index, 1)
  if (files.value.length == 0) stepperStore.setHasFiles(false)
}

const inputRef = () => {
  input.value.click()
}

const setColorContainer = ($event) => {
  $event.preventDefault()
  isOver.value = true
}

</script>

<style>
@import url('../../../assets/css/fileupload.css');
</style>