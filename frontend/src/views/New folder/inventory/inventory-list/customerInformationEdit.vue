<template >
  <div >
    
    <b-card-code title="Vehicle Details"
                  
    >

    <div>
      <b-row>

        <b-col cols="6">
          <b-form-group
            label="Vin Number"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Vin Number"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Make"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Make"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Model"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Model"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Year"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Year"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Body Type"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Body Type"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Volume"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Volume"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Length"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Length"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Weight"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Weight"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Height"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Height"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Curb Weight"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Curb Weight"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Color"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Color"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Trim"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Trim"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
            label="Height"
            label-for="defaultLabel"
          >
            <b-form-input
              id="defaultLabel"
              placeholder="Height"
            />
          </b-form-group>
        </b-col>

        <b-col cols="6">
          <b-form-group
                      label="Category"
                      label-for="vue-select"
                    >
            <v-select
              id="vue-select"
              v-model="selectedCountry"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="optionCountry"
            />
          </b-form-group>
        </b-col>

        

        
        


      </b-row>
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
    </div>

  
  </b-card-code>
  </div>
  
</template>

<script>
import BCardCode from '@core/components/b-card-code'

import {
  BAvatar, BListGroup, BListGroupItem, BCardText,
    BButton,
  BFormInput, BRow, BCol, BFormGroup, 
} from 'bootstrap-vue'
import { codeSize } from './formcode'
import vSelect from 'vue-select'


export default {
  components: {
    BAvatar,
    BListGroup,
    BListGroupItem,
    BCardText,
    BCardCode,
    BFormInput,
    BFormGroup,
    BRow,
    BCol,
    vSelect,
    BButton,

  },
  data() {
    return {
      codeSize,

      sidebarItems: [
        { title: 'Dashboard', icon: 'GridIcon' },
        { title: 'Analytics', icon: 'ActivityIcon' },
        { title: 'History', icon: 'RefreshCwIcon' },
        { title: 'Configuration', icon: 'SettingsIcon' },
        { title: 'Profile', icon: 'UserIcon' },
      ],
    }
  },
}
</script>


<style>
  .icon-code{
    display: none;
  }
</style>
