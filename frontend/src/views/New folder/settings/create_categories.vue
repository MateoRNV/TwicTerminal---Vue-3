<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Add New Inspection List
                </h5>
            </div>
            <form @submit.prevent="postData" method="post">
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
                                    v-model="category.parent_id"
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="InspectionList"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="6">
                            <label for="basicInput" class="d-block">Name</label>
                            <div
                                class="d-flex align-items-center justify-content-end"
                            >
                                <b-form-input
                                    v-model="category.name"
                                    class="d-inline-block mr-1"
                                    placeholder="Enter Name"
                                />
                            </div>
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
                                        v-model="category.status"
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
                                        v-model="category.status"
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
                                        v-model="category.status"
                                    >
                                        Published
                                    </b-form-radio>
                                </div>
                                <div class="">
                                    <b-form-radio
                                        plain
                                        name="status"
                                        value="UnPublished"
                                        v-model="category.status"
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
        vSelect
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
                status: null
            },

            selected: null,
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

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
