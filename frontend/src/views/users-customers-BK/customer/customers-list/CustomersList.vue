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
<div class="position-relative table-responsive">
     <table role="table" aria-busy="false" aria-colcount="6" class="table b-table" id="__BVID__229">
   <!----><!---->
   <thead role="rowgroup" class="">
      <!---->
      <tr role="row" class="">
         <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="none" class="">
            <div>Name</div>
         </th>
         
         <th role="columnheader" scope="col" tabindex="0" aria-colindex="3" aria-sort="none" class="">
            <div>Email</div>
         </th>
         <th role="columnheader" scope="col" tabindex="0" aria-colindex="4" aria-sort="none" class="">
            <div>Phone</div>
         </th>
        <th role="columnheader" scope="col" tabindex="0" aria-colindex="4" aria-sort="none" class="">
            <div>Gender</div>
         </th>
       <th role="columnheader" scope="col" tabindex="0" aria-colindex="2" aria-sort="none" class="">
            <div>Company</div>
         </th>
         <th role="columnheader" scope="col" tabindex="0" aria-colindex="2" aria-sort="none" class="">
            <div>Country</div>
         </th>
         <th role="columnheader" scope="col" aria-colindex="6" class="">
            <div>Actions</div>
         </th>
      </tr>
   </thead>
   <tbody role="rowgroup">
      <!---->
      <tr role="row" id="__BVID__229__row_50" data-pk="50" class=""  v-for="customer, key in customersinfo">
         <td aria-colindex="1" role="cell" class="">

          <div class="media">
   <div class="media-aside align-self-center">
    <router-link  :to="'/customer/view/' + customer.key" class="b-avatar badge-light-primary rounded-circle" style="width: 32px; height: 32px;">
         <span class="b-avatar-text" style="'font-size: calc(12.8px);color: '+customer.txtcolor +';background:'+ customer.bgcolor+'">
          <span>{{ customer.nick }}</span>
        </span>
    </router-link>
   </div>
   <div class="media-body"> 
       <router-link  :to="'/customer/view/' + customer.key" class="font-weight-bold d-block text-nowrap" >
      {{ customer.first_name }} {{ customer.last_name }}
     </router-link>
     <small class="text-muted">{{ customer.customer_group }}</small>
   </div>
</div>

         </td>
         
         <td aria-colindex="3" role="cell" class="">
          <p v-if="customer.account_type !== company">
            <feather-icon
              icon="UserIcon"
              size="16"
              class="mr-50"
              style="float: left;"
            />
        
            <span class="align-text-top text-capitalize">{{ customer.email }}</span>
          </p>
         <!--  <p v-if="customer.account_type !== individual">
          
            <feather-icon
                icon="DatabaseIcon"
                size="16"
                class="mx-1"
                style="float: left;"
            />
            <span class="align-text-top text-capitalize">{{ customer.email }}</span>
          </p> -->
            
          </td>
         <td aria-colindex="4" role="cell" class="">
            {{ customer.phone }}
         </td>
          <td aria-colindex="4" role="cell" class="">
            {{ customer.gender }}
         </td>
         <td aria-colindex="2" role="cell" class="">
            <div class="text-nowrap">
               <span class="align-text-top text-capitalize">{{ customer.company_name }}</span>
            </div>
         </td>
         <td aria-colindex="2" role="cell" class="">
          <span class="badge text-capitalize badge-light-primary badge-pill">
          {{ customer.countryname }}
        </span>
      
         </td>

                           <td>
                           
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
                                          
                                            <b-dropdown-item>
                                                <router-link
                                                    :to="
                                                        '/customer/edit/' +
                                                            customer.key
                                                    "
                                                >
                                                    <feather-icon
                                                        icon="EditIcon"
                                                    />
                                                    <span
                                                        class="align-middle ml-50"
                                                        >Edit</span
                                                    >
                                                </router-link>
                                            </b-dropdown-item>
                                            <b-dropdown-item>
                                                <router-link
                                                    :to="
                                                        '/customer/view/' +
                                                            customer.key
                                                    "
                                                >
                                                    <feather-icon
                                                        icon="FileTextIcon"
                                                    />
                                                    <span
                                                        class="align-middle ml-50"
                                                        >View</span
                                                    >
                                                </router-link>
                                            </b-dropdown-item>
                                            <b-dropdown-item href="#" v-on:click="deletecustomer(customer.key)">
                                                <feather-icon
                                                    icon="TrashIcon"/>
                                                <span class="align-middle ml-50"
                                                    >Delete</span
                                                >
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </b-card-header>
                                </template>
                            </td>
      </tr>


      <!----><!---->
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
            <span class="text-muted">Showing {{ customers.from }} to {{ customers.to }} of {{ customers.of }} entries</span>
          </b-col>
          <!-- Pagination -->
          <b-col
            cols="12"
            sm="6"
            class="d-flex align-items-center justify-content-center justify-content-sm-end"
          >

          <b-pagination
            v-model="currentPage"
            :total-rows="customers.total"
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
  BCard, BRow, BCol, BFormInput, BButton, BTable, BMedia, BAvatar, BLink,
  BBadge, BDropdown, BDropdownItem, BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import store from '@/store'
