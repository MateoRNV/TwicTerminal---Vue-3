<template>
    <div>
        <user-list-add-new
            :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
            :role-options="roleOptions"
            :plan-options="planOptions"
            @refetch-data="refetchData"
        />

        <!-- Filters -->
        <users-list-filters
            :role-filter.sync="roleFilter"
            :plan-filter.sync="planFilter"
            :status-filter.sync="statusFilter"
            :role-options="roleOptions"
            :plan-options="planOptions"
            :status-options="statusOptions"
            class="inventoryadvancesearchsection"
            v-if="!isHidden"
        />

        <!-- Table Container Card -->

        <a
            href="javascript:void();"
            style="float: right;color: #00cfe8;font-weight: bold;"
            v-on:click="isHidden = !isHidden"
            >Advance Search</a
        >
        <div style="clear: both;height: 5px"></div>

        <b-card no-body class="mb-0">
            <div class="m-2">
                <b-row>
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

                    <b-col cols="12" md="6">
                        <div
                            class="d-flex align-items-center justify-content-end"
                        >
                            <b-form-input
                                v-model="searchQuery"
                                class="d-inline-block mr-1"
                                placeholder="Search..."
                                @input.native="onChange"
                            />
                            <b-button
                                variant="primary"
                                @click="isAddNewUserSidebarActive = true"
                            >
                                <span class="text-nowrap"
                                    >Create Inventory</span
                                >
                            </b-button>
                        </div>
                    </b-col>
                </b-row>
            </div>

            <!-- <b-table
                    ref="refUserListTable"
                    class="position-relative"
                    :items="fetchUsers"
                    responsive
                    :fields="tableColumns"
                    primary-key="id"
                    :sort-by.sync="sortBy"
                    show-empty
                    empty-text="No matching records found"
                    :sort-desc.sync="isSortDirDesc"
                >

                    <template #cell(date)="data">
                        <div class="text-nowrap">
                            <span class="align-text-top text-capitalize">29-May-2021</span>
                        </div>
                    </template>

                    <template #cell(vin_number)="data">
                    <b-media vertical-align="center">
                        <b-link
                        :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
                        class="font-weight-bold d-block text-nowrap"
                        >
                        JTKJF5C72B3011634
                        </b-link>
                    </b-media>
                    </template>

                    <template #cell(Year|Make|Model)="data">
                            <div class="text-nowrap">1993 Acura NSX</div>
                    </template>

                    <template #cell(customer)="data">
                        <div class="text-nowrap">
                            <span class="align-text-top text-capitalize">Franklin Rosevelt</span>
                        </div>
                    </template>

                    <template #cell(location)="data">
                        <div class="text-nowrap">
                            <span class="align-text-top text-capitalize">SPS Jacksonville</span>
                        </div>
                    </template>

                    <template #cell(duration)="data">
                        <div class="text-nowrap">
                            <span class="align-text-top text-capitalize">4 Month 1 Days</span>
                        </div>
                    </template>

                    <template #cell(balance)="data">
                        <div class="text-nowrap">
                            <span class="align-text-top text-capitalize">$ 286</span>
                        </div>
                    </template>


                    <template #cell(status)="data">
                    <b-badge
                        pill
                        :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
                        class="text-capitalize"
                    >
                        {{ data.item.status }}
                    </b-badge>
                    </template>

                    <template #cell(actions)="data">
                    <b-dropdown
                        variant="link"
                        no-caret
                        :right="$store.state.appConfig.isRTL"
                    >

                        <template #button-content>
                        <feather-icon
                            icon="MoreVerticalIcon"
                            size="16"
                            class="align-middle text-body"
                        />
                        </template>
                        <b-dropdown-item :to="{ name: 'apps-users-view', params: { id: data.item.id } }">
                        <feather-icon icon="FileTextIcon" />
                        <span class="align-middle ml-50">Details</span>
                        </b-dropdown-item>

                        <b-dropdown-item :to="{ name: 'apps-users-edit', params: { id: data.item.id } }">
                        <feather-icon icon="EditIcon" />
                        <span class="align-middle ml-50">Edit</span>
                        </b-dropdown-item>

                        <b-dropdown-item>
                        <feather-icon icon="TrashIcon" />
                        <span class="align-middle ml-50">Delete</span>
                        </b-dropdown-item>
                    </b-dropdown>
                    </template>

                </b-table>

                <div class="mx-2 mb-2">
                    <b-row>

                    <b-col
                        cols="12"
                        sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-start"
                    >
                        <span class="text-muted">Showing {{ dataMeta.from }} to {{ dataMeta.to }} of {{ dataMeta.of }} entries</span>
                    </b-col>
                  
                    <b-col
                        cols="12"
                        sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-end"
                    >

                        <b-pagination
                        v-model="currentPage"
                        :total-rows="totalUsers"
                        :per-page="perPage"
                        first-number
                        last-number
                        class="mb-0 mt-1 mt-sm-0"
                        prev-class="prev-item"
                        next-class="next-item"
                        >
                        <template #prev-text>
                            <feather-icon
                            icon="ChevronLeftIcon"
                            size="18"
                            />
                        </template>
                        <template #next-text>
                            <feather-icon
                            icon="ChevronRightIcon"
                            size="18"
                            />
                        </template>
                        </b-pagination>

                    </b-col>

                    </b-row>
                </div> -->

            <div class="position-relative table-responsive">
                <table
                    role="table"
                    aria-busy="false"
                    aria-colcount="9"
                    class="table b-table"
                    id="__BVID__173"
                >
                    <thead role="rowgroup" class="">
                        <tr role="row" class="">
                            <th
                                role="columnheader"
                                scope="col"
                                tabindex="0"
                                aria-colindex="1"
                                aria-sort="none"
                                class=""
                            >
                                <div>Date</div>
                            </th>
                            <th
                                role="columnheader"
                                scope="col"
                                tabindex="0"
                                aria-colindex="2"
                                aria-sort="none"
                                class=""
                            >
                                <div>Vinnumber</div>
                            </th>
                            <th
                                role="columnheader"
                                scope="col"
                                tabindex="0"
                                aria-colindex="3"
                                aria-sort="none"
                                class=""
                            >
                                <div>Year|Make|Model</div>
                            </th>
                            <th
                                role="columnheader"
                                scope="col"
                                tabindex="0"
                                aria-colindex="4"
                                aria-sort="none"
                                class=""
                            >
                                <div>Customer</div>
                            </th>
                            <th
                                role="columnheader"
                                scope="col"
                                tabindex="0"
                                aria-colindex="5"
                                aria-sort="none"
                                class=""
                            >
                                <div>Location</div>
                            </th>
                            <th
                                role="columnheader"
                                scope="col"
                                tabindex="0"
                                aria-colindex="6"
                                aria-sort="none"
                                class=""
                            >
                                <div>Duration</div>
                            </th>
                            <th
                                role="columnheader"
                                scope="col"
                                tabindex="0"
                                aria-colindex="7"
                                aria-sort="none"
                                class=""
                            >
                                <div>Balance</div>
                            </th>
                            <th
                                role="columnheader"
                                scope="col"
                                tabindex="0"
                                aria-colindex="8"
                                aria-sort="none"
                                class=""
                            >
                                <div>Status</div>
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
                        <tr
                            role="row"
                            id="__BVID__173__row_76"
                            data-pk="76"
                            class=""
                            v-for="(inventory, key) in inventorylist.data"
                        >
                            <td aria-colindex="1" role="cell" class="">
                                <div class="text-nowrap">
                                    <p>{{ inventorydates[++key - 1] }}</p>
                                </div>
                            </td>
                            <td aria-colindex="2" role="cell" class="">
                                <div class="text-nowrap">
                                    <p>
                                        <router-link
                                            :to="
                                                '/inventory/view/' +
                                                    inventory.vin_number
                                            "
                                            >{{
                                                inventory.vin_number
                                            }}</router-link
                                        >
                                    </p>
                                </div>
                            </td>
                            <td aria-colindex="3" role="cell" class="">
                                <div class="text-nowrap">
                                    <p>
                                        {{ inventory.year }}
                                        {{ inventory.make }}
                                        {{ inventory.model }}
                                    </p>
                                </div>
                            </td>
                            <td aria-colindex="4" role="cell" class="">
                                <div class="text-nowrap">
                                    <p v-if="inventory.customerinfo !== null">
                                        {{ inventory.customerinfo.first_name }}
                                        {{ inventory.customerinfo.last_name }}
                                    </p>
                                </div>
                            </td>
                            <td aria-colindex="5" role="cell" class="">
                                <div class="text-nowrap">
                                    <p v-if="inventory.terminalinfo !== null">
                                        {{ inventory.terminalinfo.title }}
                                    </p>
                                </div>
                            </td>
                            <td aria-colindex="6" role="cell" class="">
                                <div class="text-nowrap">
                                    <p class="align-text-top text-capitalize">
                                        {{ inventoryduration[++key - 2] }}
                                    </p>
                                </div>
                            </td>
                            <td aria-colindex="7" role="cell" class="">
                                <div class="text-nowrap">
                                    <p class="align-text-top text-capitalize">
                                        $ {{ inventory.amount_remaining }}
                                    </p>
                                </div>
                            </td>
                            <td aria-colindex="8" role="cell" class="">
                                <span
                                    class="badge text-capitalize badge-light-primary badge-pill"
                                >
                                    {{ inventory.status }}
                                </span>
                            </td>
                            <td aria-colindex="9" role="cell" class="">
                                <div
                                    class="dropdown b-dropdown btn-group"
                                    id="__BVID__235"
                                >
                                    <button
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                        type="button"
                                        class="btn dropdown-toggle btn-link dropdown-toggle-no-caret"
                                        id="__BVID__235__BV_toggle_"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16px"
                                            height="16px"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="align-middle text-body feather feather-more-vertical"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="1"
                                            ></circle>
                                            <circle
                                                cx="12"
                                                cy="5"
                                                r="1"
                                            ></circle>
                                            <circle
                                                cx="12"
                                                cy="19"
                                                r="1"
                                            ></circle>
                                        </svg>
                                    </button>
                                    <ul
                                        role="menu"
                                        tabindex="-1"
                                        class="dropdown-menu"
                                        aria-labelledby="__BVID__235__BV_toggle_"
                                    >
                                        <li role="presentation">
                                            <a
                                                href="/apps/users/view/76"
                                                class="dropdown-item"
                                                role="menuitem"
                                                target="_self"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14px"
                                                    height="14px"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-file-text"
                                                >
                                                    <path
                                                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                                                    ></path>
                                                    <polyline
                                                        points="14 2 14 8 20 8"
                                                    ></polyline>
                                                    <line
                                                        x1="16"
                                                        y1="13"
                                                        x2="8"
                                                        y2="13"
                                                    ></line>
                                                    <line
                                                        x1="16"
                                                        y1="17"
                                                        x2="8"
                                                        y2="17"
                                                    ></line>
                                                    <polyline
                                                        points="10 9 9 9 8 9"
                                                    ></polyline>
                                                </svg>
                                                <span class="align-middle ml-50"
                                                    >Details</span
                                                >
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a
                                                href="/apps/users/edit/76"
                                                class="dropdown-item"
                                                role="menuitem"
                                                target="_self"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14px"
                                                    height="14px"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-edit"
                                                >
                                                    <path
                                                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
                                                    ></path>
                                                    <path
                                                        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"
                                                    ></path>
                                                </svg>
                                                <span class="align-middle ml-50"
                                                    >Edit</span
                                                >
                                            </a>
                                        </li>
                                        <li role="presentation">
                                            <a
                                                role="menuitem"
                                                href="#"
                                                target="_self"
                                                class="dropdown-item"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14px"
                                                    height="14px"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="feather feather-trash"
                                                >
                                                    <polyline
                                                        points="3 6 5 6 21 6"
                                                    ></polyline>
                                                    <path
                                                        d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                                                    ></path>
                                                </svg>
                                                <span class="align-middle ml-50"
                                                    >Delete</span
                                                >
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
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
                            >Showing {{ inventorylist.from }} to
                            {{ inventorylist.to }} of
                            {{ inventorylist.of }} entries</span
                        >
                    </b-col>
                    <b-col
                        cols="12"
                        sm="6"
                        class="d-flex align-items-center justify-content-center justify-content-sm-end"
                    >
                        <b-pagination
                            v-model="currentPage"
                            :total-rows="inventorylist.total"
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
    BPagination
} from "bootstrap-vue";
import vSelect from "vue-select";
import store from "@/store";
import { ref, onUnmounted } from "@vue/composition-api";
import { avatarText } from "@core/utils/filter";
import UsersListFilters from "./InventoryListFilters.vue";
import useUsersList from "./users-list/useUsersList";
import userStoreModule from "../userStoreModule";
import UserListAddNew from "./InventoryListAddNew.vue";
import axios from "axios";
import InvoiceList from "@/views/apps/invoice/invoice-list/InvoiceList.vue";

