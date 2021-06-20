<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Add New Inspection List
                </h5>
            </div>
            <div>
                <!-- <b-alert variant="danger" show>
                    <h4 class="alert-heading">
                        Error
                    </h4>
                    <div class="alert-body">
                        <span
                            >Tootsie roll lollipop lollipop icing. Wafer cookie
                            danish macaroon. Liquorice fruitcake apple pie I
                            love cupcake cupcake.</span
                        >
                    </div>
                </b-alert> -->
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
                            <!-- Per Page -->

                            <!-- Search -->
                            <b-col cols="12" md="6">
                                <label for="basicInput" class="d-block"
                                    >Parent</label
                                >
                                <validation-provider
                                    #default="validationContext"
                                    name="Parent"
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
                                            v-model="category.parent_id"
                                            :dir="
                                                $store.state.appConfig.isRTL
                                                    ? 'rtl'
                                                    : 'ltr'
                                            "
                                            label="title"
                                            :options="InspectionList"
                                        />
                                        <b-form-invalid-feedback
                                            :state="
                                                getValidationState(
                                                    validationContext
                                                )
                                            "
                                        >
                                            {{ validationContext.errors[0] }}
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                </validation-provider>
                            </b-col>
                            <b-col cols="12" md="6">
                                <label for="basicInput" class="d-block"
                                    >Name</label
                                >
                                <!-- <div
                                    class="d-flex align-items-center justify-content-end"
                                > -->
                                <validation-provider
                                    #default="validationContext"
                                    name="Inspection Name"
                                    rules="required"
                                >
                                    <b-form-group label-for="name">
                                        <b-form-input
                                            v-model="category.name"
                                            class="d-inline-block mr-1"
                                            placeholder="Inspection Name"
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
                                <!-- </div> -->
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
                                            v-model="category.status"
                                        >
                                            Published
                                        </b-form-radio> -->
                                        <b-form-checkbox
                                            value="Published"
                                            name="check-button"
                                            class="publishCheckBox"
                                            switch
                                            inline
                                            v-model="category.status"
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
                                            v-model="category.status"
                                        >
                                            UnPublished
                                        </b-form-radio> 
                                        <b-form-checkbox
                                            name="check-button"
                                            switch
                                            inline
                                            value="UnPublished"
                                            v-model="category.status"
                                        >
                                            UnPublished

                                            <span class="switch-icon-left">
                                                <feather-icon
                                                    icon="CheckIcon"
                                                />
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
    BForm,
    BFormInvalidFeedback,
    BFormGroup,
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
import { BFormCheckbox, BCardText, BAlert } from "bootstrap-vue";
import BCardCode from "@core/components/b-card-code";

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
        BFormGroup,
        BForm,
        BFormInvalidFeedback,
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
        BAlert,
        vSelect
    },
    setup(props, { emit }) {
        const blankcategory = {
            parent_id: "",
            name: "",
            status: "Published",
            key: 2
        };

        const category = ref(JSON.parse(JSON.stringify(blankcategory)));
        const resetcategory = () => {
            category.value = JSON.parse(JSON.stringify(blankcategory));
        };

        const onSubmit = () => {
            store.dispatch("app-user/addUser", category.value);
        };

        const {
            refFormObserver,
            getValidationState,
            resetForm
        } = formValidation(resetcategory);

        return {
            category,
            onSubmit,

            refFormObserver,
            getValidationState,
            resetForm
        };
    },
    mounted() {
        this.getInspectionList();
    },
    data() {
        return {
            category: {
                name: null,
                parent_id: "",
                key: 2,
                status: "Published"
            },
            errors: [],
            InspectionList: [],

            laravelData: {},
            inventoryduration: {},
            inventorydates: {}
            // option: [
            //     { title: "General" },
            //     { title: "Front" },
            //     { title: "Pessenger" }
            // ]
        };
    },
    methods: {
        postData(e) {
            console.log(this.category);
            e.preventDefault();
            let currentObj = this;

            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/create-settings",
                    {
                        parent_id: this.category.parent_id.value,
                        name: this.category.name,
                        status: this.category.status,
                        key: this.category.key
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
                        currentObj.$router.push({ path: "/categories" });
                    }
                })
                .catch(error => {
                    console.log(error);
                    if (error.response) {
                        if (error.response.status == 422) {
                            let errorMessage = error.response.data.error;
                            this.$swal({
                                icon: "error",
                                title: "Error!",
                                text: errorMessage,
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                },
                                buttonsStyling: false
                            });

                            this.$Progress.fail();
                        } else {
                            console.error(
                                "Response contains error code " +
                                    error.response.status
                            );
                        }
                    }
                });
        },
        getInspectionList: function() {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/status-list"
                )
                .then(response => {
                    this.InspectionList = response.data.StatusList;

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
</style>
