<template>
  <b-sidebar
    id="add-new-user-sidebar"
    :visible="isAddNewUserSidebarActive"
    bg-variant="white"
    sidebar-class="sidebar-lg"
    shadow
    backdrop
    no-header
    right
    @hidden="resetForm"
    @change="(val) => $emit('update:is-add-new-user-sidebar-active', val)"
  >
    <template #default="{ hide }">
      <!-- Header -->
      <div class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1">
        <h5 class="mb-0">
          Create Inventory
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

          <!-- First Name -->
                    <!-- First Name -->
          <validation-provider
            #default="validationContext"
            name="Vin Number"
            rules="required"
          >
            <b-form-group
              label="Vin Number"
              label-for="vin-number"
            >
              <b-form-input
                id="full-name"
                v-model="userData.vin_number"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder=""
                @focusout ="vindecorder"
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>
          <validation-provider
            #default="validationContext"
            name="Year Make Model"
            rules="required"
          >
            <b-form-group
              label="Year | Make | model"
              label-for="year_make_model"
            >
              <b-form-input
                id="year_make_model"
                v-model="userData.year_make_model"
                autofocus
                trim
                placeholder=""
                readonly="readonly"
              />

            </b-form-group>
          </validation-provider>

          <!-- Last Name -->
          
          <validation-provider
            #default="validationContext"
            name="Driver Name"
            rules="required"
          >
            <b-form-group
              label="Driver Name"
              label-for="driver-name"
            >
              <b-form-input
                id="full-name"
                v-model="userData.driver_name"
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

          <!-- Gender -->
          <validation-provider
            #default="validationContext"
            name="Company Name"
            rules="required"
          >
            <b-form-group
              label="Company Name"
              label-for="company-name"
              :state="getValidationState(validationContext)"
            >
         <!--      <b-form-input
                id="full-name"
                v-model="userData.companyName"
                autofocus
                :state="getValidationState(validationContext)"
                trim
                placeholder=""
              /> -->

              <!-- <v-select
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                multiple
                taggable
                push-tags
                placeholder="Add Options"
                label="title"
              /> -->
              <v-select
                  v-model="userData.companyName"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="option"
                />

              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <!-- Customer Type -->
          <validation-provider
            #default="validationContext"
            name="Customer"
            rules="required"
          >
            <b-form-group
              label="Customer"
              label-for="customer"
              :state="getValidationState(validationContext)"
            >

            <v-select
                  v-model="userData.customerName"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="customerswithcompany"
                />
              <b-form-invalid-feedback :state="getValidationState(validationContext)">
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>

          <div class="form-grou">
            <label>Note</label>
            <textarea class="form-control" v-model="userData.note"></textarea>
          </div>

          <!-- Last Name --> 
         
          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"

            >
              Submit
            </b-button>
            <b-button
              v-ripple.400="'rgba(186, 191, 199, 0.15)'"
              type="button"
              variant="outline-secondary"
              @click="hide"
            >
              Cancel
            </b-button>
           <!--  <b-button
              v-ripple.400="'rgba(113, 102, 240, 0.15)'"
              v-b-modal.modal-1
              variant="outline-primary"
            >
              Basic Modal
            </b-button> -->
          </div>

        </b-form>
      </validation-observer>

      <!-- basic modal -->
    <b-modal
      id="modal-1"
      title="Create New Customer"
      ok-only
      ok-title="Close"
      
    >
      <b-card-text>
         <validation-observer
        #default="{ handleSubmit }"
        ref="refFormObserver"
      >
        <!-- Form -->
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
          @submit="customerformSubmit"
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
              <b-form-input
                id="contact"
                v-model="userData.contact"
                :state="getValidationState(validationContext)"
                trim
              />

              <b-form-invalid-feedback>
                {{ validationContext.errors[0] }}
              </b-form-invalid-feedback>
            </b-form-group>
          </validation-provider>


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
          <validation-provider
            #default="validationContext"
            name="Customer"
            rules="required"
            v-if="showcompanyname"
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

          <!-- Customer Type -->
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
           <!--  <select class="form-control vue-select" v-model="userData.role">
              <option value="">Select</option>
              <option value="22">Auction/Warehouse</option>
              <option value="18">Inland or Ocean Transportation agent</option>
            </select> -->
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

  

          <!-- Address -->
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
          <validation-provider
            #default="validationContext"
            name="Address"
            rules="required"
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

          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
            >
              Submit
            </b-button>
        
          </div>

        </b-form>
      </validation-observer>
      </b-card-text>
    </b-modal>

          <!-- basic modal -->
    <b-modal
      id="modal-2"
      title="Company Name"
      ok-only
      ok-title="Close"
      
    >
      <b-card-text>
         <validation-observer
        #default="{ handleSubmit }"
        ref="refFormObserver"
      >
        <!-- Form -->
        <b-form
          class="p-2"
          @submit.prevent="handleSubmit(onSubmit)"
          @reset.prevent="resetForm"
          @submit="createnewcompany"
        >

          <!-- First Name -->
          <validation-provider
            #default="validationContext"
            name="Type Company Name"
            rules="required"
          >
            <b-form-group
              label="Type Company Name"
              label-for="first-name"
            >
              <b-form-input
                id="full-name"
                v-model="userData.company"
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

          <!-- Last Name -->

          <!-- Form Actions -->
          <div class="d-flex mt-2">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="mr-2"
              type="submit"
            >
              Submit
            </b-button>
        
          </div>

        </b-form>
      </validation-observer>
      </b-card-text>
    </b-modal>
    </template>
  </b-sidebar>


