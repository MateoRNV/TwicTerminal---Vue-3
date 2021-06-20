<template>
    <div>
        <b-card no-body class="mb-0">
            <div class="m-2">
                <!-- Table Top -->
                <b-row>
                    <!-- Per Page -->

                    <b-col
                        cols="12"
                        md="6"
                        class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
                    >
                        <label>Show</label>
                        <v-select
                            v-model="perPage"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="perPageOptions"
                            :clearable="false"
                            class="per-page-selector d-inline-block mx-50"
                        />
                        <label>entries</label>
                    </b-col>

                    <!-- Search -->
                    <b-col cols="12" md="6">
                        <div
                            class="d-flex align-items-center justify-content-end"
                        >
                            <b-form-input
                                v-model="searchQuery"
                                class="d-inline-block mr-1"
                                placeholder="Search..."
                            />

                            <router-link
                                class="btn btn-primary w-100"
                                :to="'/create-services-settings'"
                                >Create Service</router-link
                            >
                        </div>
                    </b-col>
                </b-row>
            </div>

            <div class="position-relative table-responsive">
                <table
                    role="table"
                    aria-busy="false"
                    aria-colcount="9"
                    class="table b-table"
                    id="__BVID__173"
                >
                    <!----><!---->
                    <thead role="rowgroup" class="">
                        <!---->
                        <tr role="row" class="">
                            <th
                                role="columnheader"
                                scope="col"
                                tabindex="0"
                                aria-colindex="1"
                                aria-sort="none"
                                class=""
                            >
                                <div>Sr</div>
                            </th>
                            <th
                                role="columnheader"
                                scope="col"
                                tabindex="0"
                                aria-colindex="2"
                                aria-sort="none"
                                class=""
                            >
                                <div>Name</div>
                            </th>

                            <th
                                role="columnheader"
                                scope="col"
                                aria-colindex="9"
                                class=""
                            >
                                <div>Actions</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody role="rowgroup">
                        <tr v-for="(inspection, index) in servicesettings.data">
                            <td>{{ ++index }}</td>
                            <td>
                                <router-link
                                    :to="
                                        '/services_settings/user/view/' +
                                            inspection.id
                                    "
                                    >{{ inspection.name }}</router-link
                                >
                            </td>
                            <td>
                                <!-- <feather-icon
                                    icon="DeleteIcon"
                                    size="16"
                                    class="mx-1"
                                /> -->
                                <template>
                                    <b-card-header
                                        class="pl-0 pr-0 galleryHeader"
                                    >
                                        <b-dropdown
                                            variant="link"
                                            no-caret
                                            class="chart-dropdown documentsDropdown"
                                            toggle-class="p-0"
                                        >
                                            <template #button-content>
                                                <feather-icon
                                                    icon="MoreVerticalIcon"
                                                    size="18"
                                                    class="text-body cursor-pointer"
                                                />
                                            </template>
                                            <b-dropdown-item class="editAction">
                                                <router-link
                                                    :to="
                                                        '/services_settings/update/' +
                                                            inspection.id
                                                    "
                                                >
                                                    <feather-icon
                                                        icon="EditIcon"
                                                    />
                                                    <p
                                                        class="align-middle ml-50 d-inline m-0"
                                                    >
                                                        Edit
                                                    </p>
                                                </router-link>
                                            </b-dropdown-item>
                                            <a
                                                href="javascript:;"
                                                v-on:click="
                                                    deleteSettings(
                                                        inspection.id
                                                    )
                                                "
                                            >
                                                <b-dropdown-item>
                                                    <feather-icon
                                                        icon="TrashIcon"
                                                    />
                                                    <span
                                                        class="align-middle ml-50"
                                                        >Delete</span
                                                    >
                                                </b-dropdown-item>
                                            </a>
                                        </b-dropdown>
                                    </b-card-header>
                                </template>
                            </td>
                        </tr>
                    </tbody>
                    <!---->
                </table>
            </div>
            <div class="mx-2 mb-2">
                <b-row>
                    <b-col
                        cols="12"
                        sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-start"
                    >
                        <span class="text-muted"
                            >Showing {{ servicesettings.from }} to
                            {{ servicesettings.to }} of
                            {{ servicesettings.of }} entries</span
                        >
                    </b-col>
                    <!-- Pagination -->
                    <b-col
                        cols="12"
                        sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-end"
                    >
                        <b-pagination
                            v-model="currentPage"
                            :total-rows="servicesettings.total"
                            :per-page="perPage"
                            first-text="First"
                            prev-text="Prev"
                            next-text="Next"
                            last-text="Last"
                            @change="getResults"
                        ></b-pagination>
                    </b-col>
                </b-row>
            </div>
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
    data() {
        return {
            servicesettings: {},
            laravelData: {},
            inventoryduration: {},
            inventorydates: {}
        };
    },

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
        this.getResults();
    },
    methods: {
        // Our method to GET results from a Laravel endpoint
        getResults(page = 1) {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/servicesettings?page=" +
                        page,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization:
                                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4YmJiOGJkZmJiNmQ5YTgzNmVmMDkwZGRkZDY5MDFmOWEzZDFiNTE3MWUzODA5ODE0ZmJlMWE1MWY3ZjExZjBiMWIwNzExNjQ2NWRkYWZmIn0.eyJhdWQiOiIxOTM4NDcxMiIsImp0aSI6IjY4YmJiOGJkZmJiNmQ5YTgzNmVmMDkwZGRkZDY5MDFmOWEzZDFiNTE3MWUzODA5ODE0ZmJlMWE1MWY3ZjExZjBiMWIwNzExNjQ2NWRkYWZmIiwiaWF0IjoxNjA2MzA3ODc5LCJuYmYiOjE2MDYzMDc4NzksImV4cCI6MTYzNzg0Mzg3OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.OSYl-wXlW42CIeFq-agf10WPbHo57EBRD1NDFTodnALlqVBWmEW2yMy3CA2YYYiKz27Ot6XP61ROcl153W7CpmL6wjVX2qUEbethwaGDvUReb2UEPY6hBBRVrhB6LoA46m3sHA5FNq9E02TzWAwvj7NQVpPgRF6dvaH6go1z-Opfp-L6q0czpTuUXGtgDbJmnU8yG1NCc8gJYqtZxjiqBDjHq8GiLpr5254hgoVJTdY_9kLjmy_VDE_GlBxdZJVyPB3hCCEuSCjnFaJiDwO3pAEFLqY2KecimVtc78TChFzJycwMo0bUQRsgpmSjzxSYE2z-J_dJJEtx4u8pR2Zg3PhDxmYRvMip0b688mGbay_BobAcyrXumQmJsFfqekDewLuBfYtmB0TCZmmf5H6G0tyaXGcmfKMMFY8Qdv2qLy-y-1Vu06npoK94pElsOexkESxiiu8__bpkNrWMt8VLHYMmygJ_Y8o0JrmB4eyfnceaO-lvtFnFMZtVQP_XgWApzWTzYAy27cU56oR9vz1UfmM0HfGCbXPQDTmkmmL1RNO-MyKEMoIJSJLWdjXB9f6yyDpEurgG0lt0xDgrvr43RCappToLGYtFHiAYMTT-xqy2ucZPnUXKf8X4WDYH_8yuMS9_JZKc2mLViaoZje4nhTQe3RquhloJB6VQon4WNNo"
                        }
                    }
                )
                .then(response => {
                    // this.laravelData = response.data.Inspection;
                    // console.log(response.data.inspectiontypes);
                    this.servicesettings = response.data.servicesettings;
                    // this.inventoryduration = response.data.inventoryduration;
                    // this.inventorydates = response.data.inventorydates;
                });
        },
        deleteSettings: function(rowid) {
            this.$swal({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes, delete it!",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-outline-danger ml-1"
                },
                buttonsStyling: false
            }).then(result => {
                if (result.value) {
                    axios({
                        method: "post",
                        url:
                            "http://koboautos.com/twic-terminal/connect/api/delete-settings?&key=" +
                            rowid
                    });
                    this.$swal({
                        icon: "success",
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        customClass: {
                            confirmButton: "btn btn-success"
                        }
                    });
                    if (response.status == 200) {
                        location.reload();
                    }
                } else if (result.dismiss === "cancel") {
                    this.$swal({
                        title: "Cancelled",
                        text: "Your imaginary file is safe :)",
                        icon: "error",
                        customClass: {
                            confirmButton: "btn btn-success"
                        }
                    });
                }
            });
        }
    }
};
</script>

