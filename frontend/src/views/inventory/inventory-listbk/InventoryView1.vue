<template>



  <b-card title="" class="bgTransparent" style="padding: 0px;margin: 0px;">

                          <b-sidebar
                              id="inspection-notes"
                              bg-variant="white"
                              right
                              backdrop
                              shadow
                              #default="{ hide }"
                            >
                              <b-card-code title="Inspection Notes">

                                <div>
                                  <b-row>

                                   <b-col cols="12">

<div class="employee-task d-flex justify-content-between align-items-center mb-1" style="border-bottom: 0.25px solid rgb(208 204 201) !important;" >
   <div class="media" style="width: 100%">
      <div class="media-aside mr-75 align-self-start"></div>
      <div class="media-body my-auto">
         <b-form
          class=""
          @submit="addNotes"
        > 
        <b-form-group
              label="Description"
              label-for="vin-number"
            >
           <textarea class="form-control" v-model="AddInspectionNotes.description"></textarea>
         </b-form-group>
         <div role="group" class="form-group" data-v-ede98060="" id="__BVID__225" style="text-align: right;">
          <b-button
                                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                                    type="button"
                                    variant="outline-secondary btn-sm"
                                    @click="hide"
                                  >
                                    Cancel
                                  </b-button>
        <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="primary"
              class="btn-sm"
              type="submit"

            >
              Submit
            </b-button>
          </div>
         </b-form>
        
      </div>
   </div>


</div>
<div class="employee-task d-flex justify-content-between align-items-center mb-1" style="border-bottom: 0.25px solid rgb(208 204 201) !important;" v-for="notes, key in InspectionNotes">
   <div class="media" style="width: 100%">
      <div class="media-aside mr-75 align-self-start"></div>
      <div class="media-body my-auto" @mouseover="Inspectionnotesactivation = false"
    @mouseleave="Inspectionnotesactivation = true" >
        <div>
          <feather-icon
            icon="DeleteIcon"
            size="16"
            class="mx-1"
            v-on:click="deletenotes(notes.id)"
             style="float: right; margin-right: 0px"
          />
          <feather-icon
                                      icon="EditIcon"
                                      size="14"
                                      class="cursor-pointer"
                                      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                                      @click="updatenotes(notes.id,notes.description)"
                                      variant="outline-primary"
                                      
                                      style="float: right;"
                                    />

        </div>
         <p style="width: 90%;float: left;">{{ notes.description }}</p>
         <small class="text-muted mr-75" style="float: right;">{{ makeCorrectDate(notes.added_on) }}</small> 
      </div>
   </div>

