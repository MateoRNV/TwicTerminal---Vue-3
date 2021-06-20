<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Update Email Template
                </h5>
            </div>
            <form @submit="formSubmit">
                <div class="m-2">
                    <!-- Table Top -->
                    <b-row class="mb-2">
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block"
                                >Title</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    name="title"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.title"
                                />
                            </div>
                        </b-col>
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block"
                                >Email Type</label
                            >
                            <b-form-group>
                                <v-select
                                    v-model="formfields.tagging"
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="EmailType"
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block"
                                >From Name</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    name="from_name"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.from_name"
                                />
                            </div>
                        </b-col>
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block"
                                >From Email</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    name="from_email"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.from_email"
                                />
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block">CC</label>
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    name="cc"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.cc"
                                />
                            </div>
                        </b-col>
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block">BCC</label>
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    name="bcc"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.bcc"
                                />
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block"
                                >Subject</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    name="subject"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.subject"
                                />
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col cols="12" md="12">
                            <label for="basicInput" class="d-block"
                                >Description</label
                            >
                            <!-- <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <quill-editor-snow />
                            </div> -->
                            <template>
                                <b-card-text title="">
                                    <quill-editor
                                        name="description"
                                        v-model="formfields.description"
                                    />
                                    <!-- 
                                    <template #code>
                                        {{ codeSnow }}
                                    </template> -->
                                </b-card-text>
                            </template>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block mb-1"
                                >Status</label
                            >

                            <div class="d-flex align-items-center">
                                <div class="" style="margin-right: 20px;">
                                    <!-- <b-form-radio
                                        plain
                                        name="status"
                                        value="Published"
                                        v-model="formfields.status"
                                    >
                                        Published
                                    </b-form-radio> -->
                                    <b-form-checkbox
                                        value="Published"
                                        name="check-button"
                                        class="publishCheckBox"
                                        switch
                                        inline
                                        v-model="formfields.status"
                                    >
                                        <span class="switch-icon-left">
                                            Yes
                                        </span>
                                        <span class="switch-icon-right">
                                            No
                                        </span>
                                    </b-form-checkbox>
                                </div>
                                <!--<div class="">
                                     <b-form-radio
                                        plain
                                        name="status"
                                        value="UnPublished"
                                        v-model="formfields.status"
                                    >
                                        UnPublished
                                    </b-form-radio> 
                                    <b-form-checkbox
                                        name="check-button"
                                        switch
                                        inline
                                        value="UnPublished"
                                        v-model="formfields.status"
                                    >
                                        UnPublished

                                        <span class="switch-icon-left">
                                            <feather-icon icon="CheckIcon" />
                                        </span>
                                    </b-form-checkbox>
                                </div>-->
                            </div>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col cols="12" md="12">
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <router-link
                                    style="margin-right: 10px"
                                    class="btn btn-danger"
                                    :to="'/email-template'"
                                    >Back</router-link
                                >
                                <b-button variant="success" type="submit">
                                    <span class="text-nowrap">Submit</span>
                                </b-button>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </form>
            <div class="position-relative table-responsive"></div>
        </b-card>
    </div>
</template>

<script>
import {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BFormRadio,
    BSidebar
} from "bootstrap-vue";
import vSelect from "vue-select";
import store from "@/store";
import AddNew from "./AddNew.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { ref } from "@vue/composition-api";
import { required, alphaNum, email } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import axios from "axios";
import QuillEditorSnow from "./QuillEditorSnow.vue";
import { quillEditor } from "vue-quill-editor";
import BCardCode from "@core/components/b-card-code/BCardCode.vue";
import { BFormCheckbox, BCardText } from "bootstrap-vue";

export default {
    components: {
        BSidebar,
        AddNew,
        BCard,
        BRow,
        BCol,
        BFormInput,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        // Form Validation
        ValidationProvider,
        ValidationObserver,
        BFormRadio,
        BFormCheckbox,
        BCardText,
        vSelect,
        quillEditor,
        BCardCode,
        QuillEditorSnow
    },

    mounted() {
        console.log("Component mounted.");
        console.log(this.$route.params);
        this.getempdata(this.$route.params.id);
        this.getEmailType();
    },
    data() {
        return {
            id: this.$route.params.id,
            formfields: {
                title: "",
                from_email: "",
                from_name: "",
                subject: "",
                tagging: "",
                description: "",
                status: "",
                cc: "",
                bcc: ""
            },
            EmailType: []
        };
    },

    methods: {
        //*******************************UPDATE Record
        formSubmit(e) {
            e.preventDefault();
            let currentObj = this;
            let rowid = this.$route.params.id;
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/update-email-template",
                    // this.formfields,
                    {
                        title: this.formfields.title,
                        from_email: this.formfields.from_email,
                        from_name: this.formfields.from_name,
                        subject: this.formfields.subject,
                        tagging: this.formfields.tagging.title,
                        description: this.formfields.description,
                        status: this.formfields.status,
                        cc: this.formfields.cc,
                        bcc: this.formfields.bcc
                    },
                    { params: { key: rowid } }
                )
                .then(function(response) {
                    console.log(response);
                    if (response.status == 200) {
                        currentObj.$router.push({ path: "/email-template" });
                    }
                })
                .catch(function(response) {
                    if (response.status == 422) {
                        this.errors = response.data.data.errors;
                        return;
                    }

                    if (response.status == 500) {
                        flash({ error: "Server Error" });
                    }
                });
        },
        //*******************************END UPDATE RECORD
        getempdata: function(rowid) {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/view-email-template?key=" +
                        rowid
                )
                .then(response => {
                    this.formfields = response.data.data;
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getEmailType: function() {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/email-type"
                )
                .then(response => {
                    this.EmailType = response.data.StatusList;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style>
.publishCheckBox span{
    font-size: 10px;
    padding-top: 3px;
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/quill.scss";
</style>
