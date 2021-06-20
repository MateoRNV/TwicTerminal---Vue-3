<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Update Terminal
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
                                    :v-model="searchQuery"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.title"
                                />
                            </div>
                        </b-col>

                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Email</label
                            >
                            <b-form-group>
                                <b-form-input
                                    :v-model="searchQuery"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.email"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Phone</label
                            >
                            <b-form-group>
                                <b-form-input
                                    :v-model="searchQuery"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.phone"
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Logo
                            </label>
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <input
                                    type="file"
                                    name=""
                                    class="d-inline-block mr-1 form-control"
                                    :v-model="formfields.logo"
                                />
                            </div>
                        </b-col>

                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Address</label
                            >
                            <b-form-group>
                                <b-form-input
                                    :v-model="searchQuery"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.address"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Country</label
                            >
                            <b-form-group>
                                <v-select
                                    :v-model="selected"
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="country"
                                    v-model="formfields.country"
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >State
                            </label>
                            <b-form-group>
                                <v-select
                                    :v-model="selected"
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="state"
                                    v-model="formfields.state"
                                />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block">City</label>
                            <b-form-group>
                                <v-select
                                    :v-model="selected"
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="city"
                                    v-model="formfields.city"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Zip Code</label
                            >
                            <b-form-group>
                                <b-form-input
                                    :v-model="searchQuery"
                                    class="d-inline-block mr-1"
                                    v-model="formfields.zipCode"
                                />
                            </b-form-group>
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
                                    :to="'/terminal'"
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

        vSelect
    },

    mounted() {
        console.log("Component mounted.");
        console.log(this.$route.params);
        this.getempdata(this.$route.params.id);
    },
    data() {
        return {
            id: this.$route.params.id,
            formfields: {
                title: "",
                email: "",
                phone: "",
                logo: "",
                address: "",
                country: "",
                state: "",
                city: "",
                zipCode: ""
            }
        };
    },

    methods: {
        //*******************************UPDATE Record
        formSubmit(e) {
            e.preventDefault();
            let currentObj = this;
            let rowid = this.$route.params.id;
            axios({
                method: "post",
                url:
                    "http://koboautos.com/twic-terminal/connect/api/update-settings?key=" +
                    rowid,
                data: this.formfields
            })
                .then(function(response) {
                    console.log(response);
                    if (response.status == 200) {
                        currentObj.$router.push({
                            path: "/terminal"
                        });
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
                    "http://koboautos.com/twic-terminal/connect/api/view-terminal?key=" +
                        rowid
                )
                .then(response => {
                    this.formfields = response.data.data;
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
