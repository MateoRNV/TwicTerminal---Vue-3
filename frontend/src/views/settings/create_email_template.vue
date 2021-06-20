<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Add New Email Template
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
                            <b-col cols="12" md="6">
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
                                            name="title"
                                            class="d-inline-block mr-1"
                                            v-model="emailTemplate.title"
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
                            <b-col cols="12" md="6">
                                <label for="basicInput" class="d-block"
                                    >Email Type</label
                                >
                                <validation-provider
                                    #default="validationContext"
                                    name="Email Type"
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
                                            v-model="emailTemplate.tagging"
                                            :dir="
                                                $store.state.appConfig.isRTL
                                                    ? 'rtl'
                                                    : 'ltr'
                                            "
                                            label="title"
                                            :options="EmailType"
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
                        </b-row>
                        <b-row class="mb-2">
                            <b-col cols="12" md="6">
                                <label for="basicInput" class="d-block"
                                    >From Name</label
                                >
                                <validation-provider
                                    #default="validationContext"
                                    name="From Name"
                                    rules="required"
                                >
                                    <b-form-group>
                                        <b-form-input
                                            class="d-inline-block mr-1"
                                            name="from_name"
                                            v-model="emailTemplate.from_name"
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
                            <b-col cols="12" md="6">
                                <label for="basicInput" class="d-block"
                                    >From Email</label
                                >
                                <validation-provider
                                    #default="validationContext"
                                    name="From Email"
                                    rules="required"
                                >
                                    <b-form-group>
                                        <b-form-input
                                            class="d-inline-block mr-1"
                                            name="from_email"
                                            v-model="emailTemplate.from_email"
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
                            <b-col cols="12" md="6">
                                <label for="basicInput" class="d-block"
                                    >CC</label
                                >
                                <b-form-group>
                                    <b-form-input
                                        class="d-inline-block mr-1"
                                        name="cc"
                                        v-model="emailTemplate.cc"
                                    />
                                </b-form-group>
                            </b-col>
                            <b-col cols="12" md="6">
                                <label for="basicInput" class="d-block"
                                    >BCC</label
                                >
                                <div
                                    class="d-flex align-items-center justify-content-end"
                                >
                                    <b-form-input
                                        class="d-inline-block mr-1"
                                        name="bcc"
                                        v-model="emailTemplate.bcc"
                                    />
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="mb-2">
                            <b-col cols="12" md="6">
                                <label for="basicInput" class="d-block"
                                    >Subject</label
                                >
                                <validation-provider
                                    #default="validationContext"
                                    name="Subject"
                                    rules="required"
                                >
                                    <b-form-group>
                                        <b-form-input
                                            class="d-inline-block mr-1"
                                            name="subject"
                                            v-model="emailTemplate.subject"
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
                                <label for="basicInput" class="d-block"
                                    >Description</label
                                >

                                <template>
                                    <b-card-text title="" class="desEditor">
                                        <b-dropdown
                                            variant="link"
                                            no-caret
                                            class="chart-dropdown documentsDropdown"
                                            toggle-class="p-0"
                                        >
                                            <template
                                                #button-content
                                                class="insertPlaceText"
                                            >
                                                <label
                                                    for="basicInput"
                                                    class="d-block"
                                                    >Insert Placeholders </label
                                                ><feather-icon
                                                    icon="ChevronDownIcon"
                                                    size="18"
                                                    class="text-body cursor-pointer"
                                                />
                                            </template>
                                            <b-dropdown-item href="#">
                                                <p>Payment</p>
                                                <ul>
                                                    <li>Balance</li>
                                                    <li>paymentNumber</li>
                                                    <li>P.O. Number</li>
                                                    <li>
                                                        Withholding tax Amount
                                                    </li>
                                                    <li>paymentDate</li>
                                                    <li>paymentReceived</li>
                                                    <li>Reference#</li>
                                                    <li>Total</li>
                                                    <li>Payment Mode</li>
                                                    <li>Deposit</li>
                                                    <li>Notes</li>
                                                </ul>
                                            </b-dropdown-item>
                                            <b-dropdown-item href="#">
                                                <p>Invoice</p>
                                                <ul>
                                                    <li>Balance</li>
                                                    <li>References</li>
                                                    <li>InvoiceDate</li>
                                                    <li>Routes</li>
                                                    <li>Carrier</li>
                                                    <li>Cost</li>
                                                    <li>Tracking link</li>
                                                    <li>Account#</li>
                                                    <li>Booking#</li>
                                                    <li>Source</li>
                                                    <li>Destination</li>
                                                    <li>Services</li>
                                                </ul>
                                            </b-dropdown-item>
                                            <b-dropdown-item href="#">
                                                <p>Customer</p>
                                                <ul>
                                                    <li>Customer Name</li>
                                                    <li>Customer Id</li>
                                                    <li>Customer Balance</li>
                                                    <li>Account Rep</li>
                                                    <li>Role</li>
                                                    <li>Phone</li>
                                                    <li>Customer Email</li>
                                                    <li>Customer Address</li>
                                                    <li>Customer Company</li>
                                                </ul>
                                            </b-dropdown-item>
                                            <b-dropdown-item href="#">
                                                <p>Organization</p>
                                                <ul>
                                                    <li>Organization Name</li>
                                                    <li>
                                                        Organization Address
                                                    </li>
                                                    <li>Organization Email</li>
                                                    <li>
                                                        Organization Contact#
                                                    </li>
                                                    <li>Organization Fax#</li>
                                                    <li>
                                                        Organization Website
                                                    </li>
                                                    <li>Comment</li>
                                                </ul>
                                            </b-dropdown-item>
                                        </b-dropdown>
                                        <quill-editor
                                            name="description"
                                            v-model="emailTemplate.description"
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
                                            v-model="emailTemplate.status"
                                        >
                                            Published
                                        </b-form-radio> -->
                                        <b-form-checkbox
                                            value="Published"
                                            name="check-button"
                                            class="publishCheckBox"
                                            switch
                                            inline
                                            v-model="emailTemplate.status"
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
                                            v-model="emailTemplate.status"
                                        >
                                            UnPublished
                                        </b-form-radio> 
                                        <b-form-checkbox
                                            name="check-button"
                                            switch
                                            inline
                                            value="UnPublished"
                                            v-model="emailTemplate.status"
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
    BDropdown,
    BDropdownItem,
    BPagination,
    BFormRadio,
    BFormGroup,
    BForm,
    BFormInvalidFeedback,
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
        vSelect,
        BFormGroup,
        BForm,
        BFormInvalidFeedback,
        quillEditor,
        BFormCheckbox,
        BCardText,
        BCardCode,
        QuillEditorSnow
    },
    setup(props, { emit }) {
        const blankemailTemplate = {
            title: "",
            from_email: "",
            from_name: "",
            subject: "",
            tagging: "",
            status: "Published"
        };

        const emailTemplate = ref(
            JSON.parse(JSON.stringify(blankemailTemplate))
        );
        const resetemailTemplate = () => {
            emailTemplate.value = JSON.parse(
                JSON.stringify(blankemailTemplate)
            );
        };

        const onSubmit = () => {
            store.dispatch("app-user/addUser", emailTemplate.value);
        };

        const {
            refFormObserver,
            getValidationState,
            resetForm
        } = formValidation(resetemailTemplate);

        return {
            emailTemplate,
            onSubmit,

            refFormObserver,
            getValidationState,
            resetForm
        };
    },
    mounted() {
        this.getEmailType();
    },
    data() {
        return {
            emailTemplate: {
                title: "",
                from_email: "",
                from_name: "",
                subject: "",
                tagging: "",
                description: "",
                status: "Published",
                cc: "",
                bcc: ""
            },

            EmailType: [],

            laravelData: {},
            inventoryduration: {},
            inventorydates: {},
            option: [
                { title: "Upload Documents" },
                { title: "Work Orders" },
                { title: "Cost Type" },
                { title: "Payment Mode" },
                { title: "Inventory Status" },
                { title: "Customer Type" }
            ]
        };
    },
    methods: {
        postData(e) {
            console.log(this.emailTemplate);
            let currentObj = this;
            e.preventDefault();

            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/create-email-template",
                    {
                        title: this.emailTemplate.title,
                        from_email: this.emailTemplate.from_email,
                        from_name: this.emailTemplate.from_name,
                        subject: this.emailTemplate.subject,
                        tagging: this.emailTemplate.tagging.title,
                        description: this.emailTemplate.description,
                        status: this.emailTemplate.status,
                        cc: this.emailTemplate.cc,
                        bcc: this.emailTemplate.bcc
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
                        currentObj.$router.push({ path: "/email-template" });
                    }
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

<style>
.desEditor .ql-editor p {
    height: 200px !important;
}
.documentsDropdown {
    position: absolute;
    top: 21%;
    right: 31px;
}
.documentsDropdown button.btn.dropdown-toggle {
    display: inline-flex;
    align-items: center;
}
.documentsDropdown ul.dropdown-menu {
    display: inline-flex;
    left: auto !important;
    right: -310px !important;
    /* transform: translate3d(0px, -316px, 0px) !important; */
}
.documentsDropdown ul.dropdown-menu li ul {
    padding-left: 10px;
}
.documentsDropdown ul.dropdown-menu li ul li {
    list-style: none;
    line-height: 25px;
    font-weight: normal;
}
.documentsDropdown ul.dropdown-menu li a.dropdown-item {
    font-weight: bold;
}
.documentsDropdown ul.dropdown-menu li a.dropdown-item:hover,
.documentsDropdown ul.dropdown-menu li a.dropdown-item:focus {
    background-color: transparent;
    color: #716f7e;
}
</style>
