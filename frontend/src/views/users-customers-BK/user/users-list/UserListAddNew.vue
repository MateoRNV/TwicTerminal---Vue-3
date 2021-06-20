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
        @change="val => $emit('update:is-add-new-user-sidebar-active', val)"
    >
        <template #default="{ hide }">
            <!-- Header -->
            <div
                class="d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1"
            >
                <h5 class="mb-0">
                    Add New User
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
                    <b-row class="userName">
                        <!-- First Name -->
                        <validation-provider
                            #default="validationContext"
                            name="First Name"
                            rules="required"
                        >
                            <b-form-group
                                class="formGroup"
                                label="First Name"
                                label-for="first-name"
                            >
                                <b-form-input
                                    id="full-name"
                                    v-model="userData.first_name"
                                    autofocus
                                    :state="
                                        getValidationState(validationContext)
                                    "
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
                                class="formGroup"
                                label="Last Name"
                                label-for="last-name"
                            >
                                <b-form-input
                                    id="full-name"
                                    v-model="userData.last_name"
                                    autofocus
                                    :state="
                                        getValidationState(validationContext)
                                    "
                                    trim
                                    placeholder=""
                                />

                                <b-form-invalid-feedback>
                                    {{ validationContext.errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>

                        <!-- Username -->
                        <validation-provider
                            #default="validationContext"
                            name="Username"
                            rules="required|alpha-num"
                        >
                            <b-form-group label="Username" label-for="username">
                                <b-form-input
                                    id="username"
                                    v-model="userData.username"
                                    :state="
                                        getValidationState(validationContext)
                                    "
                                    trim
                                />

                                <b-form-invalid-feedback>
                                    {{ validationContext.errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                    </b-row>
                    <!-- Email -->
                    <validation-provider
                        #default="validationContext"
                        name="Email"
                        rules="required|email"
                    >
                        <b-form-group label="Email" label-for="email">
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
                        <b-form-group label="Phone" label-for="phone">
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

                    <b-row class="userName">
                        <!-- Gender -->
                        <validation-provider
                            #default="validationContext"
                            name="Gender"
                            rules="required"
                        >
                            <b-form-group
                                class="formGroup"
                                label="Gender"
                                label-for="gender"
                                :state="getValidationState(validationContext)"
                            >
                                <v-select
                                    v-model="userData.gender"
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="gender"
                                />
                                <b-form-invalid-feedback
                                    :state="
                                        getValidationState(validationContext)
                                    "
                                >
                                    {{ validationContext.errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>

                        <!-- Country -->
                        <validation-provider
                            #default="validationContext"
                            name="Country"
                            rules="required"
                        >
                            <b-form-group
                                class="formGroup"
                                label="Country"
                                label-for="country"
                                :state="getValidationState(validationContext)"
                            >
                                <v-select
                                    v-model="userData.country"
                                    :dir="
                                        $store.state.appConfig.isRTL
                                            ? 'rtl'
                                            : 'ltr'
                                    "
                                    label="title"
                                    :options="getcountrylist"
                                />
                                <b-form-invalid-feedback
                                    :state="
                                        getValidationState(validationContext)
                                    "
                                >
                                    {{ validationContext.errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                    </b-row>
                    <validation-provider
                        #default="validationContext"
                        name="Country"
                        rules="required"
                    >
                        <b-form-group
                            label="Terminal"
                            label-for="country"
                            :state="getValidationState(validationContext)"
                        >
                            <v-select
                                v-model="customerinfo.terminal"
                                :dir="
                                    $store.state.appConfig.isRTL ? 'rtl' : 'ltr'
                                "
                                label="title"
                                :options="terminaldropdown"
                                multiple
                            />
                            <b-form-invalid-feedback
                                :state="getValidationState(validationContext)"
                            >
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>
                    <validation-provider
                        #default="validationContext"
                        name="Address"
                    >
                        <b-form-group label="Address" label-for="address">
                            <b-form-input
                                id="company"
                                v-model="userData.company"
                                :state="getValidationState(validationContext)"
                                trim
                            />

                            <b-form-invalid-feedback>
                                {{ validationContext.errors[0] }}
                            </b-form-invalid-feedback>
                        </b-form-group>
                    </validation-provider>

                    <!-- Country -->
                    <b-row class="userName">
                        <!-- Password -->
                        <validation-provider
                            #default="validationContext"
                            name="Password"
                            rules="required"
                        >
                            <b-form-group
                                label="Password"
                                label-for="password"
                                class="formGroup"
                            >
                                <b-form-input
                                    id="contact"
                                    type="password"
                                    v-model="userData.password"
                                    :state="
                                        getValidationState(validationContext)
                                    "
                                    trim
                                />

                                <b-form-invalid-feedback>
                                    {{ validationContext.errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>

                        <!-- Repeat Password -->
                        <validation-provider
                            #default="validationContext"
                            name="Repeat Password"
                            rules="required"
                        >
                            <b-form-group
                                class="formGroup"
                                label="Repeat Password"
                                label-for="password"
                            >
                                <b-form-input
                                    id="contact2"
                                    type="password"
                                    v-model="userData.cpassword"
                                    :state="
                                        getValidationState(validationContext)
                                    "
                                    trim
                                />

                                <b-form-invalid-feedback>
                                    {{ validationContext.errors[0] }}
                                </b-form-invalid-feedback>
                            </b-form-group>
                        </validation-provider>
                    </b-row>
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
    BSidebar,
    BForm,
    BFormGroup,
    BFormInput,
    BFormInvalidFeedback,
    BButton
} from "bootstrap-vue";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { ref } from "@vue/composition-api";
import { required, alphaNum, email } from "@validations";
import formValidation from "@core/comp-functions/forms/form-validation";
import Ripple from "vue-ripple-directive";
import vSelect from "vue-select";
import countries from "@/@fake-db/data/other/countries";
import store from "@/store";
import axios from "axios";
import router from "@/router/routes/apps";
export default {
    components: {
        BSidebar,
        BForm,
        BFormGroup,
        BFormInput,
        BFormInvalidFeedback,
        BButton,
        vSelect,
        axios,
        // Form Validation
        ValidationProvider,
        ValidationObserver
    },
    directives: {
        Ripple
    },
    model: {
        prop: "isAddNewUserSidebarActive",
        event: "update:is-add-new-user-sidebar-active"
    },
    props: {
        isAddNewUserSidebarActive: {
            type: Boolean,
            required: true
        },
        roleOptions: {
            type: Array,
            required: true
        },
        planOptions: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            required,
            alphaNum,
            email,
            countries,
            getcountrylist: [],
            terminaldropdown: [],
            customerinfo: {
                terminal: ""
            },
            gender: [{ title: "Male" }, { title: "Female" }]
        };
    },
    setup(props, { emit }) {
        const blankUserData = {
            firstNam: "",
            lastName: "",
            username: "",
            email: "",
            role: null,
            currentPlan: null,
            company: "",
            country: "",
            contact: ""
        };

        const userData = ref(JSON.parse(JSON.stringify(blankUserData)));
        const resetuserData = () => {
            userData.value = JSON.parse(JSON.stringify(blankUserData));
        };

        const onSubmit = () => {
            store.dispatch("app-user/addUser", userData.value).then(() => {
                emit("refetch-data");
                emit("update:is-add-new-user-sidebar-active", false);
            });
        };

        const {
            refFormObserver,
            getValidationState,
            resetForm
        } = formValidation(resetuserData);

        return {
            userData,
            onSubmit,

            refFormObserver,
            getValidationState,
            resetForm
        };
    },
    mounted() {
        this.allcustomersgroups();
        this.allcountries();
        this.loadterminaldropdown();
    },
    methods: {
        formSubmit(e) {
            e.preventDefault();
            let currentObj = this;

            axios({
                method: "post",
                url:
                    "http://koboautos.com/twic-terminal/connect/api/create_user?first_name=" +
                    this.userData.first_name +
                    "&last_name=" +
                    this.userData.last_name +
                    "&email=" +
                    this.userData.email +
                    "&phone=" +
                    this.userData.contact +
                    "&gender=" +
                    this.userData.gender +
                    "&address=" +
                    this.userData.address +
                    "&country_id=" +
                    this.userData.country.key +
                    "&username=" +
                    this.userData.username +
                    "&terminal=" +
                    this.customerinfo.terminal
            })
                .then(function(response) {
                    console.log(response);
                    if (response.status == 200) {
                        //currentObj.$router.push({ path : '/inventory/view/'+response.data.key  });
                        location.reload();
                    }
                })
                .catch(function(response) {
                    if (response.status == 422) {
                        this.errors = response.data.errors;
                        return;
                    }

                    if (response.status == 500) {
                        flash({ error: "Server Error" });
                    }
                });
        },
        allcustomersgroups(e) {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/create_group"
                )
                .then(response => {
                    // console.log(response);
                    this.customergroups = response.data.customergroups;
                });
        },
        allcountries(e) {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/all-countries"
                )
                .then(response => {
                    // console.log(response);
                    this.getcountrylist = response.data.countries;
                });
        },
        loadterminaldropdown(e) {
            axios
                .post(
                    "http://koboautos.com/twic-terminal/connect/api/twice-terminal-dropdown"
                )
                .then(response => {
                    // console.log(response);
                    this.terminaldropdown = response.data.terminallist;
                });
        }
    }
};
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";

#add-new-user-sidebar {
    .vs__dropdown-menu {
        max-height: 200px !important;
    }
}
.userName span {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.userName .formGroup {
    width: 49%;
    display: inline-block;
    align-self: flex-start;
}
</style>
