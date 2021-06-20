
export const codeSnow = `
<template>
  <quill-editor
    v-model="content"
    :options="snowOption"
  />
</template>

<script>
// eslint-disable-next-line
import 'quill/dist/quill.core.css'
// eslint-disable-next-line
import 'quill/dist/quill.snow.css'
// eslint-disable-next-line
import 'quill/dist/quill.bubble.css'

import { create_email_template } from 'vue-quill-editor'

export default {
  components: {
    create_email_template,
  },
  data: () => ({
    content: \`<h1>Quill Rich Text Editor</h1>
  <p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p>
  <iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>
  <p><br></p>
  <h2>Getting Started is Easy</h2>
  <p><br></p>
  <pre>
// &lt;link href="https://cdn.quilljs.com/1.0.5/quill.snow.css" rel="stylesheet"&gt;
// &lt;script src="https://cdn.quilljs.com/1.0.5/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;
  var quill = new Quill('#editor', {
  modules: {
  toolbar: '#toolbar'
  },
  theme: 'snow'
  });
// Open your browser's developer console to try out the API!</pre>  \`,
  }),
}
</script>
`