<div style="clear: both;"></div>
</div>



 
                                  </b-col>

                                </b-row>
                                </div>
                              
                                <!-- <div class="d-flex mt-2">
                                 
                                  <b-button
                                    v-ripple.400="'rgba(186, 191, 199, 0.15)'"
                                    type="button"
                                    variant="outline-secondary"
                                    @click="hide"
                                  >
                                    Cancel
                                  </b-button>
                                </div> -->
                              </b-card-code>
                          </b-sidebar>
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

                                  
                                    <b-col cols="4">
                                      
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
                                 

                                    <b-col cols="4">

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
                                    <b-col cols="4">
                                      
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

                                    <b-col cols="4">

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
                                    <b-col cols="4">
                                      
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
                                
                                <b-tab title="Front" active>
                                  <b-card-text>
                                    <section id="description-list-alignment">

                                      <b-row class="match-height displayFlex">
                                        
                                        <b-col class="col-12">
                                          <b-card
                                                  class="card-transaction "
                                                  no-body
                                                >

                                                  <b-card-body>
                                                    <div
                                                      v-for="information in FrontData"
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
                                        
                                        <b-col class="col-12">
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
                                        
                                        <b-col class="col-12">
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
                                        
                                        <b-col class="col-12">
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
                                        
                                       <b-col class="col-12">
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
 <div class="row innercard">
   <div class="col-md-8 col-lg-8 col-xl-8 col-12 vehicleDetailsection">
      <div class="card border-default">
         <!----><!---->
         <div class="card-body">
            <!----><!---->
            <div class="row">
               <div class="d-flex justify-content-between flex-column col-xl-6 col-21">
                  <div class="d-flex justify-content-start">
                     <span class="b-avatar badge-light-info rounded" style="width: 104px; height: 104px;">
                        <span class="b-avatar-img"><img src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg" alt="avatar"></span><!---->
                     </span>
                     <div class="d-flex flex-column ml-1" @mouseover="vehicleeditactiveicon = false"
    @mouseleave="vehicleeditactiveicon = true" >
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
                  <div class="d-flex align-items-center mt-2">
                     <div class="d-flex align-items-center mr-1">
                        <span class="b-avatar badge-light-primary rounded">
                           <span class="b-avatar-custom">
                             <b-avatar
                                variant="light-primary"
                                rounded
                              >
                                <feather-icon
                                  icon="WatchIcon"
                                  size="18"
                                />
                              </b-avatar>
                           </span>
                           <!---->
                        </span>
                        <div class="ml-1">
                           <h5 class="mb-0 f-13">
                              {{ inspection.storage_duration }}
                           </h5>
                           <small>Storage</small>
                        </div>
                     </div>
                     <div class="d-flex align-items-center mr-1">
                        <span class="b-avatar badge-light-success rounded">
                           <span class="b-avatar-custom">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trending-up">
                                 <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                 <polyline points="17 6 23 6 23 12"></polyline>
                              </svg>
                           </span>
                           <!---->
                        </span>
                        <div class="ml-1">
                           <h5 class="mb-0 f-13">
                             {{ inspectionotherDetails.amount_remaining }}k
                           </h5>
                           <small>Open</small>
                        </div>
                     </div>
                     <div class="d-flex align-items-center">
                        <span class="b-avatar badge-light-success rounded">
                           <span class="b-avatar-custom">
                              <b-avatar
                                variant="light-primary"
                                rounded
                              >
                                <feather-icon
                                  icon="LogInIcon"
                                  size="18"
                                />
                              </b-avatar>
                           </span>
                           <!---->
                        </span>
                        <div class="ml-1">
                           <h5 class="mb-0 f-13">
                             {{ inspectionotherDetails.amount_remaining }}k
                           </h5>
                           <small>{{inspection.status }}</small>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="col-xl-6 col-12">
                  <table class="mt-2 mt-xl-0 w-100">
                     <tr>
                              <th class="pb-50 flex-row">
                                <feather-icon
                                  icon="BoxIcon"
                                  class="mr-50"
                                />
                                <p class="font-weight-bold f-12 w-30 dimensionP">Dimnesions</p>
                                <p class="font-weight-bold f-12 dimensionP">{{inspection.height }} x {{inspection.length}} x {{inspection.weight}} in</p>
                              </th>
                              <!-- <td class="pb-50">
                                {{ userData.username }}
                                John Doe
                              </td> -->
                            </tr>
                            <tr>
                              <th class="pb-50 flex-row">
                                <feather-icon
                                  icon="DatabaseIcon"
                                  class="mr-50"
                                />
                                <p class="font-weight-bold f-12 w-30 dimensionP">Weight</p>
                                <p class="font-weight-bold f-12 dimensionP">{{inspection.liters }} Lbs</p>
                              </th>
                               <!--<td class="pb-50 text-capitalize">
                                {{ userData.status }}
                                Active
                              </td> -->
                            </tr>
                            <tr>
                              <th class="pb-50 flex-row">
                                <feather-icon
                                  icon="InfoIcon"
                                  class="mr-50"
                                />
                                <p class="font-weight-bold f-12 w-30 dimensionP">Condition</p>
                                <p class="font-weight-bold f-12 dimensionP">Non-Runner</p>
                              </th>
                              
                            </tr>
                            <tr>
                              <th class="pb-50 flex-row">
                                <feather-icon
                                  icon="KeyIcon"
                                  class="mr-50"
                                />
                                <span class="font-weight-bold f-12 w-30 dimensionP">Key(s)</span>
                                <span class="font-weight-bold f-12 dimensionP">Yes</span>
                              </th>
                              
                            </tr>
                            <tr>
                              <th class="flex-row">
                                <feather-icon
                                  icon="AlignLeftIcon"
                                  class="mr-50"
                                />
                                <p class="font-weight-bold f-12 w-30 dimensionP">Title</p>
                                <p class="font-weight-bold f-12 dimensionP">No</p>
                              </th>
                              
                            </tr>
                  </table>
               </div>
            </div>
         </div>
         <!----><!---->
      </div>
   </div>
   <div class="col-md-4 col-lg-4 col-xl-4 col-12 vehicleDetailsection">
        
      <div class="card border-default customerInfo"  @mouseover="customereditactiveicon = false"
    @mouseleave="customereditactiveicon = true" >
         <!----><!---->
         <div class="card-header d-flex justify-content-between align-items-center pt-75 pb-25">
            <h5 class="mb-0">
               Customer Info
            </h5>
            <feather-icon
                            icon="EditIcon"
                            size="14"
                            class="cursor-pointer"
                            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                            v-b-toggle.update-customer-right
                            variant="outline-primary"
                            v-if="!customereditactiveicon"
                          />
            <span class="badge badge-light-primary">
            <feather-icon icon="UserIcon" class="mr-75"  />
            </span>
         </div>
         <div class="card-body" style="padding-top: 1px !important;">
            <!----><!---->
            <ul class="list-unstyled my-1">
               <li class="pb-1"><span class="align-middle">
                 <feather-icon
                                  icon="UserIcon"
                                  class="mr-75"
                                />
               <span class="font-weight-bold">{{inspection.customer_first_name }} {{inspection.customer_last_name }}</span>
               </span>
             </li>
             <li class="pb-1">
              <span class="align-middle">
                 <feather-icon
                                  icon="MapIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">{{inspection.customer_address }}</span>
               </span>
             </li>
             <li class="pb-1"><span class="align-middle">
                <feather-icon
                                  icon="PhoneIcon"
                                  class="mr-75"
                                />
                  <span class="font-weight-bold">{{inspection.customer_phone }}</span>
               </span>
             </li>
             <li class="pb-1"><span class="align-middle">
                 <feather-icon
                                  icon="MailIcon"
                                  class="mr-75"
                                />
                                <span class="font-weight-bold">{{inspection.customer_email }}</span>
               </span>
             </li>
         
            </ul>
         </div>
         <!----><!---->
      </div>
   </div>
