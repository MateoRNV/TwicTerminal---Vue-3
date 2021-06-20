(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./frontend/src/views/inventory/inventory-list/InventoryView.vue":
/*!***********************************************************************!*\
  !*** ./frontend/src/views/inventory/inventory-list/InventoryView.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InventoryView_vue_vue_type_template_id_de2e0d02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./InventoryView.vue?vue&type=template&id=de2e0d02& */ "./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=template&id=de2e0d02&");
/* harmony import */ var _InventoryView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InventoryView.vue?vue&type=script&lang=js& */ "./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _InventoryView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InventoryView_vue_vue_type_template_id_de2e0d02___WEBPACK_IMPORTED_MODULE_0__["render"],
  _InventoryView_vue_vue_type_template_id_de2e0d02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/inventory/inventory-list/InventoryView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InventoryView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=template&id=de2e0d02&":
/*!******************************************************************************************************!*\
  !*** ./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=template&id=de2e0d02& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryView_vue_vue_type_template_id_de2e0d02___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./InventoryView.vue?vue&type=template&id=de2e0d02& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=template&id=de2e0d02&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryView_vue_vue_type_template_id_de2e0d02___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_InventoryView_vue_vue_type_template_id_de2e0d02___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/inventory/userStoreModule.js":
/*!*********************************************************!*\
  !*** ./frontend/src/views/inventory/userStoreModule.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @axios */ "./frontend/src/libs/axios.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {},
  getters: {},
  mutations: {},
  actions: {
    fetchUsers: function fetchUsers(ctx, queryParams) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/apps/user/users', {
          params: queryParams
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    fetchUser: function fetchUser(ctx, _ref) {
      var id = _ref.id;
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("/apps/user/users/".concat(id)).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    addUser: function addUser(ctx, userData) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/apps/user/users', {
          user: userData
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _views_apps_invoice_invoice_list_InvoiceList_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/apps/invoice/invoice-list/InvoiceList.vue */ "./frontend/src/views/apps/invoice/invoice-list/InvoiceList.vue");
/* harmony import */ var _userStoreModule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../userStoreModule */ "./frontend/src/views/inventory/userStoreModule.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module './UserViewUserInfoCard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './UserViewUserPlanCard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './UserViewUserTimelineCard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module './UserViewUserPermissionsCard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//










/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BCol"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BAlert"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_3__["BLink"],
    // Local Components
    UserViewUserInfoCard: !(function webpackMissingModule() { var e = new Error("Cannot find module './UserViewUserInfoCard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    UserViewUserPlanCard: !(function webpackMissingModule() { var e = new Error("Cannot find module './UserViewUserPlanCard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    UserViewUserTimelineCard: !(function webpackMissingModule() { var e = new Error("Cannot find module './UserViewUserTimelineCard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    UserViewUserPermissionsCard: !(function webpackMissingModule() { var e = new Error("Cannot find module './UserViewUserPermissionsCard.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    InvoiceList: _views_apps_invoice_invoice_list_InvoiceList_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  setup: function setup() {
    var userData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(null);
    var USER_APP_STORE_MODULE_NAME = 'app-user'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].hasModule(USER_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_0__["default"].registerModule(USER_APP_STORE_MODULE_NAME, _userStoreModule__WEBPACK_IMPORTED_MODULE_5__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_0__["default"].hasModule(USER_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_0__["default"].unregisterModule(USER_APP_STORE_MODULE_NAME);
    });
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-user/fetchUser', {
      id: _router__WEBPACK_IMPORTED_MODULE_1__["default"].currentRoute.params.id
    }).then(function (response) {
      userData.value = response.data;
    })["catch"](function (error) {
      if (error.response.status === 404) {
        userData.value = undefined;
      }
    });
    return {
      userData: userData
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=template&id=de2e0d02&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=template&id=de2e0d02& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "b-alert",
        { attrs: { variant: "danger", show: _vm.userData === undefined } },
        [
          _c("h4", { staticClass: "alert-heading" }, [
            _vm._v("\n      Error fetching user data\n    ")
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "alert-body" },
            [
              _vm._v("\n      No user found with this user id. Check\n      "),
              _c(
                "b-link",
                {
                  staticClass: "alert-link",
                  attrs: { to: { name: "apps-users-list" } }
                },
                [_vm._v("\n        User List\n      ")]
              ),
              _vm._v("\n      for other users.\n    ")
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _vm.userData
        ? [
            _c(
              "b-row",
              [
                _c(
                  "b-col",
                  { attrs: { cols: "12", xl: "9", lg: "8", md: "7" } },
                  [
                    _c("user-view-user-info-card", {
                      attrs: { "user-data": _vm.userData }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { cols: "12", md: "5", xl: "3", lg: "4" } },
                  [_c("user-view-user-plan-card")],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-row",
              [
                _c(
                  "b-col",
                  { attrs: { cols: "12", lg: "6" } },
                  [_c("user-view-user-timeline-card")],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-col",
                  { attrs: { cols: "12", lg: "6" } },
                  [_c("user-view-user-permissions-card")],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("invoice-list")
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);