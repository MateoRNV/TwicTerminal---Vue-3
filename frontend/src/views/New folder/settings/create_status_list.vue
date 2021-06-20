<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Add New Status List
                </h5>
            </div>
            <form @submit.prevent="postData" method="post">
                <div class="m-2">
                    <!-- Table Top -->
                    <b-row class="mb-2">
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Group</label
                            >
                            <b-form-group>
                                <v-select
                                    v-model="statusList.group_id"
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
                    </b-row>
                    <b-row>
                        <b-col cols="12" md="10">
                            <b-row class="" ref="row">
                                <b-col cols="10" md="5">
                                    <label for="basicInput" class="d-block"
                                        >Status</label
                                    >
                                </b-col>
                                <b-col cols="10" md="5">
                                    <label for="basicInput" class="d-block"
                                        >Color</label
                                    >
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row>
                    <b-row
                        class="repeater-form mb-2"
                        ref="row"
                        :style="{ height: trHeight }"
                    >
                        <b-col
                            cols="12"
                            md="10"
                            v-for="(input, index) in statuswithcolors"
                            :key="`phoneInput-${index}`"
                        >
                            <b-row class="mb-2" ref="row">
                                <b-col cols="12" md="5">
                                    <div
                                        class="d-flex align-items-center justify-content-end"
                                    >
                                        <b-form-input
                                            class="d-inline-block mr-1"
                                            placeholder="Enter Name"
                                            v-model="input.title"
                                        />
                                    </div>
                                </b-col>

                                <b-col cols="12" md="5">
                                    <div
                                        class="d-flex align-items-center justify-content-end"
                                    >
                                        <b-form-input
                                            type="color"
                                            class="d-inline-block mr-1"
                                            placeholder="Enter Name"
                                            name="color"
                                            v-model="input.color"
                                        />
                                    </div>
                                </b-col>

                                <!-- Remove Button -->
                                <b-col cols="12" md="2">
                                    <b-button
                                        v-show="statuswithcolors.length > 1"
                                        v-ripple.400="'rgba(234, 84, 85, 0.15)'"
                                        variant="danger"
                                        class="mt-0"
                                        @click="removeItem(index, statuswithcolors)"
                                    >
                                        <!-- <feather-icon
                                            icon="XIcon"
                                            class="mr-25"
                                        /> -->
                                        <span>Remove</span>
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-col>

                        <b-col cols="12" md="2" class="">
                            <b-button
                                id="add"
                                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                variant="primary"
                                @click="addField(input, statuswithcolors)"
                            >
                                <!-- <feather-icon icon="PlusIcon" class="mr-25" /> -->
                                <span>Add More</span>
                            </b-button>
                        </b-col>
                    </b-row>

                    <b-row class="mb-2">
                        <b-col cols="12" md="12">
                            <label for="basicInput" class="d-block"
                                >Description</label
                            >
                            <template>
                                <b-card-text title="">
                                    <quill-editor
                                        name="description"
                                        v-model="statusList.description"
                                    />
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
                                    <b-form-radio
                                        plain
                                        name="status"
                                        value="Published"
                                        v-model="statusList.status"
                                    >
                                        Published
                                    </b-form-radio>
                                </div>
                                <div class="">
                                    <b-form-radio
                                        plain
                                        name="status"
                                        value="UnPublished"
                                        v-model="statusList.status"
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
            <!-- <template #code>
                {{ codeBasic }}
            </template> -->
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
    BSidebar,
    BFormGroup,
    BFormSelect
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
import FormRepeaterBasic from "./FormRepeaterBasic.vue";

import { codeBasic } from "./code";
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
        BFormSelect,
        // Form Validation
        ValidationProvider,
        ValidationObserver,
        BFormRadio,
        BFormGroup,
        FormRepeaterBasic,

        vSelect,
        quillEditor,
        BCardCode,
        QuillEditorSnow
    },
    directives: {
        Ripple
    },
    mounted() {
        this.getstatusGroup();
        this.initTrHeight();
    },
    created() {
        window.addEventListener("resize", this.initTrHeight);
    },
    destroyed() {
        window.removeEventListener("resize", this.initTrHeight);
    },
    data() {
        return {
            statusList: [
                {
                    group_id: "",
                    description: "",
                    status: "",
                    color: "",
                    title: ""
                }
            ],
            statuswithcolors: [{ title: "", color: "" }],

            selected: null,
            statusGroup: [],

            items: [
                {
                    id: 1,
                    prevHeight: 0
                }
            ],
            nextTodoId: 2,
            codeBasic,

            inventoryduration: {},
            inventorydates: {}
            // statusGroup: [
            //     { title: "Upload Documents" },
            //     { title: "Work Orders" },
            //     { title: "Cost Type" },
            //     { title: "Payment Mode" },
            //     { title: "Inventory Status" },
            //     { title: "Customer Type" }
            // ]
        };
    },
    methods: {
        postData(e) {
            console.log(this.statuswithcolors);
            let currentObj = this;
            e.preventDefault();
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/create-status-list",
                    {
                        statuswithcolors: this.statuswithcolors,
                        group_id: this.statusList.group_id.value,
                        description: this.statusList.description,
                        status: this.statusList.status,
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
                    if (response.data.status == 'success') {
                        currentObj.$router.push({ path: "/status-list" });
                    }
                });
        },
        getstatusGroup: function() {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/status-group-list"
                )
                .then(response => {
                    this.statusGroup = response.data.statusgroup;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        addField(value, fieldType) {
            fieldType.push({ value: "" });
        },

        removeItem(index, fieldType) {
            fieldType.splice(index, 1);
        }
    }
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
@import "@core/scss/vue/libs/quill.scss";

.repeater-form {
    overflow: hidden;
    transition: 0.35s height;
}
</style>
