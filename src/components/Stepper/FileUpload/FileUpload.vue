<template>
  <section class="fileupload_container" @dragover="filesSaved('drag', $event)">
    <p class="txt-drop-files txt-center">Arrastra y suelta tus documentos aquí o <span class="txt-find-files"
        @click="inputRef">Buscar
        Archivo.</span></p>
    <input ref="input" class="file" type="file" id="files" name="files" accept="application/pdf"
      @change="filesSaved('input', $event)" multiple>
    <ul v-if="files.length > 0">
      <li v-for="(file, index) in files" @click="removeFile(index)">
        {{ file.name }}
      </li>
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'

let files = ref([])
let input = ref(null)

const filesSaved = (evtType, evt) => {
  evt.preventDefault();
  files.value = (evtType == 'drag') ? [...evt.dataTransfer.files] : [...evt.target.files]
}

const removeFile = (index) => {
  files.value.splice(index, 1)
}

const inputRef = () => {
  input.value.click()
}

</script>

<style>
@import url('../../../assets/css/fileupload.css');
</style>