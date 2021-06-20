<template>
  <div>

    <!-- Header: Personal Info -->
    <div class="d-flex">
      <feather-icon
        icon="UserIcon"
        size="19"
      />
      <h4 class="mb-0 ml-50">
        Personal Information
      </h4>
    </div>

    <!-- Form: Personal Info Form -->
    <b-form class="mt-1">
      <b-row>

        <!-- Field: Birth Date -->
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
            <b-form-input
              id="phone"
              v-model="customerinfo.phone"
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
            label="Terminal"
            label-for="user-status"
          >
            <v-select
                  v-model="customerinfo.terminal"
                  :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                  label="title"
                  :options="terminaldropdown"
                  multiple
                />
          </b-form-group>
        </b-col>
        
        <!-- Field: Role -->

      </b-row>

      <!-- Header: Personal Info -->
      <div class="d-flex mt-2">
        <feather-icon
          icon="MapPinIcon"
          size="19"
        />
        <h4 class="mb-0 ml-50">
          Address
        </h4>
      </div>

      <!-- Form: Personal Info Form -->
      <b-row class="mt-1">

        <!-- Field: Address Line 1 -->
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
          md="8"
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

      </b-row>

      <b-row class="mt-2">
        <b-col>
          <b-button variant="success" type="submit" class="mb-1 mb-sm-0 mr-0 mr-sm-1">
          <span class="text-nowrap">Save Changes</span>
    </b-button>

      <b-button
        :to="{ name: 'user-view', params: { id: id } }"
        variant="primary"
      >
        Back
      </b-button>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import {
  BRow, BCol, BForm, BFormGroup, BFormInput, BFormRadioGroup, BFormCheckboxGroup, BButton,
} from 'bootstrap-vue'
import flatPickr from 'vue-flatpickr-component'
import { ref } from '@vue/composition-api'
import vSelect from 'vue-select'
import axios from "axios";
export default {
  components: {
    BRow, BCol, BForm, BFormGroup, flatPickr, BFormInput, vSelect, BFormRadioGroup, BFormCheckboxGroup, BButton,axios,
  },
  setup() {
    const userDataInfo = ref({
      dob: null,
      mobile: '+6595895857',
      website: 'https://rowboat.com/insititious/Angelo',
      language: 'French',
      gender: 'female',
      contactOptions: ['Email', 'Message'],
      addressLine1: 'A-65, Belvedere Streets',
      addressLine2: '',
      postcode: '',
      city: 'New York',
      state: '',
      country: '',
    })

    const languageOptions = [
      'English',
      'Spanish',
      'French',
      'Russian',
      'German',
      'Arabic',
      'Sanskrit',
    ]
 
    const genderOptions = [
      { text: 'Male', value: 'male' },
      { text: 'Female', value: 'female' },
    ]

    const contactOptionsOptions = ['Email', 'Message', 'Phone']

    return {
      userDataInfo,
      languageOptions,
      genderOptions,
      contactOptionsOptions,
    }
  },
      mounted() {
        this.viewcustomer(this.$route.params.id);
        this.allcustomersgroups();
        this.allcountries();
        this.loadterminaldropdown();
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
                  terminal: "",
              },
              terminaldropdown:[],
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
        loadterminaldropdown(e) { 
      axios.post('http://koboautos.com/twic-terminal/connect/api/twice-terminal-dropdown')
        .then(response => {
         // console.log(response);
           this.terminaldropdown = response.data.terminallist;
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
                url: 'http://koboautos.com/twic-terminal/connect/api/update_customer?key=' + rowid+'&first_name='+this.customerinfo.first_name+'&last_name=' + this.customerinfo.last_name+'&email=' + this.customerinfo.email+'&phone='+ this.customerinfo.phone+'&gender='+this.customerinfo.gender+'&username='+this.customerinfo.username+'&address='+this.customerinfo.address+'&country_id='+this.customerinfo.country.key,

            })
                .then(function(response) {
                    console.log(response);
                    if (response.status == 200) {
                        currentObj.$router.push({ path: "/users/list" });
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
@import '@core/scss/vue/libs/vue-flatpicker.scss';
</style>
