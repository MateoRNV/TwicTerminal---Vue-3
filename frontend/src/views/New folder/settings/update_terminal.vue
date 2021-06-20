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
          <user-view-user-info-card-terminal />
        </b-col>
        <b-col
          cols="12"
          md="5"
          xl="3"
          lg="4"
        >
          <user-view-user-plan-card-terminal />
        </b-col>
      </b-row>

      <b-row>
        <b-col
          cols="12"
          lg="6"
        >
          <user-view-user-timeline-card-terminal />
        </b-col>
        <b-col
          cols="12"
          lg="6"
        >
          <user-view-user-permissions-card-terminal />
          <table-basic />

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
    BSidebar
} from "bootstrap-vue";
import vSelect from "vue-select";
import store from "@/store";
import AddNew from "./AddNew.vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { ref } from "@vue/composition-api";
import { required, alphaNum, email } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import axios from "axios";
import UserViewUserInfoCardTerminal from './UserViewUserInfoCardTerminal.vue'
import userStoreModuleTerminal from './userStoreModuleTerminal'
import InvoiceList from '@/views/apps/invoice/invoice-list/InvoiceList.vue'
import UserViewUserTimelineCardTerminal from './UserViewUserTimelineCardTerminal.vue'
import UserViewUserPermissionsCardTerminal from './UserViewUserPermissionsCardTerminal.vue'
import UserViewUserPlanCardTerminal from './UserViewUserPlanCardTerminal.vue'

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
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        // Form Validation
        ValidationProvider,
        ValidationObserver,

        vSelect,
        UserViewUserInfoCardTerminal,
        InvoiceList,
        UserViewUserTimelineCardTerminal,
        UserViewUserPermissionsCardTerminal,
        UserViewUserPlanCardTerminal,
    },

    mounted() {
        console.log("Component mounted.");
        console.log(this.$route.params);
        this.getempdata(this.$route.params.id);
    },
    data() {
        return {
            id: this.$route.params.id,
            formfields: {
                title: "",
                email: "",
                phone: "",
                logo: "",
                address: "",
                country: "",
                state: "",
                city: "",
                zipCode: ""
            }
        };
    },

    setup() {
    const userData = ref(null)

    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModuleTerminal)

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
