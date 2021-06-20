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
    />

    <!-- Table Container Card -->
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
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <b-button
                variant="primary"
                @click="isAddNewUserSidebarActive = true"
              >
                <span class="text-nowrap">Add Customer</span>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>

      <b-table
        id="customers-table"
        :filter="searchQuery"
        ref="refUserListTable"
        class="position-relative"
        :items="customers"
        responsive
        :fields="tableColumns"
        primary-key="id"
        :sort-by.sync="sortBy"
        show-empty
        empty-text="No matching records found"
        :sort-desc.sync="isSortDirDesc"
        :per-page="perPage"
        :current-page="currentPage"
      >
        <template #cell(name)="data">
          <b-media vertical-align="center">
            <template #aside>
              <b-avatar
                size="32"
                :src="data.item.avatar"
                :text="avatarText(data.item.fullName)"
                :variant="`light-${resolveUserRoleVariant(data.item.role)}`"
                :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
              />
            </template>
            <b-link v-if="data.item.first_name"
              :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              {{ data.item.first_name }}
            </b-link>
            <small v-if="data.item.nick" class="text-muted"
              >@{{ data.item.nick }}</small
            >
          </b-media>
        </template>

        <template #cell(email)="data">
          <div class="text-nowrap">
            <feather-icon
              icon="UserIcon"
              size="18"
              class="mr-50"
              :class="`text-${resolveUserRoleVariant(data.item.role)}`"
            />
            <span v-if="data.item.email" class="align-text-top text-capitalize">{{
              data.item.email
            }}</span>
          </div>
        </template>

        <template #cell(phone)="data">
          <b-media vertical-align="center">
            <b-link
              v-if="data.item.phone"
              :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
              class="font-weight-bold d-block text-nowrap"
            >
              {{data.item.phone}}
            </b-link>
          </b-media>
        </template>

        <template #cell(gender)="data">
          <div class="text-nowrap">
            <span v-if="data.item.gender" class="align-text-top text-capitalize">{{
              data.item.gender
            }}</span>
          </div>
        </template>

        <template #cell(company)="data">
          <div class="text-nowrap">
            <span v-if="data.item.company_name" class="align-text-top text-capitalize">{{
              data.item.company_name
            }}</span>
          </div>
        </template>

        <template #cell(country)="data">
          <b-badge
            pill
            :variant="`light-${resolveUserStatusVariant(data.item.status)}`"
            class="text-capitalize"
            v-if="data.item.country"
          >
            {{data.item.country.country_name}}
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
            <b-dropdown-item
              :to="{ name: 'user-view', params: { id: data.item.key } }"
            >
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <b-dropdown-item
              :to="{ name: 'user-edit', params: { id: data.item.key } }"
            >
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
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-start
            "
          >
            <span class="text-muted"
              >Showing {{ dataMeta.from }} to {{ perPage }} of
              {{ customers.length }} entries</span
            >
          </b-col>

          <b-col
            cols="12"
            sm="6"
            class="
              d-flex
              align-items-center
              justify-content-center justify-content-sm-end
            "
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="customers.length"
              :per-page="perPage"
              aria-controls="customers-table"
              first-number
              last-number
              class="mb-0 mt-1 mt-sm-0"
              prev-class="prev-item"
              next-class="next-item"
            >
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
import BCardCode from "@core/components/b-card-code";
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
} from "bootstrap-vue";

