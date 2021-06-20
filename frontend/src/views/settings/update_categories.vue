<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Update InspectionList
                </h5>
            </div>

            <form @submit="formSubmit">
                <div class="m-2">
                    <!-- Table Top -->
                    <b-row class="mb-2">
                        <!-- Per Page -->

                        <!-- Search -->
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block"
                                >Parent</label
                            >
                            <b-form-group>
                                <v-select
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="InspectionList"
                                    v-model="formfields.parent_id"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block">Name</label>
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    placeholder="Enter Name"
                                    v-model="formfields.name"
                                />
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
                                    :to="'/categories'"
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
import { BFormCheckbox, BCardText, BFormGroup } from "bootstrap-vue";
import BCardCode from "@core/components/b-card-code";
export default {
    components: {
        BSidebar,
        AddNew,
        BCard,
        BRow,
        BCol,
        BFormGroup,
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
        BCardCode,
        vSelect
    },
    mounted() {
        console.log("Component mounted.");
        console.log(this.$route.params);
        this.getempdata(this.$route.params.id);
        this.getInspectionList();
    },
    data() {
        return {
            id: this.$route.params.id,
            formfields: {
                parent_id: "",
                name: "",
                parentinfo: "",
                status: ""
            },

            InspectionList: []
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
                    "http://koboautos.com/twic-terminal/connect/api/update-settings",
                    // this.formfields,
                    {
                        parent_id: this.formfields.parent_id.value,
                        name: this.formfields.name,
                        status: this.formfields.status
                    },
                    { params: { key: rowid } }
                )
                .then(function(response) {
                    console.log(response);
                    if (response.status == 200) {
                        currentObj.$router.push({ path: "/categories" });
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
                    "http://koboautos.com/twic-terminal/connect/api/view-settings?key=" +
                        rowid
                )
                .then(response => {
                    this.formfields = response.data.data;
                    // console.log(response.data.data.name);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        getInspectionList: function() {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/status-list"
                )
                .then(response => {
                    this.InspectionList = response.data.StatusList;
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
</style>
