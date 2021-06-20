<template>

  <div>

    <user-list-add-new
        :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
        :role-options="roleOptions"
        :plan-options="planOptions"
        @refetch-data="refetchData"
    />

  



    


    <!-- Table Container Card -->
    <b-card
      no-body
      class="mb-0"
    >

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
          <b-col
            cols="12"
            md="6"
          >
            <div class="d-flex align-items-center justify-content-end">
              <b-form-input
                v-model="searchQuery"
                class="d-inline-block mr-1"
                placeholder="Search..."
              />
              <router-link
                  class="btn btn-primary w-100"
                  :to="'/create-status-list'"
                  >Create Status List</router-link
              >
            </div>
          </b-col>
        </b-row>

      </div>

      <b-table
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

        <template #cell(sr)="data">
              <div class="text-nowrap">
              1
              </div>
        </template>

        <template #cell(status)="data">
              <div class="text-nowrap">Healer</div>
        </template>

        <template #cell(group)="data">
          <div class="text-nowrap">Email Type</div>
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
            <!-- <b-dropdown-item :to="{ name: 'apps-users-view', params: { id: data.item.id } }">
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item> -->

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
          <!-- Pagination -->
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
      </div>
    </b-card>
  </div>
</template>

<script>
import {
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import UsersListFilters from './UsersListFilters.vue'
import useUsersList from './useUsersList'
import userStoreModule from './userStoreModule'
import UserListAddNew from './UserListAddNew.vue'

export default {
    data() {
        return {
            isHidden: true,
            // inventorylist: {},
            // laravelData: {},
            // inventoryduration: {},
            // inventorydates: {}
        };
    },
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
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    const isAddNewUserSidebarActive = ref(false)

    const roleOptions = [
      { label: 'Admin', value: 'admin' },
      { label: 'Author', value: 'author' },
      { label: 'Editor', value: 'editor' },
      { label: 'Maintainer', value: 'maintainer' },
      { label: 'Subscriber', value: 'subscriber' },
    ]

    const planOptions = [
      { label: 'Basic', value: 'basic' },
      { label: 'Company', value: 'company' },
      { label: 'Enterprise', value: 'enterprise' },
      { label: 'Team', value: 'team' },
    ]

    const statusOptions = [
      { label: 'Pending', value: 'pending' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ]

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
    } = useUsersList()

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
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
.per-page-selector {
  width: 90px;
}

.main-menu .navbar-header .navbar-brand .brand-logo img {
  max-width: 115px !important;
}
.main-menu .navbar-header .navbar-brand{
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
.nav-pills .nav-link.active, [dir] .nav-pills .show > .nav-link {
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
    background: linear-gradient(
118deg
, #e8b231, rgb(243 156 65));
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
.page-item.next-item .page-link:active, .page-item.next-item .page-link:hover {
    background-color: #ff9f43 !important;
}

.dropdown-menu .dropdown-item:focus{
    background: #e8b231;
}
.dropdown-menu .dropdown-item{
    padding: 0 !important;
}
.dropdown-menu .dropdown-item:hover{
    color: #7367f0;
}
.dropdown-menu .dropdown-item a{
    color: #6e6a7a;
}
.dropdown-menu .dropdown-item a:hover{
    color: #7367f0;
}
.dropdown-menu .dropdown-item p{
    padding-right: 50px;
    line-height: 40px;
}
.pac-container.pac-logo{
    left: 84.5% !important;
    z-index: 9999 !important;
}
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>


<style lang="scss">
.dropdown-menu .dropdown-item svg.feather{
  display: inline-block !important;
  margin: 12px 0px 12px 12px !important;
}
.main-menu.menu-dark .navigation > li.active > a {
    background: linear-gradient(118deg, #e8b231, #f39c41) !important;
}
.main-menu.menu-dark .navigation > li ul li.active {
        -webkit-box-shadow: 0 0 0 0 rgb(115 103 240 / 70%) !important;
    box-shadow: 0 0 0 0 rgb(115 103 240 / 70%) !important;
    border-radius: 4px;
}
.main-menu.menu-dark .navigation > li.active > a {
    background: linear-gradient(118deg, #e8b231, #f39c41) !important;
}
.main-menu.menu-dark .navigation > li ul .active {
    background: linear-gradient(118deg, #e8b231, #f39c41);
}
</style>