</div> 
<div style="clear: both;height: 10px"></div>
 <div class="row innercard">
   <div class="col-md-8 col-lg-8 col-xl-8 col-12 ">
      <b-card
                        class="card-transaction addbordered border-default"
                        no-body
                      >
                        <b-card-header  @mouseover="Inspectionoptionsactivated = false" @mouseleave="Inspectionoptionsactivated = true">
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
                          
                         <img src="/inventory_image.png" style="width: 100%">
                            
                          
                        </b-card-body>
                  </b-card>
   </div>
   <div class="col-md-4 col-lg-4 col-xl-4 col-12 ">

                        <template>
                         <b-card-code class="timelineHeader">
                          <b-card-title > Timeline
                            <a href="javascript:void()" v-b-toggle.inspection-notes class="view_notes_link"> View Notes</a>
                          </b-card-title>

                           <app-timeline>


                             <!-- 12 INVOICES HAVE BEEN PAID -->
                             <app-timeline-item>
                               <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                 <h6>12 Invoices have been paid</h6>
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

                             <app-timeline-item variant="secondary">

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

                           <template #code>
                             {{ codeCustomContent }}
                           </template>
                         </b-card-code>
                       </template>
       <b-card
                        class="card-transaction custDetail addbordered timelinedetailsectiom"
                        no-body
                      >
                      

                        <b-card-header>
                          <b-card-title> Timeline
                            </b-card-title>

                           
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

                            <a href="javascript:void()" v-b-toggle.inspection-notes class="view_notes_link"> View Notes</a>
                          
                        </b-card-header>

                        <b-card-body>
                         <template>
  <app-timeline style="width: 100%">

    <!-- 12 INVOICES HAVE BEEN PAID -->

       <li data-v-78eec882="" class="timeline-item timeline-variant-primary" v-for="insactivity, key in InspectionActivities">
      <div data-v-78eec882="" class="timeline-item-icon d-flex align-items-center justify-content-center rounded-circle">
          <svg data-v-78eec882="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user">
            <path data-v-78eec882="" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle data-v-78eec882="" cx="12" cy="7" r="4"></circle>
         </svg>
      </div>
      <div data-v-78eec882="" class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0" style="
    text-align: right;
    float: right;
