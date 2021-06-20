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
         
          @submit="formSubmit3"
        >
        <p class="text-center returnresponsemessage"></p>
      <b-row>

        <!-- Field: Username -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Current Password"
            label-for="first_name"
          >
            <b-form-input
              id="first_name"
              type="password"
              v-model="customerinfo.currentpassword"
            />
          </b-form-group>
        </b-col>
       <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="New Password"
            label-for="first_name"
          >
            <b-form-input
              id="first_name"
              type="password"
              v-model="customerinfo.password"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Full Name -->
        <b-col
          cols="12"
          md="4"
        >
          <b-form-group
            label="Repeat Password"
            label-for="last_name"
          >
            <b-form-input
              id="last_name"
              type="password"
              v-model="customerinfo.confirmpassword"
            />
          </b-form-group>
        </b-col>

        <!-- Field: Role -->

        <!-- Field: Email -->
        

      </b-row>

      <b-button variant="success" type="submit" class="mb-1 mb-sm-0 mr-0 mr-sm-1">
          <span class="text-nowrap">Save Changes</span>
    </b-button>

      <b-button
        :to="{ name: 'user-view', params: { id: id } }"
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
export default {
  components: {
    BButton,
    axios,
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
      formSubmit3(e) {
            e.preventDefault();
            let currentObj = this;
            let rowid = this.$route.params.id;
            if(this.customerinfo.password != this.customerinfo.confirmpassword){
                alert('Password and Confirm Password Do not matched');
            }else{
              axios({
                method: "post",
                url: 'http://koboautos.com/twic-terminal/connect/api/update_password?key=' + rowid+'&currentpassword='+this.customerinfo.currentpassword+'&password=' + this.customerinfo.password+'&confirmpassword=' + this.customerinfo.confirmpassword,

            })
                .then(function(response) {
                    console.log(response.data.status);
                    if (response.data.status == 'success') {
                        currentObj.$router.push({ path: "/users/list" });
                    }else{
                        alert(response.data.message);
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
            }
            
        },
    }
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
<style type="text/css">
  .successresponse{
    color: green;
    font-size: 15px;
    font-weight: bold;
  }
  .errorresponse{
    color: red;
    font-size: 15px;
    font-weight: bold;
  }
</style>