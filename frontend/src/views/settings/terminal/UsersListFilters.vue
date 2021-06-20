<template >
<!--   <b-button
    variant="info"
    v-on:click="isShow = !isShow"
  >
    <span class="text-nowrap">Advance Search</span>
  </b-button>
  -->


  <b-card no-body >
    <b-card-header class="pb-50">
      <h5>
        Filters
      </h5>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col
          cols="12"
          md="4"
          class="mb-md-0 mb-2 "
        >
          <label>Date From</label>
          <input type="date" name="date_from" class="form-control" >


        </b-col>
        <b-col
          cols="12"
          md="4"
          class="mb-md-0 mb-2 "
        >
         <label>Date To</label>
          <input type="date" name="date_to" class="form-control" >
        </b-col>
        <b-col
          cols="12"
          md="4"
          class="mb-md-0 mb-2 "
        >
         <label>Keyword</label>
          <input type="text" name="keyword" class="form-control" >
        </b-col>
        </b-row>
        <b-row>
        <b-col
          cols="12"
          md="4"
          class="mb-md-0 mb-2 mt-2"
        >
          <label>Customer</label>
          <b-form-group>
          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="title"
            :options="Customerslist"
          />
        </b-form-group>
         
        </b-col>
        <b-col
          cols="12"
          md="4"
          class="mb-md-0 mb-2 mt-2"
        >
          <label>Status</label>
            <b-form-group>
          <v-select
            v-model="selected"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            label="title"
            :options="statuslist"
          />
        </b-form-group>
        </b-col>
        <b-col
          cols="12"
          md="4"
          class="mb-md-0 mb-2 mt-2"
        >
          
           <input type="submit" name="submit" class="btn btn-primary mt-2" value="Submit">
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script> 
import {
  BCard, BCardHeader, BCardBody,BButton, BRow, BCol,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  //  name: "ToggleDiv",
  // data: function () {
  //   return {
  //     isShow: true,
  //   };
  // },
data () {
        return {
            Customerslist: [{ title: 'Muddassar' }, { title: 'Mohsin' }, { title: 'Shakir' }],
            statuslist: [{ title: 'In-Gated' }, { title: 'Out-Gated' }],
        }
      },
  props: {
    msg: String,
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    BButton,
    vSelect,
  },
  props: {
    roleFilter: {
      type: [String, null],
      default: null,
    },
    planFilter: {
      type: [String, null],
      default: null,
    },
    statusFilter: {
      type: [String, null],
      default: null,
    },
    roleOptions: {
      type: Array,
      required: true,
    },
    planOptions: {
      type: Array,
      required: true,
    },
    statusOptions: {
      type: Array,
      required: true,
    },
  },
}


</script>
<style scoped>
.notShown {
  visibility: hidden !important;
}
</style>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