<style lang="scss">
.per-page-selector {
    width: 90px;
}

.main-menu .navbar-header .navbar-brand .brand-logo img {
    max-width: 115px !important;
}
.main-menu .navbar-header .navbar-brand {
    margin: 3px auto !important;
}

.main-menu .navbar-header .navbar-brand .brand-text {
    font-size: 1rem !important;
    padding-left: 7px !important;
}

.main-menu .navbar-header .navbar-brand .brand-text {
    color: #f4bc33 !important;
    font-weight: 600;
    letter-spacing: 0.01rem;
    font-size: 1.45rem;
}
.nav-pills .nav-link.active {
    border-color: #ff9f43 !important;
    -webkit-box-shadow: 0 4px 18px -4px rgb(243 187 55) !important;
    box-shadow: 0 4px 18px -4px rgb(115 103 240 / 65%) !important;
}
.nav-pills .nav-link.active,
[dir] .nav-pills .show > .nav-link {
    background-color: #f39c41 !important;
}
[dir] .customizer .customizer-toggle {
    background: #f39c41 !important;
}
a {
    color: #ff9f43;
}
.btn-primary {
    border-color: #f39c41 !important;
    background-color: #f39c41 !important;
}
.main-menu.menu-dark .navigation > li.active > a {
    background: linear-gradient(118deg, #e8b231, rgb(243 156 65));
}
.main-menu.menu-dark .navigation > li.active > a {
    -webkit-box-shadow: 0 0 10px 1px rgb(40 48 70);
    box-shadow: 0 0 10px 1px rgb(40 48 70);
    border-radius: 4px;
}

.page-item.active .page-link {
    border-color: #ff9f43;
    background-color: #ff9f43;
}
.page-item.next-item .page-link:active,
.page-item.next-item .page-link:hover {
    background-color: #ff9f43 !important;
}
.dropdown-menu .editAction .dropdown-item {
    padding: 0px;
}
.dropdown-menu .dropdown-item p {
    padding-right: 65px;
    padding-top: 0.65rem;
    padding-bottom: 0.65rem;
    line-height: 36px;
}
.dropdown-menu .editAction .dropdown-item svg.feather {
    outline: none;
    margin-left: 19px;
}
.dropdown-menu .dropdown-item a {
    color: #6e6b7b;
}
.dropdown-menu .dropdown-item a:hover {
    color: #7367f0;
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
