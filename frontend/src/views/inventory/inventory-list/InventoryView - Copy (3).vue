<template>

  <b-card title="" class="bgTransparent">

          
          <section id="description-list-alignment">

            <b-row class="match-height">
              
              <b-col class="displayFlex">
              
              <b-col class="displayFlexCol">



                  <b-card
                        class="card-transaction vehicleDetail addbordered"
                        no-body
                      >
                    <b-card-body >
<b-sidebar
                              id="vehicle-detail-form"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              #default="{ hide }"
                            >
                              <b-card-code title="Vehicle Details">

                                <div>
                                  <b-row>

                                    <b-col cols="6">

                                      <b-form-group
                                          label="Vin Number"
                                          label-for="vin-number"
                                        >
                                          <b-form-input
                                            id="vin-number"
                                            v-model="inspection.vin_number"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                        </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                      
                                      <b-form-group
                                                  label="Make"
                                                  label-for="make"
                                                >
                                        <b-form-input
                                            id="make"
                                            v-model="inspection.make"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                   
                                  <b-row>

                                    <b-col cols="6">

                                      <b-form-group
                                          label="Model"
                                          label-for="vin-number"
                                        >
                                          <b-form-input
                                            id="model"
                                            v-model="inspection.model"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                      
                                      <b-form-group
                                                  label="Year"
                                                  label-for="vue-select"
                                                >
                                                <b-form-input
                                            id="year"
                                            v-model="inspection.year"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>

                                    <b-col cols="6">

                                      <b-form-group
                                          label="Body Type"
                                          label-for="vin-number"
                                        >
                                          <b-form-input
                                            id="BodyType"
                                            v-model="inspection.body_type"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                      
                                      <b-form-group
                                                  label="Engine Type"
                                                  label-for="vue-select"
                                                >
                                                <b-form-input
                                            id="EngineType"
                                            v-model="inspection.engine_type"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>

                                    <b-col cols="6">

                                      <b-form-group
                                          label="Volume"
                                          label-for="vin-number"
                                        >
                                          <b-form-input
                                            id="Volume"
                                            v-model="inspection.liters"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                      
                                      <b-form-group
                                                  label="Length"
                                                  label-for="vue-select"
                                                >
                                                <b-form-input
                                            id="Length"
                                            v-model="inspection.length"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>

                                    <b-col cols="6">

                                      <b-form-group
                                          label="Weight"
                                          label-for="vin-number"
                                        >
                                          <b-form-input
                                            id="Weight"
                                            v-model="inspection.weight"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                      
                                      <b-form-group
                                                  label="Height"
                                                  label-for="vue-select"
                                                >
                                                <b-form-input
                                            id="Height"
                                            v-model="inspection.height"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>

                                    <b-col cols="6">

                                      <b-form-group
                                          label="Curb Weight"
                                          label-for="vin-number"
                                        >
                                          <b-form-input
                                            id="CurbWeight"
                                            v-model="inspection.curb_weight"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                      
                                      <b-form-group
                                                  label="Color"
                                                  label-for="vue-select"
                                                >
                                                <b-form-input
                                            id="Color"
                                            v-model="inspection.color"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>

                                    <b-col cols="6">

                                      <b-form-group
                                          label="Trim"
                                          label-for="vin-number"
                                        >
                                          <b-form-input
                                            id="Trim"
                                            v-model="inspection.trim"
                                            autofocus
                                            trim
                                            placeholder=""
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
                                          v-model="inspection.category"
                                          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                          :options="optionCategory"
                                        />
                                      </b-form-group>
                                    </b-col>
                                  </b-row>
                                  <b-row>

                                    <b-col cols="6">

                                      <b-form-group
                                          label="Driver Name"
                                          label-for="vin-number"
                                        >
                                          <b-form-input
                                            id="Trim"
                                            v-model="inspection.driver_name"
                                            autofocus
                                            trim
                                            placeholder=""
                                          />
                                      </b-form-group>
                                    </b-col>
                                    <b-col cols="6">
                                      
                                      <b-form-group
                                                  label="Company Name"
                                                  label-for="vue-select"
                                                >
                                       <b-form-input
                                            id="Trim"
                                            v-model="inspection.company_name"
                                            autofocus
                                            trim
                                            placeholder=""
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
                                      Update
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
                        <b-row>

                        <!-- User Info: Left col -->
                        <b-col
                          cols="21"
                          xl="8"
                          class="d-flex justify-content-between flex-column"
                        >
                          <!-- User Avatar & Action Buttons -->
                          <div class="d-flex justify-content-start" @mouseover="vehicleeditactiveicon = false"
    @mouseleave="vehicleeditactiveicon = true" >
                            <b-avatar
                              size="104px"
                              rounded
                            />
                            <div class="d-flex flex-column ml-1" @mouseover="mouseOver">
                              <div class="mb-1">
                                <h6 class="mb-0">
                                  {{inspection.vin_number}}
                                  <feather-icon
                                      icon="EditIcon"
                                      size="14"
                                      class="cursor-pointer"
                                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                                      v-b-toggle.vehicle-detail-form
                                      variant="outline-primary"
                                      v-if="!vehicleeditactiveicon"
                                    />
                                    
                                    
                                </h6>
                                <span class="card-text">{{inspection.year}} {{inspection.make}} {{inspection.model}}</span>
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
                                <span class="font-weight-bold">{{inspection.height }} x {{inspection.length}} x {{inspection.weight}}</span>
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
                                <span class="font-weight-bold">{{inspection.liters }}</span>
                              </th>
                               <!--<td class="pb-50 text-capitalize">
                                {{ userData.status }}
                                Active
                              </td> -->
                            </tr>
                            <tr>
                              <th class="pb-50">
                                <feather-icon
                                  icon="InfoIcon"
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
                                  icon="WatchIcon"
                                  size="18"
                                />
                              </b-avatar>
                              <div class="ml-1">
                                <h5 class="mb-0">
                                  {{ inspection.storage_duration }}
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
                                  {{ inspectionotherDetails.amount_remaining }}k
                                </h5>
                                <small>Open</small>
                              </div>
                            </div>
                            <div class="d-flex align-items-center mr-2">
                              <b-avatar
                                variant="light-primary"
                                rounded
                              >
                                <feather-icon
                                  icon="LogInIcon"
                                  size="18"
                                />
                              </b-avatar>
                              <div class="ml-1">
                                <h5 class="mb-0">
                                  <!-- 3.5k -->
                                </h5>
                                <small>{{inspection.status }}</small>
                              </div>
                            </div>

                            
                          </div>
                        </b-col>

                        <!-- Right Col: Table -->
                      
                      </b-row>
                    </b-card-body>
                  </b-card>

                  <b-card
                        class="card-transaction addbordered"
                        no-body
                      >
                        <b-card-header  @mouseover="Inspectionoptionsactivated = false"
    @mouseleave="Inspectionoptionsactivated = true">
                          <b-card-title > Inspection</b-card-title>
                          <feather-icon
                                      icon="EditIcon"
                                      size="14"
                                      class="cursor-pointer"
                                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                                      v-b-toggle.edit-inspection-form-view
                                      variant="outline-primary"
                                      v-if="!Inspectionoptionsactivated"
                                    />
                        </b-card-header>

                        <b-card-body>
                          <b-sidebar
                              id="edit-inspection-form-view"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              #default="{ hide }"
                            >
                              <b-card-code title="Update Inspection" class="nobordereredtocard">

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

                              
                              </b-card-code>
                            </b-sidebar>
                         <img src="/inventory_image.png" style="width: 100%">
                            
                          
                        </b-card-body>
                  </b-card>


                 <b-card
                        class="card-transaction addbordered"
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



                  <b-card
                        class="card-transaction addbordered"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Work Order</b-card-title>
                          <feather-icon
                            icon="EditIcon"
                            size="14"
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
                                   <b-col cols="12">
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
                                  </b-col>

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
  <table role="table" aria-busy="false" aria-colcount="7" class="table b-table" id="__BVID__377">
   <!----><!---->
   <thead role="rowgroup" class="">
      <!---->
      <tr role="row" class="">
         <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="descending" class="">
            <div>#</div>
         </th>
         <th role="columnheader" scope="col" tabindex="0" aria-colindex="3" aria-sort="none" class="">
            <div>WK No</div>
         </th>
         <th role="columnheader" scope="col" tabindex="0" aria-colindex="4" aria-sort="none" class="">
            <div>Date</div>
         </th>
         <th role="columnheader" scope="col" tabindex="0" aria-colindex="5" aria-sort="none" class="">
            <div>Price</div>
         </th>
         <th role="columnheader" scope="col" tabindex="0" aria-colindex="6" aria-sort="none" class="">
            <div>Status</div>
         </th>
         <th role="columnheader" scope="col" aria-colindex="7" class="">
            <div>Actions</div>
         </th>
      </tr>
   </thead>
   <tbody role="rowgroup">

