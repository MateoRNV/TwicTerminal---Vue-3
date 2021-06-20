<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Add New Vehicle Category
                </h5>
            </div>
            <validation-observer
                #default="{ handleSubmit }"
                ref="refFormObserver"
            >
                <b-form
                    @submit="postData"
                    @submit.prevent="handleSubmit(onSubmit)"
                    @reset.prevent="resetForm"
                    method="post"
                >
                    <div class="m-2">
                        <!-- Table Top -->
                        <b-row class="mb-2">
                            <b-col cols="12" md="12">
                                <label for="basicInput" class="d-block"
                                    >Title</label
                                >
                                <validation-provider
                                    #default="validationContext"
                                    name="Title"
                                    rules="required"
                                >
                                    <b-form-group>
                                        <b-form-input
                                            v-model="vehicleCategory.title"
                                            class="d-inline-block mr-1"
                                            :state="
                                                getValidationState(
                                                    validationContext
                                                )
                                            "
                                        />
                                        <b-form-invalid-feedback>
                                            {{ validationContext.errors[0] }}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </validation-provider>
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
                                        <tr
                                            v-for="(vehicleCat,
                                            k) in vehicleCategories"
                                            :key="`phoneInput-${k}`"
                                        >
                                            <td>
                                                <validation-provider
                                                    #default="validationContext"
                                                    name="Basis"
                                                    rules="required"
                                                >
                                                    <b-form-group
                                                        :state="
                                                            getValidationState(
                                                                validationContext
                                                            )
                                                        "
                                                    >
                                                        <v-select
                                                            :dir="
                                                                $store.state
                                                                    .appConfig
                                                                    .isRTL
                                                                    ? 'rtl'
                                                                    : 'ltr'
                                                            "
                                                            label="title"
                                                            :options="basis"
                                                            v-model="
                                                                vehicleCat.basis
                                                            "
                                                        />
                                                        <b-form-invalid-feedback
                                                            :state="
                                                                getValidationState(
                                                                    validationContext
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                validationContext
                                                                    .errors[0]
                                                            }}
                                                        </b-form-invalid-feedback>
                                                    </b-form-group>
                                                </validation-provider>
                                            </td>
                                            <td>
                                                <validation-provider
                                                    #default="validationContext"
                                                    name="Part"
                                                    rules="required"
                                                >
                                                    <b-form-group
                                                        :state="
                                                            getValidationState(
                                                                validationContext
                                                            )
                                                        "
                                                    >
                                                        <v-select
                                                            :dir="
                                                                $store.state
                                                                    .appConfig
                                                                    .isRTL
                                                                    ? 'rtl'
                                                                    : 'ltr'
                                                            "
                                                            label="title"
                                                            :options="part"
                                                            v-model="
                                                                vehicleCat.part
                                                            "
                                                        />
                                                        <b-form-invalid-feedback
                                                            :state="
                                                                getValidationState(
                                                                    validationContext
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                validationContext
                                                                    .errors[0]
                                                            }}
                                                        </b-form-invalid-feedback>
                                                    </b-form-group>
                                                </validation-provider>
                                            </td>
                                            <td>
                                                <validation-provider
                                                    #default="validationContext"
                                                    name="Unit"
                                                    rules="required"
                                                >
                                                    <b-form-group
                                                        :state="
                                                            getValidationState(
                                                                validationContext
                                                            )
                                                        "
                                                    >
                                                        <v-select
                                                            :dir="
                                                                $store.state
                                                                    .appConfig
                                                                    .isRTL
                                                                    ? 'rtl'
                                                                    : 'ltr'
                                                            "
                                                            label="title"
                                                            :options="unit"
                                                            v-model="
                                                                vehicleCat.unit
                                                            "
                                                        />
                                                        <b-form-invalid-feedback
                                                            :state="
                                                                getValidationState(
                                                                    validationContext
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                validationContext
                                                                    .errors[0]
                                                            }}
                                                        </b-form-invalid-feedback>
                                                    </b-form-group>
                                                </validation-provider>
                                            </td>
                                            <td>
                                                <validation-provider
                                                    #default="validationContext"
                                                    name="Operator"
                                                    rules="required"
                                                >
                                                    <b-form-group
                                                        :state="
                                                            getValidationState(
                                                                validationContext
                                                            )
                                                        "
                                                    >
                                                        <v-select
                                                            :dir="
                                                                $store.state
                                                                    .appConfig
                                                                    .isRTL
                                                                    ? 'rtl'
                                                                    : 'ltr'
                                                            "
                                                            label="title"
                                                            :options="operator"
                                                            v-model="
                                                                vehicleCat.operator
                                                            "
                                                        />
                                                        <b-form-invalid-feedback
                                                            :state="
                                                                getValidationState(
                                                                    validationContext
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                validationContext
                                                                    .errors[0]
                                                            }}
                                                        </b-form-invalid-feedback>
                                                    </b-form-group>
                                                </validation-provider>
                                            </td>
                                            <td>
                                                <validation-provider
                                                    #default="validationContext"
                                                    name="Value"
                                                    rules="required"
                                                >
                                                    <b-form-group
                                                        :state="
                                                            getValidationState(
                                                                validationContext
                                                            )
                                                        "
                                                    >
                                                        <b-form-input
                                                            class="d-inline-block mr-1"
                                                            v-model="
                                                                vehicleCat.value
                                                            "
                                                        />
                                                        <b-form-invalid-feedback
                                                            :state="
                                                                getValidationState(
                                                                    validationContext
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                validationContext
                                                                    .errors[0]
                                                            }}
                                                        </b-form-invalid-feedback>
                                                    </b-form-group>
                                                </validation-provider>
                                            </td>
                                            <td>
                                                <validation-provider
                                                    #default="validationContext"
                                                    name="Condition"
                                                    rules="required"
                                                >
                                                    <b-form-group
                                                        :state="
                                                            getValidationState(
                                                                validationContext
                                                            )
                                                        "
                                                    >
                                                        <v-select
                                                            :dir="
                                                                $store.state
                                                                    .appConfig
                                                                    .isRTL
                                                                    ? 'rtl'
                                                                    : 'ltr'
                                                            "
                                                            label="title"
                                                            :options="condition"
                                                            v-model="
                                                                vehicleCat.condition
                                                            "
                                                        />
                                                        <b-form-invalid-feedback
                                                            :state="
                                                                getValidationState(
                                                                    validationContext
                                                                )
                                                            "
                                                        >
                                                            {{
                                                                validationContext
                                                                    .errors[0]
                                                            }}
                                                        </b-form-invalid-feedback>
                                                    </b-form-group>
                                                </validation-provider>
                                            </td>
                                            <td>
                                                <b-button
                                                    v-show="
                                                        vehicleCategories.length >
                                                            1
                                                    "
                                                    v-ripple.400="
                                                        'rgba(234, 84, 85, 0.15)'
                                                    "
                                                    variant="danger"
                                                    class="mt-0"
                                                    @click="
                                                        removeItem(
                                                            k,
                                                            vehicleCat
                                                        )
                                                    "
                                                >
                                                    <span>X</span>
                                                </b-button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <b-button
                                    class="mt-2"
                                    type="button"
                                    variant="primary"
                                    @click="addNewRow"
                                >
                                    Add More
                                </b-button>
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
                </b-form>
            </validation-observer>
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
    BForm,
    BFormInvalidFeedback,
    BDropdown,
    BDropdownItem,
    BPagination,
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
import Ripple from "vue-ripple-directive";

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

        BFormGroup,
        BForm,
        BFormInvalidFeedback,
        vSelect
    },
    directives: {
        Ripple
    },
    setup(props, { emit }) {
        const blankvehicleCategory = {
            title: "",
            basis: "",
            part: "",
            unit: "",
            operator: "",
            value: "",
            condition: ""
        };

        const vehicleCategory = ref(
            JSON.parse(JSON.stringify(blankvehicleCategory))
        );
        const resetvehicleCategory = () => {
            vehicleCategory.value = JSON.parse(
                JSON.stringify(blankvehicleCategory)
            );
        };

        const onSubmit = () => {
            store.dispatch("app-user/addUser", vehicleCategory.value);
        };

        const {
            refFormObserver,
            getValidationState,
            resetForm
        } = formValidation(resetvehicleCategory);

        return {
            vehicleCategory,
            onSubmit,

            refFormObserver,
            getValidationState,
            resetForm
        };
    },
    data() {
        return {
            vehicleCategory: [
                {
                    title: ""
                }
            ],
            vehicleCategories: [
                {
                    basis: "",
                    part: "",
                    unit: "",
                    operator: "",
                    value: "",
                    condition: ""
                }
            ],

            laravelData: {},
            inventoryduration: {},
            inventorydates: {},
            selected: null,

            basis: [
                // { value: null, text: "Select" },

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
            ],
            getvalue: []
        };
    },
    methods: {
        // getValues() {
        //     let object = this;
        //     let values = {};
        //     object.forEach(function(item) {
        //         return getvalue.push({ value: item.value });
        //     });
        // },
        postData(e) {
            console.log(this.vehicleCategory);
            let currentObj = this;
            e.preventDefault();
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/create-vehicle-categories",
                    {
                        vehicleCategories: this.vehicleCategories,
                        title: this.vehicleCategory.title
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
            // console.log(this.vehicleCategories);
        },
        addNewRow() {
            this.vehicleCategories.push({
                // title: "",
                basis: "",
                part: "",
                unit: "",
                operator: "",
                value: "",
                condition: ""
            });
        },
        // removeItem(k, fieldType) {
        //     fieldType.splice(k, 1);
        // }
        removeItem(index, vehicleCat) {
            var idx = this.vehicleCategories.indexOf(vehicleCat);
            console.log(idx, index);
            if (idx > -1) {
                this.vehicleCategories.splice(idx, 1);
            }
        }
    }
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
