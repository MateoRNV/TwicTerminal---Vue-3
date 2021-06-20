<template>
  <b-sidebar
    id="add-new-customer-sidebar"
    :visible="isAddNewUserSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right 
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-customer-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Add New Customer
        </h5>

        <feather-icon
          class="ml-1 cursor-pointer"
          icon="XIcon"
          size="16"
          @click="hide"
        />

      </div>

      <!-- BODY -->
      <validation-observer
        #default="{ handleSubmit }"
        ref="refFormObserver"
      >
        <!-- Form -->
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
          @submit="formSubmit"
        >
<b-row>
        <b-col
          cols="12"
          md="6"
          class="mb-md-0 mb-2"
        >
          <!-- First Name -->
          <validation-provider
            #default="validationContext"
            name="First Name"
            rules="required"
          >
            <b-form-group
              label="First Name"
              label-for="first-name"
            >
              <b-form-input
                id="full-name"
                v-model="userData.first_name"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder=""
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
</b-col>
<b-col
          cols="12"
          md="6"
          class="mb-md-0 mb-2"
        >
          <!-- Last Name -->
          
          <validation-provider
            #default="validationContext"
            name="Last Name"
            rules="required"
          >
            <b-form-group
              label="Last Name"
              label-for="last-name"
            >
              <b-form-input
                id="full-name"
                v-model="userData.last_name"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder=""
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
</b-col>
<b-col
          cols="12"
          md="6"
          class="mb-md-0 mb-2"
        >

          <!-- Email -->
          <validation-provider
            #default="validationContext"
            name="Email"
            rules="required|email"
          >
            <b-form-group
              label="Email"
              label-for="email"
            >
              <b-form-input
                id="email"
                v-model="userData.email"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
</b-col>

      <b-col cols="12"
                md="6"
                class="mb-md-0 mb-2"
              >
                <!-- Phone -->
                <validation-provider
                  #default="validationContext"
                  name="Phone"
                  rules="required"
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
                      id="contact"
                      v-model="userData.contact"
                      style="float: right;width: 80%"
                      :state="getValidationState(validationContext)"
                      trim
                    />

                    <b-form-invalid-feedback>
                      {{ validationContext.errors[0] }}
                    </b-form-invalid-feedback>
                  </b-form-group>
                </validation-provider>

      </b-col>
<b-col
          cols="12"
          md="6"
          class="mb-md-0 mb-2"
        >
          <!-- Gender -->
          <validation-provider
            #default="validationContext"
            name="Gender"
            rules="required"
          >
            <b-form-group
              label="Gender"
              label-for="gender"
              :state="getValidationState(validationContext)"
            >
              <v-select
                  v-model="userData.gender"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="gender"
                />

              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
</b-col>
<b-col
          cols="12"
          md="6"
          class="mb-md-0 mb-2"
        >
          <!-- Customer Type -->
          <validation-provider
            #default="validationContext"
            name="Customer"
            rules="required"
          >
            <b-form-group
              label="Account Type"
              label-for="customer"
              :state="getValidationState(validationContext)"
            >
            <v-select
                  v-model="userData.type"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="accounttype"
                />
             
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback> 
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col
          cols="12"
          md="6"
          class="mb-md-0 mb-2"
          v-if="showcompanyname"
        >
          <validation-provider
            #default="validationContext"
            name="Customer"
            
          >
          <b-form-group
              label="Company Name"
              label-for="customer"
              :state="getValidationState(validationContext)"
            >
           <b-form-input
                id="contact"
                v-model="companyname"
                :state="getValidationState(validationContext)"
                trim
              />
             
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col
          cols="12"
          md="6"
          class="mb-md-0 mb-2"
        >
          <validation-provider
            #default="validationContext"
            name="Customer"
            rules="required"
          >
            <b-form-group
              label="Customer Type"
              label-for="customer"
              :state="getValidationState(validationContext)"
            >
            <v-select
                  v-model="userData.role"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="customergroups"
                />
             
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback> 
            </b-form-group>
          </validation-provider>
        </b-col>
        <b-col
          cols="12"
          md="6"
          class="mb-md-0 mb-2"
        >
          <validation-provider
            #default="validationContext"
            name="Customer"
            rules="required"
          >
            <b-form-group
              label="Country"
              label-for="customer"
              :state="getValidationState(validationContext)"
            >
            <v-select
                  v-model="userData.country"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="countrylist"
                />
             
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback> 
            </b-form-group>
          </validation-provider>

  </b-col>
  <b-col
          cols="12"
          md="6"
          class="mb-md-0 mb-2"
        >

          <!-- Address -->
          <validation-provider
            #default="validationContext"
            name="Address"
          >
            <b-form-group
              label="Address"
              label-for="address"
            >
              <b-form-input
                id="contact"
                v-model="userData.address"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