<tr  v-for="wkorder, key in InspectionWorkOrder">
        <td>{{++key}}</td>
        <td><router-link  :to="'/apps/invoice/preview/4987'">{{ wkorder.work_order_number}}</router-link></td>
        <td>{{ wkorder.added_on}}</td>
        <td>{{ wkorder.total_price}}</td>
        <td>{{ wkorder.status}}</td>
        <td></td>

      </tr>
      <!---->
 <!--      <tr role="row" class="b-table-empty-row" v-if="InspectionWorkOrder == null">
         <td colspan="6" role="cell" class="">
            <div role="alert" aria-live="polite">
               <div class="text-center my-2">No matching records found</div>
            </div>
         </td>
      </tr> -->
      <!---->
   </tbody>
   <!---->
</table>

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
              <b-col class="displayFlexColright">

                  <b-card
                        class="card-transaction custDetail addbordered"
                        no-body
                      >
                        <b-card-header  @mouseover="customereditactiveicon = false"
    @mouseleave="customereditactiveicon = true" >
                          <b-card-title> Customer Information</b-card-title>
                          <feather-icon
                            icon="EditIcon"
                            size="14"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-toggle.update-customer-right
                            variant="outline-primary"
                            v-if="!customereditactiveicon"
                          />
                          <b-sidebar
                              id="update-customer-right"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              #default="{ hide }"
                            >
                              <b-card-code title="Update Customer" class="nobordereredtocard">

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
                          <div class="row" style="margin-bottom: 10px">
                            <div class="col-md-12">
                              <feather-icon
                                  icon="UserIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">{{inspection.customer_first_name }} {{inspection.customer_last_name }}</span>
                            </div>
                          </div>
                          <div class="row" style="margin-bottom: 10px">
                            <div class="col-md-12">
                              <feather-icon
                                  icon="MapIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">{{inspection.customer_address }}</span>
                            </div>
                          </div>
                          <div class="row" style="margin-bottom: 10px">
                            <div class="col-md-12">
                              <feather-icon
                                  icon="PhoneIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">{{inspection.customer_phone }}</span>
                            </div>
                          </div>
                          <div class="row" style="margin-bottom: 10px">
                            <div class="col-md-12">
                              <feather-icon
                                  icon="MailIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">{{inspection.customer_email }}</span>
                            </div>
                          </div>
                        </b-card-body>
                      </b-card>

                      <b-card
                        class="card-transaction driverDetail addbordered"
                        no-body
                      >
                        <b-card-header  @mouseover="paymenteditactiveicon = false"
    @mouseleave="paymenteditactiveicon = true" >
                          <b-card-title> Payment Information</b-card-title>
                          <feather-icon
                            icon="PlusIcon"
                            size="18"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-toggle.payment-form
                            variant="outline-primary"
                            v-if="!paymenteditactiveicon"
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

                                  <b-col cols="12">
                                    <b-form-group
                                      label="Payment #"
                                      label-for="defaultLabel"
                                    >
                                      <b-form-input
                                        id="defaultLabel"
                                        placeholder="Enter Number"
                                        readonly
                                      />
                                    </b-form-group>
                                  </b-col>

                                 
                                  <b-col cols="12">
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
                                  <b-col cols="12">
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
                                  <b-col cols="12">
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

                                  <b-col cols="12">
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

                                  <b-col cols="12">
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
                            class="transaction-item paymentCont"
                          > 
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  Open Balance
                                </h6>
                              </b-media-body>
                            </b-media>
                            <div
                              class=" rightDetai"
                              :class="text-info"
                            >
                              0$
                            </div>
                          </div>
                          <div
                            class="transaction-item paymentCont"
                          > 
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  Already Paid
                                </h6>
                              </b-media-body>
                            </b-media>
                            <div
                              class=" rightDetai"
                              :class="text-info"
                            >
                              0$
                            </div>
                          </div>
                          <div
                            class="transaction-item paymentCont"
                          > 
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  Storage Dues
                                </h6>
                              </b-media-body>
                            </b-media>
                            <div
                              class=" rightDetai"
                              :class="text-info"
                            >
                              0$
                            </div>
                          </div>
                          <div
                            class="transaction-item paymentCont"
                          > 
                            <b-media no-body>
                              <b-media-body>
                                <h6 class="transaction-title">
                                  Remaining Balance
                                </h6>
                              </b-media-body>
                            </b-media>
                            <div
                              class=" rightDetai"
                              :class="text-info"
                            >
                              0$
                            </div>
                          </div>
                          <div
                            class="transaction-item paymentCont text-right" style="
    float: right;
    margin-top: 20px;
