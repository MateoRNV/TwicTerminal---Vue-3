<template>
  <b-card
    no-body
  >
    <b-card-body>
      <b-card-title class="mb-0">Notes</b-card-title>
      <!-- <b-card-sub-title>Permission according to roles</b-card-sub-title> -->
    </b-card-body>
    <b-table
      striped
      responsive
      :items="permissionsData"
      class="mb-0"
    >
      <template #code>
      {{ tableContent }}
      </template>
      <!-- <template #cell(module)="data">
        {{ data.value }}
      </template>
      <template #cell()="data">
        <b-form-checkbox
          disabled
          :checked="data.value"
        />
      </template> -->

    </b-table>
  </b-card>
</template>

<script>
import {
  BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox,
} from 'bootstrap-vue'
import { tableContent } from './tableContent'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'

export default {
  components: {
    BCard, BTable, BCardBody, BCardTitle, BCardSubTitle, BFormCheckbox,BCardCode
  },
  setup() {
    const permissionsData= [
        {
          sr_no: 1, note: 'Dickerson', created_at: '28-5-21', Action: '',
        },
        {
          sr_no: 2, note: 'Larsen', created_at: '27-5-21', Action: '',
        },
        {
          sr_no: 3, note: 'Geneva', created_at: '26-5-21', Action: '',
        },
        {
          sr_no: 4, note: 'Jami', created_at: '25-5-21', Action: '',
        },
        {
          sr_no: 5, note: 'James', created_at: '24-5-21', Action: '',
        },
        {
          sr_no: 6, note: 'James', created_at: '24-5-21', Action: '',
        },
      ]

    return {
      permissionsData,
      tableContent,

    }
  },
}
</script>

<style>

</style>
