<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Add New Email Template
                </h5>
            </div>
            <form @submit.prevent="postData" method="post">
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
                                    v-model="emailTemplate.title"
                                />
                            </div>
                        </b-col>

                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >From Name</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    name="from_name"
                                    v-model="emailTemplate.from_name"
                                />
                            </div>
                        </b-col>
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >From Email</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    name="from_email"
                                    v-model="emailTemplate.from_email"
                                />
                            </div>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block">CC</label>
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    name="cc"
                                    v-model="emailTemplate.cc"
                                />
                            </div>
                        </b-col>

                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block">BCC</label>
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
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Subject</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    name="subject"
                                    v-model="emailTemplate.subject"
                                />
                            </div>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col cols="12" md="12">
                            <label for="basicInput" class="d-block"
                                >Tagging</label
                            >
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    name="tagging"
                                    v-model="emailTemplate.tagging"
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
                                class="d-flex align-items-center justify-content-end "
                            >
                                <quill-editor-snow />
                            </div> -->

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
                                                <li>Withholding tax Amount</li>
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
                                                <li>Organization Address</li>
                                                <li>Organization Email</li>
                                                <li>Organization Contact#</li>
                                                <li>Organization Fax#</li>
                                                <li>Organization Website</li>
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
                            <!-- <div class="d-flex align-items-center">
                                <div
                                    class="custom-control custom-radio"
                                    style="margin-right: 20px"
                                >
                                    <input
                                        type="radio"
                                        name="some-radios"
                                        class="custom-control-input"
                                        value="A"
                                    /><label
                                        class="custom-control-label"
                                        for="__BVID__1030"
                                    >
                                        Published
                                    </label>
                                </div>
                                <div class="custom-control custom-radio">
                                    <input
                                        type="radio"
                                        name="some-radios"
                                        class="custom-control-input"
                                        value="B"
                                    /><label
                                        class="custom-control-label"
                                        for="__BVID__1031"
                                    >
                                        UnPublished
                                    </label>
                                </div>
                            </div> -->
                            <div class="d-flex align-items-center">
                                <div class="" style="margin-right: 20px;">
                                    <b-form-radio
                                        plain
                                        name="status"
                                        value="Published"
                                        v-model="emailTemplate.status"
                                    >
                                        Published
                                    </b-form-radio>
                                </div>
                                <div class="">
                                    <b-form-radio
                                        plain
                                        name="status"
                                        value="UnPublished"
                                        v-model="emailTemplate.status"
                                    >
                                        UnPublished
                                    </b-form-radio>
                                </div>
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

        quillEditor,
        BCardCode,
        QuillEditorSnow
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
                status: "",
                cc: "",
                bcc: ""
            },
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
                        tagging: this.emailTemplate.tagging,
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
        }
    }
};
</script>

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