"
                          > 
                          <a href="javascript:void()" v-b-toggle.payment-history>Payment History</a>
                        </div>
                       
                          <b-sidebar
                              id="payment-history"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              #default="{ hide }"
                            >
                              <b-card-code title="Payment History">

                                <div>
                                  <b-row>

                                   <b-col cols="12">
                                  <div class="employee-task d-flex justify-content-between align-items-center"><div class="media"><div class="media-aside mr-75 align-self-start"></div> <div class="media-body my-auto"><h6 class="mb-0">
            Payment # 2101020829
          </h6> <small>Amount :$200</small><br>
        <small>Payment Mode :Original Dock Receipt</small></div></div> <div class="d-flex align-items-center" style="position: relative;width: 15%"><small class="text-muted mr-75">9hr 20m</small> <div style="min-height: 32.7px;"><div id="apexcharts2lykz0m3j" class="apexcharts-canvas apexcharts2lykz0m3j apexcharts-theme-light" style="width: 30px; height: 32.7px;">
<div class="apexcharts-legend"></div></div></div>
<div class="resize-triggers"><div class="expand-trigger"><div style="width: 86px; height: 34px;"></div></div><div class="contract-trigger"></div></div></div></div>
<hr>
  <div class="employee-task d-flex justify-content-between align-items-center"><div class="media"><div class="media-aside mr-75 align-self-start"></div> <div class="media-body my-auto"><h6 class="mb-0">
            Payment # 2101020829
          </h6><small>Amount :$200</small><br>
        <small>Payment Mode :Original Dock Receipt</small></div></div> <div class="d-flex align-items-center" style="position: relative;width: 15%"><small class="text-muted mr-75">9hr 20m</small> <div style="min-height: 32.7px;"><div id="apexcharts2lykz0m3j" class="apexcharts-canvas apexcharts2lykz0m3j apexcharts-theme-light" style="width: 30px; height: 32.7px;">