import vSelect from "vue-select";
import store from "@/store";
import { ref, onUnmounted, onMounted } from "@vue/composition-api";
import { avatarText } from "@core/utils/filter";
import UsersListFilters from "./UsersListFilters.vue";
import useUsersList from "./useUsersList";
import userStoreModule from "../userStoreModule";
import UserListAddNew from "./CustomerListAddNew.vue";
import axios from "axios";
export default {
  components: {
    UsersListFilters,
    UserListAddNew,

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

    vSelect,
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

    //Customer to fill the database
    const customers = ref([]);

    //get customers data
    function fetchData() {
      axios.post(
        "http://koboautos.com/twic-terminal/connect/api/all-customers-listing?page=1",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4YmJiOGJkZmJiNmQ5YTgzNmVmMDkwZGRkZDY5MDFmOWEzZDFiNTE3MWUzODA5ODE0ZmJlMWE1MWY3ZjExZjBiMWIwNzExNjQ2NWRkYWZmIn0.eyJhdWQiOiIxOTM4NDcxMiIsImp0aSI6IjY4YmJiOGJkZmJiNmQ5YTgzNmVmMDkwZGRkZDY5MDFmOWEzZDFiNTE3MWUzODA5ODE0ZmJlMWE1MWY3ZjExZjBiMWIwNzExNjQ2NWRkYWZmIiwiaWF0IjoxNjA2MzA3ODc5LCJuYmYiOjE2MDYzMDc4NzksImV4cCI6MTYzNzg0Mzg3OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.OSYl-wXlW42CIeFq-agf10WPbHo57EBRD1NDFTodnALlqVBWmEW2yMy3CA2YYYiKz27Ot6XP61ROcl153SQcnXDyrchUQDdxQm6WXdWSLyhUMEFEPY6hBBRVrhB6LoA46m3sHA5FNq9E02TzWAwvj7NQVpPgRF6dvaH6go1z-Opfp-L6q0czpTuUXGtgDbJmnU8yG1NCc8gJYqtZxjiqBDjHq8GiLpr5254hgoVJTdY_9kLjmy_VDE_GlBxdZJVyPB3hCCEuSCjnFaJiDwO3pAEFLqY2KecimVtc78TChFzJycwMo0bUQRsgpmSjzxSYE2z-J_dJJEtx4u8pR2Zg3PhDxmYRvMip0b688mGbay_BobAcyrXumQmJsFfqekDewLuBfYtmB0TCZmmf5H6G0tyaXGcmfKMMFY8Qdv2qLy-y-1Vu06npoK94pElsOexkESxiiu8__bpkNrWMt8VLHYMmygJ_Y8o0JrmB4eyfnceaO-lvtFnFMZtVQP_XgWApzWTzYAy27cU56oR9vz1UfmM0HfGCbXPQDTmkmmL1RNO-MyKEMoIJSJLWdjXB9f6yyDpEurgG0lt0xDgrvr43RCappToLGYtFHiAYMTT-xqy2ucZPnUXKf8X4WDYH_8yuMS9_JZKc2mLViaoZje4nhTQe3RquhloJB6VQon4WNNo",
            },
          }
        )
        .then((response) => {
          customers.value = response.data.customers.data;
          response.data.data.forEach((u) => {
            let user = customers.value.find(o => o.email === u.email)
            if(user){
              user.key = u.key
              user.nick = u.nick
            }
          })
        });
    }

    onMounted(() => {
      fetchData();
    });

    const isAddNewUserSidebarActive = ref(false);

    const roleOptions = [
      { label: "Admin", value: "admin" },
      { label: "Author", value: "author" },
      { label: "Editor", value: "editor" },
      { label: "Maintainer", value: "maintainer" },
      { label: "Subscriber", value: "subscriber" },
    ];

    const planOptions = [
      { label: "Basic", value: "basic" },
      { label: "Company", value: "company" },
      { label: "Enterprise", value: "enterprise" },
      { label: "Team", value: "team" },
    ];

    const statusOptions = [
      { label: "Pending", value: "pending" },
      { label: "Active", value: "active" },
      { label: "Inactive", value: "inactive" },
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
      statusFilter,
    } = useUsersList();

    return {
      //customers to fill db
      customers,

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
    };
  },
  methods: {
    deletecustomer(rowid) {
      if (confirm("Do you really want to delete?")) {
        axios({
          method: "post",
          url:
            "http://koboautos.com/twic-terminal/connect/api/delete_customer?&key=" +
            rowid,
        })
          .then(function (response) {
            console.log(response);
            if (response.status == 200) {
              location.reload();
            }
          })
          .catch(function (response) {
            if (response.status == 422) {
              this.errors = response.data.errors;
              return;
            }

            if (response.status == 500) {
              flash({ error: "Server Error" });
            }
          });
      }
    },
  },
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
</style>

<style>
.dropdown-menu .dropdown-item:focus {
  background: #e8b231;
}
.dropdown-menu .dropdown-item {
  padding: 0 !important;
}
.dropdown-menu .dropdown-item:hover {
  color: #7367f0;
}
.dropdown-menu .dropdown-item a {
  color: #6e6a7a;
}
.dropdown-menu .dropdown-item a:hover {
  color: #7367f0;
}
.dropdown-menu .dropdown-item p {
  padding-right: 50px;
  line-height: 40px;
}
.pac-container.pac-logo {
  left: 84.5% !important;
  z-index: 9999 !important;
}

@media only screen and (min-width: 1300px) {
  .pac-container.pac-logo {
    left: 85% !important;
    z-index: 9999 !important;
  }
}
@media only screen and (min-width: 1400px) {
  .pac-container.pac-logo {
    left: 86.5% !important;
    z-index: 9999 !important;
  }
}
@media only screen and (min-width: 1500px) {
  .pac-container.pac-logo {
    left: 87.5% !important;
    z-index: 9999 !important;
  }
}
@media only screen and (min-width: 1600px) {
  .pac-container.pac-logo {
    left: 88% !important;
    z-index: 9999 !important;
  }
}
@media only screen and (min-width: 1700px) {
  .pac-container.pac-logo {
    left: 88.5% !important;
    z-index: 9999 !important;
  }
}
@media only screen and (min-width: 1800px) {
  .pac-container.pac-logo {
    left: 89.5% !important;
    z-index: 9999 !important;
  }
}
@media only screen and (min-width: 1900px) {
  .pac-container.pac-logo {
    left: 90% !important;
    z-index: 9999 !important;
  }
}
@media only screen and (min-width: 2000px) {
  .pac-container.pac-logo {
    left: 90.5% !important;
    z-index: 9999 !important;
  }
}
@media only screen and (min-width: 2100px) {
  .pac-container.pac-logo {
    left: 91% !important;
    z-index: 9999 !important;
  }
}
@media only screen and (min-width: 2200px) {
  .pac-container.pac-logo {
    left: 91.5% !important;
    z-index: 9999 !important;
  }
}
@media only screen and (min-width: 2300px) {
  .pac-container.pac-logo {
    left: 92% !important;
    z-index: 9999 !important;
  }
}
</style>
<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
