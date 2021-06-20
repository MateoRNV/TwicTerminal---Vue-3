<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Update Vehicle Category
                </h5>
            </div>
            <form @submit="formSubmit">
                <div class="m-2">
                    <!-- Table Top -->
                    <b-row class="mb-2">
                        <b-col cols="12" md="12">
                            <label for="basicInput" class="d-block"
                                >Title</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    v-model="formfields.title"
                                />
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col cols="12" md="12">
                            <table
                                class="table-bordered  addmoresection"
                                id="tblAddRow"
                                style="width: 100%"
                            >
                                <thead>
                                    <tr>
                                        <th>Basis</th>
                                        <th>Part</th>
                                        <th>Unit</th>
                                        <th>Operator</th>
                                        <th>Value</th>
                                        <th>Condition</th>
                                        <!-- <th></th> -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <b-form-group>
                                                <v-select
                                                    :dir="
                                                        $store.state.appConfig
                                                            .isRTL
                                                            ? 'rtl'
                                                            : 'ltr'
                                                    "
                                                    label="title"
                                                    :options="basis"
                                                    v-model="formfields.basis"
                                                />
                                            </b-form-group>
                                        </td>
                                        <td>
                                            <b-form-group>
                                                <v-select
                                                    :dir="
                                                        $store.state.appConfig
                                                            .isRTL
                                                            ? 'rtl'
                                                            : 'ltr'
                                                    "
                                                    label="title"
                                                    :options="part"
                                                    v-model="formfields.part"
                                                />
                                            </b-form-group>
                                        </td>
                                        <td>
                                            <b-form-group>
                                                <v-select
                                                    :dir="
                                                        $store.state.appConfig
                                                            .isRTL
                                                            ? 'rtl'
                                                            : 'ltr'
                                                    "
                                                    label="title"
                                                    :options="unit"
                                                    v-model="formfields.unit"
                                                />
                                            </b-form-group>
                                        </td>
                                        <td>
                                            <b-form-group>
                                                <v-select
                                                    :dir="
                                                        $store.state.appConfig
                                                            .isRTL
                                                            ? 'rtl'
                                                            : 'ltr'
                                                    "
                                                    label="title"
                                                    :options="operator"
                                                    v-model="
                                                        formfields.operator
                                                    "
                                                />
                                            </b-form-group>
                                        </td>
                                        <td>
                                            <b-form-input
                                                class="d-inline-block mr-1"
                                                v-model="formfields.value"
                                            />
                                        </td>
                                        <td>
                                            <b-form-group>
                                                <v-select
                                                    :dir="
                                                        $store.state.appConfig
                                                            .isRTL
                                                            ? 'rtl'
                                                            : 'ltr'
                                                    "
                                                    label="title"
                                                    :options="condition"
                                                    v-model="
                                                        formfields.condition
                                                    "
                                                />
                                            </b-form-group>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
                                    :to="'/vehicle-categories'"
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
                basis: "",
                part: "",
                unit: "",
                operator: "",
                value: "",
                condition: ""
            },

            basis: [
                { value: "Cubic", title: "Cubic" },
                { value: "Dimensions", title: "Dimensions" },
                { value: "Weight", title: "Weight" }
            ],
            part: [
                { value: "Length", title: "Length" },
                { value: "Width", title: "Width" },
                { value: "Height", title: "Height" }
            ],
            unit: [
                { value: "Pounds", title: "Pounds" },
                { value: "Kilograms", title: "Kilograms" },
                { value: "Inches", title: "Inches" },
                { value: "Centimeters", title: "Centimeters" },
                { value: "Meters", title: "Meters" },
                { value: "Feet", title: "Feet" }
            ],
            operator: [
                { value: "=", title: "Equals" },
                { value: ">=", title: "Greater-Than or Equals" },
                { value: ">", title: "Greater-Than" },
                { value: "<=", title: "Less-Than or Equals" },
                { value: "<", title: "Less-Than" }
            ],
            condition: [
                { value: "AND", title: "AND" },
                { value: "OR", title: "OR" }
            ]
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
                    "http://koboautos.com/twic-terminal/connect/api/update-vehicle-categories",

                    {
                        title: this.formfields.title,
                        basis: this.formfields.basis,
                        part: this.formfields.part,
                        unit: this.formfields.unit,
                        operator: this.formfields.operator,
                        value: this.formfields.value,
                        condition: this.formfields.condition
                    },
                    { params: { key: rowid } }
                )
                .then(function(response) {
                    console.log(response);
                    if (response.status == 200) {
                        currentObj.$router.push({
                            path: "/vehicle-categories"
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
                    "http://koboautos.com/twic-terminal/connect/api/view-vehicle-categories?key=" +
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
