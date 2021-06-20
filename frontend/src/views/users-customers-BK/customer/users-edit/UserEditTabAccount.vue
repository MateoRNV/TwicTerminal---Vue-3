<template>
  <div>

    <!-- Media -->
<!--     <b-media class="mb-2">
      <template #aside>
        <b-avatar
          ref="previewEl"
          :src="userData.avatar"
          :text="avatarText(userData.fullName)"
          :variant="`light-${resolveUserRoleVariant(userData.role)}`"
          size="90px"
          rounded
        />
      </template>
      <h4 class="mb-1">
        {{ userData.fullName }}
      </h4>
      <div class="d-flex flex-wrap">
        <b-button
          variant="primary"
          @click="$refs.refInputEl.click()"
        >
          <input
            ref="refInputEl"
            type="file"
            class="d-none"
            @input="inputImageRenderer"
          >
          <span class="d-none d-sm-inline">Update</span>
          <feather-icon
            icon="EditIcon"
            class="d-inline d-sm-none"
          />
        </b-button>
        <b-button
          variant="outline-secondary"
          class="ml-1"
        >
          <span class="d-none d-sm-inline">Remove</span>
          <feather-icon
            icon="TrashIcon"
            class="d-inline d-sm-none"
          />
        </b-button>
      </div>
    </b-media> -->

    <!-- User Info: Input Fields -->

      <b-form
          class="p-2"
         
          @submit="formSubmit"
        >
      <b-row>

        <!-- Field: Username -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="First Name"
            label-for="first_name"
          >
            <b-form-input
              id="first_name"
              v-model="customerinfo.first_name"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Last Name"
            label-for="last_name"
          >
            <b-form-input
              id="last_name"
              v-model="customerinfo.last_name"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Email -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Email"
            label-for="email"
          >
            <b-form-input
              id="email"
              v-model="customerinfo.email"
              type="email"
            />
          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Phone"
            label-for="phone"
          >
          <vue-country-code
                        @onSelect="onSelect"
                        :preferredCountries="['vn', 'us', 'gb']">
                  </vue-country-code>
            <b-form-input
              id="phone"
              v-model="customerinfo.phone"
              style="float: right;width: 80%"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Status -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Gender"
            label-for="user-status"
          >
            <v-select
                  v-model="customerinfo.gender"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="gender"
                />
          </b-form-group>
        </b-col>
        <b-col
          cols="12"
          md="4"
        >
           <b-form-group
              label="Account Type"
              label-for="customer"
            >
            <v-select
                  v-model="userData.type"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="accounttype"
                />
             
            </b-form-group>
        </b-col>
        <b-col
          cols="12"
          md="4"
        >
           <b-form-group
              label="Company Name"
              label-for="customer"
            >
           <b-form-input
                id="contact"
                v-model="companyname"
                trim
              />
             
            </b-form-group>
        </b-col>

        <!-- Field: Role -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Customer Type"
            label-for="user-role"
          >
            <v-select
                  v-model="customerinfo.customer_type"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="customergroups"
                />
      

          </b-form-group>
        </b-col>
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Country"
            label-for="user-role"
          >
            <v-select
                  v-model="customerinfo.country"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="countrylist"
                />
      

          </b-form-group>
        </b-col>

        <b-col
          cols="12"
          md="12"
        >
          <b-form-group
            label="Address"
            label-for="Address"
          >
            <b-form-input
              id="Address"
              v-model="customerinfo.address"
            />
          </b-form-group>
        </b-col>
        <!-- Field: Email -->
        

      </b-row>

      <b-button variant="success" type="submit" class="mb-1 mb-sm-0 mr-0 mr-sm-1">
          <span class="text-nowrap">Save Changes</span>
    </b-button>

      <b-button
        :to="{ name: 'customer-view', params: { id: id } }"
        variant="primary"
      >
        Back
      </b-button>
    </b-form>

    <!-- PERMISSION TABLE -->
<!--     <b-card
      no-body
      class="border mt-1"
    >
      <b-card-header class="p-1">
        <b-card-title class="font-medium-2">
          <feather-icon
            icon="LockIcon"
            size="18"
          />
          <span class="align-middle ml-50">Permission</span>
        </b-card-title>
      </b-card-header>
      <b-table
        striped
        responsive
        class="mb-0"
        :items="permissionsData"
      >
        <template #cell(module)="data">
          {{ data.value }}
        </template>
        <template #cell()="data">
          <b-form-checkbox :checked="data.value" />
        </template>
      </b-table>
    </b-card> -->

    <!-- Action Buttons -->

    
      
  </div>
</template>