">
         <!-- <h6 data-v-78eec882="">Invoices paid</h6> -->
         <small data-v-78eec882="" class="text-muted">{{ makeCorrectDate(insactivity.added_on) }}</small>
      </div>
      <p data-v-78eec882="">{{insactivity.activity}}</p>
     <!--  <p data-v-78eec882=""><img data-v-78eec882="" src="/images/_/_/_/_/twic_terminal/frontend/src/assets/images/icons/pdf.png" width="20" class="mr-1"> <span data-v-78eec882="" class="align-bottom">invoice.pdf</span></p> -->
   </li>


  </app-timeline>
</template>


                             
                        </b-card-body>
                      </b-card>
               

   </div>
</div>   

<div style="clear: both;height: 10px"></div> 

 <div class="row innercard">
   <div class="col-md-8 col-lg-8 col-xl-8 col-12 ">
   <template>
  <b-card-code class="gallerCard"
  >
  <b-card-header class="pl-0 pr-0 galleryHeader">
       <div>
         <b-card-title>Gallery</b-card-title>
       </div>

      <b-dropdown
        variant="link"
        no-caret
        class="chart-dropdown documentsDropdown"
        toggle-class="p-0"
      >
        <template #button-content>
          <feather-icon
            icon="MoreVerticalIcon"
            size="18"
            class="text-body cursor-pointer"
          />
        </template>
        <b-dropdown-item href="#">
          Last 28 Days
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Last Month
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Last Year
        </b-dropdown-item>
      </b-dropdown>
    </b-card-header>
    <swiper
      class="swiper-paginations gallerySlider"
      :options="swiperOptions"
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    >
      <swiper-slide
        v-for="(data,index) in swiperData"
        :key="index"
      >
        <b-img
          :src="data.img"
          fluid
        />
      </swiper-slide>

      <div
        slot="pagination"
        class="swiper-pagination"
      />
    </swiper>

    
  </b-card-code>
</template>
      <b-card
                        class="card-transaction addbordered"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Gallery</b-card-title>
                        </b-card-header>

                        <b-card-body>
                          <div class="demo-inline-spacing mt-2">

                            <img src="https://auto1-homepage.prod.mp.auto1.cloud/static/optimized/blue-car-hp-left-bmw.png" style="width: 100%" >
                          </div>
                        </b-card-body>
                      </b-card>

   </div>
   <div class="col-md-4 col-lg-4 col-xl-4 col-12 ">
                <template>
  <b-card
    no-body
    class="card-browser-states"
  >
    <b-card-header>
       <div>
         <b-card-title>Documents</b-card-title> 
         <b-card-text class="font-small-2">
           Last Updated: May 2021
         </b-card-text>
       </div>

      <b-dropdown
        variant="link"
        no-caret
        class="chart-dropdown documentsDropdown"
        toggle-class="p-0"
      >
        <template #button-content>
          <feather-icon
            icon="MoreVerticalIcon"
            size="18"
            class="text-body cursor-pointer"
          />
        </template>
        <b-dropdown-item href="#">
          Last 28 Days
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Last Month
        </b-dropdown-item>
        <b-dropdown-item href="#">
          Last Year
        </b-dropdown-item>
      </b-dropdown>
    </b-card-header>

    <!-- body -->
    <b-card-body class="ptb-0">

      <div
        class="browser-states mt-0 mb-2"
         v-for="insdoc, key in InspectionDocuments"
      >
        <b-media no-body>
          <b-media-body class="displayFlexDoc">
           <b-img
              v-bind:src="insdoc.icon"
              alt="browser img"
              class="w-12"
            />
            <h6 class="align-self-center my-auto w-65">
              {{ insdoc.title }}
            </h6>
            <div class="d-flex align-items-center" style="">
              <span class="font-weight-bold text-body-heading mr-1" style="
                 display: none;
                 ">54.4%</span> 
              <div style="min-height: 32.7px;">
                 <div id="apexchartsns778nqcf" class="apexcharts-canvas apexchartsns778nqcf apexcharts-theme-light" style="width: 30px; height: 32.7px;">
                    <feather-icon
                    icon="DeleteIcon"
                    size="16"
                    class="mx-1"
                    v-on:click="deletedocument(insdoc.key)"
                     style="float: right; margin-right: 0px"
                  />
                    <div class="apexcharts-legend"></div>
                 </div>
              </div>
              <!-- <vue-apex-charts
                type="radialBar"
                height="30"
                width="30"
                :options="chartData[index].options"
                :series="chartData[index].series"
              /> -->
           </div>
          </b-media-body>
        </b-media>
        
      </div>
      <div class="b-t-1">
  
   <b-form-file placeholder="Select file to up" v-model="AddInspectionDocuments.file" drop-placeholder="Select file to up" />
                               
              <div class="alignRight w-100 mt-1">
                <button type="button" class="btn btn-primary w-100" @click="uploaddocuments()">
                <span class="text-nowrap">Upload Document</span>
              </button>
              </div>