export default {
    data() {
        return {
            isHidden: true,
            inventorylist: {},
            laravelData: {},
            inventoryduration: {},
            inventorydates: {},
            totalRows: 1,
            currentPage: 1,
            perPage: 5,
            pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
            sortBy: '',
            sortDesc: false,
            sortDirection: 'asc',
            filter: null,
            filterOn: [],
            infoModal: {
            id: 'info-modal',
            title: '',
            content: ''
            }
        };
    },

    components: {
        UsersListFilters,
        UserListAddNew,
        axios,
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
        InvoiceList,
        vSelect
    },
    setup() {
        const USER_APP_STORE_MODULE_NAME = "app-user";

        // Register module
        if (!store.hasModule(USER_APP_STORE_MODULE_NAME))
            store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule);

        // UnRegister on leave
        onUnmounted(() => {
            if (store.hasModule(USER_APP_STORE_MODULE_NAME))
                store.unregisterModule(USER_APP_STORE_MODULE_NAME);
        });

        const isAddNewUserSidebarActive = ref(false);

        const roleOptions = [
            { label: "Admin", value: "admin" },
            { label: "Author", value: "author" },
            { label: "Editor", value: "editor" },
            { label: "Maintainer", value: "maintainer" },
            { label: "Subscriber", value: "subscriber" }
        ];

        const planOptions = [
            { label: "Basic", value: "basic" },
            { label: "Company", value: "company" },
            { label: "Enterprise", value: "enterprise" },
            { label: "Team", value: "team" }
        ];

        const statusOptions = [
            { label: "Pending", value: "pending" },
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" }
        ];

        const {
            fetchUsers,
            tableColumns,
            perPage,
            currentPage,
            totalUsers,
            dataMeta,
            perPageOptions,
            searchQuery,
            sortBy,
            isSortDirDesc,
            refUserListTable,
            refetchData,

            // UI
            resolveUserRoleVariant,
            resolveUserRoleIcon,
            resolveUserStatusVariant,

            // Extra Filters
            roleFilter,
            planFilter,
            statusFilter
        } = useUsersList();

        return {
            // Sidebar
            isAddNewUserSidebarActive,

            fetchUsers,
            tableColumns,
            perPage,
            currentPage,
            totalUsers,
            dataMeta,
            perPageOptions,
            searchQuery,
            sortBy,
            isSortDirDesc,
            refUserListTable,
            refetchData,

            // Filter
            avatarText,

            // UI
            resolveUserRoleVariant,
            resolveUserRoleIcon,
            resolveUserStatusVariant,

            roleOptions,
            planOptions,
            statusOptions,

            // Extra Filters
            roleFilter,
            planFilter,
            statusFilter,
            inventoryView: "/inventory/view"
        };
    },
    mounted() {
        this.getResults();
    },
    
    methods: {
        // Our method to GET results from a Laravel endpoint
    onChange(){
        console.log('onChangeee');
        console.log(this.searchQuery);
        this.getResults();
    },    
        getResults(page = 1) {
            console.log('getResults');
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/all-inspections-listing?page=" +
                        page+"&searchQuery="+this.searchQuery,
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
                    this.inventorylist = response.data.Inspection;
                    this.inventoryduration = response.data.inventoryduration;
                    this.inventorydates = response.data.inventorydates;
                });
        }
    }
};
</script>

<style lang="scss">
.main-menu.menu-dark .navigation > li ul .active {
    background: linear-gradient(118deg, #e8b231, rgb(243 156 65));
}
.main-menu.menu-dark .navigation > li ul .active {
    -webkit-box-shadow: 0 0 0px 1px rgb(241 161 62);
    box-shadow: 0 0 0px 1px rgb(241 158 63);
    border-radius: 4px;
}
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
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