</b-col>
</b-row>


          <!-- User Role -->
          <!-- <validation-provider
            #default="validationContext"
            name="User Role"
            rules="required"
          >
            <b-form-group
              label="User Role"
              label-for="user-role"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.role"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="roleOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="user-role"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider> -->

          <!-- Plan -->
          <!-- <validation-provider
            #default="validationContext"
            name="Plan"
            rules="required"
          >
            <b-form-group
              label="Plan"
              label-for="plan"
              :state="getValidationState(validationContext)"
            >
              <v-select
                v-model="userData.currentPlan"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="planOptions"
                :reduce="val => val.value"
                :clearable="false"
                input-id="plan"
              />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider> -->

          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
            >
              Add
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              @click="hide"
            >
              Cancel
            </b-button>
          </div>

        </b-form>
      </validation-observer>
    </template>
  </b-sidebar>
</template>

<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,BRow, BCol,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { ref } from '@vue/composition-api'
import { required, alphaNum, email } from '@validations'
import formValidation from '@core/comp-functions/forms/form-validation'
import Ripple from 'vue-ripple-directive'
import vSelect from 'vue-select'
import countries from '@/@fake-db/data/other/countries'
import store from '@/store'
import axios from 'axios'
import router from '@/router/routes/apps'
import VueCountryCode from "vue-country-code-select";
export default {
  components: {
    BSidebar,
    BForm,
    BRow,
    BCol,
    axios,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    vSelect,
    VueCountryCode,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    Ripple,
  },
  model: {
    prop: 'isAddNewUserSidebarActive',
    event: 'update:is-add-new-customer-sidebar-active',
  },
  props: {
    isAddNewUserSidebarActive: {
      type: Boolean,
      required: true,
    },
    roleOptions: {
      type: Array,
      required: true,
    },
    planOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showcompanyname: false,
      required,
      alphaNum,
      email,
      countries,
      gender: [{ title: 'Male'}, { title: 'Female' }],
      accounttype: [{ title: 'Individual'}, { title: 'Company' }],
      customergroups:[],
      countrylist:[]
    }
  },
  setup(props, { emit }) {
    const blankUserData = {
      firstNam: '',
      lastName: '',
      username: '',
      email: '',
      role: null,
      currentPlan: null,
      company: '',
      country: '',
      contact: '',
    }

    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
    }

    const onSubmit = () => {
      store.dispatch('app-user/addUser', userData.value)
        .then(() => {
          emit('refetch-data')
          emit('update:is-add-new-customer-sidebar-active', false)
        })
    }

    const {
      refFormObserver,
      getValidationState,
      resetForm,
    } = formValidation(resetuserData)

    return {
      userData,
      onSubmit,

      refFormObserver,
      getValidationState,
      resetForm,
    }
  },
    mounted () {
    this.allcustomersgroups();
    this.allcountries();
  },
  methods: {
    onSelect({name, iso2, dialCode}) {
       localStorage["dialCode"]='+'+dialCode;
       console.log(localStorage["dialCode"]);
     },
        formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
                var phonumber = localStorage["dialCode"]+this.userData.contact;

                  axios({
                    method: 'post',
                    url: 'http://koboautos.com/twic-terminal/connect/api/create_customer?first_name=' + this.userData.first_name+'&last_name=' + this.userData.last_name+'&email=' + this.userData.email+'&phone='+ this.userData.contact+'&gender='+this.userData.gender.title+'&customer_type='+this.userData.role.id+'&address='+this.userData.address+'&account_type='+this.userData.type.title+'&country_id='+this.userData.country.key+'&company_name='+this.companyname,
                })
                .then(function (response) { 
                  console.log(response);
                  if (response.status == 200) { 
                     //currentObj.$router.push({ path : '/inventory/view/'+response.data.key  });
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
                
            },
    allcustomersgroups(e) { 
      axios.post('http://koboautos.com/twic-terminal/connect/api/create_group')
        .then(response => {
         // console.log(response);
           this.customergroups = response.data.customergroups;
        });
    },
    allcountries(e) { 
      axios.post('http://koboautos.com/twic-terminal/connect/api/all-countries')
        .then(response => {
         // console.log(response);
           this.countrylist = response.data.countries;
        });
    },
  },
    watch:{
      'userData.type'  : function (val, oldval) {
          console.log(val.title);
          if(val.title == 'Company'){
            this.showcompanyname = true;
          }else{
            this.showcompanyname = false;
          } 
      },

    },
  
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-customer-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
.vue-country-select{
  float: left;
  margin-top: 2px;
  height: 35px;
  border-radius: 0.357rem;
}
#add-new-customer-sidebar{
  width: 50%;
}
</style>
