<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="card-header pb-50">
                <h5>
                    Add New Terminal
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
                            <b-form-group>
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    name="title"
                                    v-model="terminal.title"
                                />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Email</label
                            >
                            <b-form-group>
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    name="email"
                                    v-model="terminal.email"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Phone</label
                            >
                            <b-form-group>
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    name="phone"
                                    v-model="terminal.phone"
                                />
                            </b-form-group>
                        </b-col>
                    </b-row>
                    <b-row class="mb-2">
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Logo
                            </label>
                            <b-form-group>
                                <b-form-file
                                    type="file"
                                    class="d-inline-block mr-1 form-control"
                                    name="logo"
                                    v-model="terminal.logo"
                                />
                                <!-- <b-form-file
                                    type="file"
                                    v-model="terminal.logo"
                                    placeholder="Choose a file or drop it here..."
                                    drop-placeholder="Drop file here..."
                                /> -->
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Address</label
                            >
                            <b-form-group>
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    name="address"
                                    v-model="terminal.address"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Country</label
                            >
                            <b-form-group>
                                <v-select
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="countrylist"
                                    v-model="selected"
                                    :v-bind="terminal.country"
                                    v-on:change="showCountry"
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
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="statelist"
                                    name="state"
                                    v-model="terminal.state"
                                />
                            </b-form-group>
                        </b-col>

                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block">City</label>
                            <b-form-group>
                                <v-select
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="citieslist"
                                    name="city"
                                    v-model="terminal.city"
                                />
                            </b-form-group>
                        </b-col>
                        <b-col cols="12" md="4">
                            <label for="basicInput" class="d-block"
                                >Zip Code</label
                            >
                            <b-form-group>
                                <b-form-input
                                    class="d-inline-block mr-1"
                                    name="zip_code'"
                                    v-model="terminal.zip_code"
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
import BCardCode from "@core/components/b-card-code";
import { BFormFile, BCardText } from "bootstrap-vue";
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
        BCardCode,
        BCardText,
        BFormFile,
        vSelect
    },
    created() {
        this.allcountries();
    },
    data() {
        return {
            terminal: {
                title: "",
                logo: "",
                email: "",
                phone: "",
                country_id: "",
                city: "",
                state: "",
                address: "",
                zip_code: ""
            },
            selected: null,
            laravelData: {},
            inventoryduration: {},
            inventorydates: {},
            countrylist: [],
            statelist: [],
            citieslist: []
        };
    },
    methods: {
        postData(e) {
            console.log(this.terminal);
            let currentObj = this;
            e.preventDefault();

            if (this.terminal.title != "") {
                const file = this.terminal.logo;
                const reader = new FileReader();

                reader.readAsDataURL(this.terminal.logo);
                reader.onload = () => {
                    // console.log(JSON.stringify(reader.result));
                    // console.log(reader.result);

                    axios
                        .post(
                            "http://koboautos.com/twic-terminal/connect/api/create-terminal",
                            {
                                title: this.terminal.title,
                                logo: reader.result,
                                email: this.terminal.email,
                                phone: this.terminal.phone,
                                country_id: this.terminal.country_id.key,
                                city: this.terminal.city.key,
                                state: this.terminal.state.key,
                                address: this.terminal.address,
                                zip_code: this.terminal.zip_code
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
                                currentObj.$router.push({ path: "/terminal" });
                            }
                        });
                };
            }
        },
        
        allcountries(e) {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/all-countries"
                )
                .then(response => {
                    // console.log(response);
                    response.data.countries.forEach(country => {
                        this.countrylist.push({
                            value: country.key,
                            title: country.title
                        });
                    });
                });
        },
        showCountry() {
            console.log(this.selectedCountry);
        },
        allstates(e) {
            axios
                .post("http://koboautos.com/twic-terminal/connect/api/states")
                .then(response => {
                    // console.log(response);
                    this.statelist = response.data.states;
                });
        },
        allcities(e) {
            axios
                .post("http://koboautos.com/twic-terminal/connect/api/cities")
                .then(response => {
                    // console.log(response);
                    this.citieslist = response.data.cities;
                });
        }
    }
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
