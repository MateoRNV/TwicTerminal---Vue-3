<template>
  <b-card title="" class="bgTransparent">
  
    <!-- <b-tabs
      pills
      align="left"
    >
      <b-tab
        title="Overview"
        active
      > -->
       
          
          <section id="description-list-alignment">

            <b-row class="match-height">
              
              <b-col class="displayFlex">
              
              <b-col class="displayFlexCol">

                 <!-- <b-card
                        class="card-transaction vehicleDetail"
                        no-body
                      >
                        <b-card-header>
                          <div class="d-flex">
                            <b-card-title>Vehicle Details</b-card-title>
                            <b-badge class=" ml-2" variant="primary">
                              In-Gated
                            </b-badge>
                          </div>
                          <feather-icon
                            icon="EditIcon"
                            size="18"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-toggle.sidebar-right
                            variant="outline-primary"
                          />
                          <b-sidebar
                              id="sidebar-right"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              @click="hide"
                            >
                              <sidebar-content />
                            </b-sidebar>
                        </b-card-header>

                        <b-card-body>
                          <div
                            v-for="transaction in transactionData"
                            :key="transaction.mode"
                            class="transaction-item"
                          >
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  {{ transaction.mode }}
                                </h6>
                                <small>{{ transaction.types }}</small>
                              </b-media-body>
                            </b-media>
                            <div
                              class="font-weight-normal rightDetai"
                              :class="transaction.deduction ? 'text-primary':'text-info'"
                            >
                              {{ transaction.payment }}
                              <br>
                              {{ transaction.vinno }}
                            </div>
                          </div>
                            
                            <b-modal
                              id="modal-prevent-closing"
                              ref="my-modal"
                              title="Submit Your Name"
                              ok-title="Submit"
                              cancel-variant="outline-secondary"
                              @show="resetModal"
                              @hidden="resetModal"
                              @ok="handleOk"
                            >
                              <form
                                ref="form"
                                @submit.stop.prevent="handleSubmit"
                              >
                                <b-form-group
                                  :state="nameState"
                                  label="Name"
                                  label-for="name-input"
                                  invalid-feedback="Name is required"
                                >
                                  <b-form-input
                                    id="name-input"
                                    v-model="name"
                                    :state="nameState"
                                    required
                                  />
                                </b-form-group>
                              </form>
                            </b-modal>

                            
                          
                        </b-card-body>
                  </b-card> -->


                  <b-card
                        class="card-transaction vehicleDetail"
                        no-body
                      >
                    <b-card-body>

                        <b-row>

                        <!-- User Info: Left col -->
                        <b-col
                          cols="21"
                          xl="8"
                          class="d-flex justify-content-between flex-column"
                        >
                          <!-- User Avatar & Action Buttons -->
                          <div class="d-flex justify-content-start">
                            <b-avatar
                              size="104px"
                              rounded
                            />
                            <div class="d-flex flex-column ml-1">
                              <div class="mb-1">
                                <h6 class="mb-0">
                                  5GAEV23718J129013
                                  <feather-icon
                                      icon="EditIcon"
                                      size="18"
                                      class="cursor-pointer"
                                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                                      v-b-toggle.customer-right
                                      variant="outline-primary"
                                    />
                                    
                                    
                                </h6>
                                <span class="card-text">2008 Buick Enclave CXL AWD</span>
                              </div>
                            </div>
                          </div>

                        </b-col>

                        <!-- Right Col: Table -->
                        <b-col
                          cols="12"
                          xl="4"
                        >
                          <table class="mt-2 mt-xl-0 w-100">
                            <tr>
                              <th class="pb-50">
                                <feather-icon
                                  icon="BoxIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">500 x 300 x 200</span>
                              </th>
                              <!-- <td class="pb-50">
                                {{ userData.username }}
                                John Doe
                              </td> -->
                            </tr>
                            <tr>
                              <th class="pb-50">
                                <feather-icon
                                  icon="DatabaseIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">4000</span>
                              </th>
                               <!--<td class="pb-50 text-capitalize">
                                {{ userData.status }}
                                Active
                              </td> -->
                            </tr>
                            <tr>
                              <th class="pb-50">
                                <feather-icon
                                  icon="CodesandboxIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">Non-Runner</span>
                              </th>
                              
                            </tr>
                            <tr>
                              <th class="pb-50">
                                <feather-icon
                                  icon="KeyIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">Yes</span>
                              </th>
                              
                            </tr>
                            <tr>
                              <th>
                                <feather-icon
                                  icon="AlignLeftIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">No</span>
                              </th>
                              
                            </tr>
                          </table>
                        </b-col>
                     <!--  </b-row>

                      <b-row>
 -->
                        <!-- User Info: Left col -->
                        <b-col
                          cols="33"
                          xl="12"
                          class="d-flex justify-content-between flex-column"
                        >
                          <!-- User Avatar & Action Buttons -->
                         

                          <!-- User Stats -->
                          <div class="d-flex align-items-center mt-2">
                            <div class="d-flex align-items-center mr-2">
                              <b-avatar
                                variant="light-primary"
                                rounded
                              >
                                <feather-icon
                                  icon="DollarSignIcon"
                                  size="18"
                                />
                              </b-avatar>
                              <div class="ml-1">
                                <h5 class="mb-0">
                                  25k
                                </h5>
                                <small>Storage</small>
                              </div>
                            </div>
                            <div class="d-flex align-items-center mr-2">
                              <b-avatar
                                variant="light-primary"
                                rounded
                              >
                                <feather-icon
                                  icon="DollarSignIcon"
                                  size="18"
                                />
                              </b-avatar>
                              <div class="ml-1">
                                <h5 class="mb-0">
                                  21.5k
                                </h5>
                                <small>Open Balance</small>
                              </div>
                            </div>
                            <div class="d-flex align-items-center mr-2">
                              <b-avatar
                                variant="light-primary"
                                rounded
                              >
                                <feather-icon
                                  icon="DollarSignIcon"
                                  size="18"
                                />
                              </b-avatar>
                              <div class="ml-1">
                                <h5 class="mb-0">
                                  3.5k
                                </h5>
                                <small>Remaining Balance</small>
                              </div>
                            </div>

                            
                          </div>
                        </b-col>

                        <!-- Right Col: Table -->
                      
                      </b-row>
                    </b-card-body>
                  </b-card>

                  <b-card
                        class="card-transaction "
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Inspection</b-card-title>
                        </b-card-header>

                        <b-card-body>
                          <b-tabs
                                pills
                                
                                class="verticalPill"
                              >
                                <b-tab
                                  title="General"
                                  active
                                >
                                  <b-card-text>
                                    <section id="description-list-alignment">

                                      <b-row class="match-height displayFlex">
                                        
                                        <b-col>
                                          <b-card
                                                  class="card-transaction "
                                                  no-body
                                                >

                                                  <b-card-body>
                                                    <div
                                                      v-for="information in informationData"
                                                      :key="information.mode"
                                                      class="transaction-item frontDetail"
                                                    >
                                                      <b-media no-body>
                                                        <b-media-body>
                                                          <h6 class="transaction-title">
                                                            {{ information.mode }}
                                                          </h6>
                                                          <small>{{ information.types }}</small>
                                                        </b-media-body>
                                                      </b-media>
                                                      <div
                                                        class="font-weight-normal rightDetai d-flex mt-1"
                                                        :class="information.deduction ? 'text-primary':'text-info'"
                                                      >
                                                        <b-form-radio class="mr-1" :checked="information.checked">
                                                            {{ information.payment }}
                                                          </b-form-radio>
                                                          <b-form-radio :checked="information.checked">
                                                            {{ information.nonrunner }}
                                                          </b-form-radio>
                                                      </div>
                                                    </div>
                                                  </b-card-body>
                                            </b-card>
                                        </b-col>

                                        <b-col>
                                          <b-card
                                                  class="card-transaction"
                                                  no-body
                                                >
                                                  <b-card-header>
                                                    <b-card-title> Upload Image</b-card-title>
                                                  </b-card-header>

                                                  <b-card-body>
                                                    <div 
                                                        class="dragDrop"
                                                    >
                                                      <p>Drag <br> &  <br> Drop</p>
                                                    </div>
                                                  </b-card-body>
                                          </b-card>
                                        </b-col>

                                        
                                      </b-row>
                                    </section>
                                  </b-card-text>
                                </b-tab>
                                <b-tab title="Front">
                                  <b-card-text>
                                    <section id="description-list-alignment">

                                      <b-row class="match-height displayFlex">
                                        
                                        <b-col>
                                          <b-card
                                                  class="card-transaction "
                                                  no-body
                                                >

                                                  <b-card-body>
                                                    <div
                                                      v-for="information in informationData"
                                                      :key="information.mode"
                                                      class="transaction-item frontDetail"
                                                    >
                                                      <b-media no-body>
                                                        <b-media-body>
                                                          <h6 class="transaction-title">
                                                            {{ information.mode }}
                                                          </h6>
                                                          <small>{{ information.types }}</small>
                                                        </b-media-body>
                                                      </b-media>
                                                      <div
                                                        class="font-weight-normal rightDetai d-flex mt-1"
                                                        :class="information.deduction ? 'text-primary':'text-info'"
                                                      >
                                                        <b-form-radio class="mr-1" :checked="information.checked">
                                                            {{ information.payment }}
                                                          </b-form-radio>
                                                          <b-form-radio :checked="information.checked">
                                                            {{ information.nonrunner }}
                                                          </b-form-radio>
                                                      </div>
                                                    </div>
                                                  </b-card-body>
                                            </b-card>
                                        </b-col>

                                        <b-col>
                                          <b-card
                                                  class="card-transaction"
                                                  no-body
                                                >
                                                  <b-card-header>
                                                    <b-card-title> Upload Image</b-card-title>
                                                  </b-card-header>

                                                  <b-card-body>
                                                    <div 
                                                        class="dragDrop"
                                                    >
                                                      <p>Drag <br> &  <br> Drop</p>
                                                    </div>
                                                  </b-card-body>
                                          </b-card>
                                        </b-col>
                                      </b-row>
                                    </section>
                                  </b-card-text>
                                </b-tab>
                                <b-tab title="Passenger">
                                  <b-card-text>
                                    <section id="description-list-alignment">

                                      <b-row class="match-height displayFlex">
                                        
                                        <b-col>
                                          <b-card
                                                  class="card-transaction "
                                                  no-body
                                                >

                                                  <b-card-body>
                                                    <div
                                                      v-for="information in informationData"
                                                      :key="information.mode"
                                                      class="transaction-item frontDetail"
                                                    >
                                                      <b-media no-body>
                                                        <b-media-body>
                                                          <h6 class="transaction-title">
                                                            {{ information.mode }}
                                                          </h6>
                                                          <small>{{ information.types }}</small>
                                                        </b-media-body>
                                                      </b-media>
                                                      <div
                                                        class="font-weight-normal rightDetai d-flex mt-1"
                                                        :class="information.deduction ? 'text-primary':'text-info'"
                                                      >
                                                        <b-form-radio class="mr-1" :checked="information.checked">
                                                            {{ information.payment }}
                                                          </b-form-radio>
                                                          <b-form-radio :checked="information.checked">
                                                            {{ information.nonrunner }}
                                                          </b-form-radio>
                                                      </div>
                                                    </div>
                                                  </b-card-body>
                                            </b-card>
                                        </b-col>

                                        <b-col>
                                          <b-card
                                                  class="card-transaction"
                                                  no-body
                                                >
                                                  <b-card-header>
                                                    <b-card-title> Upload Image</b-card-title>
                                                  </b-card-header>

                                                  <b-card-body>
                                                    <div 
                                                        class="dragDrop"
                                                    >
                                                      <p>Drag <br> &  <br> Drop</p>
                                                    </div>
                                                  </b-card-body>
                                          </b-card>
                                        </b-col>
                                      </b-row>
                                    </section>
                                  </b-card-text>
                                </b-tab>
                                <b-tab
                                  title="Rear"
                                >
                                  <b-card-text>
                                    <section id="description-list-alignment">

                                      <b-row class="match-height displayFlex">
                                        
                                        <b-col>
                                          <b-card
                                                  class="card-transaction "
                                                  no-body
                                                >

                                                  <b-card-body>
                                                    <div
                                                      v-for="information in informationData"
                                                      :key="information.mode"
                                                      class="transaction-item frontDetail"
                                                    >
                                                      <b-media no-body>
                                                        <b-media-body>
                                                          <h6 class="transaction-title">
                                                            {{ information.mode }}
                                                          </h6>
                                                          <small>{{ information.types }}</small>
                                                        </b-media-body>
                                                      </b-media>
                                                      <div
                                                        class="font-weight-normal rightDetai d-flex mt-1"
                                                        :class="information.deduction ? 'text-primary':'text-info'"
                                                      >
                                                        <b-form-radio class="mr-1" :checked="information.checked">
                                                            {{ information.payment }}
                                                          </b-form-radio>
                                                          <b-form-radio :checked="information.checked">
                                                            {{ information.nonrunner }}
                                                          </b-form-radio>
                                                      </div>
                                                    </div>
                                                  </b-card-body>
                                            </b-card>
                                        </b-col>

                                        <b-col>
                                          <b-card
                                                  class="card-transaction"
                                                  no-body
                                                >
                                                  <b-card-header>
                                                    <b-card-title> Upload Image</b-card-title>
                                                  </b-card-header>

                                                  <b-card-body>
                                                    <div 
                                                        class="dragDrop"
                                                    >
                                                      <p>Drag <br> &  <br> Drop</p>
                                                    </div>
                                                  </b-card-body>
                                          </b-card>
                                        </b-col>
                                      </b-row>
                                    </section>
                                  </b-card-text>
                                </b-tab>
                                <b-tab
                                  title="Driver"
                                >
                                  <b-card-text>
                                    <section id="description-list-alignment">

                                      <b-row class="match-height displayFlex">
                                        
                                        <b-col>
                                          <b-card
                                                  class="card-transaction "
                                                  no-body
                                                >

                                                  <b-card-body>
                                                    <div
                                                      v-for="information in informationData"
                                                      :key="information.mode"
                                                      class="transaction-item frontDetail"
                                                    >
                                                      <b-media no-body>
                                                        <b-media-body>
                                                          <h6 class="transaction-title">
                                                            {{ information.mode }}
                                                          </h6>
                                                          <small>{{ information.types }}</small>
                                                        </b-media-body>
                                                      </b-media>
                                                      <div
                                                        class="font-weight-normal rightDetai d-flex mt-1"
                                                        :class="information.deduction ? 'text-primary':'text-info'"
                                                      >
                                                        <b-form-radio class="mr-1" :checked="information.checked">
                                                            {{ information.payment }}
                                                          </b-form-radio>
                                                          <b-form-radio :checked="information.checked">
                                                            {{ information.nonrunner }}
                                                          </b-form-radio>
                                                      </div>
                                                    </div>
                                                  </b-card-body>
                                            </b-card>
                                        </b-col>

                                        <b-col>
                                          <b-card
                                                  class="card-transaction"
                                                  no-body
                                                >
                                                  <b-card-header>
                                                    <b-card-title> Upload Image</b-card-title>
                                                  </b-card-header>

                                                  <b-card-body>
                                                    <div 
                                                        class="dragDrop"
                                                    >
                                                      <p>Drag <br> &  <br> Drop</p>
                                                    </div>
                                                  </b-card-body>
                                          </b-card>
                                        </b-col>
                                      </b-row>
                                    </section>
                                  </b-card-text>
                                </b-tab>
                                <b-tab
                                  title="others"
                                >
                                  <b-card-text>
                                    <section id="description-list-alignment">

                                      <b-row class="match-height displayFlex">
                                        
                                        <b-col>
                                          <b-card
                                                  class="card-transaction "
                                                  no-body
                                                >

                                                  <b-card-body>
                                                    <div
                                                      v-for="information in informationData"
                                                      :key="information.mode"
                                                      class="transaction-item frontDetail"
                                                    >
                                                      <b-media no-body>
                                                        <b-media-body>
                                                          <h6 class="transaction-title">
                                                            {{ information.mode }}
                                                          </h6>
                                                          <small>{{ information.types }}</small>
                                                        </b-media-body>
                                                      </b-media>
                                                      <div
                                                        class="font-weight-normal rightDetai d-flex mt-1"
                                                        :class="information.deduction ? 'text-primary':'text-info'"
                                                      >
                                                        <b-form-radio class="mr-1" :checked="information.checked">
                                                            {{ information.payment }}
                                                          </b-form-radio>
                                                          <b-form-radio :checked="information.checked">
                                                            {{ information.nonrunner }}
                                                          </b-form-radio>
                                                      </div>
                                                    </div>
                                                  </b-card-body>
                                            </b-card>
                                        </b-col>

                                        <b-col>
                                          <b-card
                                                  class="card-transaction"
                                                  no-body
                                                >
                                                  <b-card-header>
                                                    <b-card-title> Upload Image</b-card-title>
                                                  </b-card-header>

                                                  <b-card-body>
                                                    <div 
                                                        class="dragDrop"
                                                    >
                                                      <p>Drag <br> &  <br> Drop</p>
                                                    </div>
                                                  </b-card-body>
                                          </b-card>
                                        </b-col>
                                      </b-row>
                                    </section>
                                  </b-card-text>
                                </b-tab>
                              </b-tabs>

                            
                          
                        </b-card-body>
                  </b-card>

                 <b-card
                        class="card-transaction"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Gallery</b-card-title>
                        </b-card-header>

                        <b-card-body>
                          <div class="demo-inline-spacing mb-lg-3 mt-2">

                            
                            <b-img
                              v-bind="mainProps"
                              rounded
                              alt="Transparent image"
                              class="d-inline-block border"
                            />

                           
                            <b-img
                              v-bind="mainProps"
                              blank-color="#5A8DEE"
                              rounded
                              alt="HEX shorthand color image (#777)"
                              class="d-inline-block"
                            />

                            
                            <b-img
                              v-bind="mainProps"
                              blank-color="#82868b"
                              rounded
                              alt="Named color image (red)"
                              class="d-inline-block"
                            />

                           
                            <b-img
                              v-bind="mainProps"
                              blank-color="#39DA8A"
                              rounded
                              alt="Named color image (black)"
                              class="d-inline-block"
                            />

                       
                            <b-img
                              v-bind="mainProps"
                              blank-color="#FDAC41"
                              alt="RGBa color image"
                              rounded
                              class="d-inline-block"
                            />

                       
                            <b-img
                              v-bind="mainProps"
                              blank-color="#FF5B5C"
                              rounded
                              alt="HEX color image"
                              class="d-inline-block"
                            />

                            
                            <b-img
                              v-bind="mainProps"
                              blank-color="#00CFDD"
                              rounded
                              alt="HEX shorthand color (#88f)"
                              class="d-inline-block"
                            />
                          </div>
                        </b-card-body>
                      </b-card>



                  
              </b-col>
              <b-col class="displayFlexColright">

                  <b-card
                        class="card-transaction custDetail"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Customer Information</b-card-title>
                          <feather-icon
                            icon="EditIcon"
                            size="18"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-toggle.customer-right
                            variant="outline-primary"
                          />
                          <b-sidebar
                              id="customer-right"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              #default="{ hide }"
                            >
                              <b-card-code title="Vehicle Details">

                                <div>
                                  <b-row>

                                    <b-col cols="12">
                                      <b-form-group
                                                  label="Customer"
                                                  label-for="vue-select"
                                                >
                                        <v-select class="width-250"
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
                            </b-sidebar>
                          
                        </b-card-header>

                        <b-card-body>
                          <div
                            v-for="customer in customerData"
                            :key="customer.mode"
                            class="transaction-item"
                          >
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  {{ customer.mode }}
                                </h6>
                                <small>{{ customer.types }}</small>
                              </b-media-body>
                            </b-media>
                            <div
                              class=" rightDetai"
                              :class="customer.deduction ? 'text-primary':'text-info'"
                            >
                              {{ customer.payment }}
                            </div>
                          </div>
                          <!-- Customer Info -->
                              <b-modal
                                id="customer-info"
                                title="Update Customer"
                                ok-title="submit"
                                cancel-variant="outline-secondary"
                              >
                                <b-form>
                                  <b-form-group
                                    label="Choose the country"
                                    label-for="vue-select"
                                  >
                                    <v-select
                                      id="vue-select"
                                      v-model="selectedCountry"
                                      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                      :options="optionCountry"
                                    />
                                  </b-form-group>
                                </b-form>
                              </b-modal>
                        </b-card-body>
                      </b-card>

                      <b-card
                        class="card-transaction driverDetail"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Payment Information</b-card-title>
                          <feather-icon
                            icon="PlusIcon"
                            size="18"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-toggle.payment-form
                            variant="outline-primary"
                          />
                          <b-sidebar
                              id="payment-form"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              #default="{ hide }"
                            >
                            <b-card-code title="Add Payment">

                              <div>
                                <b-row>

                                  <b-col cols="6">
                                    <b-form-group
                                      label="Payment #"
                                      label-for="defaultLabel"
                                    >
                                      <b-form-input
                                        id="defaultLabel"
                                        placeholder="Enter Number"
                                      />
                                    </b-form-group>
                                  </b-col>

                                  <b-col cols="6">
                                    <b-form-group
                                      label="Reference"
                                      label-for="defaultLabel"
                                    >
                                      <b-form-input
                                        id="defaultLabel"
                                        placeholder="Reference"
                                      />
                                    </b-form-group>
                                  </b-col>

                                  <b-col cols="6">
                                    <b-form-group
                                      label="Amount Received"
                                      label-for="defaultLabel"
                                    >
                                      <b-form-input
                                        id="defaultLabel"
                                        placeholder="Amount Received"
                                      />
                                    </b-form-group>
                                  </b-col>

                                  <b-col cols="6">
                                    <b-form-group
                                      label="Note"
                                      label-for="notes-text"
                                    >
                                      <b-form-textarea
                                        id="notes-text"
                                        placeholder="Note"
                                        rows="3"
                                      />
                                    </b-form-group>
                                  </b-col>

                                  <b-col cols="6">
                                    <b-form-group
                                      label="Bank Charges"
                                      label-for="defaultLabel"
                                    >
                                      <b-form-input
                                        id="defaultLabel"
                                        placeholder="Bank Charges"
                                      />
                                    </b-form-group>
                                  </b-col>

                                  <b-col cols="6">
                                    <b-form-group
                                      label="Payment Date"
                                      label-for="defaultLabel"
                                    >
                                      <b-form-input
                                        id="defaultLabel"
                                        placeholder="Payment Date"
                                      />
                                    </b-form-group>
                                  </b-col>

                                  <b-col cols="6">
                                    <b-form-group
                                    label="Payment Mode"
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

                                  <b-col cols="6">
                                    <b-form-group
                                    label="Work Order"
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

                                  <b-col cols="6">
                                    <b-form-group
                                      label="Drag & Drop"
                                      label-for="defaultLabel"
                                    >
                                     <b-form-file
                                          placeholder="Select file to up"
                                          drop-placeholder="Select file to up"
                                          multiple
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
                          </b-sidebar>
                        </b-card-header>

                        <b-card-body>
                          <div
                            v-for="Payment in paymentData"
                            :key="Payment.mode"
                            class="transaction-item paymentCont"
                          > 
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  {{ Payment.mode }}
                                </h6>
                                <small>{{ Payment.types }}</small>
                              </b-media-body>
                            </b-media>
                            <div
                              class=" rightDetai"
                              :class="Payment.deduction ? 'text-primary':'text-info'"
                            >
                              {{ Payment.payment }}
                            </div>
                          </div>
                        </b-card-body>
                      </b-card>

                      <b-card
                        class="card-transaction custDetail"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Driver</b-card-title>
                          <feather-icon
                            icon="EditIcon"
                            size="18"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-toggle.driver-form
                            variant="outline-primary"
                          />
                          <b-sidebar
                              id="driver-form"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              #default="{ hide }"
                            >
                            <b-card-code title="Add Payment">

                              <div>
                                <b-row>

                                  <b-col>
                                    <b-form-group
                                      label="Name"
                                      label-for="defaultLabel"
                                      class="width-250"
                                    >
                                      <b-form-input
                                        id="defaultLabel"
                                        placeholder="Enter Name"
                                      />
                                    </b-form-group>
                                  </b-col>

                                  <b-col cols="6">
                                    <b-form-group
                                    label="Select Company"
                                    label-for="vue-select"
                                      class="width-250"

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
                          </b-sidebar>
                        </b-card-header>

                        <b-card-body>
                          <div
                            v-for="Driver in driverData"
                            :key="Driver.mode"
                            class="transaction-item"
                          > 
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  {{ Driver.mode }}
                                </h6>
                                <small>{{ Driver.types }}</small>
                              </b-media-body>
                            </b-media>
                            <div
                              class=" rightDetai"
                              :class="Driver.deduction ? 'text-primary':'text-info'"
                            >
                              {{ Driver.payment }}
                            </div>
                          </div>
                        </b-card-body>
                      </b-card>
                      
                      <b-card
                        class="card-transaction activityDetail"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Documents</b-card-title>
                        </b-card-header>

                        <b-card-body>
                          <div
                            v-for="documents in documentData"
                            :key="documents.mode"
                            class="transaction-item"
                          >
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  {{ documents.mode }}
                                </h6>
                                <small>{{ documents.types }}</small>
                              </b-media-body>
                            </b-media>
                            <div
                              class="font-weight-normal rightDetai activityCont wdth-100"
                              :class="documents.deduction ? 'text-primary':'text-info'"
                            >
                              <p class="mb-0">{{ documents.payment }}</p>
                              <p class="mb-0">{{ documents.activitycreated }}</p>
                            </div>
                          </div>
                        </b-card-body>
                      </b-card>

                      <b-card
                        class="card-transaction custDetail"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Notes</b-card-title>
                          <feather-icon
                            icon="AddIcon"
                            size="18"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-modal.customer-info
                            variant="outline-primary"
                          />
                        </b-card-header>

                        <b-card-body>
                          <div
                            v-for="note in notesData"
                            :key="note.mode"
                            class="transaction-item paymentCont d-block wdth-100"
                          > 
                            <b-media no-body>
                              <b-media-body>
                                <b-form-textarea
                                        id="description-input"
                                        placeholder="Description"
                                        rows="3"
                                      />
                                      <div class="alignRight mt-25">
                                        <b-button
                                          variant="primary"
                                          size="sm"
                                        >
                                          <span class="text-nowrap">Submit</span>
                                        </b-button>
                                      </div>      
                              </b-media-body>
                            </b-media>
                            <hr>
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  {{ note.mode }} <span class="font-weight-normal">{{ note.activitycreated }}</span> 
                                </h6>
                                <small>{{ note.types }}</small><p class="mb-0">{{ note.payment }}</p>
                              <!-- <p class="mb-0"></p> -->
                              </b-media-body>
                            </b-media>
                            
                            <div
                              class=" rightDetai mt-1"
                              :class="note.deduction ? 'text-primary':'text-info'"
                            >
                              
                            </div>
                          </div>
                        </b-card-body>
                      </b-card>

                      <b-card
                        class="card-transaction activityDetail"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Activities</b-card-title>
                        </b-card-header>

                        <b-card-body>
                          <div
                            v-for="activities in activitiesData"
                            :key="activities.mode"
                            class="transaction-item"
                          >
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  {{ activities.mode }}
                                </h6>
                                <small>{{ activities.types }}</small>
                              </b-media-body>
                            </b-media>
                            <div
                              class="font-weight-normal rightDetai activityCont wdth-100"
                              :class="activities.deduction ? 'text-primary':'text-info'"
                            >
                              <p class="mb-0">{{ activities.payment }}</p>
                              <p class="mb-0">{{ activities.activitycreated }}</p>
                            </div>
                          </div>
                        </b-card-body>
                      </b-card>

               </b-col>
              </b-col>

            </b-row>
            <b-row>

                        <!-- User Info: Left col -->
                        <b-col
                          cols="21"
                          xl="12"
                          class="d-flex justify-content-between flex-column"
                        >

                  <b-card
                        class="card-transaction "
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Work Order</b-card-title>
                          <feather-icon
                            icon="EditIcon"
                            size="18"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-toggle.work-order
                            variant="outline-primary"
                          />
                          <b-sidebar
                              id="work-order"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              #default="{ hide }"
                            >
                              <b-card-code title="Work Order">

                                <div>
                                  <b-row>

                                    <b-col cols="12">
                                    <b-form-group
                                                label="Select Service"
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

                                  <b-col cols="12">
                                    <b-form-group
                                                label="Select Service Option"
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

                                  <b-col cols="6">
                                    <b-form-group
                                      label="Quantity"
                                      label-for="defaultLabel"
                                    >
                                      <b-form-input
                                        id="defaultLabel"
                                        placeholder="Quantity"
                                      />
                                    </b-form-group>
                                  </b-col>

                                  <b-col cols="6">
                                    <b-form-group
                                      label="Price"
                                      label-for="defaultLabel"
                                    >
                                      <b-form-input
                                        id="defaultLabel"
                                        placeholder="Price"
                                      />
                                    </b-form-group>
                                  </b-col>
                                  <b-form-group
                                            label="Description"
                                            label-for="notes-text"
                                          >
                                            <b-form-textarea
                                              id="notes-text"
                                              placeholder="Description"
                                              rows="3"
                                            />
                                          </b-form-group>
                                  

                                </b-row>
                                </div>
                              
                                <div class="d-flex mt-2">
                                  <b-button
                                    v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                                    variant="primary"
                                    class="mr-2"
                                    type="submit"
                                  >
                                    Save & Close
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
                              </b-card-code>
                          </b-sidebar>
                        </b-card-header>

                        <b-card-body>
  <b-table
      ref="refInvoiceListTable"
      :items="fetchInvoices"
      responsive
      :fields="tableColumns"
      primary-key="id"
      :sort-by.sync="sortBy"
      show-empty
      empty-text="No matching records found"
      :sort-desc.sync="isSortDirDesc"
      class="position-relative"
    >

      <template #head(invoiceStatus)>
        <feather-icon
          icon="TrendingUpIcon"
          class="mx-auto"
        />
      </template>

      <!-- Column: Id -->
      <template #cell(id)="data">
        <b-link
          :to="{ name: 'apps-invoice-preview', params: { id: data.item.id }}"
          class="font-weight-bold"
        >
          #{{ data.value }}
        </b-link>
      </template>

      <!-- Column: Invoice Status -->
      <template #cell(invoiceStatus)="data">
        <b-avatar
          :id="`invoice-row-${data.item.id}`"
          size="32"
          :variant="`light-${resolveInvoiceStatusVariantAndIcon(data.item.invoiceStatus).variant}`"
        >
          <feather-icon
            :icon="resolveInvoiceStatusVariantAndIcon(data.item.invoiceStatus).icon"
          />
        </b-avatar>
        <b-tooltip
          :target="`invoice-row-${data.item.id}`"
          placement="top"
        >
          <p class="mb-0">
            {{ data.item.invoiceStatus }}
          </p>
          <p class="mb-0">
            Balance: {{ data.item.balance }}
          </p>
          <p class="mb-0">
            Due Date: {{ data.item.dueDate }}
          </p>
        </b-tooltip>
      </template>

      <!-- Column: Client -->
      <template #cell(client)="data">
        <b-media vertical-align="center">
          <template #aside>
            <b-avatar
              size="32"
              :src="data.item.avatar"
              :text="avatarText(data.item.client.name)"
              :variant="`light-${resolveClientAvatarVariant(data.item.invoiceStatus)}`"
            />
          </template>
          <span class="font-weight-bold d-block text-nowrap">
            {{ data.item.client.name }}
          </span>
          <small class="text-muted">{{ data.item.client.companyEmail }}</small>
        </b-media>
      </template>

      <!-- Column: Issued Date -->
      <template #cell(issuedDate)="data">
        <span class="text-nowrap">
          {{ data.value }}
        </span>
      </template>

      <!-- Column: Balance -->
      <template #cell(balance)="data">
        <template v-if="data.value === 0">
          <b-badge
            pill
            variant="light-success"
          >
            Paid
          </b-badge>
        </template>
        <template v-else>
          {{ data.value }}
        </template>
      </template>

      <!-- Column: Actions -->
      <template #cell(actions)="data">

        <div class="text-nowrap">
          <feather-icon
            :id="`invoice-row-${data.item.id}-send-icon`"
            icon="SendIcon"
            class="cursor-pointer"
            size="16"
          />
          <b-tooltip
            title="Send Invoice"
            class="cursor-pointer"
            :target="`invoice-row-${data.item.id}-send-icon`"
          />

          <feather-icon
            :id="`invoice-row-${data.item.id}-preview-icon`"
            icon="EyeIcon"
            size="16"
            class="mx-1"
            @click="$router.push({ name: 'apps-invoice-preview', params: { id: data.item.id }})"
          />
          <b-tooltip
            title="Preview Invoice"
            :target="`invoice-row-${data.item.id}-preview-icon`"
          />

          <!-- Dropdown -->
          <b-dropdown
            variant="link"
            toggle-class="p-0"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item>
              <feather-icon icon="DownloadIcon" />
              <span class="align-middle ml-50">Download</span>
            </b-dropdown-item>
            <b-dropdown-item :to="{ name: 'apps-invoice-edit', params: { id: data.item.id } }">
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
            <b-dropdown-item>
              <feather-icon icon="CopyIcon" />
              <span class="align-middle ml-50">Duplicate</span>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </template>

    </b-table>
                            
                          
                        </b-card-body>
                  </b-card>
                     </b-col>

            </b-row>   
          </section>

          <!-- <b-tabs
                pills
                align="left"
              >
                <b-tab
                  title="General"
                  active
                >
                  <b-card-text>
                    <section id="description-list-alignment">

                      <b-row class="match-height displayFlex">
                        
                        <b-col>
                          <b-card
                                  class="card-transaction "
                                  no-body
                                >
                                  <b-card-header>
                                    <b-card-title>Inforamtion</b-card-title>
                                  </b-card-header>

                                  <b-card-body>
                                    <div
                                      v-for="information in informationData"
                                      :key="information.mode"
                                      class="transaction-item"
                                    >
                                      <b-media no-body>
                                        <b-media-body>
                                          <h6 class="transaction-title">
                                            {{ information.mode }}
                                          </h6>
                                          <small>{{ information.types }}</small>
                                        </b-media-body>
                                      </b-media>
                                      <div
                                        class="font-weight-normal rightDetai"
                                        :class="information.deduction ? 'text-primary':'text-info'"
                                      >
                                        {{ information.payment }}
                                      </div>
                                    </div>
                                  </b-card-body>
                            </b-card>
                        </b-col>

                        <b-col>
                          <b-card
                                  class="card-transaction"
                                  no-body
                                >
                                  <b-card-header>
                                    <b-card-title> Gallery</b-card-title>
                                  </b-card-header>

                                  <b-card-body>
                                    <div
                                    >
                                     <b-form-file class="mt-lg-2 mb-3"
                                          placeholder="Choose a file or drop it here..."
                                          drop-placeholder="Drop file here..."
                                          multiple
                                        />
                                    </div>
                                  </b-card-body>
                          </b-card>

                                
                        </b-col>
                      </b-row>
                    </section>
                  </b-card-text>
                </b-tab>
                <b-tab title="Front">
                  <b-card-text>
                    <section id="description-list-alignment">

                      <b-row class="match-height displayFlex">
                        
                        <b-col>
                          <b-card
                                  class="card-transaction "
                                  no-body
                                >
                                  <b-card-header>
                                    <b-card-title>Inforamtion</b-card-title>
                                  </b-card-header>

                                  <b-card-body>
                                    <div
                                      v-for="information in informationData"
                                      :key="information.mode"
                                      class="transaction-item"
                                    >
                                      <b-media no-body>
                                        <b-media-body>
                                          <h6 class="transaction-title">
                                            {{ information.mode }}
                                          </h6>
                                          <small>{{ information.types }}</small>
                                          
                                        </b-media-body>
                                      </b-media>
                                      <div
                                        class="font-weight-normal rightDetai"
                                        :class="information.deduction ? 'text-primary':'text-info'"
                                      >
                                        
                                        <b-form-radio :checked="information.checked">
                                            {{ information.payment }}
                                          </b-form-radio>
                                      </div>
                                    </div>
                                  </b-card-body>
                            </b-card>
                        </b-col>

                        <b-col>
                          <b-card
                                  class="card-transaction"
                                  no-body
                                >
                                  <b-card-header>
                                    <b-card-title> Gallery</b-card-title>
                                  </b-card-header>

                                  <b-card-body>
                                    <div
                                    >
                                     <b-form-file class="mt-lg-2 mb-3"
                                          placeholder="Choose a file or drop it here..."
                                          drop-placeholder="Drop file here..."
                                          multiple
                                        />
                                    </div>
                                  </b-card-body>
                          </b-card>

                                
                        </b-col>
                      </b-row>
                    </section>
                  </b-card-text>
                </b-tab>
                <b-tab
                  title="Passenger"
                >
                  <section id="description-list-alignment">

                      <b-row class="match-height displayFlex">
                        
                        <b-col>
                          <b-card
                                  class="card-transaction "
                                  no-body
                                >
                                  <b-card-header>
                                    <b-card-title>Inforamtion</b-card-title>
                                  </b-card-header>

                                  <b-card-body>
                                    <div
                                      v-for="information in informationData"
                                      :key="information.mode"
                                      class="transaction-item"
                                    >
                                      <b-media no-body>
                                        <b-media-body>
                                          <h6 class="transaction-title">
                                            {{ information.mode }}
                                          </h6>
                                          <small>{{ information.types }}</small>
                                        </b-media-body>
                                      </b-media>
                                      <div
                                        class="font-weight-normal rightDetai"
                                        :class="information.deduction ? 'text-primary':'text-info'"
                                      >
                                        <b-form-radio :checked="information.checked">
                                            {{ information.payment }}
                                          </b-form-radio>
                                      </div>
                                    </div>
                                  </b-card-body>
                            </b-card>
                        </b-col>

                        <b-col>
                          <b-card
                                  class="card-transaction"
                                  no-body
                                >
                                  <b-card-header>
                                    <b-card-title> Gallery</b-card-title>
                                  </b-card-header>

                                  <b-card-body>
                                    <div
                                    >
                                     <b-form-file class="mt-lg-2 mb-3"
                                          placeholder="Choose a file or drop it here..."
                                          drop-placeholder="Drop file here..."
                                          multiple
                                        />
                                    </div>
                                  </b-card-body>
                          </b-card>

                                
                        </b-col>
                      </b-row>
                    </section>
                </b-tab>
                <b-tab title="Rear">
                  <b-card-text>
                    <section id="description-list-alignment">

                      <b-row class="match-height displayFlex">
                        
                        <b-col>
                          <b-card
                                  class="card-transaction "
                                  no-body
                                >
                                  <b-card-header>
                                    <b-card-title>Inforamtion</b-card-title>
                                  </b-card-header>

                                  <b-card-body>
                                    <div
                                      v-for="information in informationData"
                                      :key="information.mode"
                                      class="transaction-item"
                                    >
                                      <b-media no-body>
                                        <b-media-body>
                                          <h6 class="transaction-title">
                                            {{ information.mode }}
                                          </h6>
                                          <small>{{ information.types }}</small>
                                        </b-media-body>
                                      </b-media>
                                      <div
                                        class="font-weight-normal rightDetai"
                                        :class="information.deduction ? 'text-primary':'text-info'"
                                      >
                                        <b-form-radio :checked="information.checked">
                                            {{ information.payment }}
                                          </b-form-radio>
                                      </div>
                                    </div>
                                  </b-card-body>
                            </b-card>
                        </b-col>

                        <b-col>
                          <b-card
                                  class="card-transaction"
                                  no-body
                                >
                                  <b-card-header>
                                    <b-card-title> Gallery</b-card-title>
                                  </b-card-header>

                                  <b-card-body>
                                    <div
                                    >
                                     <b-form-file class="mt-lg-2 mb-3"
                                          placeholder="Choose a file or drop it here..."
                                          drop-placeholder="Drop file here..."
                                          multiple
                                        />
                                    </div>
                                  </b-card-body>
                          </b-card>

                                
                        </b-col>
                      </b-row>
                    </section>
                  </b-card-text>
                </b-tab>
                <b-tab title="Others">
                  <b-card-text>
                    <section id="description-list-alignment">

                      <b-row class="match-height displayFlex">
                        
                        <b-col>
                          <b-card
                                  class="card-transaction "
                                  no-body
                                >
                                  <b-card-header>
                                    <b-card-title>Inforamtion</b-card-title>
                                  </b-card-header>

                                  <b-card-body>
                                    <div
                                      v-for="information in informationData"
                                      :key="information.mode"
                                      class="transaction-item"
                                    >
                                      <b-media no-body>
                                        <b-media-body>
                                          <h6 class="transaction-title">
                                            {{ information.mode }}
                                          </h6>
                                          <small>{{ information.types }}</small>
                                        </b-media-body>
                                      </b-media>
                                      <div
                                        class="font-weight-normal rightDetai"
                                        :class="information.deduction ? 'text-primary':'text-info'"
                                      >
                                        <b-form-radio :checked="information.checked">
                                            {{ information.payment }}
                                          </b-form-radio>
                                      </div>
                                    </div>
                                  </b-card-body>
                            </b-card>
                        </b-col>

                        <b-col>
                          <b-card
                                  class="card-transaction"
                                  no-body
                                >
                                  <b-card-header>
                                    <b-card-title> Gallery</b-card-title>
                                  </b-card-header>

                                  <b-card-body>
                                    <div
                                    >
                                     <b-form-file class="mt-lg-2 mb-3"
                                          placeholder="Choose a file or drop it here..."
                                          drop-placeholder="Drop file here..."
                                          multiple
                                        />
                                    </div>
                                  </b-card-body>
                          </b-card>

                                
                        </b-col>
                      </b-row>
                    </section>
                  </b-card-text>
                </b-tab>
                
          </b-tabs>
          
          <section id="description-list-alignment">

            <b-row class="match-height displayFlex">
              
              <b-col>
                 <b-card
                        class="card-transaction"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Documents</b-card-title>
                          <feather-icon
                            icon="PlusIcon"
                            size="18"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-modal.modal-select2
                            variant="outline-primary"
                          />
                        </b-card-header>

                        <b-card-body>
                          <b-table
                              responsive="sm"
                              :items="items"
                            />
                          
                              <b-modal
                                id="modal-select2"
                                title="Add Documents"
                                ok-title="submit"
                                cancel-variant="outline-secondary"
                              >
                                <b-form>
                                  <b-form-group
                                    label="Choose the country"
                                    label-for="vue-select1"
                                  >
                                    <v-select
                                      id="vue-select1"
                                      v-model="selected"
                                      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                      :options="option"
                                    />
                                  </b-form-group>
                                  <b-form-group
                                    label="Document"
                                    label-for="zip-code"
                                  >
                                   
                                    <b-form-file
                                          placeholder="Choose a file or drop it here..."
                                          drop-placeholder="Drop file here..."
                                          multiple
                                        />
                                  </b-form-group>
                                </b-form>
                              </b-modal>
                        </b-card-body>
                  </b-card>
               </b-col>

              <b-col>
                 <b-card
                        class="card-transaction"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Gallery</b-card-title>
                        </b-card-header>

                        <b-card-body>
                          <div class="demo-inline-spacing mb-lg-3 mt-2">

                            
                            <b-img
                              v-bind="mainProps"
                              rounded
                              alt="Transparent image"
                              class="d-inline-block border"
                            />

                           
                            <b-img
                              v-bind="mainProps"
                              blank-color="#5A8DEE"
                              rounded
                              alt="HEX shorthand color image (#777)"
                              class="d-inline-block"
                            />

                            
                            <b-img
                              v-bind="mainProps"
                              blank-color="#82868b"
                              rounded
                              alt="Named color image (red)"
                              class="d-inline-block"
                            />

                           
                            <b-img
                              v-bind="mainProps"
                              blank-color="#39DA8A"
                              rounded
                              alt="Named color image (black)"
                              class="d-inline-block"
                            />

                       
                            <b-img
                              v-bind="mainProps"
                              blank-color="#FDAC41"
                              alt="RGBa color image"
                              rounded
                              class="d-inline-block"
                            />

                       
                            <b-img
                              v-bind="mainProps"
                              blank-color="#FF5B5C"
                              rounded
                              alt="HEX color image"
                              class="d-inline-block"
                            />

                            
                            <b-img
                              v-bind="mainProps"
                              blank-color="#00CFDD"
                              rounded
                              alt="HEX shorthand color (#88f)"
                              class="d-inline-block"
                            />
                          </div>
                        </b-card-body>
                      </b-card>
               
              </b-col>
            </b-row>

            <b-row class="match-height">
              
              <b-col class="col-sm-12">
                 <b-card
                        class="card-transaction cardFullwidth"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Work Order</b-card-title>
                          <feather-icon
                            icon="PlusIcon"
                            size="18"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-modal.work-order
                            variant="outline-primary"
                          />
                        </b-card-header>

                        <b-card-body>
                          <b-table
                              responsive="lg"
                              :items="workorder"
                            />

                            
                          
                        </b-card-body>
                  </b-card>
               </b-col>
            </b-row>
          </section> -->

     

                  
      <!-- </b-tab> -->
      <!-- <b-tab title="Activities">
        <b-card-text>
          <section id="description-list-alignment">

            <b-row class="match-height ">
              
              <b-col>
                 <b-card
                        class="card-transaction widthAuto"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title>Activities</b-card-title>
                        </b-card-header>

                        <b-card-body>
                          <div
                            v-for="activities in activitiesData"
                            :key="activities.mode"
                            class="transaction-item"
                          >
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  {{ activities.mode }}
                                </h6>
                                <small>{{ activities.types }}</small>
                              </b-media-body>
                            </b-media>
                            <div
                              class="font-weight-normal rightDetai"
                              :class="activities.deduction ? 'text-primary':'text-info'"
                            >
                              {{ activities.payment }}
                            </div>
                          </div>
                        </b-card-body>
                  </b-card>
               </b-col>

            </b-row>
          </section>
        </b-card-text>
      </b-tab>
      <b-tab
            title="Notes"
          >
        <section id="description-list-alignment">

            <b-row class="match-height">
              
              <b-col class="col-sm-12">
                 <b-card
                        class="card-transaction cardFullwidth"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Inspection Notes</b-card-title>
                          <feather-icon
                            icon="PlusIcon"
                            size="18"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-modal.insp-note-modal
                            variant="outline-primary"
                          />
                        </b-card-header>

                        <b-card-body>
                          <b-table
                              responsive="lg"
                              :items="insNotes"
                            />
                         
                              <b-modal
                                id="insp-note-modal"
                                title="Add Note"
                                ok-title="submit"
                                cancel-variant="outline-secondary"
                              >
                                <b-form>
                                    <b-form-group
                                      :state="nameState"
                                      label="Description"
                                      label-for="description-input"
                                      invalid-feedback="description is required"
                                    >
                                      <b-form-textarea
                                        id="description-input"
                                        placeholder="Description"
                                        rows="3"
                                      />
                                    </b-form-group>
                                </b-form>
                              </b-modal>
                        </b-card-body>
                  </b-card>
               </b-col>
            </b-row>
          </section>
      </b-tab>
      <b-tab
        title="Payments"
      >
        <b-card-text>
          <section id="description-list-alignment">

            <b-row class="match-height">
              
              <b-col class="col-sm-12">
                 <b-card
                        class="card-transaction cardFullwidth"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Inspection Payments</b-card-title>
                          <feather-icon
                            icon="PlusIcon"
                            size="18"
                            class="cursor-pointer"
                          />
                        </b-card-header>

                        <b-card-body>
                          <b-table
                              responsive="lg"
                              :items="insPay"
                            />
                          
                        </b-card-body>
                  </b-card>
               </b-col>
            </b-row>
          </section>
        </b-card-text>
      </b-tab> -->

                
    <!-- </b-tabs> -->
    
 
    
    <template #code>
      {{ codeMultiple }}
      {{ codePrevent }}
      {{ codeBasic }}
      {{codeDefault}}

      {{codeVertical}}
      {{ codePlacement }}
    </template>
  </b-card>

 
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {BRow, BCol, BBadge, VBToggle, BSidebar, BFormTextarea, BButton, BFormGroup, BFormInput, BModal, VBModal, BListGroup, BListGroupItem, BImg, BTable, BFormRadio, BFormFile, BTabs, BTab, BCardText, BCard, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMedia, BMediaAside, BAvatar,} from 'bootstrap-vue'
import { codeAlignment } from './code'
import BCardActions from '../../../@core/components/b-card-actions/BCardActions.vue'
import { codeMultiple } from './fileInput'
import { codeBasic } from './docTable'
import { codeBlank } from './gallery'
import { codePrevent } from './modal'
import { codeDefault } from './textAreaCode'