</div>
    </b-card-body>
    
    <!--/ body -->
  </b-card>
  
</template>
                <b-card
                        class="card-transaction activityDetail addbordered"
                        no-body
                      >
                        <b-card-header>
                          <b-card-title> Documents</b-card-title>
                        </b-card-header>

                        <b-card-body class="ptb-0">
                        <!--   <small>Last updated May 2020</small> -->

<div class="browser-states" style=" clear: both;"   v-for="insdoc, key in InspectionDocuments">
   <div class="media" style="
      float: left;
      width: 80%;
      ">
      <img v-bind:src="insdoc.icon" alt="browser img" height="25" class="mr-1 w-12"> 
      <h6 class="align-self-center my-auto f-12">
        
        <a v-bind:href="insdoc.file_name" target="_blank" download>
         {{ insdoc.title }}
       </a>
      </h6>
   </div>
   <div class="d-flex align-items-center" style="position: relative;float: right;width: 20%;">
      <span class="font-weight-bold text-body-heading mr-1" style="
         display: none;
         ">54.4%</span> 
      <div style="min-height: 32.7px;">
         <div id="apexchartsns778nqcf" class="apexcharts-canvas apexchartsns778nqcf apexcharts-theme-light" style="width: 30px; height: 32.7px;">
            <feather-icon
            icon="DeleteIcon"
            size="16"
            class="mx-1"
            v-on:click="deletedocument(insdoc.key)"
             style="float: right; margin-right: 0px"
          />
            <div class="apexcharts-legend"></div>
         </div>
      </div>
      <div class="resize-triggers">
         <div class="expand-trigger">
            <div style="width: 85px; height: 34px;"></div>
         </div>
         <div class="contract-trigger"></div>
      </div>
   </div>
   <div style="clear: both;height: 15px"></div>
</div>


<div style="clear: both;"></div>

<div class="b-t-1">
  
   <b-form-file placeholder="Select file to up" v-model="AddInspectionDocuments.file" drop-placeholder="Select file to up" />
                               
              <div class="alignRight w-100 mt-1">
                <button type="button" class="btn btn-primary w-100" @click="uploaddocuments()">
                <span class="text-nowrap">Upload Document</span>
              </button>
              </div>
</div>

                        </b-card-body>
                      </b-card>


   </div>
</div>  

 <div class="row innercard">
   <div class="col-md-12 col-lg-12 col-xl-12 col-12 ">

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

                        </b-card-header>

                        <b-card-body>
                          <div class="table-responsive">
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
</div>
  
                        </b-card-body>
                  </b-card>

               

   </div>
</div>   
<div style="clear: both;height: 10px"></div> 

       
    
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
import {BRow, BCol, BForm, BBadge, VBToggle, BSidebar, BFormTextarea, BButton, BFormGroup, BFormInput, BModal, VBModal, BListGroup, BListGroupItem, BImg, BTable, BFormRadio, BFormFile, BTabs, BTab, BCardText, BCard, BCardHeader, BCardTitle, BCardBody, BMediaBody, BMedia, BMediaAside, BAvatar,BAvatarGroup,BCollapse, BDropdown, BDropdownItem,} from 'bootstrap-vue'

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
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

import axios from 'axios'