<div class="apexcharts-legend"></div></div></div>
<div class="resize-triggers"><div class="expand-trigger"><div style="width: 86px; height: 34px;"></div></div><div class="contract-trigger"></div></div></div></div>
                                  </b-col>

                                </b-row>
                                </div>
                              
                                <div class="d-flex mt-2">
                                 
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
                          
                        </b-card-body>
                      </b-card>

    
                      
                      <b-card
                        class="card-transaction activityDetail addbordered"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Documents</b-card-title>
                        </b-card-header>

                        <b-card-body>
                          <div class="employee-task d-flex justify-content-between align-items-center"><div class="media"><div class="media-aside mr-75 align-self-start"><span class="b-avatar badge-secondary rounded" style="width: 42px; height: 42px;"><span class="b-avatar-img"><img src="/images/_/_/_/_/twic_terminal/frontend/src/assets/images/portrait/small/avatar-s-9.jpg" alt="avatar"></span><!----></span></div> <div class="media-body my-auto"><h6 class="mb-0">
            Ryan Harrington
          </h6> <small>iOS Developer</small></div></div> <div class="d-flex align-items-center" style="position: relative;width: 15%"><small class="text-muted mr-75">9hr 20m</small> <div style="min-height: 32.7px;"><div id="apexcharts2lykz0m3j" class="apexcharts-canvas apexcharts2lykz0m3j apexcharts-theme-light" style="width: 30px; height: 32.7px;">
<div class="apexcharts-legend"></div></div></div><div class="resize-triggers"><div class="expand-trigger"><div style="width: 86px; height: 34px;"></div></div><div class="contract-trigger"></div></div></div></div>
<div style="clear: both;height: 15px"></div>
                          <div class="browser-states" style="
    /* margin-bottom: 58px; */
    clear: both;
"><div class="media" style="
    float: left;
    width: 80%;
