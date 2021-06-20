(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./frontend/src/@core/comp-functions/misc/event-listeners.js":
/*!*******************************************************************!*\
  !*** ./frontend/src/@core/comp-functions/misc/event-listeners.js ***!
  \*******************************************************************/
/*! exports provided: useScrollListener, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollListener", function() { return useScrollListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");

var useScrollListener = function useScrollListener() {
  var scrolledTo = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);

  var scrollHandler = function scrollHandler() {
    scrolledTo.value = window.scrollY;
  };

  window.addEventListener('scroll', scrollHandler);
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["onUnmounted"])(function () {
    window.removeEventListener('scroll', scrollHandler);
  });
  return {
    scrolledTo: scrolledTo
  };
};
var _ = null;

/***/ }),

/***/ "./frontend/src/@core/components/app-auto-suggest/useAutoSuggest.js":
/*!**************************************************************************!*\
  !*** ./frontend/src/@core/components/app-auto-suggest/useAutoSuggest.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useAutoSuggest; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");

function useAutoSuggest(props) {
  var filteredData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
  /**
   * Filter group against provided query
   * Grp Structure:
   * {
   *    key: 'title',
   *    data: [
   *      title: 'Admin', img: 'someImage.png',
   *      title: 'Template', img: 'otherImage.png',
   *    ]
   * }
   * @param {Object} grp Group object to perform filter on
   * @param {String} query Query string to filter
   */

  var filterGrp = function filterGrp(grp, query) {
    var exactEle = grp.data.filter(function (item) {
      return item[grp.key].toLowerCase().startsWith(query.toLowerCase());
    });
    var containEle = grp.data.filter( // prettier-ignore
    function (item) {
      return !item[grp.key].toLowerCase().startsWith(query.toLowerCase()) && item[grp.key].toLowerCase().indexOf(query.toLowerCase()) > -1;
    });
    return exactEle.concat(containEle).slice(0, props.searchLimit);
  };

  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');

  var resetsearchQuery = function resetsearchQuery() {
    searchQuery.value = '';
  };

  var handleSearchQueryUpdate = function handleSearchQueryUpdate(val) {
    if (val === '') {
      filteredData.value = {};
    } else {
      var queriedData = {};
      var dataGrps = Object.keys(props.data);
      dataGrps.forEach(function (grp, i) {
        queriedData[dataGrps[i]] = filterGrp(props.data[grp], val);
      });
      filteredData.value = queriedData;
    }
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(searchQuery, function (val) {
    return handleSearchQueryUpdate(val);
  });
  return {
    searchQuery: searchQuery,
    resetsearchQuery: resetsearchQuery,
    filteredData: filteredData
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue":
/*!*****************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppBreadcrumb.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBreadcrumb.vue?vue&type=template&id=70de66ab& */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab&");
/* harmony import */ var _AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBreadcrumb.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/AppBreadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBreadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab&":
/*!************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBreadcrumb.vue?vue&type=template&id=70de66ab& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_70de66ab___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppFooter.vue":
/*!*************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppFooter.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=5db6a843& */ "./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843&":
/*!********************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=5db6a843& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_5db6a843___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue":
/*!****************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppNavbarHorizontalLayout_vue_vue_type_template_id_676e7116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppNavbarHorizontalLayout.vue?vue&type=template&id=676e7116& */ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=676e7116&");
/* harmony import */ var _AppNavbarHorizontalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppNavbarHorizontalLayout.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppNavbarHorizontalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppNavbarHorizontalLayout_vue_vue_type_template_id_676e7116___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppNavbarHorizontalLayout_vue_vue_type_template_id_676e7116___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbarHorizontalLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=676e7116&":
/*!***********************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=676e7116& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayout_vue_vue_type_template_id_676e7116___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbarHorizontalLayout.vue?vue&type=template&id=676e7116& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=676e7116&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayout_vue_vue_type_template_id_676e7116___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayout_vue_vue_type_template_id_676e7116___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_34e5207c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=34e5207c& */ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=34e5207c&");
/* harmony import */ var _AppNavbarHorizontalLayoutBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppNavbarHorizontalLayoutBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_34e5207c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_34e5207c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayoutBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayoutBrand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=34e5207c&":
/*!****************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=34e5207c& ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_34e5207c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=34e5207c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=34e5207c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_34e5207c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppNavbarHorizontalLayoutBrand_vue_vue_type_template_id_34e5207c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue":
/*!***********************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true&");
/* harmony import */ var _Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Bookmarks.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64de30c4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_style_index_0_id_64de30c4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Bookmarks_vue_vue_type_template_id_64de30c4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue":
/*!**************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CartDropdown.vue?vue&type=template&id=09965980&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true&");
/* harmony import */ var _CartDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartDropdown.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CartDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "09965980",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_style_index_0_id_09965980_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true&":
/*!*********************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartDropdown.vue?vue&type=template&id=09965980&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CartDropdown_vue_vue_type_template_id_09965980_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue":
/*!*************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkToggler.vue?vue&type=template&id=def79dae& */ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae&");
/* harmony import */ var _DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DarkToggler.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkToggler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae&":
/*!********************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkToggler.vue?vue&type=template&id=def79dae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_def79dae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue":
/*!********************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Locale.vue?vue&type=template&id=e29bc1ee& */ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee&");
/* harmony import */ var _Locale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Locale.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Locale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/Locale.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Locale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Locale.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Locale_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee&":
/*!***************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Locale.vue?vue&type=template&id=e29bc1ee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Locale_vue_vue_type_template_id_e29bc1ee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue":
/*!**********************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotificationDropdown.vue?vue&type=template&id=3bb7c18b& */ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b&");
/* harmony import */ var _NotificationDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotificationDropdown.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotificationDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b&":
/*!*****************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b& ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NotificationDropdown.vue?vue&type=template&id=3bb7c18b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotificationDropdown_vue_vue_type_template_id_3bb7c18b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue":
/*!***********************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=template&id=1df32828&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true&");
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& */ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1df32828",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_style_index_0_id_1df32828_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=template&id=1df32828&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_template_id_1df32828_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue":
/*!**************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDropdown.vue?vue&type=template&id=58cac92a& */ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a&");
/* harmony import */ var _UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDropdown.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a&":
/*!*********************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDropdown.vue?vue&type=template&id=58cac92a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDropdown_vue_vue_type_template_id_58cac92a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js":
/*!**************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
// prettier-ignore
/* harmony default export */ __webpack_exports__["default"] = ({
  pages: {
    key: 'title',
    data: [{
      title: 'Access Control',
      route: {
        name: 'access-control'
      },
      icon: 'ShieldIcon',
      isBookmarked: false
    }, {
      title: 'Account Settings',
      route: {
        name: 'pages-account-setting'
      },
      icon: 'SettingsIcon',
      isBookmarked: false
    }, {
      title: 'Advance Card',
      route: {
        name: 'card-advance'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Alerts',
      route: {
        name: 'components-alert'
      },
      icon: 'AlertTriangleIcon',
      isBookmarked: false
    }, {
      title: 'Analytics Cards',
      route: {
        name: 'card-analytic'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Apex Chart',
      route: {
        name: 'charts-apex-chart'
      },
      icon: 'PieChartIcon',
      isBookmarked: false
    }, {
      title: 'Aspect',
      route: {
        name: 'components-aspect'
      },
      icon: 'AirplayIcon',
      isBookmarked: false
    }, {
      title: 'Auto Suggest',
      route: {
        name: 'extensions-auto-suggest'
      },
      icon: 'AlignLeftIcon',
      isBookmarked: false
    }, {
      title: 'Avatar',
      route: {
        name: 'components-avatar'
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Badge',
      route: {
        name: 'components-badge'
      },
      icon: 'TagIcon',
      isBookmarked: false
    }, {
      title: 'Basic Card',
      route: {
        name: 'card-basic'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Blog Detail',
      route: {
        name: 'pages-blog-detail',
        params: {
          id: 1
        }
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Blog Edit',
      route: {
        name: 'pages-blog-edit',
        params: {
          id: 1
        }
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Blog List',
      route: {
        name: 'pages-blog-list'
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Breadcrumb',
      route: {
        name: 'components-breadcrumb'
      },
      icon: 'HomeIcon',
      isBookmarked: false
    }, {
      title: 'BS Table',
      route: {
        name: 'table-bs-table'
      },
      icon: 'GridIcon',
      isBookmarked: false
    }, {
      title: 'Button Group',
      route: {
        name: 'components-button-group'
      },
      icon: 'BoldIcon',
      isBookmarked: false
    }, {
      title: 'Button Toolbar',
      route: {
        name: 'components-button-toolbar'
      },
      icon: 'BoldIcon',
      isBookmarked: false
    }, {
      title: 'Button',
      route: {
        name: 'components-button'
      },
      icon: 'BoldIcon',
      isBookmarked: false
    }, {
      title: 'Calendar App',
      route: {
        name: 'apps-calendar'
      },
      icon: 'CalendarIcon',
      isBookmarked: true
    }, {
      title: 'Calendar Component',
      route: {
        name: 'components-calendar'
      },
      icon: 'CalendarIcon',
      isBookmarked: false
    }, {
      title: 'Card Actions',
      route: {
        name: 'card-action'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Carousel',
      route: {
        name: 'components-carousel'
      },
      icon: 'CopyIcon',
      isBookmarked: false
    }, {
      title: 'Chartjs',
      route: {
        name: 'charts-chartjs'
      },
      icon: 'PieChartIcon',
      isBookmarked: false
    }, {
      title: 'Chat',
      route: {
        name: 'apps-chat'
      },
      icon: 'MessageSquareIcon',
      isBookmarked: true
    }, {
      title: 'Checkbox',
      route: {
        name: 'forms-element-checkbox'
      },
      icon: 'CheckSquareIcon',
      isBookmarked: false
    }, {
      title: 'Checkout',
      route: {
        name: 'apps-e-commerce-checkout'
      },
      icon: 'DollarSignIcon',
      isBookmarked: false
    }, {
      title: 'Clipboard',
      route: {
        name: 'extensions-clipboard'
      },
      icon: 'ClipboardIcon',
      isBookmarked: false
    }, {
      title: 'Collapse',
      route: {
        name: 'components-collapse'
      },
      icon: 'PlusIcon',
      isBookmarked: false
    }, {
      title: 'Colors',
      route: {
        name: 'ui-colors'
      },
      icon: 'DropletIcon',
      isBookmarked: false
    }, {
      title: 'Coming Soon',
      route: {
        name: 'misc-coming-soon'
      },
      icon: 'ClockIcon',
      isBookmarked: false
    }, {
      title: 'Context Menu',
      route: {
        name: 'extensions-context-menu'
      },
      icon: 'MoreVerticalIcon',
      isBookmarked: false
    }, {
      title: 'Dashboard Analytics',
      route: {
        name: 'dashboard-analytics'
      },
      icon: 'ActivityIcon',
      isBookmarked: false
    }, {
      title: 'Dashboard ECommerce',
      route: {
        name: 'dashboard-ecommerce'
      },
      icon: 'ShoppingCartIcon',
      isBookmarked: false
    }, {
      title: 'Date Time Picker',
      route: {
        name: 'extensions-date-time-picker'
      },
      icon: 'ClockIcon',
      isBookmarked: false
    }, {
      title: 'Drag & Drop',
      route: {
        name: 'extensions-drag-and-drop'
      },
      icon: 'CopyIcon',
      isBookmarked: false
    }, {
      title: 'Dropdown',
      route: {
        name: 'components-dropdown'
      },
      icon: 'MoreHorizontalIcon',
      isBookmarked: false
    }, {
      title: 'Echart',
      route: {
        name: 'charts-echart'
      },
      icon: 'PieChartIcon',
      isBookmarked: false
    }, {
      title: 'Email',
      route: {
        name: 'apps-email'
      },
      icon: 'MailIcon',
      isBookmarked: true
    }, {
      title: 'Embed',
      route: {
        name: 'components-embed'
      },
      icon: 'TvIcon',
      isBookmarked: false
    }, {
      title: 'Error 404',
      route: {
        name: 'error-404'
      },
      icon: 'AlertTriangleIcon',
      isBookmarked: false
    }, {
      title: 'Error',
      route: {
        name: 'misc-error'
      },
      icon: 'AlertTriangleIcon',
      isBookmarked: false
    }, {
      title: 'FAQ',
      route: {
        name: 'pages-faq'
      },
      icon: 'HelpCircleIcon',
      isBookmarked: false
    }, {
      title: 'Feather',
      route: {
        name: 'ui-feather'
      },
      icon: 'FeatherIcon',
      isBookmarked: false
    }, {
      title: 'File Input',
      route: {
        name: 'forms-element-file-input'
      },
      icon: 'FileIcon',
      isBookmarked: false
    }, {
      title: 'Forgot Password V1',
      route: {
        name: 'auth-forgot-password-v1'
      },
      icon: 'KeyIcon',
      isBookmarked: false
    }, {
      title: 'Forgot Password V2',
      route: {
        name: 'auth-forgot-password-v2'
      },
      icon: 'KeyIcon',
      isBookmarked: false
    }, {
      title: 'Form Datepicker',
      route: {
        name: 'forms-element-datepicker'
      },
      icon: 'ClockIcon',
      isBookmarked: false
    }, {
      title: 'Form Layout',
      route: {
        name: 'form-layout'
      },
      icon: 'GridIcon',
      isBookmarked: false
    }, {
      title: 'Form Rating',
      route: {
        name: 'forms-element-rating'
      },
      icon: 'StarIcon',
      isBookmarked: false
    }, {
      title: 'Form Repeater',
      route: {
        name: 'form-repeater'
      },
      icon: 'StarIcon',
      isBookmarked: false
    }, {
      title: 'Form Tag',
      route: {
        name: 'forms-element-tag'
      },
      icon: 'TagIcon',
      isBookmarked: false
    }, {
      title: 'Form Timepicker',
      route: {
        name: 'forms-element-timepicker'
      },
      icon: 'ClockIcon',
      isBookmarked: false
    }, {
      title: 'Form Validation',
      route: {
        name: 'form-validation'
      },
      icon: 'CheckCircleIcon',
      isBookmarked: false
    }, {
      title: 'Form Wizard',
      route: {
        name: 'form-wizard'
      },
      icon: 'GitCommitIcon',
      isBookmarked: false
    }, {
      title: 'Good Table',
      route: {
        name: 'table-good-table'
      },
      icon: 'GridIcon',
      isBookmarked: false
    }, {
      title: 'I18n',
      route: {
        name: 'extensions-i18n'
      },
      icon: 'GlobeIcon',
      isBookmarked: false
    }, {
      title: 'Image',
      route: {
        name: 'components-image'
      },
      icon: 'ImageIcon',
      isBookmarked: false
    }, {
      title: 'Input Group',
      route: {
        name: 'forms-element-input-group'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Input Mask',
      route: {
        name: 'forms-element-input-mask'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Input',
      route: {
        name: 'forms-element-input'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Invoice Add',
      route: {
        name: 'apps-invoice-add'
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Invoice Edit',
      route: {
        name: 'apps-invoice-edit',
        params: {
          id: 4987
        }
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Invoice List',
      route: {
        name: 'apps-invoice-list'
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Invoice Preview',
      route: {
        name: 'apps-invoice-preview',
        params: {
          id: 4987
        }
      },
      icon: 'FileTextIcon',
      isBookmarked: false
    }, {
      title: 'Knowledge Base Category',
      route: {
        name: 'pages-knowledge-base-category'
      },
      icon: 'InfoIcon',
      isBookmarked: false
    }, {
      title: 'Knowledge Base Question',
      route: {
        name: 'pages-knowledge-base-question'
      },
      icon: 'InfoIcon',
      isBookmarked: false
    }, {
      title: 'Knowledge Base',
      route: {
        name: 'pages-knowledge-base'
      },
      icon: 'InfoIcon',
      isBookmarked: false
    }, {
      title: 'Leaflet',
      route: {
        name: 'maps-leaflet'
      },
      icon: 'MapPinIcon',
      isBookmarked: false
    }, {
      title: 'List Group',
      route: {
        name: 'components-list-group'
      },
      icon: 'ListIcon',
      isBookmarked: false
    }, {
      title: 'Login V1',
      route: {
        name: 'auth-login-v1'
      },
      icon: 'LogInIcon',
      isBookmarked: false
    }, {
      title: 'Login V2',
      route: {
        name: 'auth-login-v2'
      },
      icon: 'LogInIcon',
      isBookmarked: false
    }, {
      title: 'Media Objects',
      route: {
        name: 'components-media'
      },
      icon: 'ImageIcon',
      isBookmarked: false
    }, {
      title: 'Modal',
      route: {
        name: 'components-modal'
      },
      icon: 'CopyIcon',
      isBookmarked: false
    }, {
      title: 'Nav',
      route: {
        name: 'components-nav'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Not Authorized',
      route: {
        name: 'misc-not-authorized'
      },
      icon: 'XOctagonIcon',
      isBookmarked: false
    }, {
      title: 'Overlay',
      route: {
        name: 'components-overlay'
      },
      icon: 'CopyIcon',
      isBookmarked: false
    }, {
      title: 'Pagination Nav',
      route: {
        name: 'components-pagination-nav'
      },
      icon: 'HashIcon',
      isBookmarked: false
    }, {
      title: 'Pagination',
      route: {
        name: 'components-pagination'
      },
      icon: 'HashIcon',
      isBookmarked: false
    }, {
      title: 'Pill Badge',
      route: {
        name: 'components-pill-badge'
      },
      icon: 'TagIcon',
      isBookmarked: false
    }, {
      title: 'Pill',
      route: {
        name: 'components-pill'
      },
      icon: 'TagIcon',
      isBookmarked: false
    }, {
      title: 'Popover',
      route: {
        name: 'components-popover'
      },
      icon: 'TagIcon',
      isBookmarked: false
    }, {
      title: 'Pricing',
      route: {
        name: 'pages-pricing'
      },
      icon: 'DollarSignIcon',
      isBookmarked: false
    }, {
      title: 'Product Details',
      route: {
        name: 'apps-e-commerce-product-details',
        params: {
          slug: 'apple-watch-series-5-27'
        }
      },
      icon: 'BoxIcon',
      isBookmarked: false
    }, {
      title: 'Profile',
      route: {
        name: 'pages-profile'
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Progress',
      route: {
        name: 'components-progress'
      },
      icon: 'ChevronsRightIcon',
      isBookmarked: false
    }, {
      title: 'Quill Editor',
      route: {
        name: 'extensions-quill-editor'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Radio',
      route: {
        name: 'forms-element-radio'
      },
      icon: 'DiscIcon',
      isBookmarked: false
    }, {
      title: 'Register V1',
      route: {
        name: 'auth-register-v1'
      },
      icon: 'UserPlusIcon',
      isBookmarked: false
    }, {
      title: 'Register V2',
      route: {
        name: 'auth-register-v2'
      },
      icon: 'UserPlusIcon',
      isBookmarked: false
    }, {
      title: 'Reset Password V1',
      route: {
        name: 'auth-reset-password-v1'
      },
      icon: 'KeyIcon',
      isBookmarked: false
    }, {
      title: 'Reset Password V2',
      route: {
        name: 'auth-reset-password-v2'
      },
      icon: 'KeyIcon',
      isBookmarked: false
    }, {
      title: 'Select',
      route: {
        name: 'forms-element-select'
      },
      icon: 'AlignCenterIcon',
      isBookmarked: false
    }, {
      title: 'Shop',
      route: {
        name: 'apps-e-commerce-shop'
      },
      icon: 'ArchiveIcon',
      isBookmarked: false
    }, {
      title: 'Sidebar',
      route: {
        name: 'components-sidebar'
      },
      icon: 'SidebarIcon',
      isBookmarked: false
    }, {
      title: 'Slider',
      route: {
        name: 'extensions-slider'
      },
      icon: 'GitCommitIcon',
      isBookmarked: false
    }, {
      title: 'Spinbutton',
      route: {
        name: 'forms-element-spinbutton'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Spinner',
      route: {
        name: 'components-spinner'
      },
      icon: 'LoaderIcon',
      isBookmarked: false
    }, {
      title: 'Statistics Cards',
      route: {
        name: 'card-statistic'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Sweet Alert',
      route: {
        name: 'extensions-sweet-alert'
      },
      icon: 'BellIcon',
      isBookmarked: false
    }, {
      title: 'Swiper',
      route: {
        name: 'extensions-swiper'
      },
      icon: 'ImageIcon',
      isBookmarked: false
    }, {
      title: 'Switch',
      route: {
        name: 'forms-element-switch'
      },
      icon: 'ToggleRightIcon',
      isBookmarked: false
    }, {
      title: 'Tab',
      route: {
        name: 'components-tab'
      },
      icon: 'CreditCardIcon',
      isBookmarked: false
    }, {
      title: 'Textarea',
      route: {
        name: 'forms-element-textarea'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Time',
      route: {
        name: 'components-time'
      },
      icon: 'ClockIcon',
      isBookmarked: false
    }, {
      title: 'Timeline',
      route: {
        name: 'components-timeline'
      },
      icon: 'GitCommitIcon',
      isBookmarked: false
    }, {
      title: 'Toastification',
      route: {
        name: 'extensions-toastification'
      },
      icon: 'BellIcon',
      isBookmarked: false
    }, {
      title: 'Toasts',
      route: {
        name: 'components-toasts'
      },
      icon: 'BellIcon',
      isBookmarked: false
    }, {
      title: 'Todo',
      route: {
        name: 'apps-todo'
      },
      icon: 'CheckSquareIcon',
      isBookmarked: true
    }, {
      title: 'Tooltip',
      route: {
        name: 'components-tooltip'
      },
      icon: 'CopyIcon',
      isBookmarked: false
    }, {
      title: 'Tour',
      route: {
        name: 'extensions-tour'
      },
      icon: 'GlobeIcon',
      isBookmarked: false
    }, // { title: 'Tree', route: { name: 'extensions-tree' }, icon: 'GitCommitIcon', isBookmarked: false },
    {
      title: 'Typography',
      route: {
        name: 'ui-typography'
      },
      icon: 'TypeIcon',
      isBookmarked: false
    }, {
      title: 'Under Maintenance',
      route: {
        name: 'misc-under-maintenance'
      },
      icon: 'MonitorIcon',
      isBookmarked: false
    }, {
      title: 'Users Edit',
      route: {
        name: 'apps-users-edit',
        params: {
          id: 21
        }
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Users List',
      route: {
        name: 'apps-users-list'
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Users View',
      route: {
        name: 'apps-users-view',
        params: {
          id: 21
        }
      },
      icon: 'UserIcon',
      isBookmarked: false
    }, {
      title: 'Vue Select',
      route: {
        name: 'extensions-vue-select'
      },
      icon: 'AlignCenterIcon',
      isBookmarked: false
    }, {
      title: 'Wishlist',
      route: {
        name: 'apps-e-commerce-wishlist'
      },
      icon: 'HeartIcon',
      isBookmarked: false
    }]
  },
  files: {
    key: 'file_name',
    data: [{
      file_name: "Joe's CV",
      from: 'Stacy Watson',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./frontend/src/assets/images/icons/doc.png"),
      size: '1.7 mb'
    }, {
      file_name: 'Passport Image',
      from: 'Ben Sinitiere',
      icon: __webpack_require__(/*! @/assets/images/icons/jpg.png */ "./frontend/src/assets/images/icons/jpg.png"),
      size: ' 52 kb'
    }, {
      file_name: 'Questions',
      from: 'Charleen Patti',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./frontend/src/assets/images/icons/doc.png"),
      size: '1.5 gb'
    }, {
      file_name: 'Parenting Guide',
      from: 'Doyle Blatteau',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./frontend/src/assets/images/icons/doc.png"),
      size: '2.3 mb'
    }, {
      file_name: 'Class Notes',
      from: 'Gwen Greenlow',
      icon: __webpack_require__(/*! @/assets/images/icons/doc.png */ "./frontend/src/assets/images/icons/doc.png"),
      size: ' 30 kb'
    }, {
      file_name: 'Class Attendance',
      from: 'Tom Alred',
      icon: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./frontend/src/assets/images/icons/xls.png"),
      size: '52 mb'
    }, {
      file_name: 'Company Salary',
      from: 'Nellie Dezan',
      icon: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./frontend/src/assets/images/icons/xls.png"),
      size: '29 mb'
    }, {
      file_name: 'Company Logo',
      from: 'Steve Sheldon',
      icon: __webpack_require__(/*! @/assets/images/icons/jpg.png */ "./frontend/src/assets/images/icons/jpg.png"),
      size: '1.3 mb'
    }, {
      file_name: 'Crime Rates',
      from: 'Sherlock Holmes',
      icon: __webpack_require__(/*! @/assets/images/icons/xls.png */ "./frontend/src/assets/images/icons/xls.png"),
      size: '37 kb'
    }, {
      file_name: 'Ulysses',
      from: 'Theresia Wrenne',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./frontend/src/assets/images/icons/pdf.png"),
      size: '7.2 mb'
    }, {
      file_name: 'War and Peace',
      from: 'Goldie Highnote',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./frontend/src/assets/images/icons/pdf.png"),
      size: '10.5 mb'
    }, {
      file_name: 'Vedas',
      from: 'Ajay Patel',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./frontend/src/assets/images/icons/pdf.png"),
      size: '8.3 mb'
    }, {
      file_name: 'The Trial',
      from: 'Sirena Linkert',
      icon: __webpack_require__(/*! @/assets/images/icons/pdf.png */ "./frontend/src/assets/images/icons/pdf.png"),
      size: '1.5 mb'
    }]
  },
  contacts: {
    key: 'name',
    data: [{
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-4.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-4.jpg"),
      name: 'Rena Brant',
      email: 'nephrod@preany.co.uk',
      time: '21/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-2.jpg"),
      name: 'Mariano Packard',
      email: 'seek@sparaxis.org',
      time: '14/01/2018'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-24.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-24.jpg"),
      name: 'Risa Montufar',
      email: 'vagary@unblist.org',
      time: '10/08/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-15.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-15.jpg"),
      name: 'Maragaret Cimo',
      email: 'designed@insanely.net',
      time: '01/12/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-7.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-7.jpg"),
      name: 'Jona Prattis',
      email: 'unwieldable@unblist.org',
      time: '21/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-5.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-5.jpg"),
      name: 'Edmond Chicon',
      email: 'museist@anaphyte.co.uk',
      time: '15/11/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-25.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-25.jpg"),
      name: 'Abbey Darden',
      email: 'astema@defectively.co.uk',
      time: '07/05/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-10.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-10.jpg"),
      name: 'Seema Moallankamp',
      email: 'fernando@storkish.co.uk',
      time: '13/08/2017'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-2.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-2.jpg"),
      name: 'Charleen Warmington',
      email: 'furphy@cannibal.net',
      time: '11/08/1891'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-25.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-25.jpg"),
      name: 'Geri Linch',
      email: 'insignia@markab.org',
      time: '18/01/2015'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-23.jpg"),
      name: 'Shellie Muster',
      email: 'maxillary@equalize.co.uk',
      time: '26/07/2019'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-20.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-20.jpg"),
      name: 'Jesenia Vanbramer',
      email: 'hypotony@phonetist.net',
      time: '12/09/2017'
    }, {
      img: __webpack_require__(/*! @/assets/images/portrait/small/avatar-s-23.jpg */ "./frontend/src/assets/images/portrait/small/avatar-s-23.jpg"),
      name: 'Mardell Channey',
      email: 'peseta@myrica.com',
      time: '11/11/2019'
    }]
  }
});
/* eslint-enable */

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue":
/*!********************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66&");
/* harmony import */ var _LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererDefault.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66&":
/*!***************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_fef05e66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue":
/*!*****************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b&");
/* harmony import */ var _LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererLeft.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b&":
/*!************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_5f8a9b2b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue":
/*!*************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd&");
/* harmony import */ var _LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd&":
/*!********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd& ***!
  \********************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_68852ebd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue":
/*!***************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutHorizontal_vue_vue_type_template_id_4e821ef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutHorizontal.vue?vue&type=template&id=4e821ef6& */ "./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=4e821ef6&");
/* harmony import */ var _LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutHorizontal.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutHorizontal_vue_vue_type_template_id_4e821ef6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutHorizontal_vue_vue_type_template_id_4e821ef6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=4e821ef6&":
/*!**********************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=4e821ef6& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_4e821ef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=template&id=4e821ef6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=4e821ef6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_4e821ef6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_4e821ef6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue":
/*!***********************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenu_vue_vue_type_template_id_58f6dd70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=template&id=58f6dd70& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=58f6dd70&");
/* harmony import */ var _HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenu_vue_vue_type_template_id_58f6dd70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenu_vue_vue_type_template_id_58f6dd70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=58f6dd70&":
/*!******************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=58f6dd70& ***!
  \******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_58f6dd70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=template&id=58f6dd70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=58f6dd70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_58f6dd70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenu_vue_vue_type_template_id_58f6dd70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue":
/*!*****************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuGroup_vue_vue_type_template_id_245c1617___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuGroup.vue?vue&type=template&id=245c1617& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=245c1617&");
/* harmony import */ var _HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuGroup.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuGroup_vue_vue_type_template_id_245c1617___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuGroup_vue_vue_type_template_id_245c1617___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=245c1617&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=245c1617& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_245c1617___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuGroup.vue?vue&type=template&id=245c1617& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=245c1617&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_245c1617___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuGroup_vue_vue_type_template_id_245c1617___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/mixinHorizontalNavMenuGroup.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/mixinHorizontalNavMenuGroup.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/useHorizontalNavMenuGroup.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/useHorizontalNavMenuGroup.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHorizontalNavMenuGroup; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");
// eslint-disable-next-line object-curly-newline
 // import store from '@/store'


function useHorizontalNavMenuGroup(item) {
  // ------------------------------------------------
  // childDropdown
  // ------------------------------------------------
  var refChildDropdown = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var openChildDropdownOnLeft = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false); // ------------------------------------------------
  // isActive
  // ------------------------------------------------

  var isOpen = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateGroupOpen = function updateGroupOpen(val) {
    isOpen.value = val;

    if (val) {
      Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
        var childDropdownWidth = refChildDropdown.value.offsetWidth;
        var windowContentWidth = window.innerWidth - 16;

        var _refChildDropdown$val = refChildDropdown.value.getBoundingClientRect(),
            childDropdownLeft = _refChildDropdown$val.left;

        var shallDropLeft = childDropdownLeft + childDropdownWidth - windowContentWidth;
        openChildDropdownOnLeft.value = shallDropLeft > 0; // Add scroll to child dd if don't have much space

        var refChildDropdownTop = refChildDropdown.value.getBoundingClientRect().top;
        var refChildDropdownHeight = refChildDropdown.value.getBoundingClientRect().height;

        if (window.innerHeight - refChildDropdownTop - refChildDropdownHeight - 28 < 1) {
          var maxHeight = window.innerHeight - refChildDropdownTop - 70;
          refChildDropdown.value.style.maxHeight = "".concat(maxHeight, "px");
          refChildDropdown.value.style.overflowY = 'auto';
          refChildDropdown.value.style.overflowX = 'hidden';
        }
      });
    } else {
      openChildDropdownOnLeft.value = false;
    }
  }; // ------------------------------------------------
  // isActive
  // ------------------------------------------------


  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavGroupActive"])(item.children);
  };

  return {
    isOpen: isOpen,
    isActive: isActive,
    updateGroupOpen: updateGroupOpen,
    updateIsActive: updateIsActive,
    refChildDropdown: refChildDropdown,
    openChildDropdownOnLeft: openChildDropdownOnLeft
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue":
/*!******************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_18b7df6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=18b7df6e& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=18b7df6e&");
/* harmony import */ var _HorizontalNavMenuHeaderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalNavMenuHeaderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_18b7df6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_18b7df6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=18b7df6e&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=18b7df6e& ***!
  \*************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_18b7df6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=18b7df6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=18b7df6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_18b7df6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderGroup_vue_vue_type_template_id_18b7df6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/mixinHorizontalNavMenuHeaderGroup.js":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/mixinHorizontalNavMenuHeaderGroup.js ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/useHorizontalNavMenuHeaderGroup.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/useHorizontalNavMenuHeaderGroup.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHorizontalNavMenuHeaderGroup; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");


function useHorizontalNavMenuHeaderGroup(item) {
  // ------------------------------------------------
  // isOpen
  // ------------------------------------------------
  var isOpen = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateGroupOpen = function updateGroupOpen(val) {
    // eslint-disable-next-line no-use-before-define
    isOpen.value = val;
  }; // ------------------------------------------------
  // isActive
  // ------------------------------------------------


  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavGroupActive"])(item.children);
  };

  return {
    isOpen: isOpen,
    isActive: isActive,
    updateGroupOpen: updateGroupOpen,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue":
/*!****************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuHeaderLink_vue_vue_type_template_id_3b3979fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuHeaderLink.vue?vue&type=template&id=3b3979fa& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=3b3979fa&");
/* harmony import */ var _HorizontalNavMenuHeaderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalNavMenuHeaderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuHeaderLink_vue_vue_type_template_id_3b3979fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuHeaderLink_vue_vue_type_template_id_3b3979fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=3b3979fa&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=3b3979fa& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderLink_vue_vue_type_template_id_3b3979fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuHeaderLink.vue?vue&type=template&id=3b3979fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=3b3979fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderLink_vue_vue_type_template_id_3b3979fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuHeaderLink_vue_vue_type_template_id_3b3979fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/mixinHorizontalNavMenuHeaderLink.js":
/*!********************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/mixinHorizontalNavMenuHeaderLink.js ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/useHorizontalNavMenuHeaderLink.js":
/*!******************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/useHorizontalNavMenuHeaderLink.js ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHorizontalNavMenuHeaderGroup; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");


function useHorizontalNavMenuHeaderGroup(item) {
  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavLinkActive"])(item);
  };

  return {
    isActive: isActive,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue":
/*!*****************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuItems_vue_vue_type_template_id_8cd86612___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuItems.vue?vue&type=template&id=8cd86612& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=8cd86612&");
/* harmony import */ var _HorizontalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuItems.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuItems_vue_vue_type_template_id_8cd86612___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuItems_vue_vue_type_template_id_8cd86612___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=8cd86612&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=8cd86612& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItems_vue_vue_type_template_id_8cd86612___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuItems.vue?vue&type=template&id=8cd86612& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=8cd86612&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItems_vue_vue_type_template_id_8cd86612___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuItems_vue_vue_type_template_id_8cd86612___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue":
/*!***************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalNavMenuLink_vue_vue_type_template_id_61cf11ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HorizontalNavMenuLink.vue?vue&type=template&id=61cf11ae& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=61cf11ae&");
/* harmony import */ var _HorizontalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HorizontalNavMenuLink.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _HorizontalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalNavMenuLink_vue_vue_type_template_id_61cf11ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HorizontalNavMenuLink_vue_vue_type_template_id_61cf11ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=61cf11ae&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=61cf11ae& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuLink_vue_vue_type_template_id_61cf11ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenuLink.vue?vue&type=template&id=61cf11ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=61cf11ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuLink_vue_vue_type_template_id_61cf11ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalNavMenuLink_vue_vue_type_template_id_61cf11ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/mixinHorizontalNavMenuLink.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/mixinHorizontalNavMenuLink.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/useHorizontalNavMenuLink.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/useHorizontalNavMenuLink.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHorizontalNavMenuLink; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");


function useHorizontalNavMenuLink(item) {
  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  var linkProps = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["navLinkProps"])(item);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavLinkActive"])(item);
  };

  return {
    isActive: isActive,
    linkProps: linkProps,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/mixinLayoutHorizontal.js":
/*!*******************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/mixinLayoutHorizontal.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: function $route() {
      if (this.$store.state.app.windowWidth < _themeConfig__WEBPACK_IMPORTED_MODULE_0__["$themeBreakpoints"].xl) {
        this.isVerticalMenuActive = false;
      }
    }
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-horizontal/useLayoutHorizontal.js":
/*!*****************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-horizontal/useLayoutHorizontal.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useLayoutHorizontal; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");


function useLayoutHorizontal(navbarMenuType, footerType, isVerticalMenuActive) {
  var currentBreakpoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_1__["default"].getters['app/currentBreakPoint'];
  });
  var layoutClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var classes = [];

    if (currentBreakpoint.value === 'xl') {
      classes.push('horizontal-menu');
    } else {
      classes.push('vertical-overlay-menu'); // classes.push('vertical-layout')

      classes.push(isVerticalMenuActive.value ? 'menu-open' : 'menu-hide');
    } // Navbar


    classes.push("navbar-".concat(navbarMenuType.value)); // Footer

    if (footerType.value === 'sticky') classes.push('footer-fixed');
    if (footerType.value === 'static') classes.push('footer-static');
    if (footerType.value === 'hidden') classes.push('footer-hidden');
    return classes;
  }); // const resizeHandler = () => {
  //   isVerticalMenuActive.value = window.innerWidth >= 1200
  //   if (window.innerWidth >= 1200) currentBreakpoint.value = 'xl'
  //   else if (window.innerWidth >= 992) currentBreakpoint.value = 'lg'
  //   else if (window.innerWidth >= 768) currentBreakpoint.value = 'md'
  //   else if (window.innerWidth >= 576) currentBreakpoint.value = 'sm'
  //   else currentBreakpoint.value = 'xs'
  // }

  var navbarMenuTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (navbarMenuType.value === 'sticky') return 'fixed-top';
    if (navbarMenuType.value === 'static') return '';
    if (navbarMenuType.value === 'hidden') return 'd-none';
    return 'floating-nav';
  });
  var footerTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (footerType.value === 'static') return 'footer-static';
    if (footerType.value === 'hidden') return 'd-none';
    return '';
  });
  return {
    layoutClasses: layoutClasses,
    navbarMenuTypeClass: navbarMenuTypeClass,
    footerTypeClass: footerTypeClass
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue":
/*!*****************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=template&id=f11d7d8c& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c&");
/* harmony import */ var _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c&":
/*!************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=template&id=f11d7d8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_f11d7d8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7&");
/* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_79499ad7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenuGroup; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");
// eslint-disable-next-line object-curly-newline



function useVerticalNavMenuGroup(item) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.verticalMenu.isVerticalMenuCollapsed;
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(isVerticalMenuCollapsed, function (val) {
    /* eslint-disable no-use-before-define */
    // * Handles case if routing is done outside of vertical menu
    // i.e. From Customizer Collapse or Using Link
    if (!isMouseHovered.value) {
      if (val) isOpen.value = false;else if (!val && isActive.value) isOpen.value = true;
    }
    /* eslint-enable */

  }); // ------------------------------------------------
  // isMouseHovered
  // ------------------------------------------------

  var isMouseHovered = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["inject"])('isMouseHovered'); // Collapse menu when menu is collapsed and show on open

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(isMouseHovered, function (val) {
    if (isVerticalMenuCollapsed.value) {
      // * we have used `val && val && isActive.value` to only open active menu on mouseEnter and close all menu on mouseLeave
      // * If we don't use `isActive.value` with `val` it can open other groups which are not active as well
      // eslint-disable-next-line no-use-before-define
      isOpen.value = val && isActive.value;
    }
  }); // ------------------------------------------------
  // openGroups
  // ------------------------------------------------

  var openGroups = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["inject"])('openGroups'); // Collapse other groups if one group is opened

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(openGroups, function (currentOpenGroups) {
    var clickedGroup = currentOpenGroups[currentOpenGroups.length - 1]; // If current group is not clicked group or current group is not active => Proceed with closing it
    // eslint-disable-next-line no-use-before-define

    if (clickedGroup !== item.title && !isActive.value) {
      // If clicked group is not child of current group
      // eslint-disable-next-line no-use-before-define
      if (!doesHaveChild(clickedGroup)) isOpen.value = false;
    }
  }); // ------------------------------------------------
  // isOpen
  // ------------------------------------------------

  var isOpen = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(isOpen, function (val) {
    // if group is opened push it to the array
    if (val) openGroups.value.push(item.title);
  });

  var updateGroupOpen = function updateGroupOpen(val) {
    // eslint-disable-next-line no-use-before-define
    isOpen.value = val;
  }; // ------------------------------------------------
  // isActive
  // ------------------------------------------------


  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(isActive, function (val) {
    /*
      If menu is collapsed and not hovered(optional) then don't open group
    */
    if (val) {
      if (!isVerticalMenuCollapsed.value) isOpen.value = val;
    } else {
      isOpen.value = val;
    }
  });

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_2__["isNavGroupActive"])(item.children);
  }; // ------------------------------------------------
  // Other Methods
  // ------------------------------------------------


  var doesHaveChild = function doesHaveChild(title) {
    return item.children.some(function (child) {
      return child.title === title;
    });
  };

  return {
    isOpen: isOpen,
    isActive: isActive,
    updateGroupOpen: updateGroupOpen,
    openGroups: openGroups,
    isMouseHovered: isMouseHovered,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js":
/*!******************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/libs/i18n */ "./frontend/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/libs/acl */ "./frontend/src/@core/libs/acl/index.js");



var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["useUtils"])(),
    t = _useI18nUtils.t;

var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_1__["useUtils"])(),
    canViewVerticalNavMenuHeader = _useAclUtils.canViewVerticalNavMenuHeader;

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  render: function render(h) {
    var span = h('span', {}, t(this.item.header));
    var icon = h('feather-icon', {
      props: {
        icon: 'MoreHorizontalIcon',
        size: '18'
      }
    });

    if (canViewVerticalNavMenuHeader(this.item)) {
      return h('li', {
        "class": 'navigation-header text-truncate'
      }, [span, icon]);
    }

    return h();
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77&");
/* harmony import */ var _VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuItems.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_79ec4d77___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue":
/*!*******************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuLink.vue?vue&type=template&id=10ffb945& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945&");
/* harmony import */ var _VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuLink.vue?vue&type=script&lang=js& */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuLink.vue?vue&type=template&id=10ffb945& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_10ffb945___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenuLink; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");


function useVerticalNavMenuLink(item) {
  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  var linkProps = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["navLinkProps"])(item);

  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavLinkActive"])(item);
  };

  return {
    isActive: isActive,
    linkProps: linkProps,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js":
/*!*******************************************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenu; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");


function useVerticalNavMenu(props) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.verticalMenu.isVerticalMenuCollapsed;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', val);
    }
  }); // ------------------------------------------------
  // collapseTogglerIcon
  // ------------------------------------------------

  var collapseTogglerIcon = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (props.isVerticalMenuActive) {
      return isVerticalMenuCollapsed.value ? 'unpinned' : 'pinned';
    }

    return 'close';
  });
  var isMouseHovered = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  var updateMouseHovered = function updateMouseHovered(val) {
    isMouseHovered.value = val;
  };

  var toggleCollapsed = function toggleCollapsed() {
    isVerticalMenuCollapsed.value = !isVerticalMenuCollapsed.value;
  };

  return {
    isMouseHovered: isMouseHovered,
    isVerticalMenuCollapsed: isVerticalMenuCollapsed,
    collapseTogglerIcon: collapseTogglerIcon,
    toggleCollapsed: toggleCollapsed,
    updateMouseHovered: updateMouseHovered
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/layout-vertical/useVerticalLayout.js":
/*!*************************************************************************!*\
  !*** ./frontend/src/@core/layouts/layout-vertical/useVerticalLayout.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalLayout; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");


function useVerticalLayout(navbarType, footerType) {
  var isVerticalMenuActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);

  var toggleVerticalMenuActive = function toggleVerticalMenuActive() {
    isVerticalMenuActive.value = !isVerticalMenuActive.value;
  };

  var currentBreakpoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('xl');
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.verticalMenu.isVerticalMenuCollapsed;
  });
  var layoutClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var classes = [];

    if (currentBreakpoint.value === 'xl') {
      classes.push('vertical-menu-modern');
      classes.push(isVerticalMenuCollapsed.value ? 'menu-collapsed' : 'menu-expanded');
    } else {
      classes.push('vertical-overlay-menu');
      classes.push(isVerticalMenuActive.value ? 'menu-open' : 'menu-hide');
    } // Navbar


    classes.push("navbar-".concat(navbarType.value)); // Footer

    if (footerType.value === 'sticky') classes.push('footer-fixed');
    if (footerType.value === 'static') classes.push('footer-static');
    if (footerType.value === 'hidden') classes.push('footer-hidden');
    return classes;
  }); // ------------------------------------------------
  // Resize handler for Breakpoint
  // ------------------------------------------------

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])(currentBreakpoint, function (val) {
    isVerticalMenuActive.value = val === 'xl';
  });

  var resizeHandler = function resizeHandler() {
    // ? This closes vertical menu when title bar is shown/hidden in mobile browsers.
    // ? We will watch for breakpoint to overcome this issue
    // isVerticalMenuActive.value = window.innerWidth >= 1200
    // ! You can use store getter to get breakpoint
    if (window.innerWidth >= 1200) currentBreakpoint.value = 'xl';else if (window.innerWidth >= 992) currentBreakpoint.value = 'lg';else if (window.innerWidth >= 768) currentBreakpoint.value = 'md';else if (window.innerWidth >= 576) currentBreakpoint.value = 'sm';else currentBreakpoint.value = 'xs';
  };

  var overlayClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (currentBreakpoint.value !== 'xl' && isVerticalMenuActive.value) return 'show';
    return null;
  });
  var navbarTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (navbarType.value === 'sticky') return 'fixed-top';
    if (navbarType.value === 'static') return 'navbar-static-top';
    if (navbarType.value === 'hidden') return 'd-none';
    return 'floating-nav';
  });
  var footerTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (footerType.value === 'static') return 'footer-static';
    if (footerType.value === 'hidden') return 'd-none';
    return '';
  });
  return {
    isVerticalMenuActive: isVerticalMenuActive,
    toggleVerticalMenuActive: toggleVerticalMenuActive,
    isVerticalMenuCollapsed: isVerticalMenuCollapsed,
    layoutClasses: layoutClasses,
    overlayClasses: overlayClasses,
    navbarTypeClass: navbarTypeClass,
    footerTypeClass: footerTypeClass,
    resizeHandler: resizeHandler
  };
}

/***/ }),

/***/ "./frontend/src/@core/layouts/utils.js":
/*!*********************************************!*\
  !*** ./frontend/src/@core/layouts/utils.js ***!
  \*********************************************/
/*! exports provided: resolveVerticalNavMenuItemComponent, resolveHorizontalNavMenuItemComponent, resolveNavDataRouteName, isNavLinkActive, isNavGroupActive, navLinkProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveVerticalNavMenuItemComponent", function() { return resolveVerticalNavMenuItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveHorizontalNavMenuItemComponent", function() { return resolveHorizontalNavMenuItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveNavDataRouteName", function() { return resolveNavDataRouteName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavLinkActive", function() { return isNavLinkActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavGroupActive", function() { return isNavGroupActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navLinkProps", function() { return navLinkProps; });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/utils */ "./frontend/src/@core/utils/utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");



/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */

var resolveVerticalNavMenuItemComponent = function resolveVerticalNavMenuItemComponent(item) {
  if (item.header) return 'vertical-nav-menu-header';
  if (item.children) return 'vertical-nav-menu-group';
  return 'vertical-nav-menu-link';
};
/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */

var resolveHorizontalNavMenuItemComponent = function resolveHorizontalNavMenuItemComponent(item) {
  if (item.children) return 'horizontal-nav-menu-group';
  return 'horizontal-nav-menu-link';
};
/**
 * Return route name for navigation link
 * If link is string then it will assume it is route-name
 * IF link is object it will resolve the object and will return the link
 * @param {Object, String} link navigation link object/string
 */

var resolveNavDataRouteName = function resolveNavDataRouteName(link) {
  if (Object(_core_utils_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"])(link.route)) {
    var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(link.route),
        route = _router$resolve.route;

    return route.name;
  }

  return link.route;
};
/**
 * Check if nav-link is active
 * @param {Object} link nav-link object
 */

var isNavLinkActive = function isNavLinkActive(link) {
  // Matched routes array of current route
  var matchedRoutes = _router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.matched; // Check if provided route matches route's matched route

  var resolveRoutedName = resolveNavDataRouteName(link);
  if (!resolveRoutedName) return false;
  return matchedRoutes.some(function (route) {
    return route.name === resolveRoutedName || route.meta.navActiveLink === resolveRoutedName;
  });
};
/**
 * Check if nav group is
 * @param {Array} children Group children
 */

var isNavGroupActive = function isNavGroupActive(children) {
  // Matched routes array of current route
  var matchedRoutes = _router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.matched;
  return children.some(function (child) {
    // If child have children => It's group => Go deeper(recursive)
    if (child.children) {
      return isNavGroupActive(child.children);
    } // else it's link => Check for matched Route


    return isNavLinkActive(child, matchedRoutes);
  });
};
/**
 * Return b-link props to use
 * @param {Object, String} item navigation routeName or route Object provided in navigation data
 */
// prettier-ignore

var navLinkProps = function navLinkProps(item) {
  return Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    var props = {}; // If route is string => it assumes => Create route object from route name
    // If route is not string => It assumes it's route object => returns route object

    if (item.route) props.to = typeof item.route === 'string' ? {
      name: item.route
    } : item.route;else {
      props.href = item.href;
      props.target = '_blank';
      props.rel = 'nofollow';
    }
    if (!props.target) props.target = item.target || null;
    return props;
  });
};

/***/ }),

/***/ "./frontend/src/@core/libs/acl/index.js":
/*!**********************************************!*\
  !*** ./frontend/src/@core/libs/acl/index.js ***!
  \**********************************************/
/*! exports provided: useUtils, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./frontend/src/@core/libs/acl/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useUtils = function useUtils() {
  return _objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_0__);
};
var _ = null;

/***/ }),

/***/ "./frontend/src/@core/libs/acl/utils.js":
/*!**********************************************!*\
  !*** ./frontend/src/@core/libs/acl/utils.js ***!
  \**********************************************/
/*! exports provided: can, canViewVerticalNavMenuLink, canViewVerticalNavMenuGroup, canViewVerticalNavMenuHeader, canViewHorizontalNavMenuLink, canViewHorizontalNavMenuHeaderLink, canViewHorizontalNavMenuGroup, canViewHorizontalNavMenuHeaderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "can", function() { return can; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuLink", function() { return canViewVerticalNavMenuLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuGroup", function() { return canViewVerticalNavMenuGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuHeader", function() { return canViewVerticalNavMenuHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuLink", function() { return canViewHorizontalNavMenuLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuHeaderLink", function() { return canViewHorizontalNavMenuHeaderLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuGroup", function() { return canViewHorizontalNavMenuGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuHeaderGroup", function() { return canViewHorizontalNavMenuHeaderGroup; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");

/**
 * Returns ability result if ACL is configured or else just return true
 * Useful if you don't know if ACL is configured or not
 * Used in @core files to handle absence of ACL without errors
 * @param {String} action CASL Actions // https://casl.js.org/v4/en/guide/intro#basics
 * @param {String} subject CASL Subject // https://casl.js.org/v4/en/guide/intro#basics
 */

var can = function can(action, subject) {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])().proxy;
  return vm.$can ? vm.$can(action, subject) : true;
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewVerticalNavMenuLink = function canViewVerticalNavMenuLink(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource & Hide group if all of it's children are hidden
 * @param {Object} item navigation object item
 */
// eslint-disable-next-line arrow-body-style

var canViewVerticalNavMenuGroup = function canViewVerticalNavMenuGroup(item) {
  // ! This same logic is used in canViewHorizontalNavMenuGroup and canViewHorizontalNavMenuHeaderGroup. So make sure to update logic in them as well
  var hasAnyVisibleChild = item.children.some(function (i) {
    return can(i.action, i.resource);
  }); // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child

  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }

  return can(item.action, item.resource) && hasAnyVisibleChild;
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewVerticalNavMenuHeader = function canViewVerticalNavMenuHeader(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewHorizontalNavMenuLink = function canViewHorizontalNavMenuLink(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */

var canViewHorizontalNavMenuHeaderLink = function canViewHorizontalNavMenuHeaderLink(item) {
  return can(item.action, item.resource);
};
/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource & Hide group if all of it's children are hidden
 * @param {Object} item navigation object item
 */
// eslint-disable-next-line arrow-body-style

var canViewHorizontalNavMenuGroup = function canViewHorizontalNavMenuGroup(item) {
  // ? Same logic as canViewVerticalNavMenuGroup
  var hasAnyVisibleChild = item.children.some(function (i) {
    return can(i.action, i.resource);
  }); // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child

  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }

  return can(item.action, item.resource) && hasAnyVisibleChild;
}; // eslint-disable-next-line arrow-body-style

var canViewHorizontalNavMenuHeaderGroup = function canViewHorizontalNavMenuHeaderGroup(item) {
  // ? Same logic as canViewVerticalNavMenuGroup but with extra content
  // eslint-disable-next-line arrow-body-style
  var hasAnyVisibleChild = item.children.some(function (grpOrItem) {
    // If it have children => It's grp
    // Call ACL function based on grp/link
    return grpOrItem.children ? canViewHorizontalNavMenuGroup(grpOrItem) : canViewHorizontalNavMenuLink(grpOrItem);
  }); // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child

  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }

  return can(item.action, item.resource) && hasAnyVisibleChild;
};

/***/ }),

/***/ "./frontend/src/@core/libs/i18n/index.js":
/*!***********************************************!*\
  !*** ./frontend/src/@core/libs/i18n/index.js ***!
  \***********************************************/
/*! exports provided: useUtils, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./frontend/src/@core/libs/i18n/utils.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var useUtils = function useUtils() {
  return _objectSpread({}, _utils__WEBPACK_IMPORTED_MODULE_0__);
};
var _ = null;

/***/ }),

/***/ "./frontend/src/@core/libs/i18n/utils.js":
/*!***********************************************!*\
  !*** ./frontend/src/@core/libs/i18n/utils.js ***!
  \***********************************************/
/*! exports provided: t, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");

/**
 * Returns translated string if i18n package is available to Vue
 * If i18n is not configured then it will simply return what is being passed
 * Useful if you don't know if i18n is configured or not
 * Used in @core files to handle absence of i18n without errors
 * @param {String} key i18n key to use for translation
 */

var t = function t(key) {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])().proxy;
  return vm.$t ? vm.$t(key) : key;
};
var _ = null;

/***/ }),

