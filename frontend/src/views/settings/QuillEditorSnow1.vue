<template>
    <b-card-text title="">
        <quill-editor v-model="content" :options="snowOption" />

        <template #code>
            {{ codeSnow }}
        </template>
    </b-card-text>
</template>

<script>
import { BCardText } from "bootstrap-vue";
import BCardCode from "@core/components/b-card-code/BCardCode.vue";
import { quillEditor } from "vue-quill-editor";
import { codeSnow } from "./quillCode";

export default {
    components: {
        quillEditor,
        BCardCode,
        BCardText
    },
    data() {
        return {
            codeSnow,
            snowOption: {
                theme: "snow"
            },
            content: ``
        };
    }
};
</script>
