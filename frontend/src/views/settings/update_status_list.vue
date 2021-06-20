<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Update Status List
                </h5>
            </div>
            <form @submit="formSubmit">
                <div class="m-2">
                    <!-- Table Top -->
                    <b-row class="mb-2">
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Title</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    name="title"
                                    class="d-inline-block mr-1"
                                    placeholder="Enter Name"
                                    v-model="formfields.title"
                                />
                            </div>
                        </b-col>

                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Group</label
                            >
                            <b-form-group>
                                <!-- <v-select
                                    :v-model="selected"
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="option"
                                    name="group_id"
                                    v-model="formfields.group_id"
                                /> -->
                                <v-select
                                    v-model="formfields.group_id"
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="statusGroup"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Color</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    type="color"
                                    class="d-inline-block mr-1"
                                    name="color"
                                    v-model="formfields.color"
                                />
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col cols="12" md="12">
                            <label for="basicInput" class="d-block"
                                >Description</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <textarea
                                    id="textarea-default"
                                    placeholder="Textarea"
                                    rows="3"
                                    name="description"
                                    wrap="soft"
                                    class="form-control"
                                    data-v-aa799a9e=""
                                    v-model="formfields.description"
                                ></textarea>
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block mb-1"
                                >Status</label
                            >

                            <div class="d-flex align-items-center">
                                <div class="" style="margin-right: 20px;">
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
                                <!-- <div class="">
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
                                </div> -->
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
                                    :to="'/status-list'"
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
    BFormGroup,
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
        BFormGroup,

        vSelect,
        quillEditor,
        BFormCheckbox,
        BCardText,
        BCardCode,
        QuillEditorSnow
    },

    created() {
        console.log("Component mounted.");
        console.log(this.$route.params);
        this.getempdata(this.$route.params.id);
        this.getstatusGroup();
    },
    data() {
        return {
            id: this.$route.params.id,
            formfields: {
                key: "",
                title: "",
                group_id: "",
                description: "",
                status: "",
                color: ""
            },
            selected: null,
            statusGroup: []
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
                    "http://koboautos.com/twic-terminal/connect/api/update-status-list",
                    this.formfields,
                    { params: { key: rowid } }
                )
                .then(response => {
                    console.log(response.data.data);
                    if (response.status == 200) {
                        currentObj.$router.push({ path: "/status-list" });
                    }
                })
                .catch(error => {
                    if (response.status == 422) {
                        this.errors = response.data.data.errors;
                        return;
                    }

                    if (response.status == 500) {
                        flash({ error: "Server Error" });
                    }
                });
        },
        //     axios({
        //         method: "post",
        //         url:
        //             "http://koboautos.com/twic-terminal/connect/api/update-status-list?key=" +
        //             rowid +
        //             "&title=" +
        //             this.formfields.title +
        //             "&group_id=" +
        //             this.formfields.group_id.value +
        //             "&description=" +
        //             this.formfields.description +
        //             "&status=" +
        //             this.formfields.status +
        //             "&color=" +
        //             this.formfields.color

        //         // data: this.formfields
        //     })
        //         .then(function(response) {
        //             console.log(response);
        //             if (response.status == 200) {
        //                 currentObj.$router.push({ path: "/status-list" });
        //             }
        //         })
        //         .catch(function(response) {
        //             if (response.status == 422) {
        //                 this.errors = response.data.data.errors;
        //                 return;
        //             }

        //             if (response.status == 500) {
        //                 flash({ error: "Server Error" });
        //             }
        //         });
        // },
        //*******************************END UPDATE RECORD
        getempdata: function(rowid) {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/view-status-list?key=" +
                        rowid
                )
                .then(response => {
                    this.formfields = response.data.data;
                    console.log(this.formfields);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getstatusGroup: function() {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/status-group-list"
                )
                .then(response => {
                    this.statusGroup = response.data.statusgroup;

                    // for (x in response.data.statusGroup) {
                    //     this.statusGroup.push({ value: x.id, text: x.name });
                    //     console.log({ value: x.id, text: x.name });
                    // }
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