/***/ "./frontend/src/@core/utils/filter.js":
/*!********************************************!*\
  !*** ./frontend/src/@core/utils/filter.js ***!
  \********************************************/
/*! exports provided: kFormatter, title, avatarText, formatDate, formatDateToMonthShort, filterTags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kFormatter", function() { return kFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "avatarText", function() { return avatarText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateToMonthShort", function() { return formatDateToMonthShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterTags", function() { return filterTags; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./frontend/src/@core/utils/utils.js");

var kFormatter = function kFormatter(num) {
  return num > 999 ? "".concat((num / 1000).toFixed(1), "k") : num;
};
var title = function title(value) {
  var replacer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
  if (!value) return '';
  var str = value.toString();
  var arr = str.split(replacer);
  var capitalizedArray = [];
  arr.forEach(function (word) {
    var capitalized = word.charAt(0).toUpperCase() + word.slice(1);
    capitalizedArray.push(capitalized);
  });
  return capitalizedArray.join(' ');
};
var avatarText = function avatarText(value) {
  if (!value) return '';
  var nameArray = value.split(' ');
  return nameArray.map(function (word) {
    return word.charAt(0).toUpperCase();
  }).join('');
};
/**
 * Format and return date in Humanize format
 * Intl docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format
 * Intl Constructor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
 * @param {String} value date to format
 * @param {Object} formatting Intl object to format with
 */