import { ref, onUnmounted } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import UsersListFilters from './UsersListFilters.vue'
import useUsersList from './useUsersList'
import userStoreModule from '../userStoreModule'
import UserListAddNew from './CustomerListAddNew.vue'
import axios from 'axios'
export default {
  data () {
        return {
            customers: {},
        }
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
  mounted () {
    this.getResults();
    

  },
  methods: {
    // Our method to GET results from a Laravel endpoint 
    getResults(page = 1) {
      axios.post('http://koboautos.com/twic-terminal/connect/api/all-customers-listing?page=' + page,  {
          headers: {
          'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4YmJiOGJkZmJiNmQ5YTgzNmVmMDkwZGRkZDY5MDFmOWEzZDFiNTE3MWUzODA5ODE0ZmJlMWE1MWY3ZjExZjBiMWIwNzExNjQ2NWRkYWZmIn0.eyJhdWQiOiIxOTM4NDcxMiIsImp0aSI6IjY4YmJiOGJkZmJiNmQ5YTgzNmVmMDkwZGRkZDY5MDFmOWEzZDFiNTE3MWUzODA5ODE0ZmJlMWE1MWY3ZjExZjBiMWIwNzExNjQ2NWRkYWZmIiwiaWF0IjoxNjA2MzA3ODc5LCJuYmYiOjE2MDYzMDc4NzksImV4cCI6MTYzNzg0Mzg3OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.OSYl-wXlW42CIeFq-agf10WPbHo57EBRD1NDFTodnALlqVBWmEW2yMy3CA2YYYiKz27Ot6XP61ROcl153SQcnXDyrchUQDdxQm6WXdWSLyhUMEFEPY6hBBRVrhB6LoA46m3sHA5FNq9E02TzWAwvj7NQVpPgRF6dvaH6go1z-Opfp-L6q0czpTuUXGtgDbJmnU8yG1NCc8gJYqtZxjiqBDjHq8GiLpr5254hgoVJTdY_9kLjmy_VDE_GlBxdZJVyPB3hCCEuSCjnFaJiDwO3pAEFLqY2KecimVtc78TChFzJycwMo0bUQRsgpmSjzxSYE2z-J_dJJEtx4u8pR2Zg3PhDxmYRvMip0b688mGbay_BobAcyrXumQmJsFfqekDewLuBfYtmB0TCZmmf5H6G0tyaXGcmfKMMFY8Qdv2qLy-y-1Vu06npoK94pElsOexkESxiiu8__bpkNrWMt8VLHYMmygJ_Y8o0JrmB4eyfnceaO-lvtFnFMZtVQP_XgWApzWTzYAy27cU56oR9vz1UfmM0HfGCbXPQDTmkmmL1RNO-MyKEMoIJSJLWdjXB9f6yyDpEurgG0lt0xDgrvr43RCappToLGYtFHiAYMTT-xqy2ucZPnUXKf8X4WDYH_8yuMS9_JZKc2mLViaoZje4nhTQe3RquhloJB6VQon4WNNo'}
        })
        .then(response => {
          // this.laravelData = response.data.Inspection;
          this.customersinfo = response.data.data;
          this.customers = response.data.customers;
          //this.inventoryduration = response.data.inventoryduration;
          //this.inventorydates = response.data.inventorydates;
        });
    },
    deletecustomer(rowid) {
      if(confirm("Do you really want to delete?")){
      axios({
                    method: 'post',
                    url: 'http://koboautos.com/twic-terminal/connect/api/delete_customer?&key=' + rowid,
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
                      flash({'error' :'Server Error'});
                    }

                });
              }
      
    },

  }
}
</script>

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
</style>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