<script>
import {
  BButton, BMedia, BAvatar, BRow, BCol, BFormGroup, BFormInput, BForm, BTable, BCard, BCardHeader, BCardTitle, BFormCheckbox,
} from 'bootstrap-vue'
import { avatarText } from '@core/utils/filter'
import vSelect from 'vue-select'
import { useInputImageRenderer } from '@core/comp-functions/forms/form-utils'
import { ref } from '@vue/composition-api'
import useUsersList from '../users-list/useUsersList'
import axios from "axios";
import VueCountryCode from "vue-country-code-select";
export default {
  components: {
    BButton,
    axios,
    VueCountryCode,
    BMedia,
    BAvatar,
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BTable,
    BCard,
    BCardHeader,
    BCardTitle,
    BFormCheckbox,
    vSelect,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { resolveUserRoleVariant } = useUsersList()

    const roleOptions = [
      { label: 'Admin', value: 'admin' },
      { label: 'Author', value: 'author' },
      { label: 'Editor', value: 'editor' },
      { label: 'Maintainer', value: 'maintainer' },
      { label: 'Subscriber', value: 'subscriber' },
    ]

    const statusOptions = [
      { label: 'Pending', value: 'pending' },
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
    ]

    const permissionsData = [
      {
        module: 'Admin',
        read: true,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'Staff',
        read: false,
        write: true,
        create: false,
        delete: false,
      },
      {
        module: 'Author',
        read: true,
        write: false,
        create: true,
        delete: false,
      },
      {
        module: 'Contributor',
        read: false,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'User',
        read: false,
        write: false,
        create: false,
        delete: true,
      },
    ]

    // ? Demo Purpose => Update image on click of update
    const refInputEl = ref(null)
    const previewEl = ref(null)

    const { inputImageRenderer } = useInputImageRenderer(refInputEl, base64 => {
      // eslint-disable-next-line no-param-reassign
      props.userData.avatar = base64
    })

    return {
      resolveUserRoleVariant,
      avatarText,
      roleOptions,
      statusOptions,
      permissionsData,

      //  ? Demo - Update Image on click of update button
      refInputEl,
      previewEl,
      inputImageRenderer,
    }
  },

    mounted() {
        this.viewcustomer(this.$route.params.id);
        this.allcustomersgroups();
        this.allcountries();
    },
    data() {
          return {
              id: this.$route.params.id,
              customerinfo: {
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                  gender: "",
                  address: "",
                  customer_type: "",
              },
              customergroupdropdownlist:null,
              customergroups:[],
              gender: [{ title: 'Male'}, { title: 'Female' }],
              accounttype: [{ title: 'Individual'}, { title: 'Company' }],
              countrylist:[]
          };
      },
     methods: {
      onSelect({name, iso2, dialCode}) {
       localStorage["dialCode"]='+'+dialCode;
       console.log(localStorage["dialCode"]);
     },
        viewcustomer: function(rowid) {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/view_customer?key=" +rowid
                )
                .then(response => {
                    this.customerinfo = response.data.userinfo;
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },

         viewcustomer: function(rowid) {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/view_customer?key=" +rowid
                )
                .then(response => {
                    this.customerinfo = response.data.userinfo;
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                });
        },
    allcustomersgroups(e) { 
      axios.post('http://koboautos.com/twic-terminal/connect/api/create_group')
        .then(response => {
          console.log(response);
           this.customergroups = response.data.customergroups;
           //this.customerinfo.customer_type = response.data.customergroups.customer_type;
        });
    },
    allcountries(e) { 
      axios.post('http://koboautos.com/twic-terminal/connect/api/all-countries')
        .then(response => {
         // console.log(response);
           this.countrylist = response.data.countries;
        });
    },
      formSubmit(e) {
            e.preventDefault();
            let currentObj = this;
            let rowid = this.$route.params.id;
            axios({
                method: "post",
                url: 'http://koboautos.com/twic-terminal/connect/api/update_customer?key=' + rowid+'&first_name='+this.customerinfo.first_name+'&last_name=' + this.customerinfo.last_name+'&email=' + this.customerinfo.email+'&phone='+ this.customerinfo.phone+'&gender='+this.customerinfo.gender+'&customer_type='+this.customerinfo.customer_type.id+'&address='+this.customerinfo.address+'&account_type='+this.userData.type+'&country_id='+this.customerinfo.country.key+'&company_name='+this.companyname,

            })
                .then(function(response) {
                    console.log(response);
                    if (response.status == 200) {
                        currentObj.$router.push({ path: "/customers/list" });
                    }
                })
                .catch(function(response) {
                    if (response.status == 422) {
                        this.errors = response.data.data.errors;
                        return;
                    }

                    if (response.status == 500) {
                        flash({ error: "Server Error" });
                    }
                });
        },
    }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
<style type="text/css">
  .vue-country-select{
  float: left;
  margin-top: 2px;
  height: 35px;
  border-radius: 0.357rem;
}
</style>