var formatDate = function formatDate(value) {
  var formatting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  };
  if (!value) return value;
  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
};
/**
 * Return short human friendly month representation of date
 * Can also convert date to only time if date is of today (Better UX)
 * @param {String} value date to format
 * @param {Boolean} toTimeForCurrentDay Shall convert to time if day is today/current
 */

var formatDateToMonthShort = function formatDateToMonthShort(value) {
  var toTimeForCurrentDay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var date = new Date(value);
  var formatting = {
    month: 'short',
    day: 'numeric'
  };

  if (toTimeForCurrentDay && Object(_utils__WEBPACK_IMPORTED_MODULE_0__["isToday"])(date)) {
    formatting = {
      hour: 'numeric',
      minute: 'numeric'
    };
  }

  return new Intl.DateTimeFormat('en-US', formatting).format(new Date(value));
}; // Strip all the tags from markup and return plain text

var filterTags = function filterTags(value) {
  return value.replace(/<\/?[^>]+(>|$)/g, '');
};

/***/ }),

/***/ "./frontend/src/@core/utils/utils.js":
/*!*******************************************!*\
  !*** ./frontend/src/@core/utils/utils.js ***!
  \*******************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

 // eslint-disable-next-line object-curly-newline


var isObject = function isObject(obj) {
  return _typeof(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (
    /* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */

  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}; // ? Light and Dark variant is not included
// prettier-ignore


var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_0__["default"].resolve(route),
      resolvedRoute = _router$resolve.route;

  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_0__["default"].currentRoute.path;
}; // Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1

var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return _objectSpread(_objectSpread({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};
/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }
//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })
//   return a
// }

/***/ }),

/***/ "./frontend/src/assets/images/flags/de.png":
/*!*************************************************!*\
  !*** ./frontend/src/assets/images/flags/de.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/twic_terminal/frontend/src/assets/images/flags/de.png";

/***/ }),

/***/ "./frontend/src/assets/images/flags/en.png":
/*!*************************************************!*\
  !*** ./frontend/src/assets/images/flags/en.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/twic_terminal/frontend/src/assets/images/flags/en.png";

/***/ }),

/***/ "./frontend/src/assets/images/flags/fr.png":
/*!*************************************************!*\
  !*** ./frontend/src/assets/images/flags/fr.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/twic_terminal/frontend/src/assets/images/flags/fr.png";

/***/ }),

/***/ "./frontend/src/assets/images/flags/pt.png":
/*!*************************************************!*\
  !*** ./frontend/src/assets/images/flags/pt.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/twic_terminal/frontend/src/assets/images/flags/pt.png";

/***/ }),

/***/ "./frontend/src/assets/images/icons/jpg.png":
/*!**************************************************!*\
  !*** ./frontend/src/assets/images/icons/jpg.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/twic_terminal/frontend/src/assets/images/icons/jpg.png";

/***/ }),

/***/ "./frontend/src/assets/images/icons/pdf.png":
/*!**************************************************!*\
  !*** ./frontend/src/assets/images/icons/pdf.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/_/_/_/_/twic_terminal/frontend/src/assets/images/icons/pdf.png";

/***/ }),

/***/ "./frontend/src/layouts/horizontal/LayoutHorizontal.vue":
/*!**************************************************************!*\
  !*** ./frontend/src/layouts/horizontal/LayoutHorizontal.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutHorizontal_vue_vue_type_template_id_ded3a10e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutHorizontal.vue?vue&type=template&id=ded3a10e& */ "./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=ded3a10e&");
/* harmony import */ var _LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutHorizontal.vue?vue&type=script&lang=js& */ "./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutHorizontal_vue_vue_type_template_id_ded3a10e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutHorizontal_vue_vue_type_template_id_ded3a10e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/layouts/horizontal/LayoutHorizontal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=ded3a10e&":
/*!*********************************************************************************************!*\
  !*** ./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=ded3a10e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_ded3a10e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=template&id=ded3a10e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=ded3a10e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_ded3a10e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutHorizontal_vue_vue_type_template_id_ded3a10e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/navigation/horizontal/apps.js":
/*!****************************************************!*\
  !*** ./frontend/src/navigation/horizontal/apps.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Apps',
  icon: 'PackageIcon',
  children: [{
    title: 'Email',
    route: 'apps-email',
    icon: 'MailIcon'
  }, {
    title: 'Chat',
    route: 'apps-chat',
    icon: 'MessageSquareIcon'
  }, {
    title: 'Todo',
    route: 'apps-todo',
    icon: 'CheckSquareIcon'
  }, {
    title: 'Calendar',
    route: 'apps-calendar',
    icon: 'CalendarIcon'
  }, {
    title: 'Invoice',
    icon: 'FileTextIcon',
    children: [{
      title: 'List',
      route: 'apps-invoice-list'
    }, {
      title: 'Preview',
      route: {
        name: 'apps-invoice-preview',
        params: {
          id: 4987
        }
      }
    }, {
      title: 'Edit',
      route: {
        name: 'apps-invoice-edit',
        params: {
          id: 4987
        }
      }
    }, {
      title: 'Add',
      route: {
        name: 'apps-invoice-add'
      }
    }]
  }, {
    title: 'eCommerce',
    icon: 'ShoppingCartIcon',
    children: [{
      title: 'Shop',
      route: 'apps-e-commerce-shop'
    }, {
      title: 'Details',
      route: {
        name: 'apps-e-commerce-product-details',
        params: {
          slug: 'apple-watch-series-5-27'
        }
      }
    }, {
      title: 'Wishlist',
      route: 'apps-e-commerce-wishlist'
    }, {
      title: 'Checkout',
      route: 'apps-e-commerce-checkout'
    }]
  }, {
    title: 'User',
    icon: 'UserIcon',
    children: [{
      title: 'List',
      route: 'apps-users-list'
    }, {
      title: 'View',
      route: {
        name: 'apps-users-view',
        params: {
          id: 21
        }
      }
    }, {
      title: 'Edit',
      route: {
        name: 'apps-users-edit',
        params: {
          id: 21
        }
      }
    }]
  }]
}]);

/***/ }),

/***/ "./frontend/src/navigation/horizontal/charts-and-maps.js":
/*!***************************************************************!*\
  !*** ./frontend/src/navigation/horizontal/charts-and-maps.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Charts & Maps',
  icon: 'PieChartIcon',
  children: [{
    title: 'Charts',
    icon: 'PieChartIcon',
    children: [{
      title: 'Apex Chart',
      route: 'charts-apex-chart'
    }, {
      title: 'Chartjs',
      route: 'charts-chartjs'
    }, {
      title: 'Echart',
      route: 'charts-echart'
    }]
  }, {
    title: 'Leaflet',
    route: 'maps-leaflet',
    icon: 'MapIcon'
  }]
}]);

/***/ }),

/***/ "./frontend/src/navigation/horizontal/dashboard.js":
/*!*********************************************************!*\
  !*** ./frontend/src/navigation/horizontal/dashboard.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Dashboards',
  icon: 'HomeIcon',
  children: [{
    title: 'eCommerce',
    route: 'dashboard-ecommerce',
    icon: 'ShoppingCartIcon'
  }, {
    title: 'Analytics',
    route: 'dashboard-analytics',
    icon: 'ActivityIcon'
  }]
}]);

/***/ }),

/***/ "./frontend/src/navigation/horizontal/forms-and-table.js":
/*!***************************************************************!*\
  !*** ./frontend/src/navigation/horizontal/forms-and-table.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Forms & Tables',
  icon: 'EditIcon',
  children: [{
    title: 'Forms Elements',
    icon: 'CopyIcon',
    children: [{
      title: 'Input',
      route: 'forms-element-input'
    }, {
      title: 'Input Group',
      route: 'forms-element-input-group'
    }, {
      title: 'Input Mask',
      route: 'forms-element-input-mask'
    }, {
      title: 'Textarea',
      route: 'forms-element-textarea'
    }, {
      title: 'Auto Suggest',
      route: 'extensions-auto-suggest'
    }, {
      title: 'Checkbox',
      route: 'forms-element-checkbox'
    }, {
      title: 'Radio',
      route: 'forms-element-radio'
    }, {
      title: 'Switch',
      route: 'forms-element-switch'
    }, {
      title: 'Select',
      route: 'forms-element-select'
    }, {
      title: 'Vue Select',
      route: 'extensions-vue-select'
    }, {
      title: 'Spinbutton',
      route: 'forms-element-spinbutton'
    }, {
      title: 'File Input',
      route: 'forms-element-file-input'
    }, {
      title: 'Quill Editor',
      route: 'extensions-quill-editor'
    }, {
      title: 'Form Datepicker',
      route: 'forms-element-datepicker'
    }, {
      title: 'Form Timepicker',
      route: 'forms-element-timepicker'
    }, {
      title: 'Date Time Picker',
      route: 'extensions-date-time-picker'
    }, {
      title: 'Form Rating',
      route: 'forms-element-rating'
    }, {
      title: 'Form Tag',
      route: 'forms-element-tag'
    }]
  }, {
    title: 'Form Layout',
    route: 'form-layout',
    icon: 'CopyIcon'
  }, {
    title: 'Form Wizard',
    route: 'form-wizard',
    icon: 'PackageIcon'
  }, {
    title: 'Form Validation',
    route: 'form-validation',
    icon: 'CheckCircleIcon'
  }, {
    title: 'Form Repeater',
    route: 'form-repeater',
    icon: 'CopyIcon'
  }, {
    title: 'BS Table',
    route: 'table-bs-table',
    icon: 'ServerIcon'
  }, {
    title: 'Good Table',
    route: 'table-good-table',
    icon: 'GridIcon'
  }]
}]);

/***/ }),

/***/ "./frontend/src/navigation/horizontal/index.js":
/*!*****************************************************!*\
  !*** ./frontend/src/navigation/horizontal/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard */ "./frontend/src/navigation/horizontal/dashboard.js");
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps */ "./frontend/src/navigation/horizontal/apps.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ "./frontend/src/navigation/horizontal/pages.js");
/* harmony import */ var _charts_and_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts-and-maps */ "./frontend/src/navigation/horizontal/charts-and-maps.js");
/* harmony import */ var _ui_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-elements */ "./frontend/src/navigation/horizontal/ui-elements.js");
/* harmony import */ var _forms_and_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms-and-table */ "./frontend/src/navigation/horizontal/forms-and-table.js");
/* harmony import */ var _others__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./others */ "./frontend/src/navigation/horizontal/others.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*

NOTE: tag is not supported in horizontal menu

Array of object

Top level object can be:
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- nav Grp (top level grp is called header group) ---/

title
icon (if it's on top/second level)
children

/--- nav Item (top level item is called header link) ---/

icon (if it's on top/second level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)

*/






 // Array of sections

/* harmony default export */ __webpack_exports__["default"] = ([].concat(_toConsumableArray(_dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]), _toConsumableArray(_apps__WEBPACK_IMPORTED_MODULE_1__["default"]), _toConsumableArray(_ui_elements__WEBPACK_IMPORTED_MODULE_4__["default"]), _toConsumableArray(_forms_and_table__WEBPACK_IMPORTED_MODULE_5__["default"]), _toConsumableArray(_pages__WEBPACK_IMPORTED_MODULE_2__["default"]), _toConsumableArray(_charts_and_maps__WEBPACK_IMPORTED_MODULE_3__["default"]), _toConsumableArray(_others__WEBPACK_IMPORTED_MODULE_6__["default"])));

/***/ }),

/***/ "./frontend/src/navigation/horizontal/others.js":
/*!******************************************************!*\
  !*** ./frontend/src/navigation/horizontal/others.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Others',
  icon: 'MoreHorizontalIcon',
  children: [{
    title: 'Access Control',
    route: 'access-control',
    icon: 'ShieldIcon',
    // acl: {
    action: 'read',
    resource: 'ACL' // },

  }, {
    title: 'Menu Levels',
    icon: 'MenuIcon',
    children: [{
      title: 'Menu Level 2.1',
      route: null
    }, {
      title: 'Menu Level 2.2',
      children: [{
        title: 'Menu Level 3.1',
        route: null
      }, {
        title: 'Menu Level 3.2',
        route: null
      }]
    }]
  }, {
    title: 'Disabled Menu',
    route: null,
    icon: 'EyeOffIcon',
    disabled: true
  }, {
    title: 'Raise Support',
    href: 'https://pixinvent.ticksy.com/',
    icon: 'LifeBuoyIcon'
  }, {
    title: 'Documentation',
    href: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation',
    icon: 'FileTextIcon'
  }]
}]);

/***/ }),

