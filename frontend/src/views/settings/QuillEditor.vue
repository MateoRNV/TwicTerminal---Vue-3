<template>
  <b-row>
    <b-col cols="12">
      <quill-editor-snow />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import QuillEditorSnow from './QuillEditorSnow.vue'

export default {
  components: {
    BRow,
    BCol,

    QuillEditorSnow,
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/quill.scss';
</style>