"><img src="/images/_/_/_/_/twic_terminal/frontend/src/assets/images/icons/google-chrome.png" alt="browser img" height="30" class="mr-1"> <h6 class="align-self-center my-auto">
         Google Chrome
       </h6></div> <div class="d-flex align-items-center" style="position: relative;float: right;width: 20%;"><span class="font-weight-bold text-body-heading mr-1" style="
    display: none;
">54.4%</span> <div style="min-height: 32.7px;"><div id="apexchartsns778nqcf" class="apexcharts-canvas apexchartsns778nqcf apexcharts-theme-light" style="width: 30px; height: 32.7px;"><svg id="SvgjsSvg2315" width="30" height="32.7" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" xmlns:data="ApexChartsNS" transform="translate(0, 0)" class="apexcharts-svg" style="background: transparent;"><g id="SvgjsG2317" transform="translate(-15, -12)" class="apexcharts-inner apexcharts-graphical"><defs id="SvgjsDefs2316"><clipPath id="gridRectMaskns778nqcf"><rect id="SvgjsRect2319" width="66" height="59" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskns778nqcf"><rect id="SvgjsRect2320" width="64" height="61" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG2321" class="apexcharts-radialbar"><g id="SvgjsG2322"><g id="SvgjsG2323" class="apexcharts-tracks"><g id="SvgjsG2324" rel="1" class="apexcharts-radialbar-track apexcharts-track"><path id="apexcharts-radialbarTrack-0" d="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 29.997984315000203 16.9509757856578" fill="none" fill-opacity="1" stroke="rgba(233,236,239,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="3.3987853658536604" stroke-dasharray="0" data:pathOrig="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 29.997984315000203 16.9509757856578" class="apexcharts-radialbar-area"></path></g></g><g id="SvgjsG2326"><g id="SvgjsG2329" seriesName="seriesx1" rel="1" data:realIndex="0" class="apexcharts-series apexcharts-radial-series"><path id="SvgjsPath2330" d="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 26.816657454807142 39.60163477179886" fill="none" fill-opacity="0.85" stroke="rgba(115,103,240,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="3.503902439024392" stroke-dasharray="0" data:angle="196" data:value="54.4" index="0" j="0" data:pathOrig="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 26.816657454807142 39.60163477179886" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0"></path></g><circle id="SvgjsCircle2327" r="4.849631707317069" cx="30" cy="28.5" fill="transparent" class="apexcharts-radialbar-hollow"></circle><g id="SvgjsG2328" transform="translate(0, 0) scale(1)" class="apexcharts-datalabels-group" style="opacity: 1;"></g></g></g></g><line id="SvgjsLine2331" x1="0" y1="0" x2="60" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2332" x1="0" y1="0" x2="60" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG2318" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div></div></div><div class="resize-triggers"><div class="expand-trigger"><div style="width: 85px; height: 34px;"></div></div><div class="contract-trigger"></div></div></div></div>
<div style="clear: both;height: 15px"></div>
<div class="browser-states" style="
    /* margin-bottom: 58px; */
    clear: both;
"><div class="media" style="
    float: left;
    width: 80%;
"><img src="/images/_/_/_/_/twic_terminal/frontend/src/assets/images/icons/google-chrome.png" alt="browser img" height="30" class="mr-1"> <h6 class="align-self-center my-auto">
         Google Chrome
       </h6></div> <div class="d-flex align-items-center" style="position: relative;float: right;width: 20%;"><span class="font-weight-bold text-body-heading mr-1" style="
    display: none;
">54.4%</span> <div style="min-height: 32.7px;"><div id="apexchartsns778nqcf" class="apexcharts-canvas apexchartsns778nqcf apexcharts-theme-light" style="width: 30px; height: 32.7px;"><svg id="SvgjsSvg2315" width="30" height="32.7" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" xmlns:data="ApexChartsNS" transform="translate(0, 0)" class="apexcharts-svg" style="background: transparent;"><g id="SvgjsG2317" transform="translate(-15, -12)" class="apexcharts-inner apexcharts-graphical"><defs id="SvgjsDefs2316"><clipPath id="gridRectMaskns778nqcf"><rect id="SvgjsRect2319" width="66" height="59" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskns778nqcf"><rect id="SvgjsRect2320" width="64" height="61" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG2321" class="apexcharts-radialbar"><g id="SvgjsG2322"><g id="SvgjsG2323" class="apexcharts-tracks"><g id="SvgjsG2324" rel="1" class="apexcharts-radialbar-track apexcharts-track"><path id="apexcharts-radialbarTrack-0" d="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 29.997984315000203 16.9509757856578" fill="none" fill-opacity="1" stroke="rgba(233,236,239,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="3.3987853658536604" stroke-dasharray="0" data:pathOrig="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 29.997984315000203 16.9509757856578" class="apexcharts-radialbar-area"></path></g></g><g id="SvgjsG2326"><g id="SvgjsG2329" seriesName="seriesx1" rel="1" data:realIndex="0" class="apexcharts-series apexcharts-radial-series"><path id="SvgjsPath2330" d="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 26.816657454807142 39.60163477179886" fill="none" fill-opacity="0.85" stroke="rgba(115,103,240,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="3.503902439024392" stroke-dasharray="0" data:angle="196" data:value="54.4" index="0" j="0" data:pathOrig="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 26.816657454807142 39.60163477179886" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0"></path></g><circle id="SvgjsCircle2327" r="4.849631707317069" cx="30" cy="28.5" fill="transparent" class="apexcharts-radialbar-hollow"></circle><g id="SvgjsG2328" transform="translate(0, 0) scale(1)" class="apexcharts-datalabels-group" style="opacity: 1;"></g></g></g></g><line id="SvgjsLine2331" x1="0" y1="0" x2="60" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2332" x1="0" y1="0" x2="60" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG2318" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div></div></div><div class="resize-triggers"><div class="expand-trigger"><div style="width: 85px; height: 34px;"></div></div><div class="contract-trigger"></div></div></div></div>
<div style="clear: both;height: 15px"></div>
<div class="browser-states" style="
    /* margin-bottom: 58px; */
    clear: both;
"><div class="media" style="
    float: left;
    width: 80%;
"><img src="/images/_/_/_/_/twic_terminal/frontend/src/assets/images/icons/google-chrome.png" alt="browser img" height="30" class="mr-1"> <h6 class="align-self-center my-auto">
         Google Chrome
       </h6></div> <div class="d-flex align-items-center" style="position: relative;float: right;width: 20%;"><span class="font-weight-bold text-body-heading mr-1" style="
    display: none;
">54.4%</span> <div style="min-height: 32.7px;"><div id="apexchartsns778nqcf" class="apexcharts-canvas apexchartsns778nqcf apexcharts-theme-light" style="width: 30px; height: 32.7px;"><svg id="SvgjsSvg2315" width="30" height="32.7" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" xmlns:data="ApexChartsNS" transform="translate(0, 0)" class="apexcharts-svg" style="background: transparent;"><g id="SvgjsG2317" transform="translate(-15, -12)" class="apexcharts-inner apexcharts-graphical"><defs id="SvgjsDefs2316"><clipPath id="gridRectMaskns778nqcf"><rect id="SvgjsRect2319" width="66" height="59" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskns778nqcf"><rect id="SvgjsRect2320" width="64" height="61" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG2321" class="apexcharts-radialbar"><g id="SvgjsG2322"><g id="SvgjsG2323" class="apexcharts-tracks"><g id="SvgjsG2324" rel="1" class="apexcharts-radialbar-track apexcharts-track"><path id="apexcharts-radialbarTrack-0" d="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 29.997984315000203 16.9509757856578" fill="none" fill-opacity="1" stroke="rgba(233,236,239,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="3.3987853658536604" stroke-dasharray="0" data:pathOrig="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 29.997984315000203 16.9509757856578" class="apexcharts-radialbar-area"></path></g></g><g id="SvgjsG2326"><g id="SvgjsG2329" seriesName="seriesx1" rel="1" data:realIndex="0" class="apexcharts-series apexcharts-radial-series"><path id="SvgjsPath2330" d="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 26.816657454807142 39.60163477179886" fill="none" fill-opacity="0.85" stroke="rgba(115,103,240,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="3.503902439024392" stroke-dasharray="0" data:angle="196" data:value="54.4" index="0" j="0" data:pathOrig="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 26.816657454807142 39.60163477179886" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0"></path></g><circle id="SvgjsCircle2327" r="4.849631707317069" cx="30" cy="28.5" fill="transparent" class="apexcharts-radialbar-hollow"></circle><g id="SvgjsG2328" transform="translate(0, 0) scale(1)" class="apexcharts-datalabels-group" style="opacity: 1;"></g></g></g></g><line id="SvgjsLine2331" x1="0" y1="0" x2="60" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2332" x1="0" y1="0" x2="60" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG2318" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div></div></div><div class="resize-triggers"><div class="expand-trigger"><div style="width: 85px; height: 34px;"></div></div><div class="contract-trigger"></div></div></div></div>
<div style="clear: both;height: 15px"></div>
<div class="browser-states" style="
    /* margin-bottom: 58px; */
    clear: both;
"><div class="media" style="
    float: left;
    width: 80%;
"><img src="/images/_/_/_/_/twic_terminal/frontend/src/assets/images/icons/google-chrome.png" alt="browser img" height="30" class="mr-1"> <h6 class="align-self-center my-auto">
         Google Chrome
       </h6></div> <div class="d-flex align-items-center" style="position: relative;float: right;width: 20%;"><span class="font-weight-bold text-body-heading mr-1" style="
    display: none;
">54.4%</span> <div style="min-height: 32.7px;"><div id="apexchartsns778nqcf" class="apexcharts-canvas apexchartsns778nqcf apexcharts-theme-light" style="width: 30px; height: 32.7px;"><svg id="SvgjsSvg2315" width="30" height="32.7" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" xmlns:data="ApexChartsNS" transform="translate(0, 0)" class="apexcharts-svg" style="background: transparent;"><g id="SvgjsG2317" transform="translate(-15, -12)" class="apexcharts-inner apexcharts-graphical"><defs id="SvgjsDefs2316"><clipPath id="gridRectMaskns778nqcf"><rect id="SvgjsRect2319" width="66" height="59" x="-3" y="-1" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskns778nqcf"><rect id="SvgjsRect2320" width="64" height="61" x="-2" y="-2" rx="0" ry="0" opacity="1" stroke-width="0" stroke="none" stroke-dasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG2321" class="apexcharts-radialbar"><g id="SvgjsG2322"><g id="SvgjsG2323" class="apexcharts-tracks"><g id="SvgjsG2324" rel="1" class="apexcharts-radialbar-track apexcharts-track"><path id="apexcharts-radialbarTrack-0" d="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 29.997984315000203 16.9509757856578" fill="none" fill-opacity="1" stroke="rgba(233,236,239,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="3.3987853658536604" stroke-dasharray="0" data:pathOrig="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 29.997984315000203 16.9509757856578" class="apexcharts-radialbar-area"></path></g></g><g id="SvgjsG2326"><g id="SvgjsG2329" seriesName="seriesx1" rel="1" data:realIndex="0" class="apexcharts-series apexcharts-radial-series"><path id="SvgjsPath2330" d="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 26.816657454807142 39.60163477179886" fill="none" fill-opacity="0.85" stroke="rgba(115,103,240,0.85)" stroke-opacity="1" stroke-linecap="round" stroke-width="3.503902439024392" stroke-dasharray="0" data:angle="196" data:value="54.4" index="0" j="0" data:pathOrig="M 30 16.9509756097561 A 11.5490243902439 11.5490243902439 0 1 1 26.816657454807142 39.60163477179886" class="apexcharts-radialbar-area apexcharts-radialbar-slice-0"></path></g><circle id="SvgjsCircle2327" r="4.849631707317069" cx="30" cy="28.5" fill="transparent" class="apexcharts-radialbar-hollow"></circle><g id="SvgjsG2328" transform="translate(0, 0) scale(1)" class="apexcharts-datalabels-group" style="opacity: 1;"></g></g></g></g><line id="SvgjsLine2331" x1="0" y1="0" x2="60" y2="0" stroke="#b6b6b6" stroke-dasharray="0" stroke-width="1" class="apexcharts-ycrosshairs"></line><line id="SvgjsLine2332" x1="0" y1="0" x2="60" y2="0" stroke-dasharray="0" stroke-width="0" class="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG2318" class="apexcharts-annotations"></g></svg><div class="apexcharts-legend"></div></div></div><div class="resize-triggers"><div class="expand-trigger"><div style="width: 85px; height: 34px;"></div></div><div class="contract-trigger"></div></div></div></div>
                        </b-card-body>
                      </b-card>

                      <b-card
                        class="card-transaction custDetail addbordered"
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
                        class="card-transaction custDetail addbordered"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Activities</b-card-title>
                          
                          <b-sidebar
                              id="customer-right"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              #default="{ hide }"
                            >
                              <b-card-code title="Vehicle Details">

                              
                              </b-card-code>
                            </b-sidebar>
                          
                        </b-card-header>

                        <b-card-body>
                         <template>
  <app-timeline>

    <!-- 12 INVOICES HAVE BEEN PAID -->
    <app-timeline-item icon="DollarSignIcon">
      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
        <h6>Invoices paid</h6>
        <small class="text-muted">12 min ago</small>
      </div>
      <p>Invoices have been paid to the company.</p>
      <p>
        <b-img
          :src="require('@/assets/images/icons/pdf.png')"
          height="auto"
          width="20"
          class="mr-1"
        />
        <span class="align-bottom">invoice.pdf</span>
      </p>
    </app-timeline-item>

    <app-timeline-item
      variant="secondary"
      icon="UserIcon"
    >

      <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
        <h6>Client Meeting</h6>
        <small class="text-muted">45 min ago</small>
      </div>
      <p>Project meeting with john @10:15am.</p>
      <b-media>
        <template #aside>
          <b-avatar :src="require('@/assets/images/avatars/12-small.png')" />
        </template>
        <h6>John Doe (Client)</h6>
        <p>CEO of Infibeam</p>
      </b-media>
    </app-timeline-item>

   


  </app-timeline>
</template>
                             
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

                     </b-col>

            </b-row>   
          </section>

       
    
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
import {BRow, BCol, BBadge, VBToggle, BSidebar, BFormTextarea, BButton, BFormGroup, BFormInput, BModal, VBModal, BListGroup, BListGroupItem, BImg, BTable, BFormRadio, BFormFile, BTabs, BTab, BCardText, BCard, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMedia, BMediaAside, BAvatar,BAvatarGroup,BCollapse} from 'bootstrap-vue'

import AppTimeline from '@core/components/app-timeline/AppTimeline.vue'
import AppTimelineItem from '@core/components/app-timeline/AppTimelineItem.vue'
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

import invoiceStoreModule from './invoiceStoreModule'
import axios from 'axios'
export default {
  mounted() {
            console.log('Component mounted.')
            console.log(this.$route.params);
            // this.getcountries();
           this.getinspectiondata(this.$route.params.id);
        },
  components: {
    AppTimeline,
    AppTimelineItem,
    axios,
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
    getinspectiondata: function(vin_number){
            axios.post('http://koboautos.com/twic-terminal/connect/api/inspection-details-by-vin-number?vin_number='+vin_number)
              .then((response) => {
                console.log(response);
                console.log(response.data.inspectionDetails.key);
                this.inspection = response.data.inspectionDetails;
                this.inspectionotherDetails = response.data.Inspection;
                this.InspectionWorkOrder = response.data.InspectionWorkOrder;
                // this.formfields= response.data;
                // console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
              
           },
    mouseOver: function(){
            this.vehicleeditactive = !this.vehicleeditactive;   
        },
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
      vehicleeditactiveicon: true,
      Inspectionoptionsactivated: true,
      customereditactiveicon: true,
      paymenteditactiveicon: true,
      codePlacement,
      selectedCountry: 'Select',
      optionCountry: ['Original Dock Receipt', 'Stamped Dock Receipts'],
      optionCategory: ['Select'],
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
      inspection: {
                  vin_number: '',
                  make: '',
                  model: '',
                  year: '',
                  body_type: '',
                  engine_type: '',
                  liters: '',
                  length: '',
                  weight: '',
                  height: '',
                  curb_weight: '',
                  trim: '',
                  color: '',
                  driver_name: '',
                  company_name: '',

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
  /*font-size: 1rem !important;*/
  padding-left: 7px !important;
}

.main-menu .navbar-header .navbar-brand .brand-text {
  color: #f4bc33 !important;
  font-weight: 600;
  letter-spacing: 0.01rem;
  /*font-size: 1.45rem;*/
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
    /*font-size: 13px;*/
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
    /*font-size: 13px;*/
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
  width: 18%;
  max-width: 30% !important;
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
#description-list-alignment .addbordered{
      border: 0.25px solid #ff9f43 !important;
}
  #vehicle-detail-form{width: 40% !important;}
  #edit-inspection-form-view{width: 50% !important;}
  .nobordereredtocard{border: none !important;}
</style>