/***/ "./frontend/src/navigation/horizontal/pages.js":
/*!*****************************************************!*\
  !*** ./frontend/src/navigation/horizontal/pages.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Pages',
  icon: 'FileTextIcon',
  children: [{
    title: 'Authentication',
    icon: 'LockIcon',
    children: [{
      title: 'Login v1',
      route: 'auth-login-v1',
      target: '_blank'
    }, {
      title: 'Login v2',
      route: 'auth-login-v2',
      target: '_blank'
    }, {
      title: 'Register v1',
      route: 'auth-register-v1',
      target: '_blank'
    }, {
      title: 'Register v2',
      route: 'auth-register-v2',
      target: '_blank'
    }, {
      title: 'Forgot Password v1',
      route: 'auth-forgot-password-v1',
      target: '_blank'
    }, {
      title: 'Forgot Password v2',
      route: 'auth-forgot-password-v2',
      target: '_blank'
    }, {
      title: 'Reset Password v1',
      route: 'auth-reset-password-v1',
      target: '_blank'
    }, {
      title: 'Reset Password v2',
      route: 'auth-reset-password-v2',
      target: '_blank'
    }]
  }, {
    title: 'Account Settings',
    route: 'pages-account-setting',
    icon: 'SettingsIcon'
  }, {
    title: 'Profile',
    route: 'pages-profile',
    icon: 'UserIcon'
  }, {
    title: 'Faq',
    route: 'pages-faq',
    icon: 'HelpCircleIcon'
  }, {
    title: 'Knowledge Base',
    route: 'pages-knowledge-base',
    icon: 'AlertCircleIcon'
  }, {
    title: 'Pricing',
    route: 'pages-pricing',
    icon: 'DollarSignIcon'
  }, {
    title: 'Blog',
    icon: 'ClipboardIcon',
    children: [{
      title: 'List',
      route: 'pages-blog-list'
    }, {
      title: 'Detail',
      route: {
        name: 'pages-blog-detail',
        params: {
          id: 1
        }
      }
    }, {
      title: 'Edit',
      route: {
        name: 'pages-blog-edit',
        params: {
          id: 1
        }
      }
    }]
  }, {
    title: 'Mail Templates',
    icon: 'MailIcon',
    children: [{
      title: 'Welcome',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html'
    }, {
      title: 'Reset Password',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html'
    }, {
      title: 'Verify Email',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html'
    }, {
      title: 'Deactivate Account',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html'
    }, {
      title: 'Invoice',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html'
    }, {
      title: 'Promotional',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html'
    }]
  }, {
    title: 'Miscellaneous',
    icon: 'FileIcon',
    children: [{
      title: 'Coming Soon',
      route: 'misc-coming-soon',
      target: '_blank'
    }, {
      title: 'Not Authorized',
      route: 'misc-not-authorized',
      target: '_blank'
    }, {
      title: 'Under Maintenance',
      route: 'misc-under-maintenance',
      target: '_blank'
    }, {
      title: 'Error',
      route: 'misc-error',
      target: '_blank'
    }]
  }]
}]);

/***/ }),

/***/ "./frontend/src/navigation/horizontal/ui-elements.js":
/*!***********************************************************!*\
  !*** ./frontend/src/navigation/horizontal/ui-elements.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'User Interface',
  icon: 'LayersIcon',
  children: [{
    title: 'Typography',
    route: 'ui-typography',
    icon: 'TypeIcon'
  }, {
    title: 'Colors',
    route: 'ui-colors',
    icon: 'DropletIcon'
  }, {
    title: 'Feather',
    route: 'ui-feather',
    icon: 'EyeIcon'
  }, {
    title: 'Cards',
    icon: 'CreditCardIcon',
    children: [{
      title: 'Basic',
      route: 'card-basic'
    }, {
      title: 'Advance',
      route: 'card-advance'
    }, {
      title: 'Statistic',
      route: 'card-statistic'
    }, {
      title: 'Analytic',
      route: 'card-analytic'
    }, {
      title: 'Card Action',
      route: 'card-action'
    }]
  }, {
    title: 'Components',
    icon: 'ArchiveIcon',
    children: [{
      title: 'Alert',
      route: 'components-alert'
    }, {
      title: 'Aspect',
      route: 'components-aspect'
    }, {
      title: 'Avatar',
      route: 'components-avatar'
    }, {
      title: 'Badge',
      route: 'components-badge'
    }, {
      title: 'Breadcrumb',
      route: 'components-breadcrumb'
    }, {
      title: 'Button',
      route: 'components-button'
    }, {
      title: 'Button Group',
      route: 'components-button-group'
    }, {
      title: 'Button Toolbar',
      route: 'components-button-toolbar'
    }, {
      title: 'Calendar',
      route: 'components-calendar'
    }, {
      title: 'Carousel',
      route: 'components-carousel'
    }, {
      title: 'Collapse',
      route: 'components-collapse'
    }, {
      title: 'Dropdown',
      route: 'components-dropdown'
    }, {
      title: 'Embed',
      route: 'components-embed'
    }, {
      title: 'Image',
      route: 'components-image'
    }, {
      title: 'List Group',
      route: 'components-list-group'
    }, {
      title: 'Media Objects',
      route: 'components-media'
    }, {
      title: 'Modal',
      route: 'components-modal'
    }, {
      title: 'Nav',
      route: 'components-nav'
    }, {
      title: 'Overlay',
      route: 'components-overlay'
    }, {
      title: 'Pagination',
      route: 'components-pagination'
    }, {
      title: 'Pagination Nav',
      route: 'components-pagination-nav'
    }, {
      title: 'Pill',
      route: 'components-pill'
    }, {
      title: 'Pill Badge',
      route: 'components-pill-badge'
    }, {
      title: 'Popover',
      route: 'components-popover'
    }, {
      title: 'Progress',
      route: 'components-progress'
    }, {
      title: 'Sidebar',
      route: 'components-sidebar'
    }, {
      title: 'spinner',
      route: 'components-spinner'
    }, {
      title: 'Tab',
      route: 'components-tab'
    }, {
      title: 'Time',
      route: 'components-time'
    }, {
      title: 'Timeline',
      route: 'components-timeline'
    }, {
      title: 'Toasts',
      route: 'components-toasts'
    }, {
      title: 'Tooltip',
      route: 'components-tooltip'
    }]
  }, {
    title: 'Extensions',
    icon: 'PlusCircleIcon',
    children: [{
      title: 'Sweet Alert',
      route: 'extensions-sweet-alert'
    }, {
      title: 'Toastification',
      route: 'extensions-toastification'
    }, {
      title: 'Slider',
      route: 'extensions-slider'
    }, {
      title: 'Drag & Drop',
      route: 'extensions-drag-and-drop'
    }, {
      title: 'Tour',
      route: 'extensions-tour'
    }, {
      title: 'Clipboard',
      route: 'extensions-clipboard'
    }, {
      title: 'Context Menu',
      route: 'extensions-context-menu'
    }, {
      title: 'Swiper',
      route: 'extensions-swiper'
    }, // {
    //   title: 'Tree',
    //   route: 'extensions-tree',
    // },
    {
      title: 'I18n',
      route: 'extensions-i18n'
    }]
  }, {
    title: 'Page Layouts',
    icon: 'LayoutIcon',
    children: [{
      title: 'Layout Boxed',
      route: 'page-layout-boxed-layout'
    }, {
      title: 'Without Menu',
      route: 'page-layout-without-menu'
    }, {
      title: 'Layout Empty',
      route: 'page-layout-layout-empty'
    }, {
      title: 'Layout Blank',
      route: 'page-layout-layout-blank'
    }]
  }]
}]);

/***/ }),

/***/ "./frontend/src/navigation/vertical/apps-and-pages.js":
/*!************************************************************!*\
  !*** ./frontend/src/navigation/vertical/apps-and-pages.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Apps & Pages'
}, {
  title: 'Email',
  route: 'apps-email',
  icon: 'MailIcon'
}, {
  title: 'Chat',
  route: 'apps-chat',
  icon: 'MessageSquareIcon'
}, {
  title: 'Todo',
  route: 'apps-todo',
  icon: 'CheckSquareIcon'
}, {
  title: 'Calendar',
  route: 'apps-calendar',
  icon: 'CalendarIcon'
}, {
  title: 'Invoice',
  icon: 'FileTextIcon',
  children: [{
    title: 'List',
    route: 'apps-invoice-list'
  }, {
    title: 'Preview',
    route: {
      name: 'apps-invoice-preview',
      params: {
        id: 4987
      }
    }
  }, {
    title: 'Edit',
    route: {
      name: 'apps-invoice-edit',
      params: {
        id: 4987
      }
    }
  }, {
    title: 'Add',
    route: {
      name: 'apps-invoice-add'
    }
  }]
}, {
  title: 'eCommerce',
  icon: 'ShoppingCartIcon',
  children: [{
    title: 'Shop',
    route: 'apps-e-commerce-shop'
  }, {
    title: 'Details',
    route: {
      name: 'apps-e-commerce-product-details',
      params: {
        slug: 'apple-watch-series-5-27'
      }
    }
  }, {
    title: 'Wishlist',
    route: 'apps-e-commerce-wishlist'
  }, {
    title: 'Checkout',
    route: 'apps-e-commerce-checkout'
  }]
}, {
  title: 'User',
  icon: 'UserIcon',
  children: [{
    title: 'List',
    route: 'apps-users-list'
  }, {
    title: 'View',
    route: {
      name: 'apps-users-view',
      params: {
        id: 21
      }
    }
  }, {
    title: 'Edit',
    route: {
      name: 'apps-users-edit',
      params: {
        id: 21
      }
    }
  }]
}, {
  title: 'Pages',
  icon: 'FileIcon',
  children: [{
    title: 'Authentication',
    icon: 'CircleIcon',
    children: [{
      title: 'Login v1',
      route: 'auth-login-v1',
      target: '_blank'
    }, {
      title: 'Login v2',
      route: 'auth-login-v2',
      target: '_blank'
    }, {
      title: 'Register v1',
      route: 'auth-register-v1',
      target: '_blank'
    }, {
      title: 'Register v2',
      route: 'auth-register-v2',
      target: '_blank'
    }, {
      title: 'Forgot Password v1',
      route: 'auth-forgot-password-v1',
      target: '_blank'
    }, {
      title: 'Forgot Password v2',
      route: 'auth-forgot-password-v2',
      target: '_blank'
    }, {
      title: 'Reset Password v1',
      route: 'auth-reset-password-v1',
      target: '_blank'
    }, {
      title: 'Reset Password v2',
      route: 'auth-reset-password-v2',
      target: '_blank'
    }]
  }, {
    title: 'Account Settings',
    route: 'pages-account-setting'
  }, {
    title: 'Profile',
    route: 'pages-profile'
  }, {
    title: 'Faq',
    route: 'pages-faq'
  }, {
    title: 'Knowledge Base',
    route: 'pages-knowledge-base'
  }, {
    title: 'Pricing',
    route: 'pages-pricing'
  }, {
    title: 'Blog',
    children: [{
      title: 'List',
      route: 'pages-blog-list'
    }, {
      title: 'Detail',
      route: {
        name: 'pages-blog-detail',
        params: {
          id: 1
        }
      }
    }, {
      title: 'Edit',
      route: {
        name: 'pages-blog-edit',
        params: {
          id: 1
        }
      }
    }]
  }, {
    title: 'Mail Templates',
    children: [{
      title: 'Welcome',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html'
    }, {
      title: 'Reset Password',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html'
    }, {
      title: 'Verify Email',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html'
    }, {
      title: 'Deactivate Account',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html'
    }, {
      title: 'Invoice',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html'
    }, {
      title: 'Promotional',
      href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html'
    }]
  }, {
    title: 'Miscellaneous',
    icon: 'CircleIcon',
    children: [{
      title: 'Coming Soon',
      route: 'misc-coming-soon',
      target: '_blank'
    }, {
      title: 'Not Authorized',
      route: 'misc-not-authorized',
      target: '_blank'
    }, {
      title: 'Under Maintenance',
      route: 'misc-under-maintenance',
      target: '_blank'
    }, {
      title: 'Error',
      route: 'misc-error',
      target: '_blank'
    }]
  }]
}]);

/***/ }),

/***/ "./frontend/src/navigation/vertical/charts-and-maps.js":
/*!*************************************************************!*\
  !*** ./frontend/src/navigation/vertical/charts-and-maps.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Charts & Maps'
}, {
  title: 'Charts',
  icon: 'PieChartIcon',
  tag: '3',
  tagVariant: 'light-danger',
  children: [{
    title: 'Apex Chart',
    route: 'charts-apex-chart'
  }, {
    title: 'Chartjs',
    route: 'charts-chartjs'
  }, {
    title: 'Echart',
    route: 'charts-echart'
  }]
}, {
  title: 'Leaflet',
  route: 'maps-leaflet',
  icon: 'MapIcon'
}]);

/***/ }),

/***/ "./frontend/src/navigation/vertical/dashboard.js":
/*!*******************************************************!*\
  !*** ./frontend/src/navigation/vertical/dashboard.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Dashboards',
  icon: 'HomeIcon',
  tag: '2',
  tagVariant: 'light-warning',
  children: [{
    title: 'eCommerce',
    route: 'dashboard-ecommerce'
  }, {
    title: 'Analytics',
    route: 'dashboard-analytics'
  }]
}]);

/***/ }),

/***/ "./frontend/src/navigation/vertical/forms-and-table.js":
/*!*************************************************************!*\
  !*** ./frontend/src/navigation/vertical/forms-and-table.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Forms & Tables'
}, {
  title: 'Forms Elements',
  icon: 'CopyIcon',
  children: [{
    title: 'Input',
    route: 'forms-element-input'
  }, {
    title: 'Input Group',
    route: 'forms-element-input-group'
  }, {
    title: 'Input Mask',
    route: 'forms-element-input-mask'
  }, {
    title: 'Textarea',
    route: 'forms-element-textarea'
  }, {
    title: 'Auto Suggest',
    route: 'extensions-auto-suggest'
  }, {
    title: 'Checkbox',
    route: 'forms-element-checkbox'
  }, {
    title: 'Radio',
    route: 'forms-element-radio'
  }, {
    title: 'Switch',
    route: 'forms-element-switch'
  }, {
    title: 'Select',
    route: 'forms-element-select'
  }, {
    title: 'Vue Select',
    route: 'extensions-vue-select'
  }, {
    title: 'Spinbutton',
    route: 'forms-element-spinbutton'
  }, {
    title: 'File Input',
    route: 'forms-element-file-input'
  }, {
    title: 'Quill Editor',
    route: 'extensions-quill-editor'
  }, {
    title: 'Form Datepicker',
    route: 'forms-element-datepicker'
  }, {
    title: 'Form Timepicker',
    route: 'forms-element-timepicker'
  }, {
    title: 'Date Time Picker',
    route: 'extensions-date-time-picker'
  }, {
    title: 'Form Rating',
    route: 'forms-element-rating'
  }, {
    title: 'Form Tag',
    route: 'forms-element-tag'
  }]
}, {
  title: 'Form Layout',
  route: 'form-layout',
  icon: 'CopyIcon'
}, {
  title: 'Form Wizard',
  route: 'form-wizard',
  icon: 'PackageIcon'
}, {
  title: 'Form Validation',
  route: 'form-validation',
  icon: 'CheckCircleIcon'
}, {
  title: 'Form Repeater',
  route: 'form-repeater',
  icon: 'CopyIcon'
}, {
  title: 'BS Table',
  route: 'table-bs-table',
  icon: 'ServerIcon'
}, {
  title: 'Good Table',
  route: 'table-good-table',
  icon: 'GridIcon'
}]);

/***/ }),

/***/ "./frontend/src/navigation/vertical/index.js":
/*!***************************************************!*\
  !*** ./frontend/src/navigation/vertical/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard */ "./frontend/src/navigation/vertical/dashboard.js");
/* harmony import */ var _apps_and_pages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apps-and-pages */ "./frontend/src/navigation/vertical/apps-and-pages.js");
/* harmony import */ var _others__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./others */ "./frontend/src/navigation/vertical/others.js");
/* harmony import */ var _charts_and_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charts-and-maps */ "./frontend/src/navigation/vertical/charts-and-maps.js");
/* harmony import */ var _ui_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui-elements */ "./frontend/src/navigation/vertical/ui-elements.js");
/* harmony import */ var _forms_and_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forms-and-table */ "./frontend/src/navigation/vertical/forms-and-table.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*

Array of object

Top level object can be:
1. Header
2. Group (Group can have navItems as children)
3. navItem

* Supported Options

/--- Header ---/

header

/--- nav Grp ---/

title
icon (if it's on top level)
tag
tagVariant
children

/--- nav Item ---/

icon (if it's on top level)
title
route: [route_obj/route_name] (I have to resolve name somehow from the route obj)
tag
tagVariant

*/





 // Array of sections

/* harmony default export */ __webpack_exports__["default"] = ([].concat(_toConsumableArray(_dashboard__WEBPACK_IMPORTED_MODULE_0__["default"]), _toConsumableArray(_apps_and_pages__WEBPACK_IMPORTED_MODULE_1__["default"]), _toConsumableArray(_ui_elements__WEBPACK_IMPORTED_MODULE_4__["default"]), _toConsumableArray(_forms_and_table__WEBPACK_IMPORTED_MODULE_5__["default"]), _toConsumableArray(_charts_and_maps__WEBPACK_IMPORTED_MODULE_3__["default"]), _toConsumableArray(_others__WEBPACK_IMPORTED_MODULE_2__["default"])));

/***/ }),

/***/ "./frontend/src/navigation/vertical/others.js":
/*!****************************************************!*\
  !*** ./frontend/src/navigation/vertical/others.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'Others'
}, {
  title: 'Access Control',
  route: 'access-control',
  icon: 'ShieldIcon',
  // acl: {
  action: 'read',
  resource: 'ACL' // },

}, {
  title: 'Menu Levels',
  icon: 'MenuIcon',
  children: [{
    title: 'Menu Level 2.1',
    route: null
  }, {
    title: 'Menu Level 2.2',
    children: [{
      title: 'Menu Level 3.1',
      route: null
    }, {
      title: 'Menu Level 3.2',
      route: null
    }]
  }]
}, {
  title: 'Disabled Menu',
  route: null,
  icon: 'EyeOffIcon',
  disabled: true
}, {
  title: 'Raise Support',
  href: 'https://pixinvent.ticksy.com/',
  icon: 'LifeBuoyIcon'
}, {
  title: 'Documentation',
  href: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation',
  icon: 'FileTextIcon'
}]);

/***/ }),

/***/ "./frontend/src/navigation/vertical/ui-elements.js":
/*!*********************************************************!*\
  !*** ./frontend/src/navigation/vertical/ui-elements.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  header: 'User Interface'
}, {
  title: 'Typography',
  route: 'ui-typography',
  icon: 'TypeIcon'
}, {
  title: 'Colors',
  route: 'ui-colors',
  icon: 'DropletIcon'
}, {
  title: 'Feather',
  route: 'ui-feather',
  icon: 'EyeIcon'
}, {
  title: 'Cards',
  icon: 'CreditCardIcon',
  tag: 'new',
  tagVariant: 'light-success',
  children: [{
    title: 'Basic',
    route: 'card-basic'
  }, {
    title: 'Advance',
    route: 'card-advance'
  }, {
    title: 'Statistics',
    route: 'card-statistic'
  }, {
    title: 'Analytics',
    route: 'card-analytic'
  }, {
    title: 'Card Actions',
    route: 'card-action'
  }]
}, {
  title: 'Components',
  icon: 'ArchiveIcon',
  children: [{
    title: 'Alert',
    route: 'components-alert'
  }, {
    title: 'Aspect',
    route: 'components-aspect'
  }, {
    title: 'Avatar',
    route: 'components-avatar'
  }, {
    title: 'Badge',
    route: 'components-badge'
  }, {
    title: 'Breadcrumb',
    route: 'components-breadcrumb'
  }, {
    title: 'Button',
    route: 'components-button'
  }, {
    title: 'Button Group',
    route: 'components-button-group'
  }, {
    title: 'Button Toolbar',
    route: 'components-button-toolbar'
  }, {
    title: 'Calendar',
    route: 'components-calendar'
  }, {
    title: 'Carousel',
    route: 'components-carousel'
  }, {
    title: 'Collapse',
    route: 'components-collapse'
  }, {
    title: 'Dropdown',
    route: 'components-dropdown'
  }, {
    title: 'Embed',
    route: 'components-embed'
  }, {
    title: 'Image',
    route: 'components-image'
  }, {
    title: 'List Group',
    route: 'components-list-group'
  }, {
    title: 'Media Objects',
    route: 'components-media'
  }, {
    title: 'Modal',
    route: 'components-modal'
  }, {
    title: 'Nav',
    route: 'components-nav'
  }, {
    title: 'Overlay',
    route: 'components-overlay'
  }, {
    title: 'Pagination',
    route: 'components-pagination'
  }, {
    title: 'Pagination Nav',
    route: 'components-pagination-nav'
  }, {
    title: 'Pill',
    route: 'components-pill'
  }, {
    title: 'Pill Badge',
    route: 'components-pill-badge'
  }, {
    title: 'Popover',
    route: 'components-popover'
  }, {
    title: 'Progress',
    route: 'components-progress'
  }, {
    title: 'Sidebar',
    route: 'components-sidebar'
  }, {
    title: 'spinner',
    route: 'components-spinner'
  }, {
    title: 'Tab',
    route: 'components-tab'
  }, {
    title: 'Time',
    route: 'components-time'
  }, {
    title: 'Timeline',
    route: 'components-timeline'
  }, {
    title: 'Toasts',
    route: 'components-toasts'
  }, {
    title: 'Tooltip',
    route: 'components-tooltip'
  }]
}, {
  title: 'Extensions',
  icon: 'PlusCircleIcon',
  children: [{
    title: 'Sweet Alert',
    route: 'extensions-sweet-alert'
  }, {
    title: 'Toastification',
    route: 'extensions-toastification'
  }, {
    title: 'Slider',
    route: 'extensions-slider'
  }, {
    title: 'Drag & Drop',
    route: 'extensions-drag-and-drop'
  }, {
    title: 'Tour',
    route: 'extensions-tour'
  }, {
    title: 'Clipboard',
    route: 'extensions-clipboard'
  }, {
    title: 'Context Menu',
    route: 'extensions-context-menu'
  }, {
    title: 'Swiper',
    route: 'extensions-swiper'
  }, // {
  //   title: 'Tree',
  //   route: 'extensions-tree',
  // },
  {
    title: 'I18n',
    route: 'extensions-i18n'
  }]
}, {
  title: 'Page Layouts',
  icon: 'LayoutIcon',
  children: [{
    title: 'Collapsed Menu',
    route: 'page-layout-collapsed-menu'
  }, {
    title: 'Layout Boxed',
    route: 'page-layout-boxed-layout'
  }, {
    title: 'Without Menu',
    route: 'page-layout-without-menu'
  }, {
    title: 'Layout Empty',
    route: 'page-layout-layout-empty'
  }, {
    title: 'Layout Blank',
    route: 'page-layout-layout-blank'
  }]
}]);

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
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
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  components: {
    BBreadcrumb: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBreadcrumb"],
    BBreadcrumbItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBreadcrumbItem"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _components_Bookmarks_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Bookmarks.vue */ "./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue");
