<template>
  <section class="fileupload_container" @dragover="filesSaved('drag', $event)">
    <p>Arrastra y suelta tus documentos aquí o Buscar Archivo.</p>
    <input class="file" type="file" id="files" name="files" accept="application/pdf" @change="filesSaved('input', $event)"
      multiple>
    <ul v-if="files.length > 0">
      <li v-for="(file, index) in files" @click="removeFile(index)">
        {{ file.name }}
      </li>
    </ul>
    <button>Siguiente</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

let files = ref([])

const filesSaved = (evtType, evt) => {
  evt.preventDefault();
  files.value = (evtType == 'drag') ? [...evt.dataTransfer.files] : [...evt.target.files]
}

const removeFile = (index) => {
  files.value.splice(index, 1)
}

</script>

<style>
@import url('../../../assets/css/fileupload.css');
</style>