</template>


<script>
import {
  BSidebar, BForm, BFormGroup, BFormInput, BFormInvalidFeedback, BButton,VBModal,
  BModal, BAlert, BCardText,
} from 'bootstrap-vue'
import $ from 'jquery'
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

export default {
  components: {
    BSidebar,
    BModal,
    BAlert,
    BCardText,
    BForm,
    axios,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton,
    vSelect,
    VBModal,

    // Form Validation
    ValidationProvider,
    ValidationObserver,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  // directives: {
  //   Ripple,
  // },
  model: {
    prop: 'isAddNewUserSidebarActive',
    event: 'update:is-add-new-user-sidebar-active',
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
      vinnumberdetails: false,
      
      //showModal: false,
      required,
      alphaNum,
      email,
      countries,
       gender: [{ title: 'Male'}, { title: 'Female' }],
      accounttype: [{ title: 'Individual'}, { title: 'Company' }],
      customers: [{ value: 1,title: 'Abdul sSalam' }, { title: 'Frank' },{ title: 'Ademola' }, { title: 'Adeolu' }],
      //option: [{ title: 'Square'}, { title: 'Rectangle' }, { title: 'Rombo' }, { title: 'Romboid' }],
      option:[],
      customerinfo: {
                  first_name: "",
                  last_name: "",
                  email: "",
                  phone: "",
                  gender: "",
                  address: "",
                  customer_type: "",
                  newcompanyname: "",
              },
      countrylist:[],
      customergroupdropdownlist:[],
      customerswithcompany:[],
      customergroups:[],
      selected: '',
      modal: true,
      isActive: false,
      isVisible: false
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
     //  let currentObj = this;
      // console.log(userData.value.vin_number);
     //  // axios.post('http://koboautos.com/twic-terminal/connect/api/create_inspections?vin_number=' + userData.value.vin_number+'&driver_name=' + userData.value.driver_name+'&company_name=' + userData.value.companyName+'&customer=Abdul sSalam')
     //  //   .then(response => {
     //  //     // this.laravelData = response.data.Inspection;
     //  //     console.log(response);
     //  //    gotoviewpage(response.key);
          
     //  //   });
     
     // //router.push("/inventory/list/1");
     // //router.stateService.go('inventory/list/1');
     // // isAddNewUserSidebarActive = false;
     // // router.push('terminal');

     // currentObj.router.push({ path : '/terminal' });
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
    this.allcustomers();
    this.allcompanies();
    this.allcustomersgroups();
    this.allcountries();

  },
  methods: {
// showModal() {
//     let element = this.$refs.modal.$el
//     $(element).modal('show')
//   },

  allcountries(e) { 
      axios.post('http://koboautos.com/twic-terminal/connect/api/all-countries')
        .then(response => {
         // console.log(response);
           this.countrylist = response.data.countries;
        });
    },

  allcustomersgroups(e) { 
      axios.post('http://koboautos.com/twic-terminal/connect/api/create_group')
        .then(response => {
         // console.log(response);
           this.customergroups = response.data.customergroups;
        });
    },

  showModal: function() {
      // document.getElementById('modal').classList.add('is-active')
      this.isActive = true
      this.isVisible = true
    },
    closeModal: function() {
      // document.getElementById('modal').classList.remove('is-active')
      this.isActive = false
      this.isVisible = false
    },

    formSubmit(e) {
                e.preventDefault();
                let currentObj = this;
//console.log(this.userData);
                  axios({
                    method: 'post',
                    url: 'http://koboautos.com/twic-terminal/connect/api/create_inspections?vin_number=' + this.userData.vin_number+'&driver_name=' + this.userData.driver_name+'&company_name=' + this.userData.companyName+'&customer='+ this.userData.customerName.value,
                })
                .then(function (response) { 
                  console.log(response);
                  if (response.status == 200) { 
                     currentObj.$router.push({ path : '/inventory/view/'+response.data.key  });
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
    customerformSubmit(e) {
                e.preventDefault();
                let currentObj = this;

                  axios({
                    method: 'post',
                    url: 'http://koboautos.com/twic-terminal/connect/api/create_customer?first_name=' + this.userData.first_name+'&last_name=' + this.userData.last_name+'&email=' + this.userData.email+'&phone='+ this.userData.contact+'&gender='+this.userData.gender+'&customer_type='+this.userData.role.id+'&address='+this.userData.address,
                })
                .then(function (response) { 
                  console.log(response);
                  if (response.status == 200) {  
                    currentObj.customerswithcompany = response.data.newcustomer;
                    currentObj.$root.$emit("bv::hide::modal", "modal-1");
                      // currentObj.userData.customerName= response.data.lastedit;
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
    createnewcompany(e) {
                e.preventDefault();
                let currentObj = this;

                currentObj.$root.$emit("bv::hide::modal", "modal-2");
                this.userData.companyName = this.userData.company;
            },
    // Our method to GET results from a Laravel endpoint
    vindecorder(e) {
      var vin_number = e.target.value;
      axios.post('https://shipafrika.com/api/getcrossdata/decodevin.php?vin='+vin_number)
        .then(response => {
           this.userData.year_make_model = response.data.model_year+' | '+ response.data.make+' | '+ response.data.model;

          
        });

      // axios.post('http://koboautos.com/twic-terminal/scrapping/getcrossdata/decodevin.php?vin='+vin_number)
      //   .then(response => {
      //      this.userData.year_make_model = response.data.model_year+' | '+ response.data.make+' | '+ response.data.model;

          
      //   });
    },
     allcustomers(e) {
      axios.post('http://koboautos.com/twic-terminal/connect/api/customerwithcompany')
        .then(response => {
           this.customerswithcompany = response.data.customers;
        });
    },

    allcompanies(e) {
      axios.post('http://koboautos.com/twic-terminal/connect/api/all-companies')
        .then(response => {
           this.option = response.data.companies;
        });
    },

    gotoviewpage(id){
      this.$router.push("/inventory/list/1");
    }



  },
  watch:{
      'userData.customerName'  : function (val, oldval) {
          console.log(val.value);
          if(val.value == 'add'){
            this.$root.$emit("bv::show::modal", "modal-1");
          } 
      },
      'userData.companyName'  : function (val, oldval) {
          console.log(val.title);
          if(val.title == 'Add New Company'){
            this.$root.$emit("bv::show::modal", "modal-2");
          } 
      }
    },
  
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';

#add-new-user-sidebar {
  .vs__dropdown-menu {
    max-height: 200px !important;
  }
}
.modal-footer{display: none;}
</style>
