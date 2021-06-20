<template>
    
    <div>
    <template>

      <b-row>
        <b-col
          cols="12"
          xl="9"
          lg="8"
          md="7"
        >
          <user-view-user-info-card  />
        </b-col>
        <b-col
          cols="12"
          md="5"
          xl="3"
          lg="4"
        >
          <user-view-user-plan-card />
        </b-col>
      </b-row>

      <b-row>
        <b-col
          cols="12"
          lg="6"
        >
          <!-- <user-view-user-timeline-card /> -->
        </b-col>
        <b-col
          cols="12"
          lg="6"
        >
          <!-- <user-view-user-permissions-card /> -->
        </b-col>
      </b-row>

      <invoice-list />
        
    </template>
    </div>
</template>


<script>
import {
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
    BFormRadio,
    BSidebar,
    BAlert,
} from "bootstrap-vue";
import vSelect from "vue-select";
import store from "@/store";
import AddNew from "./AddNew.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import router from '@/router'
import { ref, onUnmounted } from "@vue/composition-api";
import { required, alphaNum, email } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import axios from "axios";
import UserViewUserInfoCard from './UserViewUserInfoCard.vue'
import userStoreModule from './userStoreModule'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
import UserViewUserTimelineCard from './UserViewUserTimelineCard.vue'
import UserViewUserPermissionsCard from './UserViewUserPermissionsCard.vue'
import UserViewUserPlanCard from './UserViewUserPlanCard.vue'

export default {
    components: {
        BSidebar,
        AddNew,
        BCard,
        BRow,
        BCol,
        BFormInput,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BAlert,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        // Form Validation
        ValidationProvider,
        ValidationObserver,
        BFormRadio,

        vSelect,

        // Local Components
        UserViewUserInfoCard,
        UserViewUserPlanCard,
        UserViewUserTimelineCard,
        UserViewUserPermissionsCard,

        InvoiceList,
    },
    setup() {
    const userData = ref(null)

    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    store.dispatch('app-user/fetchUser', { id: router.currentRoute.params.id })
      .then(response => { userData.value = response.data })
      .catch(error => {
        if (error.response.status === 404) {
          userData.value = undefined
        }
      })

    return {
      userData,
    }
  },

    
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