/* harmony import */ var _components_Locale_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Locale.vue */ "./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue");
/* harmony import */ var _components_DarkToggler_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DarkToggler.vue */ "./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue");
/* harmony import */ var _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SearchBar.vue */ "./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue");
/* harmony import */ var _components_CartDropdown_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CartDropdown.vue */ "./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue");
/* harmony import */ var _components_NotificationDropdown_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/NotificationDropdown.vue */ "./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue");
/* harmony import */ var _components_UserDropdown_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/UserDropdown.vue */ "./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue");
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    // Navbar Components
    BNavbarNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbarNav"],
    Bookmarks: _components_Bookmarks_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    Locale: _components_Locale_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    DarkToggler: _components_DarkToggler_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    SearchBar: _components_SearchBar_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    CartDropdown: _components_CartDropdown_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    NotificationDropdown: _components_NotificationDropdown_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    UserDropdown: _components_UserDropdown_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      "default": function _default() {}
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"]
  },
  setup: function setup() {
    // App Name
    var _$themeConfig$app = _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeConfig"].app,
        appName = _$themeConfig$app.appName,
        appLogoImage = _$themeConfig$app.appLogoImage;
    return {
      appName: appName,
      appLogoImage: appLogoImage
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_components_app_auto_suggest_useAutoSuggest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/components/app-auto-suggest/useAutoSuggest */ "./frontend/src/@core/components/app-auto-suggest/useAutoSuggest.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search-and-bookmark-data */ "./frontend/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js");
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
    BNavbarNav: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavbarNav"],
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItem"],
    BTooltip: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTooltip"],
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"]
  },
  setup: function setup() {
    var searchAndBookmarkDataPages = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(_search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_6__["default"].pages);
    var bookmarks = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(_search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_6__["default"].pages.data.filter(function (page) {
      return page.isBookmarked;
    }));
    var currentSelected = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(-1);
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60
    };

    var _useAutoSuggest = Object(_core_components_app_auto_suggest_useAutoSuggest__WEBPACK_IMPORTED_MODULE_2__["default"])({
      data: {
        pages: searchAndBookmarkDataPages.value
      },
      searchLimit: 6
    }),
        searchQuery = _useAutoSuggest.searchQuery,
        resetsearchQuery = _useAutoSuggest.resetsearchQuery,
        filteredData = _useAutoSuggest.filteredData;

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["watch"])(searchQuery, function (val) {
      _store__WEBPACK_IMPORTED_MODULE_5__["default"].commit('app/TOGGLE_OVERLAY', Boolean(val));
    });
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["watch"])(filteredData, function (val) {
      currentSelected.value = val.pages && !val.pages.length ? -1 : 0;
    });

    var suggestionSelected = function suggestionSelected() {
      var suggestion = filteredData.value.pages[currentSelected.value];
      _router__WEBPACK_IMPORTED_MODULE_4__["default"].push(suggestion.route)["catch"](function () {});
      resetsearchQuery();
    };

    var toggleBookmarked = function toggleBookmarked(item) {
      // Find Index of item/page in bookmarks' array
      var pageIndexInBookmarks = bookmarks.value.findIndex(function (i) {
        return i.route === item.route;
      }); // If index is > -1 => Item is bookmarked => Remove item from bookmarks array using index
      // Else => Item is not bookmarked => Add item to bookmarks' array

      if (pageIndexInBookmarks > -1) {
        bookmarks.value[pageIndexInBookmarks].isBookmarked = false;
        bookmarks.value.splice(pageIndexInBookmarks, 1);
      } else {
        bookmarks.value.push(item);
        bookmarks.value[bookmarks.value.length - 1].isBookmarked = true;
      }
    };

    return {
      bookmarks: bookmarks,
      perfectScrollbarSettings: perfectScrollbarSettings,
      currentSelected: currentSelected,
      suggestionSelected: suggestionSelected,
      toggleBookmarked: toggleBookmarked,
      // AutoSuggest
      searchQuery: searchQuery,
      resetsearchQuery: resetsearchQuery,
      filteredData: filteredData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
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
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BFormSpinbutton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSpinbutton"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      items: [],
      perfectScrollbarSettings: {
        maxScrollbarLength: 60,
        wheelPropagation: false
      }
    };
  },
  computed: {
    totalAmount: function totalAmount() {
      var total = 0;
      this.items.forEach(function (i) {
        total += i.price;
      });
      return total;
    }
  },
  methods: {
    fetchItems: function fetchItems() {
      var _this = this;

      this.$store.dispatch('app-ecommerce/fetchCartProducts').then(function (response) {
        _this.items = response.data.products;
      });
    },
    removeItemFromCart: function removeItemFromCart(productId) {
      var _this2 = this;

      this.$store.dispatch('app-ecommerce/removeProductFromCart', {
        productId: productId
      }).then(function () {
        var itemIndex = _this2.items.findIndex(function (p) {
          return p.id === productId;
        });

        _this2.items.splice(itemIndex, 1); // Update count in cart items state


        _this2.$store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', _this2.items.length);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
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
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavItem"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_0__["default"])(),
        skin = _useAppConfig.skin;

    var isDark = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return skin.value === 'dark';
    });
    return {
      skin: skin,
      isDark: isDark
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
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
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"]
  },
  // ! Need to move this computed property to comp function once we get to Vue 3
  computed: {
    currentLocale: function currentLocale() {
      var _this = this;

      return this.locales.find(function (l) {
        return l.locale === _this.$i18n.locale;
      });
    }
  },
  setup: function setup() {
    /* eslint-disable global-require */
    var locales = [{
      locale: 'en',
      img: __webpack_require__(/*! @/assets/images/flags/en.png */ "./frontend/src/assets/images/flags/en.png"),
      name: 'English'
    }, {
      locale: 'fr',
      img: __webpack_require__(/*! @/assets/images/flags/fr.png */ "./frontend/src/assets/images/flags/fr.png"),
      name: 'French'
    }, {
      locale: 'de',
      img: __webpack_require__(/*! @/assets/images/flags/de.png */ "./frontend/src/assets/images/flags/de.png"),
      name: 'German'
    }, {
      locale: 'pt',
      img: __webpack_require__(/*! @/assets/images/flags/pt.png */ "./frontend/src/assets/images/flags/pt.png"),
      name: 'Portuguese'
    }];
    /* eslint-disable global-require */

    return {
      locales: locales
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
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
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    /* eslint-disable global-require */
    var notifications = [{
      title: 'Congratulation Sam 🎉',
      avatar: __webpack_require__(/*! @/assets/images/avatars/6-small.png */ "./frontend/src/assets/images/avatars/6-small.png"),
      subtitle: 'Won the monthly best seller badge',
      type: 'light-success'
    }, {
      title: 'New message received',
      avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./frontend/src/assets/images/avatars/9-small.png"),
      subtitle: 'You have 10 unread messages',
      type: 'light-info'
    }, {
      title: 'Revised Order 👋',
      avatar: 'MD',
      subtitle: 'MD Inc. order updated',
      type: 'light-danger'
    }];
    /* eslint-disable global-require */

    var systemNotifications = [{
      title: 'Server down',
      subtitle: 'USA Server is down due to hight CPU usage',
      type: 'light-danger',
      icon: 'XIcon'
    }, {
      title: 'Sales report generated',
      subtitle: 'Last month sales report generated',
      type: 'light-success',
      icon: 'CheckIcon'
    }, {
      title: 'High memory usage',
      subtitle: 'BLR Server using high memory',
      type: 'light-warning',
      icon: 'AlertTriangleIcon'
    }];
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false
    };
    return {
      notifications: notifications,
      systemNotifications: systemNotifications,
      perfectScrollbarSettings: perfectScrollbarSettings
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_components_app_auto_suggest_useAutoSuggest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/components/app-auto-suggest/useAutoSuggest */ "./frontend/src/@core/components/app-auto-suggest/useAutoSuggest.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/filter */ "./frontend/src/@core/utils/filter.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/router */ "./frontend/src/router/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../search-and-bookmark-data */ "./frontend/src/@core/layouts/components/app-navbar/search-and-bookmark-data.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  setup: function setup() {
    var showSearchBar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false);
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60
    };

    var suggestionSelected = function suggestionSelected(grpName, suggestion) {
      // If parameter is not provided => Use current selected
      if (!suggestion) {
        // If currentSelected value is -1 => No value/item is selected (Prevent Errors)

        /* eslint-disable no-use-before-define, no-param-reassign */
        if (currentSelected.value !== -1) {
          /* eslint-disable no-use-before-define, no-param-reassign */
          var _currentSelected$valu = currentSelected.value.split('.'),
              _currentSelected$valu2 = _slicedToArray(_currentSelected$valu, 2),
              grpIndex = _currentSelected$valu2[0],
              itemIndex = _currentSelected$valu2[1];

          grpName = Object.keys(filteredData.value)[grpIndex];
          suggestion = filteredData.value[grpName][itemIndex];
          /* eslint-enable */
        }
      }

      if (grpName === 'pages') _router__WEBPACK_IMPORTED_MODULE_5__["default"].push(suggestion.route)["catch"](function () {}); // eslint-disable-next-line no-use-before-define

      resetsearchQuery();
      showSearchBar.value = false;
    };

    var _useAutoSuggest = Object(_core_components_app_auto_suggest_useAutoSuggest__WEBPACK_IMPORTED_MODULE_3__["default"])({
      data: _search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_7__["default"],
      searchLimit: 4
    }),
        searchQuery = _useAutoSuggest.searchQuery,
        resetsearchQuery = _useAutoSuggest.resetsearchQuery,
        filteredData = _useAutoSuggest.filteredData;

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(searchQuery, function (val) {
      _store__WEBPACK_IMPORTED_MODULE_6__["default"].commit('app/TOGGLE_OVERLAY', Boolean(val));
    });
    var currentSelected = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(-1);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(filteredData, function (val) {
      if (!Object.values(val).some(function (obj) {
        return obj.length;
      })) {
        currentSelected.value = -1;
      } else {
        // Auto Select first item if it's not item-404
        var grpIndex = null; // eslint-disable-next-line no-restricted-syntax

        var _iterator = _createForOfIteratorHelper(Object.values(val).entries()),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _step$value = _slicedToArray(_step.value, 2),
                index = _step$value[0],
                grpSuggestions = _step$value[1];

            if (grpSuggestions.length) {
              grpIndex = index;
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        if (grpIndex !== null) currentSelected.value = "".concat(grpIndex, ".0");
      }
    });

    var increaseIndex = function increaseIndex() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      /* eslint-disable no-lonely-if, no-plusplus */
      // If there's no matching items
      if (!Object.values(filteredData.value).some(function (grpItems) {
        return grpItems.length;
      })) return;

      var _currentSelected$valu3 = currentSelected.value.split('.'),
          _currentSelected$valu4 = _slicedToArray(_currentSelected$valu3, 2),
          grpIndex = _currentSelected$valu4[0],
          itemIndex = _currentSelected$valu4[1];

      var grpArr = Object.entries(filteredData.value);
      var activeGrpTotalItems = grpArr[grpIndex][1].length;

      if (val) {
        // If active item is not of last item in grp
        if (activeGrpTotalItems - 1 > itemIndex) {
          currentSelected.value = "".concat(grpIndex, ".").concat(Number(itemIndex) + 1); // If active item grp is not last in grp list
        } else if (grpIndex < grpArr.length - 1) {
          for (var i = Number(grpIndex) + 1; i < grpArr.length; i++) {
            // If navigating group have items => Then move in that group
            if (grpArr[i][1].length > 0) {
              currentSelected.value = "".concat(Number(i), ".0");
              break;
            }
          }
        }
      } else {
        // If active item is not of first item in grp
        if (Number(itemIndex)) {
          currentSelected.value = "".concat(grpIndex, ".").concat(Number(itemIndex) - 1); // If active item grp  is not first in grp list
        } else if (Number(grpIndex)) {
          for (var _i2 = Number(grpIndex) - 1; _i2 >= 0; _i2--) {
            // If navigating group have items => Then move in that group
            if (grpArr[_i2][1].length > 0) {
              currentSelected.value = "".concat(_i2, ".").concat(grpArr[_i2][1].length - 1);
              break;
            }
          }
        }
      }
      /* eslint-enable no-lonely-if, no-plusplus */

    };

    return {
      showSearchBar: showSearchBar,
      perfectScrollbarSettings: perfectScrollbarSettings,
      searchAndBookmarkData: _search_and_bookmark_data__WEBPACK_IMPORTED_MODULE_7__["default"],
      title: _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__["title"],
      suggestionSelected: suggestionSelected,
      currentSelected: currentSelected,
      increaseIndex: increaseIndex,
      // AutoSuggest
      searchQuery: searchQuery,
      resetsearchQuery: resetsearchQuery,
      filteredData: filteredData
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _libs_acl_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/acl/config */ "./frontend/src/libs/acl/config.js");
/* harmony import */ var _auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/auth/jwt/useJwt */ "./frontend/src/auth/jwt/useJwt.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/filter */ "./frontend/src/@core/utils/filter.js");
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
    BNavItemDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BNavItemDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"]
  },
  data: function data() {
    return {
      userData: JSON.parse(localStorage.getItem('userData')),
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_3__["avatarText"]
    };
  },
  methods: {
    logout: function logout() {
      // Remove userData from localStorage
      // ? You just removed token from localStorage. If you like, you can also make API call to backend to blacklist used token
      localStorage.removeItem(_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_2__["default"].jwtConfig.storageTokenKeyName);
      localStorage.removeItem(_auth_jwt_useJwt__WEBPACK_IMPORTED_MODULE_2__["default"].jwtConfig.storageRefreshTokenKeyName); // Remove userData from localStorage

      localStorage.removeItem('userData'); // Reset ability

      this.$ability.update(_libs_acl_config__WEBPACK_IMPORTED_MODULE_1__["initialAbility"]); // Redirect to login page

      this.$router.push({
        name: 'auth-login'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
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
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        routerTransition = _useAppConfig.routerTransition,
        contentWidth = _useAppConfig.contentWidth;

    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
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
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        routerTransition = _useAppConfig.routerTransition,
        contentWidth = _useAppConfig.contentWidth;

    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
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
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
        routerTransition = _useAppConfig.routerTransition,
        contentWidth = _useAppConfig.contentWidth;

    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./frontend/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_layouts_components_app_navbar_AppNavbarHorizontalLayout_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue */ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue");
/* harmony import */ var _core_layouts_components_app_navbar_AppNavbarHorizontalLayoutBrand_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue */ "./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue");
/* harmony import */ var _core_layouts_components_AppFooter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/layouts/components/AppFooter.vue */ "./frontend/src/@core/layouts/components/AppFooter.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_comp_functions_misc_event_listeners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/comp-functions/misc/event-listeners */ "./frontend/src/@core/comp-functions/misc/event-listeners.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_layouts_components_layout_content_renderer_LayoutContentRendererDefault_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue");
/* harmony import */ var _core_layouts_components_layout_content_renderer_LayoutContentRendererLeft_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue");
/* harmony import */ var _core_layouts_components_layout_content_renderer_LayoutContentRendererLeftDetached_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue */ "./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue");
/* harmony import */ var _useLayoutHorizontal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./useLayoutHorizontal */ "./frontend/src/@core/layouts/layout-horizontal/useLayoutHorizontal.js");
/* harmony import */ var _components_horizontal_nav_menu_HorizontalNavMenu_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/horizontal-nav-menu/HorizontalNavMenu.vue */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue");
/* harmony import */ var _core_layouts_layout_vertical_components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue");
/* harmony import */ var _core_layouts_layout_vertical_useVerticalLayout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/layouts/layout-vertical/useVerticalLayout */ "./frontend/src/@core/layouts/layout-vertical/useVerticalLayout.js");
/* harmony import */ var _mixinLayoutHorizontal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mixinLayoutHorizontal */ "./frontend/src/@core/layouts/layout-horizontal/mixinLayoutHorizontal.js");
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







 // Content Renderer





 // Vertical Menu

/* eslint-disable import/order */




/* eslint-enable import/order */

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppNavbarHorizontalLayout: _core_layouts_components_app_navbar_AppNavbarHorizontalLayout_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AppNavbarHorizontalLayoutBrand: _core_layouts_components_app_navbar_AppNavbarHorizontalLayoutBrand_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AppFooter: _core_layouts_components_AppFooter_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    HorizontalNavMenu: _components_horizontal_nav_menu_HorizontalNavMenu_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    BNavbar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_5__["BNavbar"],
    // Content Renderer
    LayoutContentRendererDefault: _core_layouts_components_layout_content_renderer_LayoutContentRendererDefault_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    LayoutContentRendererLeft: _core_layouts_components_layout_content_renderer_LayoutContentRendererLeft_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    LayoutContentRendererLeftDetached: _core_layouts_components_layout_content_renderer_LayoutContentRendererLeftDetached_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    // Vertical Menu
    VerticalNavMenu: _core_layouts_layout_vertical_components_vertical_nav_menu_VerticalNavMenu_vue__WEBPACK_IMPORTED_MODULE_13__["default"]
  },
  mixins: [_mixinLayoutHorizontal__WEBPACK_IMPORTED_MODULE_15__["default"]],
  computed: {
    layoutContentRenderer: function layoutContentRenderer() {
      var rendererType = this.$route.meta.contentRenderer;
      if (rendererType === 'sidebar-left') return 'layout-content-renderer-left';
      if (rendererType === 'sidebar-left-detached') return 'layout-content-renderer-left-detached';
      return 'layout-content-renderer-default';
    }
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        skin = _useAppConfig.skin,
        navbarType = _useAppConfig.navbarType,
        footerType = _useAppConfig.footerType,
        routerTransition = _useAppConfig.routerTransition,
        isNavMenuHidden = _useAppConfig.isNavMenuHidden; // Vertical Menu


    var _useVerticalLayout = Object(_core_layouts_layout_vertical_useVerticalLayout__WEBPACK_IMPORTED_MODULE_14__["default"])(navbarType, footerType),
        isVerticalMenuActive = _useVerticalLayout.isVerticalMenuActive,
        toggleVerticalMenuActive = _useVerticalLayout.toggleVerticalMenuActive,
        overlayClasses = _useVerticalLayout.overlayClasses,
        resizeHandler = _useVerticalLayout.resizeHandler; // Resize handler


    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_7__["onUnmounted"])(function () {
      window.removeEventListener('resize', resizeHandler);
    });

    var _useLayoutHorizontal = Object(_useLayoutHorizontal__WEBPACK_IMPORTED_MODULE_11__["default"])(navbarType, footerType, isVerticalMenuActive),
        navbarMenuTypeClass = _useLayoutHorizontal.navbarMenuTypeClass,
        layoutClasses = _useLayoutHorizontal.layoutClasses,
        footerTypeClass = _useLayoutHorizontal.footerTypeClass; // Scroll Listener


    var _useScrollListener = Object(_core_comp_functions_misc_event_listeners__WEBPACK_IMPORTED_MODULE_6__["useScrollListener"])(),
        scrolledTo = _useScrollListener.scrolledTo;

    return {
      // skin
      skin: skin,
      // Layout
      layoutClasses: layoutClasses,
      // Navbar
      navbarType: navbarType,
      navbarMenuTypeClass: navbarMenuTypeClass,
      // Menu Hidden
      isNavMenuHidden: isNavMenuHidden,
      // Router Transition
      routerTransition: routerTransition,
      // Footer
      footerTypeClass: footerTypeClass,
      // Scroll Listeners
      scrolledTo: scrolledTo,
      // Vertical Menu
      isVerticalMenuActive: isVerticalMenuActive,
      toggleVerticalMenuActive: toggleVerticalMenuActive,
      overlayClasses: overlayClasses
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_horizontal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/navigation/horizontal */ "./frontend/src/navigation/horizontal/index.js");
/* harmony import */ var _components_horizontal_nav_menu_items_HorizontalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue");
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    HorizontalNavMenuItems: _components_horizontal_nav_menu_items_HorizontalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  setup: function setup() {
    return {
      navMenuItems: _navigation_horizontal__WEBPACK_IMPORTED_MODULE_0__["default"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./frontend/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libs/acl */ "./frontend/src/@core/libs/acl/index.js");
/* harmony import */ var _horizontal_nav_menu_link_HorizontalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../horizontal-nav-menu-link/HorizontalNavMenuLink.vue */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue");
/* harmony import */ var _useHorizontalNavMenuGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useHorizontalNavMenuGroup */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/useHorizontalNavMenuGroup.js");
/* harmony import */ var _mixinHorizontalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mixinHorizontalNavMenuGroup */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/mixinHorizontalNavMenuGroup.js");
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




 // Composition Function



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HorizontalNavMenuGroup',
  components: {
    HorizontalNavMenuLink: _horizontal_nav_menu_link_HorizontalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  },
  mixins: [_mixinHorizontalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useHorizontalNavMenu = Object(_useHorizontalNavMenuGroup__WEBPACK_IMPORTED_MODULE_5__["default"])(props.item),
        refChildDropdown = _useHorizontalNavMenu.refChildDropdown,
        isActive = _useHorizontalNavMenu.isActive,
        isOpen = _useHorizontalNavMenu.isOpen,
        updateGroupOpen = _useHorizontalNavMenu.updateGroupOpen,
        updateIsActive = _useHorizontalNavMenu.updateIsActive,
        openChildDropdownOnLeft = _useHorizontalNavMenu.openChildDropdownOnLeft;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_3__["useUtils"])(),
        canViewVerticalNavMenuGroup = _useAclUtils.canViewVerticalNavMenuGroup;

    return {
      refChildDropdown: refChildDropdown,
      openChildDropdownOnLeft: openChildDropdownOnLeft,
      resolveNavItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["resolveHorizontalNavMenuItemComponent"],
      isOpen: isOpen,
      isActive: isActive,
      updateGroupOpen: updateGroupOpen,
      updateIsActive: updateIsActive,
      // ACL
      canViewVerticalNavMenuGroup: canViewVerticalNavMenuGroup,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/acl */ "./frontend/src/@core/libs/acl/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libs/i18n */ "./frontend/src/@core/libs/i18n/index.js");
/* harmony import */ var _useHorizontalNavMenuHeaderGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useHorizontalNavMenuHeaderGroup */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/useHorizontalNavMenuHeaderGroup.js");
/* harmony import */ var _mixinHorizontalNavMenuHeaderGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mixinHorizontalNavMenuHeaderGroup */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/mixinHorizontalNavMenuHeaderGroup.js");
/* harmony import */ var _horizontal_nav_menu_group_HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../horizontal-nav-menu-group/HorizontalNavMenuGroup.vue */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue");
/* harmony import */ var _horizontal_nav_menu_link_HorizontalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../horizontal-nav-menu-link/HorizontalNavMenuLink.vue */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue");
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    HorizontalNavMenuGroup: _horizontal_nav_menu_group_HorizontalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    HorizontalNavMenuLink: _horizontal_nav_menu_link_HorizontalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [_mixinHorizontalNavMenuHeaderGroup__WEBPACK_IMPORTED_MODULE_5__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useHorizontalNavMenu = Object(_useHorizontalNavMenuHeaderGroup__WEBPACK_IMPORTED_MODULE_4__["default"])(props.item),
        isActive = _useHorizontalNavMenu.isActive,
        updateIsActive = _useHorizontalNavMenu.updateIsActive,
        isOpen = _useHorizontalNavMenu.isOpen,
        updateGroupOpen = _useHorizontalNavMenu.updateGroupOpen;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_3__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        canViewHorizontalNavMenuHeaderGroup = _useAclUtils.canViewHorizontalNavMenuHeaderGroup;

    return {
      isOpen: isOpen,
      isActive: isActive,
      updateGroupOpen: updateGroupOpen,
      updateIsActive: updateIsActive,
      resolveHorizontalNavMenuItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["resolveHorizontalNavMenuItemComponent"],
      // ACL
      canViewHorizontalNavMenuHeaderGroup: canViewHorizontalNavMenuHeaderGroup,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/libs/i18n */ "./frontend/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/acl */ "./frontend/src/@core/libs/acl/index.js");
/* harmony import */ var _useHorizontalNavMenuHeaderLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useHorizontalNavMenuHeaderLink */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/useHorizontalNavMenuHeaderLink.js");
/* harmony import */ var _mixinHorizontalNavMenuHeaderLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixinHorizontalNavMenuHeaderLink */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/mixinHorizontalNavMenuHeaderLink.js");
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  },
  mixins: [_mixinHorizontalNavMenuHeaderLink__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useHorizontalNavMenu = Object(_useHorizontalNavMenuHeaderLink__WEBPACK_IMPORTED_MODULE_3__["default"])(props.item),
        isActive = _useHorizontalNavMenu.isActive,
        updateIsActive = _useHorizontalNavMenu.updateIsActive;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_1__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        canViewHorizontalNavMenuHeaderLink = _useAclUtils.canViewHorizontalNavMenuHeaderLink;

    return {
      isActive: isActive,
      updateIsActive: updateIsActive,
      // ACL
      canViewHorizontalNavMenuHeaderLink: canViewHorizontalNavMenuHeaderLink,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _horizontal_nav_menu_header_link_HorizontalNavMenuHeaderLink_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue");
/* harmony import */ var _horizontal_nav_menu_header_group_HorizontalNavMenuHeaderGroup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue");
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
    HorizontalNavMenuHeaderLink: _horizontal_nav_menu_header_link_HorizontalNavMenuHeaderLink_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    HorizontalNavMenuHeaderGroup: _horizontal_nav_menu_header_group_HorizontalNavMenuHeaderGroup_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup: function setup() {
    var resolveNavComponent = function resolveNavComponent(item) {
      if (item.children) return 'horizontal-nav-menu-header-group';
      return 'horizontal-nav-menu-header-link';
    };

    return {
      resolveNavComponent: resolveNavComponent
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/libs/i18n */ "./frontend/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/acl */ "./frontend/src/@core/libs/acl/index.js");
/* harmony import */ var _useHorizontalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useHorizontalNavMenuLink */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/useHorizontalNavMenuLink.js");
/* harmony import */ var _mixinHorizontalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixinHorizontalNavMenuLink */ "./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/mixinHorizontalNavMenuLink.js");
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  },
  mixins: [_mixinHorizontalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useHorizontalNavMenu = Object(_useHorizontalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"])(props.item),
        isActive = _useHorizontalNavMenu.isActive,
        linkProps = _useHorizontalNavMenu.linkProps,
        updateIsActive = _useHorizontalNavMenu.updateIsActive;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_1__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        canViewHorizontalNavMenuLink = _useAclUtils.canViewHorizontalNavMenuLink;

    return {
      isActive: isActive,
      linkProps: linkProps,
      updateIsActive: updateIsActive,
      // ACL
      canViewHorizontalNavMenuLink: canViewHorizontalNavMenuLink,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation_vertical__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/navigation/vertical */ "./frontend/src/navigation/vertical/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./frontend/src/@core/app-config/useAppConfig.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
/* harmony import */ var _components_vertical_nav_menu_items_VerticalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/vertical-nav-menu-items/VerticalNavMenuItems.vue */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue");
/* harmony import */ var _useVerticalNavMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./useVerticalNavMenu */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js");
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
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    VerticalNavMenuItems: _components_vertical_nav_menu_items_VerticalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BImg"]
  },
  props: {
    isVerticalMenuActive: {
      type: Boolean,
      required: true
    },
    toggleVerticalMenuActive: {
      type: Function,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenu = Object(_useVerticalNavMenu__WEBPACK_IMPORTED_MODULE_7__["default"])(props),
        isMouseHovered = _useVerticalNavMenu.isMouseHovered,
        isVerticalMenuCollapsed = _useVerticalNavMenu.isVerticalMenuCollapsed,
        collapseTogglerIcon = _useVerticalNavMenu.collapseTogglerIcon,
        toggleCollapsed = _useVerticalNavMenu.toggleCollapsed,
        updateMouseHovered = _useVerticalNavMenu.updateMouseHovered;

    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_4__["default"])(),
        skin = _useAppConfig.skin; // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`


    var shallShadowBottom = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(false);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["provide"])('isMouseHovered', isMouseHovered);
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false
    };
    var collapseTogglerIconFeather = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["computed"])(function () {
      return collapseTogglerIcon.value === 'unpinned' ? 'CircleIcon' : 'DiscIcon';
    }); // App Name

    var _$themeConfig$app = _themeConfig__WEBPACK_IMPORTED_MODULE_5__["$themeConfig"].app,
        appName = _$themeConfig$app.appName,
        appLogoImage = _$themeConfig$app.appLogoImage;
    return {
      navMenuItems: _navigation_vertical__WEBPACK_IMPORTED_MODULE_0__["default"],
      perfectScrollbarSettings: perfectScrollbarSettings,
      isVerticalMenuCollapsed: isVerticalMenuCollapsed,
      collapseTogglerIcon: collapseTogglerIcon,
      toggleCollapsed: toggleCollapsed,
      isMouseHovered: isMouseHovered,
      updateMouseHovered: updateMouseHovered,
      collapseTogglerIconFeather: collapseTogglerIconFeather,
      // Shadow Bottom
      shallShadowBottom: shallShadowBottom,
      // Skin
      skin: skin,
      // App Name
      appName: appName,
      appLogoImage: appLogoImage
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./frontend/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libs/acl */ "./frontend/src/@core/libs/acl/index.js");
/* harmony import */ var _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vertical-nav-menu-header */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js");
/* harmony import */ var _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vertical-nav-menu-link/VerticalNavMenuLink.vue */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue");
/* harmony import */ var _useVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useVerticalNavMenuGroup */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js");
/* harmony import */ var _mixinVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixinVerticalNavMenuGroup */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js");
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





 // Composition Function



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VerticalNavMenuGroup',
  components: {
    VerticalNavMenuHeader: _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_4__["default"],
    VerticalNavMenuLink: _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"]
  },
  mixins: [_mixinVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_7__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenuGr = Object(_useVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__["default"])(props.item),
        isOpen = _useVerticalNavMenuGr.isOpen,
        isActive = _useVerticalNavMenuGr.isActive,
        updateGroupOpen = _useVerticalNavMenuGr.updateGroupOpen,
        updateIsActive = _useVerticalNavMenuGr.updateIsActive;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_3__["useUtils"])(),
        canViewVerticalNavMenuGroup = _useAclUtils.canViewVerticalNavMenuGroup;

    return {
      resolveNavItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["resolveVerticalNavMenuItemComponent"],
      isOpen: isOpen,
      isActive: isActive,
      updateGroupOpen: updateGroupOpen,
      updateIsActive: updateIsActive,
      // ACL
      canViewVerticalNavMenuGroup: canViewVerticalNavMenuGroup,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/utils */ "./frontend/src/@core/layouts/utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vertical-nav-menu-header */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js");
/* harmony import */ var _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vertical-nav-menu-link/VerticalNavMenuLink.vue */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue");
/* harmony import */ var _vertical_nav_menu_group_VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vertical-nav-menu-group/VerticalNavMenuGroup.vue */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue");
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
    VerticalNavMenuHeader: _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    VerticalNavMenuLink: _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VerticalNavMenuGroup: _vertical_nav_menu_group_VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup: function setup() {
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["provide"])('openGroups', Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])([]));
    return {
      resolveNavItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["resolveVerticalNavMenuItemComponent"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/libs/acl */ "./frontend/src/@core/libs/acl/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./frontend/src/@core/libs/i18n/index.js");
/* harmony import */ var _useVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useVerticalNavMenuLink */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js");
/* harmony import */ var _mixinVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixinVerticalNavMenuLink */ "./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js");
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
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  mixins: [_mixinVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenuLi = Object(_useVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"])(props.item),
        isActive = _useVerticalNavMenuLi.isActive,
        linkProps = _useVerticalNavMenuLi.linkProps,
        updateIsActive = _useVerticalNavMenuLi.updateIsActive;

    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
        t = _useI18nUtils.t;

    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_0__["useUtils"])(),
        canViewVerticalNavMenuLink = _useAclUtils.canViewVerticalNavMenuLink;

    return {
      isActive: isActive,
      linkProps: linkProps,
      updateIsActive: updateIsActive,
      // ACL
      canViewVerticalNavMenuLink: canViewVerticalNavMenuLink,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_layout_horizontal_LayoutHorizontal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/layout-horizontal/LayoutHorizontal.vue */ "./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue");
/* harmony import */ var _core_layouts_components_app_customizer_AppCustomizer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/components/app-customizer/AppCustomizer.vue */ "./frontend/src/@core/layouts/components/app-customizer/AppCustomizer.vue");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @themeConfig */ "./frontend/themeConfig.js");
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
    LayoutHorizontal: _core_layouts_layout_horizontal_LayoutHorizontal_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AppCustomizer: _core_layouts_components_app_customizer_AppCustomizer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      showCustomizer: _themeConfig__WEBPACK_IMPORTED_MODULE_2__["$themeConfig"].layout.customizer
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul[data-v-64de30c4] {\n  list-style: none;\n}[dir] ul[data-v-64de30c4] {\n  padding: 0;\n  margin: 0;\n}\n[dir] p[data-v-64de30c4] {\n  margin: 0;\n}\n.nav-bookmar-content-overlay[data-v-64de30c4] {\n  position: fixed;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  bottom: 0;\n  -webkit-transition: all 0.7s;\n  transition: all 0.7s;\n  z-index: -1;\n}\n[dir] .nav-bookmar-content-overlay[data-v-64de30c4] {\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-transition: all 0.7s;\n}\n[dir=ltr] .nav-bookmar-content-overlay[data-v-64de30c4] {\n  left: 0;\n  right: 0;\n}\n[dir=rtl] .nav-bookmar-content-overlay[data-v-64de30c4] {\n  right: 0;\n  left: 0;\n}\n.nav-bookmar-content-overlay[data-v-64de30c4]:not(.show) {\n  pointer-events: none;\n}\n.nav-bookmar-content-overlay.show[data-v-64de30c4] {\n  z-index: 10;\n  opacity: 1;\n}\n[dir] .nav-bookmar-content-overlay.show[data-v-64de30c4] {\n  cursor: pointer;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-cart .media .media-aside[data-v-09965980] {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul[data-v-1df32828] {\n  list-style: none;\n}[dir] ul[data-v-1df32828] {\n  padding: 0;\n  margin: 0;\n}\n[dir] p[data-v-1df32828] {\n  margin: 0;\n}\n\n/* .app-auto-suggest {\n  position: relative;\n}\n\n.auto-suggest-suggestions-list {\n  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n  border-radius: 6px;\n  position: absolute;\n  top: calc(100% + 1rem);\n  background-color: white;\n  width: 100%;\n} */\n.suggestion-group-title[data-v-1df32828] {\n  font-weight: 500;\n}\n[dir] .suggestion-group-title[data-v-1df32828] {\n  padding: 0.75rem 1rem 0.25rem;\n}\n[dir] .suggestion-group-suggestion[data-v-1df32828] {\n  padding: 0.75rem 1rem;\n}\n[dir] .suggestion-current-selected[data-v-1df32828] {\n  background-color: #f8f8f8;\n}\n[dir] .dark-layout .suggestion-current-selected[data-v-1df32828] {\n  background-color: #161d31;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bordered-layout .header-navbar {\n  -webkit-box-shadow: none;\n}[dir] .bordered-layout .header-navbar {\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n[dir] .bordered-layout .header-navbar.floating-nav {\n  border: 1px solid #ebe9f1;\n}\n[dir] .bordered-layout .header-navbar.fixed-top {\n  border-bottom: 1px solid #ebe9f1;\n  background: #f8f8f8;\n}\n.bordered-layout .main-menu {\n  -webkit-box-shadow: none;\n}\n[dir] .bordered-layout .main-menu {\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n[dir=ltr] .bordered-layout .main-menu {\n  border-right: 1px solid #ebe9f1;\n}\n[dir=rtl] .bordered-layout .main-menu {\n  border-left: 1px solid #ebe9f1;\n}\n[dir] .bordered-layout .main-menu.menu-light .navigation > li.open:not(.menu-item-closing) > a, [dir] .bordered-layout .main-menu.menu-light .navigation > li.sidebar-group-active > a {\n  background: #ededed;\n}\n.bordered-layout .dropdown-menu {\n  -webkit-box-shadow: none;\n}\n[dir] .bordered-layout .dropdown-menu {\n  border: 1px solid #ebe9f1 !important;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n[dir] .bordered-layout .main-menu .navigation, [dir] .bordered-layout .main-menu {\n  background: #f8f8f8;\n}\n.bordered-layout .card,\n.bordered-layout .bs-stepper:not(.wizard-modern):not(.checkout-tab-steps),\n.bordered-layout .bs-stepper.wizard-modern .bs-stepper-content {\n  -webkit-box-shadow: none;\n}\n[dir] .bordered-layout .card, [dir] .bordered-layout .bs-stepper:not(.wizard-modern):not(.checkout-tab-steps), [dir] .bordered-layout .bs-stepper.wizard-modern .bs-stepper-content {\n  border: 1px solid #ebe9f1;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n.bordered-layout .footer {\n  -webkit-box-shadow: none !important;\n}\n[dir] .bordered-layout .footer {\n          -webkit-box-shadow: none !important;\n                  box-shadow: none !important;\n}\n[dir] .bordered-layout .footer-fixed .footer {\n  border-top: 1px solid #ebe9f1;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n\tFile Name: horizontal-menu.scss\n\tDescription: A classic horizontal menu for easy navigation & support all devices.\n\tIt support light & dark version, flipped layout, right side icons, borders menu for\n\titem separation.\n\t----------------------------------------------------------------------------------------\n\tItem Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard TemplateTheme\n\tAuthor: PIXINVENT\n\tAuthor URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n[dir=ltr] .horizontal-menu .content {\n  margin-left: 0;\n}\n[dir=rtl] .horizontal-menu .content {\n  margin-right: 0;\n}\n.horizontal-menu .content.show-overlay .content-overlay {\n  z-index: 998 !important;\n}\n[dir] .horizontal-menu .navbar.header-navbar .navbar-container {\n  padding: 0.8rem 2rem;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n  min-height: 4.45rem;\n}\n.horizontal-menu footer {\n  position: static;\n}\n.horizontal-menu .horizontal-menu-wrapper {\n  position: fixed;\n  top: 62px;\n  z-index: 990;\n  width: 100%;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-container {\n  width: 100%;\n}\n[dir] .horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-container {\n  padding: 0 1rem;\n}\n.horizontal-menu .horizontal-menu-wrapper .header-navbar .navbar-header {\n  display: none;\n}\n.horizontal-menu .header-navbar {\n  z-index: 999 !important;\n  line-height: 1;\n  min-height: auto;\n}\n[dir] .horizontal-menu .header-navbar {\n  background: #fff;\n}\n.horizontal-menu .header-navbar.navbar-horizontal.floating-nav {\n  width: calc(100vw - (100vw - 100%) - calc(2rem * 2));\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal.floating-nav {\n  background: #fff;\n}\n[dir] .horizontal-menu .header-navbar .navbar-container {\n  border-radius: 0.357rem;\n}\n.horizontal-menu .header-navbar.navbar-fixed {\n  position: fixed;\n  width: 100%;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  position: absolute;\n  z-index: 1000;\n}\n[dir] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  padding: 0;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  left: calc(50% - 56px);\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header {\n  right: calc(50% - 56px);\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  font-size: inherit;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand {\n  margin-right: 0;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand {\n  margin-left: 0;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-logo img {\n  max-width: 36px;\n}\n.horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  color: #7367f0;\n  font-weight: 600;\n  letter-spacing: 0.01rem;\n  font-size: 1.45rem;\n}\n[dir] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  margin-bottom: 0;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  padding-left: 1rem;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-brand-center .navbar-header .navbar-brand .brand-text {\n  padding-right: 1rem;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after {\n  left: 0.4rem;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal .nav-link.dropdown-toggle::after {\n  right: 0.4rem;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .sidebar-group-active .dropdown-toggle::after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-down'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu::before {\n  display: none;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu {\n  min-width: 215px;\n  min-height: 52px;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu {\n  border: none;\n  margin-top: 0;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled {\n  pointer-events: none !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .disabled a {\n  color: #b8c2cc;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  position: absolute;\n  top: 50%;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  margin-top: -7px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  left: auto;\n  right: 1rem;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-toggle::after {\n  right: auto;\n  left: 1rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-item {\n  font-size: 1rem;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-item {\n  padding-top: 0.68rem;\n  padding-bottom: 0.68rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu {\n  position: relative;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.openLeft .dropdown-menu {\n  left: auto !important;\n  right: 100% !important;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.openLeft .dropdown-menu {\n  right: auto !important;\n  left: 100% !important;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu.sidebar-group-active {\n  background: #f8f8f8;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu {\n  position: absolute;\n  top: 0 !important;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu {\n  left: 100% !important;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu {\n  right: 100% !important;\n}\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu i,\n.horizontal-menu .header-navbar.navbar-horizontal .dropdown-menu .dropdown-submenu > .dropdown-menu svg {\n  height: 11px !important;\n  width: 11px !important;\n  font-size: 11px !important;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li {\n  padding-top: 0.857rem;\n  padding-bottom: 0.857rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a > * {\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a > * {\n  -webkit-transition: all 0.2s ease;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover {\n  color: #6e6b7b;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover {\n  background-color: transparent;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  transition: -webkit-transform 0.2s ease;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  -webkit-transition: -webkit-transform 0.2s ease;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  -webkit-transform: translateX(5px);\n  transform: translateX(5px);\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu a:hover > * {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .active > a {\n  color: #7367f0;\n  font-weight: 500;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .active > a {\n  background: #f8f8f8;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > .dropdown-menu .open.active > a {\n  color: #6e6b7b;\n  font-weight: normal;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li i,\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li svg {\n  height: 17px;\n  width: 17px;\n  font-size: 1.2rem;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li i, [dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li svg {\n  margin-right: 0.5rem;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li i, [dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li svg {\n  margin-left: 0.5rem;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  padding: 0.715rem 1.25rem;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  margin-right: 0.715rem;\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li > a {\n  margin-left: 0.715rem;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li:hover > a {\n  background: #f8f8f8;\n  border-radius: 4px;\n}\n.horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  -webkit-box-shadow: 0px 0px 6px 1px rgba(115, 103, 240, 0.6);\n  color: #fff;\n}\n[dir] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n          -webkit-box-shadow: 0px 0px 6px 1px rgba(115, 103, 240, 0.6);\n                  box-shadow: 0px 0px 6px 1px rgba(115, 103, 240, 0.6);\n  border-radius: 4px;\n}\n[dir=ltr] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  background: linear-gradient(118deg, #7367f0, rgba(115, 103, 240, 0.7));\n}\n[dir=rtl] .horizontal-menu .header-navbar.navbar-horizontal ul#main-menu-navigation > li.active > a {\n  background: linear-gradient(-118deg, #7367f0, rgba(115, 103, 240, 0.7));\n}\n.horizontal-menu .navigation-header {\n  font-family: inherit;\n  color: #929292;\n  font-size: 1rem;\n  text-transform: uppercase;\n}\n[dir] .horizontal-menu .navigation-header {\n  padding: 8px 20px;\n}\n[dir] .horizontal-menu .navbar-dark .nav-item.active > a {\n  border-bottom: 2px solid #7367f0;\n  background-color: #313c50;\n}\n.horizontal-layout.navbar-floating .header-navbar-shadow {\n  height: 80px;\n}\n@media (min-width: 1200px) {\n.horizontal-layout.navbar-floating .header-navbar-shadow {\n    top: 45px;\n}\n}\n[dir] .horizontal-layout.navbar-floating:not(.blank-page) .app-content {\n  padding: calc(2rem + 4.45rem* 2 + 1.3rem) 2rem 0 2rem;\n}\n[dir] .horizontal-layout.navbar-floating .horizontal-menu-wrapper {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(44%, rgba(248, 248, 248, 0.95)), color-stop(73%, rgba(248, 248, 248, 0.46)), to(rgba(255, 255, 255, 0)));\n  background: linear-gradient(to bottom, rgba(248, 248, 248, 0.95) 44%, rgba(248, 248, 248, 0.46) 73%, rgba(255, 255, 255, 0) 100%);\n  background-repeat: repeat-x;\n}\n[dir=ltr] .horizontal-layout.navbar-floating .horizontal-menu-wrapper {\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(44%, rgba(248, 248, 248, 0.95)), color-stop(73%, rgba(248, 248, 248, 0.46)), to(rgba(255, 255, 255, 0)));\n}\n[dir=rtl] .horizontal-layout.navbar-floating .horizontal-menu-wrapper {\n  background: -webkit-gradient(linear, right top, right bottom, color-stop(44%, rgba(248, 248, 248, 0.95)), color-stop(73%, rgba(248, 248, 248, 0.46)), to(rgba(255, 255, 255, 0)));\n}\n[dir] .horizontal-layout.navbar-floating .horizontal-menu-wrapper .navbar-horizontal.floating-nav {\n  margin: 1.3rem 2rem 0;\n}\n.horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-floating.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n}\n}\n.horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 1.3rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-floating.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n}\n}\n.horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 1.3rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-floating.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-floating.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n}\n}\n[dir] .horizontal-layout.navbar-sticky .app-content {\n  padding: calc(2rem + 4.45rem* 2) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-sticky .header-navbar {\n  -webkit-box-shadow: none;\n}\n[dir] .horizontal-layout.navbar-sticky .header-navbar {\n  background-color: #f8f8f8;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n.horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  top: 62px;\n  -webkit-box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  background-color: #fff;\n          -webkit-box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n                  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  left: 0;\n}\n[dir=rtl] .horizontal-layout.navbar-sticky .horizontal-menu-wrapper .navbar-horizontal.header-navbar.fixed-top {\n  right: 0;\n}\n.horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-sticky.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + 3.35rem) );\n}\n}\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n}\n}\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-sticky.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n}\n}\n[dir] .horizontal-layout.navbar-static .app-content {\n  padding: calc(2rem + 4.45rem) 2rem 0 2rem;\n}\n.horizontal-layout.navbar-static .content {\n  min-height: calc(100% - calc(4.45rem + calc(3.35rem + 0.2rem)));\n}\n.horizontal-layout.navbar-static .header-navbar {\n  -webkit-box-shadow: none;\n}\n[dir] .horizontal-layout.navbar-static .header-navbar {\n  background-color: #f8f8f8;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper {\n  position: relative;\n}\n[dir] .horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar {\n  background: #fff;\n}\n.horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top {\n  width: 100%;\n}\n[dir=ltr] .horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top {\n  left: 0;\n}\n[dir=rtl] .horizontal-layout.navbar-static .horizontal-menu-wrapper .navbar-horizontal.header-navbar.navbar-static-top {\n  right: 0;\n}\n.horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 4.45rem + calc(3.35rem + 0.2rem) + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-static.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 4.45rem + calc(3.35rem + 0.2rem)) );\n}\n}\n.horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 0rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-static.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 0rem) );\n}\n}\n.horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 4.45rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-static.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-static.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 4.45rem + 3.35rem) );\n}\n}\n.horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 1) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-hidden.footer-static .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-static .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 1) + 0rem + 3.35rem) );\n}\n}\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 0rem + 0rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-hidden .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 0rem) );\n}\n}\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n  height: calc( 100vh - calc( calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n  height: calc( var(--vh, 1vh) * 100 - calc( calc(2rem * 2) + 0rem + 3.35rem + 0rem + 4.45rem ) );\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .content-area-wrapper,\n.horizontal-layout.navbar-hidden.footer-fixed .app-content .kanban-wrapper {\n    height: calc( 100vh - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem) );\n    height: calc( var(--vh, 1vh) * 100 - calc(calc(calc(2rem - 0.8rem) * 2) + 0rem + 3.35rem) );\n}\n}\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a i,\n.horizontal-layout.vertical-overlay-menu #main-menu-navigation > li > ul > li > a svg {\n  height: 1rem;\n  width: 1rem;\n  font-size: 1rem;\n}\n@media (max-width: 1199.98px) {\n.horizontal-layout.horizontal-menu .horizontal-menu-wrapper .header-navbar {\n    display: none;\n}\n[dir] .horizontal-layout .header-navbar {\n    background: #fff;\n}\n[dir] .horizontal-layout .app-content {\n    padding: calc(4.45rem + calc(2rem - 0.8rem)) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n}\n}\n@media (max-width: 575.98px) {\nhtml[dir] body.horizontal-layout.navbar-static .app-content {\n    padding: calc(2rem - 0.8rem + 4.45rem) calc(2rem - 0.8rem) 0 calc(2rem - 0.8rem) !important;\n}\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n[dir=ltr] .vertical-overlay-menu .content {\n  margin-left: 0;\n}\n[dir=rtl] .vertical-overlay-menu .content {\n  margin-right: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  width: 260px;\n}\n[dir=ltr] .vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .navbar .navbar-header {\n  float: right;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s, -webkit-transform 0.25s;\n  width: 260px;\n}\n[dir] .vertical-overlay-menu .main-menu, [dir] .vertical-overlay-menu.menu-hide .main-menu {\n          -webkit-transform: translate3d(0, 0, 0);\n                  transform: translate3d(0, 0, 0);\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu, [dir=ltr] .vertical-overlay-menu.menu-hide .main-menu {\n  left: -260px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu, [dir=rtl] .vertical-overlay-menu.menu-hide .main-menu {\n  right: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  -webkit-transition: 200ms ease all;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  -webkit-transition: 200ms ease all;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-left: 14px;\n  float: right;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  -webkit-transition: 200ms ease all;\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation > li > a > svg:before, [dir] .vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  -webkit-transition: 200ms ease all;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  -webkit-transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s, -webkit-transform 0.25s;\n}\n[dir] .vertical-overlay-menu.menu-open .main-menu {\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n}\n[dir=ltr] .vertical-overlay-menu.menu-open .main-menu {\n  -webkit-transform: translate3d(260px, 0, 0);\n  transform: translate3d(260px, 0, 0);\n}\n[dir=rtl] .vertical-overlay-menu.menu-open .main-menu {\n  -webkit-transform: translate3d(-260px, 0, 0);\n          transform: translate3d(-260px, 0, 0);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: vertical-menu.scss\n    Description: A classic vertical modern style menu with expand and collops support. It support\n    light & dark version, flipped layout, right side icons, native scroll and borders menu\n    item separation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-layout.vertical-menu-modern .main-menu {\n  -webkit-transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n  -webkit-transform: translate3d(0, 0, 0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n[dir] .vertical-layout.vertical-menu-modern .main-menu {\n  -webkit-transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n          -webkit-transform: translate3d(0, 0, 0);\n                  transform: translate3d(0, 0, 0);\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation li a {\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n  -ms-flex-negative: 0;\n      flex-shrink: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg, [dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  margin-right: 1.1rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg, [dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  margin-left: 1.1rem;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  font-size: 11px;\n  height: 11px;\n  width: 11px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg, [dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-right: 1.45rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg, [dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-left: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > i:before,\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > svg:before {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  -webkit-transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-left: 260px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-right: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  width: 80px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: left;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: right;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded {\n  width: 260px;\n  z-index: 1000;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded .modern-nav-toggle {\n  display: block;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top {\n  left: 80px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top {\n  right: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navbar-header .brand-text,\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .modern-nav-toggle {\n  display: none;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-left: 2.2rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-right: 2.2rem;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header .feather-more-horizontal {\n  display: block;\n  font-size: 1.285rem;\n  width: 18px;\n  height: 18px;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li:last-child {\n  margin-bottom: 1.25rem !important;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  -webkit-box-shadow: none;\n  color: #565656;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  background: whitesmoke;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header span {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  -webkit-transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navbar-header .brand-text {\n  display: inline;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation {\n  overflow: visible;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li.navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li > a {\n  text-overflow: inherit;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-left: 80px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-right: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.floating-nav {\n  width: calc(100vw - (100vw - 100%) - 4.4rem - 74px);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  width: calc(100vw - (100vw - 100%) - 74px);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  left: 74px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  right: 74px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .toggle-icon, [dir=ltr] .vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-right: 0.425rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .toggle-icon, [dir=rtl] .vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-left: 0.425rem;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon:focus,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon:focus {\n  outline: none;\n}\n@media (min-width: 992px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 260px;\n}\n}\n@media (max-width: 1199.98px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n}\n.vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .content, [dir=ltr] .vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .content, [dir=rtl] .vertical-layout.vertical-menu-modern .footer {\n    margin-right: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-right: 0;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n    width: 0;\n}\n}\n@media (max-width: 767.98px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n}\n.vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .content, [dir=ltr] .vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .content, [dir=rtl] .vertical-layout.vertical-menu-modern .footer {\n    margin-right: 0;\n}\n}\n@-webkit-keyframes fadein {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fadein {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@-webkit-keyframes fadeout {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes fadeout {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n[dir=ltr] .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    -webkit-animation: none;\n    animation: none;\n}\n[dir=rtl] .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    -webkit-animation: none;\n            animation: none;\n}\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n[dir=ltr] .vertical-overlay-menu .content {\n  margin-left: 0;\n}\n[dir=rtl] .vertical-overlay-menu .content {\n  margin-right: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  width: 260px;\n}\n[dir=ltr] .vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .navbar .navbar-header {\n  float: right;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  -webkit-transform: translate3d(0, 0, 0);\n  transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s, -webkit-transform 0.25s;\n  width: 260px;\n}\n[dir] .vertical-overlay-menu .main-menu, [dir] .vertical-overlay-menu.menu-hide .main-menu {\n          -webkit-transform: translate3d(0, 0, 0);\n                  transform: translate3d(0, 0, 0);\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu, [dir=ltr] .vertical-overlay-menu.menu-hide .main-menu {\n  left: -260px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu, [dir=rtl] .vertical-overlay-menu.menu-hide .main-menu {\n  right: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  -webkit-transition: 200ms ease all;\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  -webkit-transition: 200ms ease all;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-left: 14px;\n  float: right;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  -webkit-transition: 200ms ease all;\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation > li > a > svg:before, [dir] .vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  -webkit-transition: 200ms ease all;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  -webkit-transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n          -webkit-transform: rotate(0deg);\n                  transform: rotate(0deg);\n  -webkit-transition: all 0.2s ease-out;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  -webkit-transform: rotate(-90deg);\n          transform: rotate(-90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s, -webkit-transform 0.25s;\n}\n[dir] .vertical-overlay-menu.menu-open .main-menu {\n  -webkit-transition: width 0.25s, opacity 0.25s, -webkit-transform 0.25s;\n}\n[dir=ltr] .vertical-overlay-menu.menu-open .main-menu {\n  -webkit-transform: translate3d(260px, 0, 0);\n  transform: translate3d(260px, 0, 0);\n}\n[dir=rtl] .vertical-overlay-menu.menu-open .main-menu {\n  -webkit-transform: translate3d(-260px, 0, 0);\n          transform: translate3d(-260px, 0, 0);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=style&index=0&id=64de30c4&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=style&index=0&id=09965980&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=style&index=0&id=1df32828&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutHorizontal.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=70de66ab& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle
    ? _c(
        "b-row",
        { staticClass: "content-header" },
        [
          _c(
            "b-col",
            {
              staticClass: "content-header-left mb-2",
              attrs: { cols: "12", md: "9" }
            },
            [
              _c(
                "b-row",
                { staticClass: "breadcrumbs-top" },
                [
                  _c("b-col", { attrs: { cols: "12" } }, [
                    _c(
                      "h2",
                      {
                        staticClass: "content-header-title float-left pr-1 mb-0"
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.$route.meta.pageTitle) +
                            "\n        "
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "breadcrumb-wrapper" },
                      [
                        _c(
                          "b-breadcrumb",
                          [
                            _c(
                              "b-breadcrumb-item",
                              { attrs: { to: "/" } },
                              [
                                _c("feather-icon", {
                                  staticClass: "align-text-top",
                                  attrs: { icon: "HomeIcon", size: "16" }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.$route.meta.breadcrumb, function(item) {
                              return _c(
                                "b-breadcrumb-item",
                                {
                                  key: item.text,
                                  attrs: { active: item.active, to: item.to }
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(item.text) +
                                      "\n            "
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-col",
            {
              staticClass:
                "content-header-right text-md-right d-md-block d-none mb-1",
              attrs: { md: "3", cols: "12" }
            },
            [
              _c(
                "b-dropdown",
                {
                  attrs: {
                    variant: "link",
                    "no-caret": "",
                    "toggle-class": "p-0",
                    right: ""
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "button-content",
                        fn: function() {
                          return [
                            _c(
                              "b-button",
                              {
                                directives: [
                                  {
                                    name: "ripple",
                                    rawName: "v-ripple.400",
                                    value: "rgba(255, 255, 255, 0.15)",
                                    expression: "'rgba(255, 255, 255, 0.15)'",
                                    modifiers: { "400": true }
                                  }
                                ],
                                staticClass: "btn-icon",
                                attrs: { variant: "primary" }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: "SettingsIcon" }
                                })
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    false,
                    1621059081
                  )
                },
                [
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { attrs: { to: { name: "apps-todo" } } },
                    [
                      _c("feather-icon", {
                        attrs: { icon: "CheckSquareIcon", size: "16" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "align-middle ml-50" }, [
                        _vm._v("Todo")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { attrs: { to: { name: "apps-chat" } } },
                    [
                      _c("feather-icon", {
                        attrs: { icon: "MessageSquareIcon", size: "16" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "align-middle ml-50" }, [
                        _vm._v("Chat")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { attrs: { to: { name: "apps-email" } } },
                    [
                      _c("feather-icon", {
                        attrs: { icon: "MailIcon", size: "16" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "align-middle ml-50" }, [
                        _vm._v("Email")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { attrs: { to: { name: "apps-calendar" } } },
                    [
                      _c("feather-icon", {
                        attrs: { icon: "CalendarIcon", size: "16" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "align-middle ml-50" }, [
                        _vm._v("Calendar")
                      ])
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=5db6a843& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("p", { staticClass: "clearfix mb-0" }, [
    _c(
      "span",
      { staticClass: "float-md-left d-block d-md-inline-block mt-25" },
      [
        _vm._v(
          "\n    COPYRIGHT  © " + _vm._s(new Date().getFullYear()) + "\n    "
        ),
        _c(
          "b-link",
          {
            staticClass: "ml-25",
            attrs: {
              href: "https://1.envato.market/pixinvent_portfolio",
              target: "_blank"
            }
          },
          [_vm._v("Pixinvent")]
        ),
        _vm._v(" "),
        _c("span", { staticClass: "d-none d-sm-inline-block" }, [
          _vm._v(", All rights Reserved")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "span",
      { staticClass: "float-md-right d-none d-md-block" },
      [
        _vm._v("Hand-crafted & Made with\n    "),
        _c("feather-icon", {
          staticClass: "text-danger stroke-current",
          attrs: { icon: "HeartIcon", size: "21" }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=676e7116&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayout.vue?vue&type=template&id=676e7116& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "navbar-container d-flex content align-items-center" },
    [
      _c("ul", { staticClass: "nav navbar-nav d-xl-none" }, [
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "b-link",
              {
                staticClass: "nav-link",
                on: { click: _vm.toggleVerticalMenuActive }
              },
              [_c("feather-icon", { attrs: { icon: "MenuIcon", size: "21" } })],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex"
        },
        [_c("bookmarks")],
        1
      ),
      _vm._v(" "),
      _c(
        "b-navbar-nav",
        { staticClass: "nav align-items-center ml-auto" },
        [
          _c("locale"),
          _vm._v(" "),
          _c("dark-Toggler", { staticClass: "d-none d-lg-block" }),
          _vm._v(" "),
          _c("search-bar"),
          _vm._v(" "),
          _c("cart-dropdown"),
          _vm._v(" "),
          _c("notification-dropdown"),
          _vm._v(" "),
          _c("user-dropdown")
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=34e5207c&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/AppNavbarHorizontalLayoutBrand.vue?vue&type=template&id=34e5207c& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "navbar-header d-xl-block d-none" }, [
    _c("ul", { staticClass: "nav navbar-nav" }, [
      _c(
        "li",
        { staticClass: "nav-item" },
        [
          _c("b-link", { staticClass: "navbar-brand", attrs: { to: "/" } }, [
            _c(
              "span",
              { staticClass: "brand-logo" },
              [_c("b-img", { attrs: { src: _vm.appLogoImage, alt: "logo" } })],
              1
            ),
            _vm._v(" "),
            _c("h2", { staticClass: "brand-text mb-0" }, [
              _vm._v("\n          " + _vm._s(_vm.appName) + "\n        ")
            ])
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Bookmarks.vue?vue&type=template&id=64de30c4&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
    "b-navbar-nav",
    { staticClass: "nav" },
    [
      _vm._l(_vm.bookmarks, function(bookmark, index) {
        return _c(
          "b-nav-item",
          {
            key: index,
            attrs: { id: "bookmark-" + index, to: bookmark.route }
          },
          [
            _c("feather-icon", { attrs: { icon: bookmark.icon, size: "21" } }),
            _vm._v(" "),
            _c("b-tooltip", {
              attrs: {
                triggers: "hover",
                target: "bookmark-" + index,
                title: bookmark.title,
                delay: { show: 1000, hide: 50 }
              }
            })
          ],
          1
        )
      }),
      _vm._v(" "),
      _c(
        "b-nav-item-dropdown",
        {
          attrs: { "link-classes": "bookmark-star", lazy: "" },
          on: { hidden: _vm.resetsearchQuery }
        },
        [
          _c("feather-icon", {
            staticClass: "text-warning",
            attrs: { slot: "button-content", icon: "StarIcon", size: "21" },
            slot: "button-content"
          }),
          _vm._v(" "),
          _c(
            "li",
            { staticStyle: { "min-width": "300px" } },
            [
              _c(
                "div",
                { staticClass: "p-1" },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "boomark-search-input",
                      placeholder: "Explore Vuexy...",
                      autofocus: ""
                    },
                    model: {
                      value: _vm.searchQuery,
                      callback: function($$v) {
                        _vm.searchQuery = $$v
                      },
                      expression: "searchQuery"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "vue-perfect-scrollbar",
                {
                  staticClass: "search-list search-list-bookmark scroll-area",
                  class: {
                    show:
                      _vm.filteredData.pages && _vm.filteredData.pages.length
                  },
                  attrs: {
                    settings: _vm.perfectScrollbarSettings,
                    tagname: "ul"
                  }
                },
                [
                  _vm._l(_vm.filteredData.pages || _vm.bookmarks, function(
                    suggestion,
                    index
                  ) {
                    return _c(
                      "b-dropdown-item",
                      {
                        key: index,
                        staticClass:
                          "suggestion-group-suggestion cursor-pointer",
                        attrs: {
                          "link-class": "d-flex align-items-center",
                          to: suggestion.route
                        },
                        on: {
                          mouseenter: function($event) {
                            _vm.currentSelected = index
                          }
                        }
                      },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-75",
                          attrs: { icon: suggestion.icon, size: "18" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle" }, [
                          _vm._v(_vm._s(suggestion.title))
                        ]),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "ml-auto",
                          class: { "text-warning": suggestion.isBookmarked },
                          attrs: { icon: "StarIcon", size: "16" },
                          on: {
                            click: function($event) {
                              $event.stopPropagation()
                              $event.preventDefault()
                              return _vm.toggleBookmarked(suggestion)
                            }
                          }
                        })
                      ],
                      1
                    )
                  }),
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            !(
                              _vm.filteredData.pages &&
                              _vm.filteredData.pages.length
                            ) && _vm.searchQuery,
                          expression:
                            "!(filteredData.pages && filteredData.pages.length) && searchQuery"
                        }
                      ],
                      attrs: { disabled: "" }
                    },
                    [_vm._v("\n          No Results Found.\n        ")]
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/CartDropdown.vue?vue&type=template&id=09965980&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
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
    "b-nav-item-dropdown",
    {
      staticClass: "dropdown-cart mr-25",
      attrs: { "menu-class": "dropdown-menu-media", right: "" },
      on: { show: _vm.fetchItems },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [
              _c("feather-icon", {
                staticClass: "text-body",
                attrs: {
                  badge: _vm.$store.state["app-ecommerce"].cartItemsCount,
                  icon: "ShoppingCartIcon",
                  size: "21"
                }
              })
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c("li", { staticClass: "dropdown-menu-header" }, [
        _c(
          "div",
          { staticClass: "dropdown-header d-flex" },
          [
            _c("h4", { staticClass: "notification-title mb-0 mr-auto" }, [
              _vm._v("\n        My Cart\n      ")
            ]),
            _vm._v(" "),
            _c("b-badge", { attrs: { pill: "", variant: "light-primary" } }, [
              _vm._v(
                "\n        " +
                  _vm._s(_vm.$store.state["app-ecommerce"].cartItemsCount) +
                  " Items\n      "
              )
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm.items.length
        ? _c(
            "vue-perfect-scrollbar",
            {
              staticClass: "scrollable-container media-list scroll-area",
              attrs: { settings: _vm.perfectScrollbarSettings, tagname: "li" }
            },
            _vm._l(_vm.items, function(item) {
              return _c(
                "b-media",
                {
                  key: item.name,
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c("b-img", {
                              attrs: {
                                src: item.image,
                                alt: item.name,
                                rounded: "",
                                width: "62px"
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                },
                [
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "cart-item-remove cursor-pointer",
                    attrs: { icon: "XIcon" },
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.removeItemFromCart(item.id)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "media-heading" }, [
                    _c(
                      "h6",
                      { staticClass: "cart-item-title" },
                      [
                        _c("b-link", { staticClass: "text-body" }, [
                          _vm._v(
                            "\n            " +
                              _vm._s(item.name) +
                              "\n          "
                          )
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("small", { staticClass: "cart-item-by" }, [
                      _vm._v("By " + _vm._s(item.brand))
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "cart-item-qty ml-1" },
                    [
                      _c("b-form-spinbutton", {
                        attrs: { min: "1", size: "sm" },
                        model: {
                          value: item.qty,
                          callback: function($$v) {
                            _vm.$set(item, "qty", $$v)
                          },
                          expression: "item.qty"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("h5", { staticClass: "cart-item-price" }, [
                    _vm._v("\n        $" + _vm._s(item.price) + "\n      ")
                  ])
                ],
                1
              )
            }),
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.items.length
        ? _c(
            "li",
            { staticClass: "dropdown-menu-footer" },
            [
              _c(
                "div",
                { staticClass: "d-flex justify-content-between mb-1" },
                [
                  _c("h6", { staticClass: "font-weight-bolder mb-0" }, [
                    _vm._v("\n        Total:\n      ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "h6",
                    { staticClass: "text-primary font-weight-bolder mb-0" },
                    [
                      _vm._v(
                        "\n        $" + _vm._s(_vm.totalAmount) + "\n      "
                      )
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  directives: [
                    {
                      name: "ripple",
                      rawName: "v-ripple.400",
                      value: "rgba(255, 255, 255, 0.15)",
                      expression: "'rgba(255, 255, 255, 0.15)'",
                      modifiers: { "400": true }
                    }
                  ],
                  attrs: {
                    variant: "primary",
                    block: "",
                    to: { name: "apps-e-commerce-checkout" }
                  }
                },
                [_vm._v("\n      Checkout\n    ")]
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.items.length
        ? _c("p", { staticClass: "m-0 p-1 text-center" }, [
            _vm._v("\n    Your cart is empty\n  ")
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=def79dae& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
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
    "b-nav-item",
    {
      on: {
        click: function($event) {
          _vm.skin = _vm.isDark ? "light" : "dark"
        }
      }
    },
    [
      _c("feather-icon", {
        attrs: { size: "21", icon: (_vm.isDark ? "Sun" : "Moon") + "Icon" }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/Locale.vue?vue&type=template&id=e29bc1ee& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "b-nav-item-dropdown",
    {
      staticClass: "dropdown-language",
      attrs: { id: "dropdown-grouped", variant: "link", right: "" },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [
              _c("b-img", {
                attrs: {
                  src: _vm.currentLocale.img,
                  height: "14px",
                  width: "22px",
                  alt: _vm.currentLocale.locale
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "ml-50 text-body" }, [
                _vm._v(_vm._s(_vm.currentLocale.name))
              ])
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _vm._l(_vm.locales, function(localeObj) {
        return _c(
          "b-dropdown-item",
          {
            key: localeObj.locale,
            on: {
              click: function($event) {
                _vm.$i18n.locale = localeObj.locale
              }
            }
          },
          [
            _c("b-img", {
              attrs: {
                src: localeObj.img,
                height: "14px",
                width: "22px",
                alt: localeObj.locale
              }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "ml-50" }, [
              _vm._v(_vm._s(localeObj.name))
            ])
          ],
          1
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/NotificationDropdown.vue?vue&type=template&id=3bb7c18b& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
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
    "b-nav-item-dropdown",
    {
      staticClass: "dropdown-notification mr-25",
      attrs: { "menu-class": "dropdown-menu-media", right: "" },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [
              _c("feather-icon", {
                staticClass: "text-body",
                attrs: {
                  badge: "6",
                  "badge-classes": "bg-danger",
                  icon: "BellIcon",
                  size: "21"
                }
              })
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c("li", { staticClass: "dropdown-menu-header" }, [
        _c(
          "div",
          { staticClass: "dropdown-header d-flex" },
          [
            _c("h4", { staticClass: "notification-title mb-0 mr-auto" }, [
              _vm._v("\n        Notifications\n      ")
            ]),
            _vm._v(" "),
            _c("b-badge", { attrs: { pill: "", variant: "light-primary" } }, [
              _vm._v("\n        6 New\n      ")
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "li",
        { staticClass: "dropdown-menu-footer" },
        [
          _c(
            "b-button",
            {
              directives: [
                {
                  name: "ripple",
                  rawName: "v-ripple.400",
                  value: "rgba(255, 255, 255, 0.15)",
                  expression: "'rgba(255, 255, 255, 0.15)'",
                  modifiers: { "400": true }
                }
              ],
              attrs: { variant: "primary", block: "" }
            },
            [_vm._v("Read all notifications")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "vue-perfect-scrollbar",
      {
        staticClass: "scrollable-container media-list scroll-area",
        attrs: { settings: _vm.perfectScrollbarSettings, tagname: "li" }
      },
      [
        _vm._l(_vm.notifications, function(notification) {
          return _c(
            "b-link",
            { key: notification.subtitle },
            [
              _c(
                "b-media",
                {
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c("b-avatar", {
                              attrs: {
                                size: "32",
                                src: notification.avatar,
                                text: notification.avatar,
                                variant: notification.type
                              }
                            })
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                },
                [
                  _vm._v(" "),
                  _c("p", { staticClass: "media-heading" }, [
                    _c("span", { staticClass: "font-weight-bolder" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(notification.title) +
                          "\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "notification-text" }, [
                    _vm._v(_vm._s(notification.subtitle))
                  ])
                ]
              )
            ],
            1
          )
        }),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "media d-flex align-items-center" },
          [
            _c("h6", { staticClass: "font-weight-bolder mr-auto mb-0" }, [
              _vm._v("\n        System Notifications\n      ")
            ]),
            _vm._v(" "),
            _c("b-form-checkbox", { attrs: { checked: true, switch: "" } })
          ],
          1
        ),
        _vm._v(" "),
        _vm._l(_vm.systemNotifications, function(notification) {
          return _c(
            "b-link",
            { key: notification.subtitle },
            [
              _c(
                "b-media",
                {
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "aside",
                        fn: function() {
                          return [
                            _c(
                              "b-avatar",
                              {
                                attrs: {
                                  size: "32",
                                  variant: notification.type
                                }
                              },
                              [
                                _c("feather-icon", {
                                  attrs: { icon: notification.icon }
                                })
                              ],
                              1
                            )
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    true
                  )
                },
                [
                  _vm._v(" "),
                  _c("p", { staticClass: "media-heading" }, [
                    _c("span", { staticClass: "font-weight-bolder" }, [
                      _vm._v(
                        "\n            " +
                          _vm._s(notification.title) +
                          "\n          "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("small", { staticClass: "notification-text" }, [
                    _vm._v(_vm._s(notification.subtitle))
                  ])
                ]
              )
            ],
            1
          )
        })
      ],
      2
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/SearchBar.vue?vue&type=template&id=1df32828&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("li", { staticClass: "nav-item nav-search" }, [
    _c(
      "a",
      {
        staticClass: "nav-link nav-link-search",
        attrs: { href: "javascript:void(0)" },
        on: {
          click: function($event) {
            _vm.showSearchBar = true
          }
        }
      },
      [_c("feather-icon", { attrs: { icon: "SearchIcon", size: "21" } })],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "search-input", class: { open: _vm.showSearchBar } },
      [
        _c(
          "div",
          { staticClass: "search-input-icon" },
          [_c("feather-icon", { attrs: { icon: "SearchIcon" } })],
          1
        ),
        _vm._v(" "),
        _vm.showSearchBar
          ? _c("b-form-input", {
              attrs: {
                placeholder: "Explore Vuexy",
                autofocus: "",
                autocomplete: "off"
              },
              on: {
                keyup: [
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "up", 38, $event.key, [
                        "Up",
                        "ArrowUp"
                      ])
                    ) {
                      return null
                    }
                    return _vm.increaseIndex(false)
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "down", 40, $event.key, [
                        "Down",
                        "ArrowDown"
                      ])
                    ) {
                      return null
                    }
                    return _vm.increaseIndex($event)
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "esc", 27, $event.key, [
                        "Esc",
                        "Escape"
                      ])
                    ) {
                      return null
                    }
                    _vm.showSearchBar = false
                    _vm.resetsearchQuery()
                  },
                  function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.suggestionSelected($event)
                  }
                ],
                blur: function($event) {
                  $event.stopPropagation()
                  _vm.showSearchBar = false
                  _vm.resetsearchQuery()
                }
              },
              model: {
                value: _vm.searchQuery,
                callback: function($$v) {
                  _vm.searchQuery = $$v
                },
                expression: "searchQuery"
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "search-input-close",
            on: {
              click: function($event) {
                _vm.showSearchBar = false
                _vm.resetsearchQuery()
              }
            }
          },
          [_c("feather-icon", { attrs: { icon: "XIcon" } })],
          1
        ),
        _vm._v(" "),
        _c(
          "vue-perfect-scrollbar",
          {
            staticClass:
              "search-list search-list-main scroll-area overflow-hidden",
            class: { show: _vm.searchQuery },
            attrs: { settings: _vm.perfectScrollbarSettings, tagname: "ul" }
          },
          _vm._l(_vm.filteredData, function(
            suggestion_list,
            grp_name,
            grp_index
          ) {
            return _c(
              "li",
              { key: grp_index, staticClass: "suggestions-groups-list" },
              [
                _c("p", { staticClass: "suggestion-group-title" }, [
                  _c("span", [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.title(grp_name)) +
                        "\n          "
                    )
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "ul",
                  [
                    _vm._l(suggestion_list, function(suggestion, index) {
                      return _c(
                        "li",
                        {
                          key: index,
                          staticClass:
                            "suggestion-group-suggestion cursor-pointer",
                          class: {
                            "suggestion-current-selected":
                              _vm.currentSelected === grp_index + "." + index
                          },
                          on: {
                            mouseenter: function($event) {
                              _vm.currentSelected = grp_index + "." + index
                            },
                            mousedown: function($event) {
                              $event.preventDefault()
                              return _vm.suggestionSelected(
                                grp_name,
                                suggestion
                              )
                            }
                          }
                        },
                        [
                          grp_name === "pages"
                            ? _c(
                                "b-link",
                                { staticClass: "p-0" },
                                [
                                  _c("feather-icon", {
                                    staticClass: "mr-75",
                                    attrs: { icon: suggestion.icon }
                                  }),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "align-middle" }, [
                                    _vm._v(_vm._s(suggestion.title))
                                  ])
                                ],
                                1
                              )
                            : grp_name === "files"
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-center" },
                                  [
                                    _c("b-img", {
                                      staticClass: "mr-1",
                                      attrs: {
                                        src: suggestion.icon,
                                        height: "32"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", [
                                      _c("p", [
                                        _vm._v(_vm._s(suggestion.file_name))
                                      ]),
                                      _vm._v(" "),
                                      _c("small", [
                                        _vm._v("by " + _vm._s(suggestion.from))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("small", { staticClass: "ml-auto" }, [
                                      _vm._v(_vm._s(suggestion.size))
                                    ])
                                  ],
                                  1
                                )
                              ]
                            : grp_name === "contacts"
                            ? [
                                _c(
                                  "div",
                                  { staticClass: "d-flex align-items-center" },
                                  [
                                    _c("b-avatar", {
                                      staticClass: "mr-1",
                                      attrs: { src: suggestion.img, size: "32" }
                                    }),
                                    _vm._v(" "),
                                    _c("div", [
                                      _c("p", [
                                        _vm._v(_vm._s(suggestion.name))
                                      ]),
                                      _vm._v(" "),
                                      _c("small", [
                                        _vm._v(_vm._s(suggestion.email))
                                      ])
                                    ]),
                                    _vm._v(" "),
                                    _c("small", { staticClass: "ml-auto" }, [
                                      _vm._v(_vm._s(suggestion.time))
                                    ])
                                  ],
                                  1
                                )
                              ]
                            : _vm._e()
                        ],
                        2
                      )
                    }),
                    _vm._v(" "),
                    !suggestion_list.length && _vm.searchQuery
                      ? _c(
                          "li",
                          {
                            staticClass:
                              "suggestion-group-suggestion no-results"
                          },
                          [_c("p", [_vm._v("No Results Found.")])]
                        )
                      : _vm._e()
                  ],
                  2
                )
              ]
            )
          }),
          0
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/app-navbar/components/UserDropdown.vue?vue&type=template&id=58cac92a& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
    "b-nav-item-dropdown",
    {
      staticClass: "dropdown-user",
      attrs: {
        right: "",
        "toggle-class": "d-flex align-items-center dropdown-user-link"
      },
      scopedSlots: _vm._u([
        {
          key: "button-content",
          fn: function() {
            return [
              _c("div", { staticClass: "d-sm-flex d-none user-nav" }, [
                _c("p", { staticClass: "user-name font-weight-bolder mb-0" }, [
                  _vm._v(
                    "\n        " +
                      _vm._s(_vm.userData.fullName || _vm.userData.username) +
                      "\n      "
                  )
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "user-status" }, [
                  _vm._v(_vm._s(_vm.userData.role))
                ])
              ]),
              _vm._v(" "),
              _c(
                "b-avatar",
                {
                  staticClass: "badge-minimal",
                  attrs: {
                    size: "40",
                    src: _vm.userData.avatar,
                    variant: "light-primary",
                    badge: "",
                    "badge-variant": "success"
                  }
                },
                [
                  !_vm.userData.fullName
                    ? _c("feather-icon", {
                        attrs: { icon: "UserIcon", size: "22" }
                      })
                    : _vm._e()
                ],
                1
              )
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "pages-profile" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "UserIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Profile")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "apps-email" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "MailIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Inbox")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "apps-todo" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "CheckSquareIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Task")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "apps-chat" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "MessageSquareIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Chat")])
        ],
        1
      ),
      _vm._v(" "),
      _c("b-dropdown-divider"),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "pages-account-setting" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "SettingsIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Settings")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "pages-pricing" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "CreditCardIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Pricing")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: {
            to: { name: "pages-faq" },
            "link-class": "d-flex align-items-center"
          }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "HelpCircleIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("FAQ")])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-dropdown-item",
        {
          attrs: { "link-class": "d-flex align-items-center" },
          on: { click: _vm.logout }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-50",
            attrs: { size: "16", icon: "LogOutIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Logout")])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=fef05e66& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass
      ]
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "content-wrapper",
          class: _vm.contentWidth === "boxed" ? "container p-0" : null
        },
        [
          _vm._t("breadcrumb", [_c("app-breadcrumb")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "content-body" },
            [
              _c(
                "transition",
                { attrs: { name: _vm.routerTransition, mode: "out-in" } },
                [_vm._t("default")],
                2
              )
            ],
            1
          )
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=5f8a9b2b& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass
      ]
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(
            "div",
            {
              staticClass: "content-area-wrapper",
              class: _vm.contentWidth === "boxed" ? "container p-0" : null
            },
            [
              _vm._t("breadcrumb", [_c("app-breadcrumb")]),
              _vm._v(" "),
              _c("portal-target", {
                attrs: { name: "content-renderer-sidebar-left", slim: "" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "content-right" }, [
                _c("div", { staticClass: "content-wrapper" }, [
                  _c(
                    "div",
                    { staticClass: "content-body" },
                    [_vm._t("default")],
                    2
                  )
                ])
              ])
            ],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=68852ebd& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass
      ]
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(
            "div",
            {
              staticClass: "content-wrapper clearfix",
              class: _vm.contentWidth === "boxed" ? "container p-0" : null
            },
            [
              _vm._t("breadcrumb", [_c("app-breadcrumb")]),
              _vm._v(" "),
              _c("div", { staticClass: "content-detached content-right" }, [
                _c("div", { staticClass: "content-wrapper" }, [
                  _c(
                    "div",
                    { staticClass: "content-body" },
                    [_vm._t("default")],
                    2
                  )
                ])
              ]),
              _vm._v(" "),
              _c("portal-target", {
                attrs: {
                  name: "content-renderer-sidebar-detached-left",
                  slim: ""
                }
              })
            ],
            2
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=4e821ef6&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/LayoutHorizontal.vue?vue&type=template&id=4e821ef6& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "horizontal-layout",
      class: [_vm.layoutClasses],
      staticStyle: { height: "inherit" },
      attrs: { "data-col": _vm.isNavMenuHidden ? "1-column" : null }
    },
    [
      _c(
        "b-navbar",
        {
          staticClass:
            "header-navbar navbar-shadow align-items-center navbar-brand-center navbar-fixed",
          class: {
            "fixed-top": _vm.$store.getters["app/currentBreakPoint"] !== "xl"
          },
          style: {
            backgroundColor:
              _vm.navbarType === "static" &&
              _vm.scrolledTo &&
              _vm.skin === "light"
                ? "white"
                : null,
            boxShadow:
              _vm.navbarType === "static" && _vm.scrolledTo
                ? "rgba(0, 0, 0, 0.05) 0px 4px 20px 0px"
                : null
          },
          attrs: { toggleable: false }
        },
        [
          _vm._t(
            "navbar",
            [
              _c("app-navbar-horizontal-layout-brand"),
              _vm._v(" "),
              _c("app-navbar-horizontal-layout", {
                attrs: {
                  "toggle-vertical-menu-active": _vm.toggleVerticalMenuActive
                }
              })
            ],
            { toggleVerticalMenuActive: _vm.toggleVerticalMenuActive }
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "horizontal-menu-wrapper" },
        [
          !_vm.isNavMenuHidden
            ? _c(
                "div",
                {
                  staticClass:
                    "header-navbar navbar-expand-sm navbar navbar-horizontal navbar-light navbar-shadow menu-border d-none d-xl-block",
                  class: [_vm.navbarMenuTypeClass]
                },
                [_c("horizontal-nav-menu")],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("vertical-nav-menu", {
            staticClass: "d-block d-xl-none",
            attrs: {
              "is-vertical-menu-active": _vm.isVerticalMenuActive,
              "toggle-vertical-menu-active": _vm.toggleVerticalMenuActive
            },
            scopedSlots: _vm._u(
              [
                {
                  key: "header",
                  fn: function(slotProps) {
                    return [
                      _vm._t("vertical-menu-header", null, null, slotProps)
                    ]
                  }
                }
              ],
              null,
              true
            )
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "sidenav-overlay",
        class: _vm.overlayClasses,
        on: {
          click: function($event) {
            _vm.isVerticalMenuActive = false
          }
        }
      }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(_vm.layoutContentRenderer, {
            key:
              _vm.layoutContentRenderer === "layout-content-renderer-left"
                ? _vm.$route.meta.navActiveLink || _vm.$route.name
                : null,
            tag: "component",
            scopedSlots: _vm._u(
              [
                _vm._l(_vm.$scopedSlots, function(index, name) {
                  return {
                    key: name,
                    fn: function(data) {
                      return [_vm._t(name, null, null, data)]
                    }
                  }
                })
              ],
              null,
              true
            )
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "footer",
        { staticClass: "footer footer-light", class: [_vm.footerTypeClass] },
        [_vm._t("footer", [_c("app-footer")])],
        2
      ),
      _vm._v(" "),
      _vm._t("customizer")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=58f6dd70&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/HorizontalNavMenu.vue?vue&type=template&id=58f6dd70& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "navbar-container main-menu-content" },
    [_c("horizontal-nav-menu-items", { attrs: { items: _vm.navMenuItems } })],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=245c1617&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-group/HorizontalNavMenuGroup.vue?vue&type=template&id=245c1617& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canViewVerticalNavMenuGroup(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "dropdown dropdown-submenu",
          class: {
            show: _vm.isOpen,
            disabled: _vm.item.disabled,
            "sidebar-group-active active open": _vm.isActive,
            openLeft: _vm.openChildDropdownOnLeft
          },
          on: {
            mouseenter: function() {
              return _vm.updateGroupOpen(true)
            },
            mouseleave: function() {
              return _vm.updateGroupOpen(false)
            }
          }
        },
        [
          _c(
            "b-link",
            {
              staticClass: "dropdown-item",
              class: { "dropdown-toggle": _vm.item.children },
              attrs: { href: "#" },
              on: {
                click: function() {
                  return _vm.updateGroupOpen(!_vm.isOpen)
                }
              }
            },
            [
              _c("feather-icon", {
                attrs: { icon: _vm.item.icon || "CircleIcon" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title)))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "ul",
            { ref: "refChildDropdown", staticClass: "dropdown-menu" },
            _vm._l(_vm.item.children, function(child) {
              return _c(_vm.resolveNavItemComponent(child), {
                key: child.header || child.title,
                ref: "groupChild",
                refInFor: true,
                tag: "component",
                attrs: { item: child }
              })
            }),
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=18b7df6e&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-group/HorizontalNavMenuHeaderGroup.vue?vue&type=template&id=18b7df6e& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canViewHorizontalNavMenuHeaderGroup(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "dropdown nav-item",
          class: {
            "sidebar-group-active active open": _vm.isActive,
            show: _vm.isOpen
          },
          on: {
            mouseenter: function() {
              return _vm.updateGroupOpen(true)
            },
            mouseleave: function() {
              return _vm.updateGroupOpen(false)
            }
          }
        },
        [
          _c(
            "b-link",
            {
              staticClass: "nav-link dropdown-toggle d-flex align-items-center"
            },
            [
              _c("feather-icon", {
                attrs: { size: "14", icon: _vm.item.icon }
              }),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.t(_vm.item.header)))])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "dropdown-menu" },
            _vm._l(_vm.item.children, function(child) {
              return _c(_vm.resolveHorizontalNavMenuItemComponent(child), {
                key: child.title,
                tag: "component",
                attrs: { item: child }
              })
            }),
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=3b3979fa&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-header-link/HorizontalNavMenuHeaderLink.vue?vue&type=template&id=3b3979fa& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canViewHorizontalNavMenuHeaderLink(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "nav-item",
          class: { "sidebar-group-active active": _vm.isActive }
        },
        [
          _c(
            "b-link",
            {
              staticClass: "nav-link",
              attrs: { to: { name: _vm.item.route } }
            },
            [
              _c("feather-icon", {
                attrs: { size: "14", icon: _vm.item.icon }
              }),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(_vm.t(_vm.item.title)))])
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=8cd86612&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-items/HorizontalNavMenuItems.vue?vue&type=template&id=8cd86612& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "ul",
    { staticClass: "nav navbar-nav", attrs: { id: "main-menu-navigation" } },
    _vm._l(_vm.items, function(item) {
      return _c(_vm.resolveNavComponent(item), {
        key: item.header || item.title,
        tag: "component",
        attrs: { item: item }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=61cf11ae&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-horizontal/components/horizontal-nav-menu/components/horizontal-nav-menu-link/HorizontalNavMenuLink.vue?vue&type=template&id=61cf11ae& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canViewHorizontalNavMenuLink(_vm.item)
    ? _c(
        "li",
        {
          class: {
            active: _vm.isActive,
            disabled: _vm.item.disabled
          }
        },
        [
          _c(
            "b-link",
            _vm._b(
              { staticClass: "dropdown-item" },
              "b-link",
              _vm.linkProps,
              false
            ),
            [
              _c("feather-icon", {
                attrs: { icon: _vm.item.icon || "CircleIcon", size: "24" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title)))
              ])
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=f11d7d8c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "main-menu menu-fixed menu-accordion menu-shadow",
      class: [
        {
          expanded:
            !_vm.isVerticalMenuCollapsed ||
            (_vm.isVerticalMenuCollapsed && _vm.isMouseHovered)
        },
        _vm.skin === "semi-dark" ? "menu-dark" : "menu-light"
      ],
      on: {
        mouseenter: function($event) {
          return _vm.updateMouseHovered(true)
        },
        mouseleave: function($event) {
          return _vm.updateMouseHovered(false)
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "navbar-header expanded" },
        [
          _vm._t(
            "header",
            [
              _c("ul", { staticClass: "nav navbar-nav flex-row" }, [
                _c(
                  "li",
                  { staticClass: "nav-item mr-auto" },
                  [
                    _c(
                      "b-link",
                      { staticClass: "navbar-brand", attrs: { to: "/" } },
                      [
                        _c(
                          "span",
                          { staticClass: "brand-logo" },
                          [
                            _c("b-img", {
                              attrs: { src: _vm.appLogoImage, alt: "logo" }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("h2", { staticClass: "brand-text" }, [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.appName) +
                              "\n            "
                          )
                        ])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item nav-toggle" },
                  [
                    _c(
                      "b-link",
                      { staticClass: "nav-link modern-nav-toggle" },
                      [
                        _c("feather-icon", {
                          staticClass: "d-block d-xl-none",
                          attrs: { icon: "XIcon", size: "20" },
                          on: { click: _vm.toggleVerticalMenuActive }
                        }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "d-none d-xl-block collapse-toggle-icon",
                          attrs: {
                            icon: _vm.collapseTogglerIconFeather,
                            size: "20"
                          },
                          on: { click: _vm.toggleCollapsed }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ],
            {
              toggleVerticalMenuActive: _vm.toggleVerticalMenuActive,
              toggleCollapsed: _vm.toggleCollapsed,
              collapseTogglerIcon: _vm.collapseTogglerIcon
            }
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "shadow-bottom",
        class: { "d-block": _vm.shallShadowBottom }
      }),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "main-menu-content scroll-area",
          attrs: { settings: _vm.perfectScrollbarSettings, tagname: "ul" },
          on: {
            "ps-scroll-y": function(evt) {
              _vm.shallShadowBottom = evt.srcElement.scrollTop > 0
            }
          }
        },
        [
          _c("vertical-nav-menu-items", {
            staticClass: "navigation navigation-main",
            attrs: { items: _vm.navMenuItems }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=79499ad7& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canViewVerticalNavMenuGroup(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "nav-item has-sub",
          class: {
            open: _vm.isOpen,
            disabled: _vm.item.disabled,
            "sidebar-group-active": _vm.isActive
          }
        },
        [
          _c(
            "b-link",
            {
              staticClass: "d-flex align-items-center",
              on: {
                click: function() {
                  return _vm.updateGroupOpen(!_vm.isOpen)
                }
              }
            },
            [
              _c("feather-icon", {
                attrs: { icon: _vm.item.icon || "CircleIcon" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title text-truncate" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title)))
              ]),
              _vm._v(" "),
              _vm.item.tag
                ? _c(
                    "b-badge",
                    {
                      staticClass: "mr-1 ml-auto",
                      attrs: {
                        pill: "",
                        variant: _vm.item.tagVariant || "primary"
                      }
                    },
                    [_vm._v("\n      " + _vm._s(_vm.item.tag) + "\n    ")]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-collapse",
            {
              staticClass: "menu-content",
              attrs: { tag: "ul" },
              model: {
                value: _vm.isOpen,
                callback: function($$v) {
                  _vm.isOpen = $$v
                },
                expression: "isOpen"
              }
            },
            _vm._l(_vm.item.children, function(child) {
              return _c(_vm.resolveNavItemComponent(child), {
                key: child.header || child.title,
                ref: "groupChild",
                refInFor: true,
                tag: "component",
                attrs: { item: child }
              })
            }),
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=79ec4d77& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "ul",
    _vm._l(_vm.items, function(item) {
      return _c(_vm.resolveNavItemComponent(item), {
        key: item.header || item.title,
        tag: "component",
        attrs: { item: item }
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=10ffb945& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.canViewVerticalNavMenuLink(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "nav-item",
          class: {
            active: _vm.isActive,
            disabled: _vm.item.disabled
          }
        },
        [
          _c(
            "b-link",
            _vm._b(
              { staticClass: "d-flex align-items-center" },
              "b-link",
              _vm.linkProps,
              false
            ),
            [
              _c("feather-icon", {
                attrs: { icon: _vm.item.icon || "CircleIcon" }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title text-truncate" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title)))
              ]),
              _vm._v(" "),
              _vm.item.tag
                ? _c(
                    "b-badge",
                    {
                      staticClass: "mr-1 ml-auto",
                      attrs: {
                        pill: "",
                        variant: _vm.item.tagVariant || "primary"
                      }
                    },
                    [_vm._v("\n      " + _vm._s(_vm.item.tag) + "\n    ")]
                  )
                : _vm._e()
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=ded3a10e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/layouts/horizontal/LayoutHorizontal.vue?vue&type=template&id=ded3a10e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "layout-horizontal",
    [
      _c("router-view"),
      _vm._v(" "),
      _vm.showCustomizer
        ? _c("app-customizer", {
            attrs: { slot: "customizer" },
            slot: "customizer"
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);