const $trackBgColor = '#e9ecef'

export default {
  mounted() {
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
     BForm,
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

    BDropdown,
    BDropdownItem,
    VueApexCharts,

    Swiper,
    SwiperSlide,

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
                this.InspectionActivities = response.data.InspectionActivities;
                this.InspectionNotes = response.data.InspectionNotes;
                this.InspectionDocuments = response.data.InspectionDocuments;
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
    addNotes(e) {
    e.preventDefault();
  //    console.log(localStorage["note_row_id"]);
      //console.log(this.AddInspectionNotes.description);
      if(this.AddInspectionNotes.description != ''){
      axios({
                    method: 'post',
                    url: 'http://koboautos.com/twic-terminal/connect/api/create-inspection-notes?vin_number=' + this.inspection.vin_number+'&description=' + this.AddInspectionNotes.description+'&key=' + localStorage["note_row_id"],
                })
                .then(function (response) { 

                  console.log(response);
                  if (response.status == 200) { 
                          location.reload();
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
        }   
                
    },
    updatenotes(rowid,description) {
      this.AddInspectionNotes.description = description;
      localStorage["note_row_id"]=rowid;
      
    },
    uploaddocuments() {
if(this.AddInspectionDocuments.title != ''){
      const file = this.AddInspectionDocuments.file;
      const reader = new FileReader();


    reader.readAsDataURL(this.AddInspectionDocuments.file)
    reader.onload = ()=> {
//console.log(JSON.stringify(reader.result));
       //console.log(reader.result);

       axios.post('http://koboautos.com/twic-terminal/connect/api/upload-documents', {
            document: reader.result,
            status_list_id: this.AddInspectionDocuments.title,
            vin_number: this.inspection.vin_number,
          })
          .then(function (response) {
            location.reload();
            //console.log(response);
          });
        };

      
      
        }
    },
    // uploaddocuments(e) {
    //   e.preventDefault();
      
    //   //uploaddocuments
      
    // },
     makeCorrectDate(str) {
        return new Date(str).toISOString().split('T')[0]
    },
    deletenotes(rowid) {
      if(confirm("Do you really want to delete?")){
      axios({
                    method: 'post',
                    url: 'http://koboautos.com/twic-terminal/connect/api/delete-inspection-notes?&key=' + rowid,
                })
                .then(function (response) { 

                  console.log(response);
                  if (response.status == 200) { 
                        location.reload();
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
              }
      
    },
    deletedocument(rowid) {
      if(confirm("Do you really want to delete?")){
      axios({
                    method: 'post',
                    url: 'http://koboautos.com/twic-terminal/connect/api/delete-documents?&key=' + rowid,
                })
                .then(function (response) { 

                  console.log(response);
                  if (response.status == 200) { 
                        location.reload();
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
              }
      
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
  created() {
    for (let i = 0; i < this.browserData.length; i += 1) {
      const chartClone = JSON.parse(JSON.stringify(this.chart))
      chartClone.options.colors[0] = this.chartColor[i]
      chartClone.series[0] = this.chartSeries[i]
      this.chartData.push(chartClone)
    }
  },
  data() {
    return {

      vehicleeditactiveicon: true,
      Inspectionnotesactivation: true,
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


      /* eslint-disable global-require */
      swiperData: [
        { img: require('@/assets/images/slider/bmw-2.jpg') },
        { img: require('@/assets/images/slider/bmw-1.jpg') },
        { img: require('@/assets/images/slider/bmw-3.jpg') },
      ],
      /* eslint-disable global-require */

      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
        },
      },

      chartData: [],
      chartClone: {},
      chartColor: [$themeColors.success, $themeColors.warning, $themeColors.success, $themeColors.success, $themeColors.warning],
      chartSeries: [100, 0, 100, 100, 0],
      browserData: [
        {
          browserImg: require('@/assets/images/icons/google-chrome.png'),
          name: 'Google Chrome',
          usage: '54.4%',
        },
        {
          browserImg: require('@/assets/images/icons/mozila-firefox.png'),
          name: 'Mozila Firefox',
          usage: '6.1%',
        },
        {
          browserImg: require('@/assets/images/icons/apple-safari.png'),
          name: 'Apple Safari',
          usage: '14.6%',
        },
        {
          browserImg: require('@/assets/images/icons/internet-explorer.png'),
          name: 'Internet Explorer',
          usage: '4.2%',
        },
        {
          browserImg: require('@/assets/images/icons/opera.png'),
          name: 'Opera Mini',
          usage: '8.%',
        },
      ],
      chart: {
        series: [65],
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [$themeColors.primary],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%',
              },
              track: {
                background: $trackBgColor,
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: 'round',
          },
        },
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
      AddInspectionNotes: {
        rowid : '',
        description : ''
      },
      AddInspectionDocuments: {
        rowid : '',
        title : '',
        file : ''
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
          payment: 'Light',
          nonrunner: 'Non-Runner',
          checked: false,
        },
        {
          mode: 'Key',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Title',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        
      ],

      FrontData: [
        {
          mode: 'Windshield',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Hood',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Bumper',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Grill',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Headlight (Right)',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Headlight (Left)',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },{
          mode: 'Front Spoiler',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        
      ],
      PessengerData: [
        {
          mode: 'Front Fender',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'Non-Runner',
          checked: false,
        },
        {
          mode: 'Front Door',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Front Door Handle',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Front Window',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Back Door',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },
        {
          mode: 'Back Window',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },{
          mode: 'Back Door Handle',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },,{
          mode: 'Rear Fende',
          avatarVariant: 'light-info',
          payment: 'Light',
          nonrunner: 'No',
          checked: false,
        },,{
          mode: 'Rear Side Glass',
          avatarVariant: 'light-info',
          payment: 'Light',
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
  height: 240px !important;
}

.card-transaction.vehicleDetailsection, .card-transaction.customerdetailsection{
  height: 240px !important;
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
.innercard .addbordered{
      /* border: 0.25px solid #ff9f43 !important; */
      border: 0.25px solid #fff !important;
}


  .nobordereredtocard{border: none !important;}
.view_notes_link{
      background: #d1d4d8;
    color: black;
    padding: 2px;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
    float: right
}
.timelinedetailsectiom{height: 400px !important;}
.bgTransparent .card-body{padding: 0px !important;}
.innercard .card-body,.b-sidebar-outer .card-body{padding: 1.5rem !important;}
.vehicleDetailsection .card{
    border: 0.25px solid #ff9f43;
  }
.f-12{
 font-size: 12px;
}
.w-30{
 width: 32%;
}
.dimensionP{
 margin-bottom: 0;
 display: inline-block
}
h5.f-13{
 font-size: 13px;
}
img.w-12{
 width: 10%;
 height: 26px;
}
h6.w-65{
 width: 65%;
}
.b-t-1{
 border-top: 1px solid #ccc;
 padding-top: 10px;
}
.card-body.ptb-0{
 padding-top: 0 !important;
}
.documentsDropdown .dropdown-menu{
 left: auto;
 right: 0px;
}
.gallerCard .card-header{
 padding-top: 0px !important; 
 padding-bottom: 0px !important; 
}
.gallerCard .galleryHeader{
  padding-top: 1rem !important; 
 padding-bottom: 1rem !important; 
}
.media-body.displayFlexDoc{
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
}
.swiper-paginations.gallerySlider .swiper-pagination-bullet {
    width: 30px;
    height: 4px;
    display: inline-block;
    opacity: 0.4;
    border-radius: 0 !important;
    background: #fff;
}
.swiper-paginations.gallerySlider .swiper-pagination-bullet.swiper-pagination-bullet-active{
    opacity: 0.8;
    background: #fff;
}
.timelineHeader .card-header{
  padding-top: 0px !important;
  padding-bottom: 0px !important;
}
@media only screen and (min-width: 600px) {
  .vehicleDetailsection .card{
    height: 225px;
    /* border: 0.25px solid #ff9f43; */
    border: 0.25px solid #fff;
  }
  .vehicleDetailsection .card.customerInfo{
    border: 0.25px solid #7367ef;
  }

    #edit-inspection-form-view{width: 50% !important;}
      #vehicle-detail-form{width: 40% !important;}
}

.b-sidebar-outer .card-header{
    padding-top: 0px !important;
    padding-bottom: 0px !important;
}
</style>