import vSelect from 'vue-select'
import Ripple from 'vue-ripple-directive'

import UserListAddNew from './InventoryListAddNew.vue'
import { codeVertical } from './verticalTabs'

import { codePlacement } from './sidebarcode'

import SidebarContent from './customerInformationEdit.vue'
import CustomerContent from './customerInformation.vue'
import useUsersList from '../inventory-list/useUsersList'
import { avatarText } from '@core/utils/filter'
import useInvoicesList from './useInvoiceList'

//import invoiceStoreModule from '../invoiceStoreModule'

export default {
  components: {
    BCardCode,
    BCardText,
    BTabs,
    BTab,
    BCard,
    BCardHeader,
    BCardTitle,
    BCardBody,
    BMediaBody,
    BMedia,
    BMediaAside,
    BAvatar,
    BCardActions,
    BFormFile,
    BFormRadio,
    BTable,
    BImg,
    BButton,
    BFormGroup,
    BFormInput,
    BListGroup,
    BListGroupItem,
    BModal,
    vSelect,
    BFormTextarea,
    UserListAddNew,
    codeVertical,
    BSidebar,
    SidebarContent,
    BBadge,
    BRow, 
    BCol,

  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
  },
  setup() {

    //  const INVOICE_APP_STORE_MODULE_NAME = 'inv'

    // // Register module
    // if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)

    // // UnRegister on leave
    // onUnmounted(() => {
    //   if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    // })

    const statusOptions = [
      'Downloaded',
      'Draft',
      'Paid',
      'Partial Payment',
      'Past Due',
    ]

    const {
      fetchInvoices,
      tableColumns,
      perPage,
      currentPage,
      totalInvoices,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refInvoiceListTable,

      statusFilter,

      refetchData,

      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,
    } = useInvoicesList()

    return {
      fetchInvoices,
      tableColumns,
      perPage,
      currentPage,
      totalInvoices,
      dataMeta,
      perPageOptions,
      searchQuery,
      sortBy,
      isSortDirDesc,
      refInvoiceListTable,

      statusFilter,

      refetchData,

      statusOptions,

      avatarText,
      resolveInvoiceStatusVariantAndIcon,
      resolveClientAvatarVariant,
    }
  },

  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['my-modal'].toggle('#toggle-btn')
      })
    },
  },
  directives: {
    'b-modal': VBModal,
    'b-toggle': VBToggle,
    Ripple,
  },
  data() {
    return {
      codePlacement,
      selectedCountry: 'Select',
      optionCountry: ['Original Dock Receipt', 'Stamped Dock Receipts'],
      selected: 'Select Customer',
      option: ['John Doe', 'James Craley'],
      codePrevent,
      name: '',
      nameState: null,
      submittedNames: [],
      
      codeDefault,

      codeMultiple,
      codeBasic,
       mainProps: {
        blank: true,
        width: 75,
        height: 75,
        class: 'm1',
      },
      codeBlank,
      items: [
        {
          Document: 40, Date: '25-03-21', Action: 'Delete',
        },
        {
          Document: 21, Date: '25-03-21', Action: 'Delete',
        },
        {
          Document: 89, Date: '25-03-21', Action: 'Delete', 
        },
        {
          Document: 38, Date: '25-03-21', Action: 'Delete', 
        },
        {
          Document: 40, Date: '25-03-21', Action: 'Delete',
        },
      ],

      workorder: [
        {
          Wk_N: 40, Date: '25-03-21', Price: '0.00', Status: 'Open', Action: 'Delete',
        },
        {
          Wk_N: 21, Date: '25-03-21', Price: '0.00', Status: 'Processed', Action: 'Delete',
        },
        {
          Wk_N: 89, Date: '25-03-21', Price: '0.00', Status: 'Completed', Action: 'Delete', 
        },
        {
          Wk_N: 38, Date: '25-03-21', Price: '0.00', Status: 'Open', Action: 'Delete', 
        },
        {
          Wk_N: 40, Date: '25-03-21', Price: '0.00', Status: 'Processed', Action: 'Delete',
        },
      ],

      insNotes: [
        {
          Sr_no: 40, Description: 'JH4DA9340LS003571', Created_At: '25-03-21', Action: 'Delete',
        },
        {
          Sr_no: 21, Description: 'JH4DA9340LS003571', Created_At: '25-03-21', Action: 'Delete',
        },
        {
          Sr_no: 89, Description: 'JH4DA9340LS003571', Created_At: '25-03-21', Action: 'Delete', 
        },
        {
          Sr_no: 38, Description: 'JH4DA9340LS003571', Created_At: '25-03-21', Action: 'Delete', 
        },
        {
          Sr_no: 40, Description: 'JH4DA9340LS003571', Created_At: '25-03-21', Action: 'Delete',
        },
      ],

      insPay: [
        {
          Sr_no: 40, Payment_no: '25-03-21', Amount_Received: '0.00', Bank_Charges: 'Open', Date: '12-03-21', Action: 'Delete',
        },
        {
          Sr_no: 40, Payment_no: '25-03-21', Amount_Received: '0.00', Bank_Charges: 'Open', Date: '12-03-21', Action: 'Delete',
        },
        {
          Sr_no: 40, Payment_no: '25-03-21', Amount_Received: '0.00', Bank_Charges: 'Open', Date: '12-03-21', Action: 'Delete',
        },
        {
          Sr_no: 40, Payment_no: '25-03-21', Amount_Received: '0.00', Bank_Charges: 'Open', Date: '12-03-21', Action: 'Delete',
        },
        {
          Sr_no: 40, Payment_no: '25-03-21', Amount_Received: '0.00', Bank_Charges: 'Open', Date: '12-03-21', Action: 'Delete',
        },
      ],
      
      tabData: [
        { overview: 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry.' },
        { activities: 'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Pudding candy canes sugar plum cookie chocolate cake powder croissant.' },
        { notes: 'lorem' },
        { payments: 'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit.' },
        { general: 'Candy canes donut chupa chups candy canes lemon drops oat cake wafer. Cotton candy candy canes marzipan carrot cake. Sesame snaps lemon drops candy marzipan donut brownie tootsie roll. Icing croissant bonbon biscuit gummi bears. Pastry gummi bears sweet roll candy canes topping ice cream. Candy canes fruitcake cookie carrot cake pastry.' },
        { front: 'Carrot cake dragée chocolate. Lemon drops ice cream wafer gummies dragée. Chocolate bar liquorice cheesecake cookie chupa chups marshmallow oat cake biscuit. Dessert toffee fruitcake ice cream powder tootsie roll cake.Pudding candy canes sugar plum cookie chocolate cake powder croissant.' },
      ],
      icons: [
        'EditIcon',
      ], 
      transactionData: [
        {
          mode: 'Vehicle:',
          avatarVariant: 'light-info',
          payment: '1990 Acura Integra RS Coupe - white',
          vinno: '5GAEV23718J129013 ',
          deduction: true,
        },
        {
          mode: 'Dimensions(inch):',
          avatarVariant: 'light-info',
          payment: '500 x 300 x 400',
          deduction: false,
        },
        
        {
          mode: 'Weight:',
          avatarVariant: 'light-info',
          payment: '500',
          deduction: true,
        },
      ],
      
      customerData: [
        {
          mode: 'Abdul Rehman',
          avatarVariant: 'light-info',
        },
        
        {
          avatarVariant: 'light-info',
          payment: 'new jersey 08726',
        },

        {
          avatarVariant: 'light-info',
          payment: '+9564887900',
        },
        {
          avatarVariant: 'light-info',
          payment: 'infoTwic@gmail.com',
        },
        
      ],
      paymentData: [
        {
          mode: 'Open Balance ',
          avatarVariant: 'light-info',
          payment: '$0.00',
        },
        {
          mode: 'Already Paid',
          avatarVariant: 'light-info',
          payment: '$0.00',
        },
        {
          mode: 'Storage Dues',
          avatarVariant: 'light-info',
          payment: '$0.00',
        },
        {
          mode: 'Remaining Balance ',
          avatarVariant: 'light-info',
          payment: '$0.00',
        },
        
        
      ],

      documentData: [
        
        {
          avatarVariant: 'light-info',
          payment: 'Original Dock Receipt',
          activitycreated: '29 Mar, 2021',
          checked: false,
        },
        {
          avatarVariant: 'light-info',
          payment: 'Stamped Dock Receipts',
          activitycreated: '03 Apr, 2021',
          checked: false,
        },
        
      ],

      notesData: [
        {
          mode: 'John Doe',
          avatarVariant: 'light-info',
          payment: 'A description list is perfect for defining terms.',
          activitycreated: '27 Mar, 2021',
        },
        
        
      ],

      driverData: [
        {
          mode: 'John Doe',
          avatarVariant: 'light-info',
          payment: 'friendsitsolutions',

        },
        
        
      ],



      informationData: [
        {
          mode: 'Condition',
          avatarVariant: 'light-info',
          payment: 'Runner',
          nonrunner: 'Non-Runner',
          checked: false,
        },
        {
          mode: 'Key',
          avatarVariant: 'light-info',
          payment: 'Yes',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Title',
          avatarVariant: 'light-info',
          payment: 'Yes',
          nonrunner: 'No',
          checked: false,
        },
        
      ],

      galleryData: [
        {
          mode: 'Condition',
          avatarVariant: 'light-info',
          payment: 'N/A',
          deduction: true,
        },
        {
          mode: 'Key',
          avatarVariant: 'light-info',
          payment: 'N/A',
          deduction: false,
        },
        {
          mode: 'Title',
          avatarVariant: 'light-info',
          payment: 'N/A',
          deduction: false,
        },
        
      ],
      activitiesData: [
        
        {
          mode: 'Vehicle information updated',
          avatarVariant: 'light-info',
          payment: 'John Doe',
          activitycreated: '27 Mar, 2021',
          checked: false,
        },
        {
          mode: 'New images added',
          avatarVariant: 'light-info',
          payment: 'Steven Smith',
          activitycreated: '02 Apr, 2021',
          checked: false,
        },
        
        
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
<style>

.main-menu .navbar-header .navbar-brand .brand-logo img {
  max-width: 115px !important;
}
.main-menu .navbar-header .navbar-brand{
  margin: 3px auto !important;
}

.main-menu .navbar-header .navbar-brand .brand-text {
  font-size: 1rem !important;
  padding-left: 7px !important;
}

.main-menu .navbar-header .navbar-brand .brand-text {
  color: #f4bc33 !important;
  font-weight: 600;
  letter-spacing: 0.01rem;
  font-size: 1.45rem;
}
.nav-pills .nav-link.active {
    border-color: #ff9f43 !important;
    -webkit-box-shadow: 0 4px 18px -4px rgb(243 187 55) !important;
    box-shadow: 0 4px 18px -4px rgb(115 103 240 / 65%) !important;
}
.nav-pills .nav-link.active, [dir] .nav-pills .show > .nav-link {
    background-color: #f39c41 !important;
}
.customizer .customizer-toggle {
    background: #f39c41 !important;
}
a {
    color: #ff9f43;
}
.btn-primary {
    border-color: #f39c41 !important;
    background-color: #f39c41 !important;
}

.main-menu.menu-dark .navigation > li.active > a {
    background: linear-gradient(
118deg
, #e8b231, rgb(243 156 65));
}
.main-menu.menu-dark .navigation > li.active > a {
    -webkit-box-shadow: 0 0 10px 1px rgb(40 48 70);
    box-shadow: 0 0 10px 1px rgb(40 48 70);
    border-radius: 4px;
}

.page-item.active .page-link {
    border-color: #ff9f43;
    background-color: #ff9f43;
}
.page-item.next-item .page-link:active, .page-item.next-item .page-link:hover {
    background-color: #ff9f43 !important;
}

.btn-primary:focus, [dir] .btn-primary:active, [dir] .btn-primary.active {
    background-color: #f39c41 !important;
}
.badge-primary {
    background-color: #f39c41;
}



  .cardHeader{
    background-color: #f4bc33;
  }
  .headCont{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cardHeader.card .card-header{
    display: none !important;
  }

  .group-area{
    background-color: #f4bc33;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
  }
  .match-height.displayFlex{
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 1 auto;
  }
  .group-area.headCont h4{
    margin-bottom: 0;
    color: white;
    font-size: 16px;
  }
  .bgTransparent.card{
    background-color: transparent;
        -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transition: none;
  }
  .transaction-title{
    font-size: 15px;
    font-weight: bold;
  }
  .rightDetai.text-info, .rightDetai.text-success, .rightDetai.text-primary{
    font-size: 13px;
    color: #000 !important;
  }
  .transaction-item.paymentCont{
    margin-bottom: .7em;
  }

  .card-transaction.activityDetail .transaction-item .activityCont{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .card-transaction.cardFullwidth{
    width: 100%;  
  }
  .card-transaction.widthAuto{
    width: auto;
  }
  .transaction-item .transaction-title {
    font-size: 13px;
    font-weight: 600;
}
.card .card-header .card-title {
    margin-bottom: 0;
    font-weight: bold;
}
.card-transaction.vehicleDetail .transaction-item{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
.card-transaction.vehicleDetail .card-body{
  display: flex;
  justify-content: space-between;
}

.card-transaction.custDetail .transaction-item{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 3px !important;
}
.card-transaction.custDetail .card-body{
  display: flex;
  justify-content: space-between;
}
.card.card-transaction.vehicleDetail{
    /* width: 67%; */
    margin-bottom: 20px;
  }
.card.card-transaction.custDetail{
  /* width: 32%; */
    margin-bottom: 20px;

}
.displayFlex{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row !important;
}
.displayFlex.col{
  flex-flow: row !important;
}
.displayFlex.col,
.displayFlexCol.col{
  padding-left: 0;
  padding-right: 0;
}
.card-transaction.custDetail .card-body{
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.displayFlexCol{
  display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 70%;
}
.displayFlexColright{
  width: 28%;
  display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.card-transaction.driverDetail{
  margin-bottom:20px !important;
}

.card-transaction.driverDetail .transaction-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px !important;
}

.card-transaction.activityDetail{
  margin-bottom:20px !important;
}

.card-transaction.activityDetail .transaction-item{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-bottom: 3px !important;
  border-bottom: 1px solid #d8d6de;
  padding-bottom:8px;
}

.verticalPill .nav-pills .nav-link {
    justify-content: flex-start;

}
.verticalPill .col-auto{
  border-right: 1px solid #d8d6de;
}
.b-1{
  border: 1px solid #d8d6de;
}
.alignRight{
  float: right ;
}
.wdth-100{
  width: 100%;
}
.card-transaction .transaction-item.frontDetail{
  display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.dragDrop{
      display: flex;
    justify-content: center;
    border: 1px solid #dedede;
    margin-bottom: 0;
    padding: 50px;
}
.dragDrop p{
  text-align: center;
  margin-bottom: 0;
  padding-left: 20px;
  padding-right: 20px;
}
.verticalPill .tab-content{
  border-top: 1px solid #dedede;
    padding-top: 15px;
}
</style>
