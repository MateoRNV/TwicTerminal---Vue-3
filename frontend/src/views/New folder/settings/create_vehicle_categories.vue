<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Add New Vehicle Category
                </h5>
            </div>
            <form @submit.prevent="postData" method="post">
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
                                    :v-model="searchQuery"
                                    v-model="vehicleCategories.title"
                                    class="d-inline-block mr-1"
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
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <b-form-group>
                                                <v-select
                                                    :v-model="selected"
                                                    :dir="
                                                        $store.state.appConfig
                                                            .isRTL
                                                            ? 'rtl'
                                                            : 'ltr'
                                                    "
                                                    label="title"
                                                    :options="basis"
                                                    v-model="
                                                        vehicleCategories.basis
                                                    "
                                                />
                                            </b-form-group>
                                        </td>
                                        <td>
                                            <b-form-group>
                                                <v-select
                                                    :v-model="selected"
                                                    :dir="
                                                        $store.state.appConfig
                                                            .isRTL
                                                            ? 'rtl'
                                                            : 'ltr'
                                                    "
                                                    label="title"
                                                    :options="part"
                                                    v-model="
                                                        vehicleCategories.part
                                                    "
                                                />
                                            </b-form-group>
                                        </td>
                                        <td>
                                            <b-form-group>
                                                <v-select
                                                    :v-model="selected"
                                                    :dir="
                                                        $store.state.appConfig
                                                            .isRTL
                                                            ? 'rtl'
                                                            : 'ltr'
                                                    "
                                                    label="title"
                                                    :options="unit"
                                                    v-model="
                                                        vehicleCategories.unit
                                                    "
                                                />
                                            </b-form-group>
                                        </td>
                                        <td>
                                            <b-form-group>
                                                <v-select
                                                    :v-model="selected"
                                                    :dir="
                                                        $store.state.appConfig
                                                            .isRTL
                                                            ? 'rtl'
                                                            : 'ltr'
                                                    "
                                                    label="title"
                                                    :options="operator"
                                                    v-model="
                                                        vehicleCategories.operator
                                                    "
                                                />
                                            </b-form-group>
                                        </td>
                                        <td>
                                            <b-form-input
                                                :v-model="searchQuery"
                                                class="d-inline-block mr-1"
                                                v-model="
                                                    vehicleCategories.value
                                                "
                                            />
                                        </td>
                                        <td>
                                            <b-form-group>
                                                <v-select
                                                    :v-model="selected"
                                                    :dir="
                                                        $store.state.appConfig
                                                            .isRTL
                                                            ? 'rtl'
                                                            : 'ltr'
                                                    "
                                                    label="title"
                                                    :options="condition"
                                                    v-model="
                                                        vehicleCategories.condition
                                                    "
                                                />
                                            </b-form-group>
                                        </td>
                                        <td>
                                            <b-button
                                                v-ripple.400="
                                                    'rgba(234, 84, 85, 0.15)'
                                                "
                                                variant="danger"
                                                class="mt-0"
                                                @click="
                                                    removeItem(
                                                        index,
                                                        phoneNumbers
                                                    )
                                                "
                                            >
                                                <!-- <feather-icon
                                            icon="XIcon"
                                            class="mr-25"
                                        /> -->
                                                <span>X</span>
                                            </b-button>
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
    data() {
        return {
            vehicleCategories: {
                title: "",
                basis: "",
                part: "",
                unit: "",
                operator: "",
                value: "",
                condition: ""
            },

            laravelData: {},
            inventoryduration: {},
            inventorydates: {},
            selected: null,

            basis: [
                { value: null, text: "Select" },

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
        postData(e) {
            console.log(this.terminal);
            let currentObj = this;
            e.preventDefault();
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/create-vehicle-categories",
                    {
                        title: this.vehicleCategories.title,
                        basis: this.vehicleCategories.basis.value,
                        part: this.vehicleCategories.part.value,
                        unit: this.vehicleCategories.unit.value,
                        operator: this.vehicleCategories.operator.value,
                        value: this.vehicleCategories.value,
                        condition: this.vehicleCategories.condition.value
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization:
                                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4YmJiOGJkZmJiNmQ5YTgzNmVmMDkwZGRkZDY5MDFmOWEzZDFiNTE3MWUzODA5ODE0ZmJlMWE1MWY3ZjExZjBiMWIwNzExNjQ2NWRkYWZmIn0.eyJhdWQiOiIxOTM4NDcxMiIsImp0aSI6IjY4YmJiOGJkZmJiNmQ5YTgzNmVmMDkwZGRkZDY5MDFmOWEzZDFiNTE3MWUzODA5ODE0ZmJlMWE1MWY3ZjExZjBiMWIwNzExNjQ2NWRkYWZmIiwiaWF0IjoxNjA2MzA3ODc5LCJuYmYiOjE2MDYzMDc4NzksImV4cCI6MTYzNzg0Mzg3OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.OSYl-wXlW42CIeFq-agf10WPbHo57EBRD1NDFTodnALlqVBWmEW2yMy3CA2YYYiKz27Ot6XP61ROcl153W7CpmL6wjVX2qUEbethwaGDvUReb2UEPY6hBBRVrhB6LoA46m3sHA5FNq9E02TzWAwvj7NQVpPgRF6dvaH6go1z-Opfp-L6q0czpTuUXGtgDbJmnU8yG1NCc8gJYqtZxjiqBDjHq8GiLpr5254hgoVJTdY_9kLjmy_VDE_GlBxdZJVyPB3hCCEuSCjnFaJiDwO3pAEFLqY2KecimVtc78TChFzJycwMo0bUQRsgpmSjzxSYE2z-J_dJJEtx4u8pR2Zg3PhDxmYRvMip0b688mGbay_BobAcyrXumQmJsFfqekDewLuBfYtmB0TCZmmf5H6G0tyaXGcmfKMMFY8Qdv2qLy-y-1Vu06npoK94pElsOexkESxiiu8__bpkNrWMt8VLHYMmygJ_Y8o0JrmB4eyfnceaO-lvtFnFMZtVQP_XgWApzWTzYAy27cU56oR9vz1UfmM0HfGCbXPQDTmkmmL1RNO-MyKEMoIJSJLWdjXB9f6yyDpEurgG0lt0xDgrvr43RCappToLGYtFHiAYMTT-xqy2ucZPnUXKf8X4WDYH_8yuMS9_JZKc2mLViaoZje4nhTQe3RquhloJB6VQon4WNNo"
                        }
                    }
                )
                .then(function(response) {
                    console.log(response);
                    if (response.status == 200) {
                        currentObj.$router.push({
                            path: "/vehicle-categories"
                        });
                    }
                });
        }
    }
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
