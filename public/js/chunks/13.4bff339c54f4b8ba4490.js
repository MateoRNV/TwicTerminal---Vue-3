(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./frontend/src/@core/comp-functions/ui/app.js":
/*!*****************************************************!*\
  !*** ./frontend/src/@core/comp-functions/ui/app.js ***!
  \*****************************************************/
/*! exports provided: useResponsiveAppLeftSidebarVisibility, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResponsiveAppLeftSidebarVisibility", function() { return useResponsiveAppLeftSidebarVisibility; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");


var useResponsiveAppLeftSidebarVisibility = function useResponsiveAppLeftSidebarVisibility() {
  var mqShallShowLeftSidebar = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false); // Close Active Sidebars and other stuff when going in large device

  var currentBreakPoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['app/currentBreakPoint'];
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(currentBreakPoint, function (val, oldVal) {
    // Reset chats & contacts left sidebar
    if (oldVal === 'md' && val === 'lg') mqShallShowLeftSidebar.value = false;
  });
  return {
    mqShallShowLeftSidebar: mqShallShowLeftSidebar
  };
};
var _ = {};

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

/***/ "./frontend/src/views/apps/email/Email.vue":
/*!*************************************************!*\
  !*** ./frontend/src/views/apps/email/Email.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Email_vue_vue_type_template_id_06fb3eb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Email.vue?vue&type=template&id=06fb3eb7&scoped=true& */ "./frontend/src/views/apps/email/Email.vue?vue&type=template&id=06fb3eb7&scoped=true&");
/* harmony import */ var _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/email/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Email_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Email.vue?vue&type=style&index=1&lang=scss& */ "./frontend/src/views/apps/email/Email.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Email_vue_vue_type_template_id_06fb3eb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Email_vue_vue_type_template_id_06fb3eb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "06fb3eb7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/email/Email.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/email/Email.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./frontend/src/views/apps/email/Email.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/Email.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/email/Email.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./frontend/src/views/apps/email/Email.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/Email.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/apps/email/Email.vue?vue&type=template&id=06fb3eb7&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./frontend/src/views/apps/email/Email.vue?vue&type=template&id=06fb3eb7&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_06fb3eb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=template&id=06fb3eb7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/Email.vue?vue&type=template&id=06fb3eb7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_06fb3eb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Email_vue_vue_type_template_id_06fb3eb7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/email/EmailCompose.vue":
/*!********************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailCompose.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailCompose_vue_vue_type_template_id_1a7b160b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailCompose.vue?vue&type=template&id=1a7b160b&scoped=true& */ "./frontend/src/views/apps/email/EmailCompose.vue?vue&type=template&id=1a7b160b&scoped=true&");
/* harmony import */ var _EmailCompose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailCompose.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/email/EmailCompose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmailCompose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailCompose.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _EmailCompose_vue_vue_type_style_index_1_id_1a7b160b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true& */ "./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _EmailCompose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailCompose_vue_vue_type_template_id_1a7b160b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailCompose_vue_vue_type_template_id_1a7b160b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1a7b160b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/email/EmailCompose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/email/EmailCompose.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailCompose.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailCompose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailCompose.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_style_index_1_id_1a7b160b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_style_index_1_id_1a7b160b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_style_index_1_id_1a7b160b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_style_index_1_id_1a7b160b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_style_index_1_id_1a7b160b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/apps/email/EmailCompose.vue?vue&type=template&id=1a7b160b&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailCompose.vue?vue&type=template&id=1a7b160b&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_template_id_1a7b160b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailCompose.vue?vue&type=template&id=1a7b160b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=template&id=1a7b160b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_template_id_1a7b160b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailCompose_vue_vue_type_template_id_1a7b160b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/email/EmailLeftSidebar.vue":
/*!************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailLeftSidebar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailLeftSidebar_vue_vue_type_template_id_30c3efce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailLeftSidebar.vue?vue&type=template&id=30c3efce& */ "./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=template&id=30c3efce&");
/* harmony import */ var _EmailLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailLeftSidebar.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailLeftSidebar_vue_vue_type_template_id_30c3efce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailLeftSidebar_vue_vue_type_template_id_30c3efce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/email/EmailLeftSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailLeftSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailLeftSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=template&id=30c3efce&":
/*!*******************************************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=template&id=30c3efce& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailLeftSidebar_vue_vue_type_template_id_30c3efce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailLeftSidebar.vue?vue&type=template&id=30c3efce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=template&id=30c3efce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailLeftSidebar_vue_vue_type_template_id_30c3efce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailLeftSidebar_vue_vue_type_template_id_30c3efce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/email/EmailMessageCard.vue":
/*!************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailMessageCard.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailMessageCard_vue_vue_type_template_id_e99175a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailMessageCard.vue?vue&type=template&id=e99175a0& */ "./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=template&id=e99175a0&");
/* harmony import */ var _EmailMessageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailMessageCard.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailMessageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailMessageCard_vue_vue_type_template_id_e99175a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailMessageCard_vue_vue_type_template_id_e99175a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/email/EmailMessageCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailMessageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailMessageCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailMessageCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=template&id=e99175a0&":
/*!*******************************************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=template&id=e99175a0& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailMessageCard_vue_vue_type_template_id_e99175a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailMessageCard.vue?vue&type=template&id=e99175a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=template&id=e99175a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailMessageCard_vue_vue_type_template_id_e99175a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailMessageCard_vue_vue_type_template_id_e99175a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/email/EmailView.vue":
/*!*****************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailView.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmailView_vue_vue_type_template_id_12f84908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmailView.vue?vue&type=template&id=12f84908& */ "./frontend/src/views/apps/email/EmailView.vue?vue&type=template&id=12f84908&");
/* harmony import */ var _EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmailView.vue?vue&type=script&lang=js& */ "./frontend/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmailView_vue_vue_type_template_id_12f84908___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmailView_vue_vue_type_template_id_12f84908___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/apps/email/EmailView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/apps/email/EmailView.vue?vue&type=template&id=12f84908&":
/*!************************************************************************************!*\
  !*** ./frontend/src/views/apps/email/EmailView.vue?vue&type=template&id=12f84908& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_template_id_12f84908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailView.vue?vue&type=template&id=12f84908& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailView.vue?vue&type=template&id=12f84908&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_template_id_12f84908___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmailView_vue_vue_type_template_id_12f84908___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/apps/email/emailStoreModule.js":
/*!***********************************************************!*\
  !*** ./frontend/src/views/apps/email/emailStoreModule.js ***!
  \***********************************************************/
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
    fetchEmails: function fetchEmails(ctx, payload) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/apps/email/emails', {
          params: payload
        }).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    updateEmail: function updateEmail(ctx, payload) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/apps/email/update-emails', payload).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    updateEmailLabels: function updateEmailLabels(ctx, payload) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/apps/email/update-emails-label', payload).then(function (response) {
          return resolve(response);
        })["catch"](function (error) {
          return reject(error);
        });
      });
    },
    paginateEmail: function paginateEmail(ctx, payload) {
      return new Promise(function (resolve, reject) {
        _axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/apps/email/paginate-email', {
          params: payload
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

/***/ "./frontend/src/views/apps/email/useEmail.js":
/*!***************************************************!*\
  !*** ./frontend/src/views/apps/email/useEmail.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEmail; });
function useEmail() {
  var resolveLabelColor = function resolveLabelColor(label) {
    if (label === 'personal') return 'success';
    if (label === 'company') return 'primary';
    if (label === 'important') return 'warning';
    if (label === 'private') return 'danger';
    return 'secondary';
  };

  return {
    resolveLabelColor: resolveLabelColor
  };
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/Email.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/Email.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/filter */ "./frontend/src/@core/utils/filter.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/utils/utils */ "./frontend/src/@core/utils/utils.js");
/* harmony import */ var _core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/comp-functions/ui/app */ "./frontend/src/@core/comp-functions/ui/app.js");
/* harmony import */ var _EmailLeftSidebar_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./EmailLeftSidebar.vue */ "./frontend/src/views/apps/email/EmailLeftSidebar.vue");
/* harmony import */ var _EmailView_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EmailView.vue */ "./frontend/src/views/apps/email/EmailView.vue");
/* harmony import */ var _emailStoreModule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./emailStoreModule */ "./frontend/src/views/apps/email/emailStoreModule.js");
/* harmony import */ var _useEmail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./useEmail */ "./frontend/src/views/apps/email/useEmail.js");
/* harmony import */ var _EmailCompose_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./EmailCompose.vue */ "./frontend/src/views/apps/email/EmailCompose.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"],
    BInputGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BInputGroup"],
    BInputGroupPrepend: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BInputGroupPrepend"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BDropdownItem"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormCheckbox"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BMedia"],
    BMediaAside: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BMediaAside"],
    BMediaBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BMediaBody"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BAvatar"],
    // 3rd Party
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_3___default.a,
    // App SFC
    EmailLeftSidebar: _EmailLeftSidebar_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    EmailView: _EmailView_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    EmailCompose: _EmailCompose_vue__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  setup: function setup() {
    var EMAIL_APP_STORE_MODULE_NAME = 'app-email'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_0__["default"].hasModule(EMAIL_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_0__["default"].registerModule(EMAIL_APP_STORE_MODULE_NAME, _emailStoreModule__WEBPACK_IMPORTED_MODULE_9__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_0__["default"].hasModule(EMAIL_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_0__["default"].unregisterModule(EMAIL_APP_STORE_MODULE_NAME);
    });

    var _useRouter = Object(_core_utils_utils__WEBPACK_IMPORTED_MODULE_5__["useRouter"])(),
        route = _useRouter.route,
        router = _useRouter.router;

    var _useEmail = Object(_useEmail__WEBPACK_IMPORTED_MODULE_10__["default"])(),
        resolveLabelColor = _useEmail.resolveLabelColor; // Route Params


    var routeParams = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return route.value.params;
    });
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(routeParams, function () {
      // eslint-disable-next-line no-use-before-define
      fetchEmails();
    }); // Emails & EmailsMeta

    var emails = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])([]);
    var emailsMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({});
    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    }; // Search Query

    var routeQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return route.value.query.q;
    });
    var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(routeQuery.value);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(routeQuery, function (val) {
      searchQuery.value = val;
    }); // eslint-disable-next-line no-use-before-define

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(searchQuery, function () {
      return fetchEmails();
    });

    var updateRouteQuery = function updateRouteQuery(val) {
      var currentRouteQuery = JSON.parse(JSON.stringify(route.value.query));
      if (val) currentRouteQuery.q = val;else delete currentRouteQuery.q;
      router.replace({
        name: route.name,
        query: currentRouteQuery
      });
    };

    var fetchEmails = function fetchEmails() {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-email/fetchEmails', {
        q: searchQuery.value,
        folder: router.currentRoute.params.folder || 'inbox',
        label: router.currentRoute.params.label
      }).then(function (response) {
        emails.value = response.data.emails;
        emailsMeta.value = response.data.emailsMeta;
      });
    };

    fetchEmails(); // ------------------------------------------------
    // Mail Selection
    // ------------------------------------------------

    var selectedEmails = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])([]);

    var toggleSelectedMail = function toggleSelectedMail(mailId) {
      var mailIndex = selectedEmails.value.indexOf(mailId);
      if (mailIndex === -1) selectedEmails.value.push(mailId);else selectedEmails.value.splice(mailIndex, 1);
    };

    var selectAllEmailCheckbox = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return emails.value.length && emails.value.length === selectedEmails.value.length;
    });
    var isSelectAllEmailCheckboxIndeterminate = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return Boolean(selectedEmails.value.length) && emails.value.length !== selectedEmails.value.length;
    });

    var selectAllCheckboxUpdate = function selectAllCheckboxUpdate(val) {
      selectedEmails.value = val ? emails.value.map(function (mail) {
        return mail.id;
      }) : [];
    }; // ? Watcher to reset selectedEmails is somewhere below due to watch dependecy fullfilment
    // ------------------------------------------------
    // Mail Actions
    // ------------------------------------------------


    var toggleStarred = function toggleStarred(email) {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-email/updateEmail', {
        emailIds: [email.id],
        dataToUpdate: {
          isStarred: !email.isStarred
        }
      }).then(function () {
        // eslint-disable-next-line no-param-reassign
        email.isStarred = !email.isStarred;
      });
    };

    var moveSelectedEmailsToFolder = function moveSelectedEmailsToFolder(folder) {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-email/updateEmail', {
        emailIds: selectedEmails.value,
        dataToUpdate: {
          folder: folder
        }
      }).then(function () {
        fetchEmails();
      })["finally"](function () {
        selectedEmails.value = [];
      });
    };

    var updateSelectedEmailsLabel = function updateSelectedEmailsLabel(label) {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-email/updateEmailLabels', {
        emailIds: selectedEmails.value,
        label: label
      }).then(function () {
        fetchEmails();
      })["finally"](function () {
        selectedEmails.value = [];
      });
    };

    var markSelectedEmailsAsUnread = function markSelectedEmailsAsUnread() {
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-email/updateEmail', {
        emailIds: selectedEmails.value,
        dataToUpdate: {
          isRead: false
        }
      }).then(function () {
        fetchEmails();
      })["finally"](function () {
        selectedEmails.value = [];
      });
    }; // ------------------------------------------------
    // Email Details
    // ------------------------------------------------


    var showEmailDetails = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false);
    var emailViewData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])({});
    var opendedEmailMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      var openedEmailIndex = emails.value.findIndex(function (e) {
        return e.id === emailViewData.value.id;
      });
      return {
        hasNextEmail: Boolean(emails.value[openedEmailIndex + 1]),
        hasPreviousEmail: Boolean(emails.value[openedEmailIndex - 1])
      };
    });

    var updateEmailViewData = function updateEmailViewData(email) {
      // Mark email is read
      _store__WEBPACK_IMPORTED_MODULE_0__["default"].dispatch('app-email/updateEmail', {
        emailIds: [email.id],
        dataToUpdate: {
          isRead: true
        }
      }).then(function () {
        // If opened email is unread then decrease badge count for email meta based on email folder
        if (!email.isRead && (email.folder === 'inbox' || email.folder === 'spam')) {
          emailsMeta.value[email.folder] -= 1;
        } // eslint-disable-next-line no-param-reassign


        email.isRead = true;
      })["finally"](function () {
        emailViewData.value = email;
        showEmailDetails.value = true;
      });
    };

    var moveOpenEmailToFolder = function moveOpenEmailToFolder(folder) {
      selectedEmails.value = [emailViewData.value.id];
      moveSelectedEmailsToFolder(folder);
      selectedEmails.value = [];
      showEmailDetails.value = false;
    };

    var updateOpenEmailLabel = function updateOpenEmailLabel(label) {
      selectedEmails.value = [emailViewData.value.id];
      updateSelectedEmailsLabel(label); // Update label in opened email

      var labelIndex = emailViewData.value.labels.indexOf(label);
      if (labelIndex === -1) emailViewData.value.labels.push(label);else emailViewData.value.labels.splice(labelIndex, 1);
      selectedEmails.value = [];
    };

    var markOpenEmailAsUnread = function markOpenEmailAsUnread() {
      selectedEmails.value = [emailViewData.value.id];
      markSelectedEmailsAsUnread();
      selectedEmails.value = [];
      showEmailDetails.value = false;
    };

    var changeOpenedEmail = function changeOpenedEmail(dir) {
      var openedEmailIndex = emails.value.findIndex(function (e) {
        return e.id === emailViewData.value.id;
      });
      var newEmailIndex = dir === 'previous' ? openedEmailIndex - 1 : openedEmailIndex + 1;
      emailViewData.value = emails.value[newEmailIndex];
    }; // * If someone clicks on filter while viewing detail => Close the email detail view


    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(routeParams, function () {
      showEmailDetails.value = false;
    }); // * Watcher to reset selectedEmails
    // ? You can also use showEmailDetails (instead of `emailViewData`) but it will trigger execution twice in this case
    // eslint-disable-next-line no-use-before-define

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])([emailViewData, routeParams], function () {
      selectedEmails.value = [];
    }); // Compose

    var shallShowEmailComposeModal = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(false); // Left Sidebar Responsiveness

    var _useResponsiveAppLeft = Object(_core_comp_functions_ui_app__WEBPACK_IMPORTED_MODULE_6__["useResponsiveAppLeftSidebarVisibility"])(),
        mqShallShowLeftSidebar = _useResponsiveAppLeft.mqShallShowLeftSidebar;

    return {
      // UI
      perfectScrollbarSettings: perfectScrollbarSettings,
      // Emails & EmailsMeta
      emails: emails,
      emailsMeta: emailsMeta,
      // Mail Selection
      selectAllEmailCheckbox: selectAllEmailCheckbox,
      isSelectAllEmailCheckboxIndeterminate: isSelectAllEmailCheckboxIndeterminate,
      selectedEmails: selectedEmails,
      toggleSelectedMail: toggleSelectedMail,
      selectAllCheckboxUpdate: selectAllCheckboxUpdate,
      // Mail Actions
      toggleStarred: toggleStarred,
      moveSelectedEmailsToFolder: moveSelectedEmailsToFolder,
      updateSelectedEmailsLabel: updateSelectedEmailsLabel,
      markSelectedEmailsAsUnread: markSelectedEmailsAsUnread,
      // Email Details
      showEmailDetails: showEmailDetails,
      emailViewData: emailViewData,
      opendedEmailMeta: opendedEmailMeta,
      updateEmailViewData: updateEmailViewData,
      moveOpenEmailToFolder: moveOpenEmailToFolder,
      updateOpenEmailLabel: updateOpenEmailLabel,
      markOpenEmailAsUnread: markOpenEmailAsUnread,
      changeOpenedEmail: changeOpenedEmail,
      // Search Query
      searchQuery: searchQuery,
      updateRouteQuery: updateRouteQuery,
      // UI Filters
      filterTags: _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__["filterTags"],
      formatDateToMonthShort: _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__["formatDateToMonthShort"],
      // useEmail
      resolveLabelColor: resolveLabelColor,
      // Compose
      shallShowEmailComposeModal: shallShowEmailComposeModal,
      // Left Sidebar Responsiveness
      mqShallShowLeftSidebar: mqShallShowLeftSidebar
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-quill-editor */ "./frontend/node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-select */ "./frontend/node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // BSV
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BDropdownDivider: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownDivider"],
    // 3rd Party
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__["quillEditor"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  model: {
    prop: 'shallShowEmailComposeModal',
    event: 'update:shall-show-email-compose-modal'
  },
  props: {
    shallShowEmailComposeModal: {
      type: Boolean,
      required: true
    }
  },
  setup: function setup(_, _ref) {
    var emit = _ref.emit;
    var composeData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])({});
    var showCcField = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);
    var showBccField = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);
    var editorOption = {
      modules: {
        toolbar: '#quill-toolbar'
      },
      placeholder: 'Message'
    };
    /* eslint-disable global-require */

    var emailToOptions = [{
      avatar: __webpack_require__(/*! @/assets/images/avatars/1-small.png */ "./frontend/src/assets/images/avatars/1-small.png"),
      name: 'Jane Foster'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/3-small.png */ "./frontend/src/assets/images/avatars/3-small.png"),
      name: 'Donna Frank'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/5-small.png */ "./frontend/src/assets/images/avatars/5-small.png"),
      name: 'Gabrielle Robertson'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/7-small.png */ "./frontend/src/assets/images/avatars/7-small.png"),
      name: 'Lori Spears'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/9-small.png */ "./frontend/src/assets/images/avatars/9-small.png"),
      name: 'Sandy Vega'
    }, {
      avatar: __webpack_require__(/*! @/assets/images/avatars/11-small.png */ "./frontend/src/assets/images/avatars/11-small.png"),
      name: 'Cheryl May'
    }];
    /* eslint-enable global-require */

    var sendEmail = function sendEmail() {
      composeData.value = {};
      emit('update:shall-show-email-compose-modal', false); // ? Send your Email
    };

    var discardEmail = function discardEmail() {
      composeData.value = {};
      emit('update:shall-show-email-compose-modal', false);
    };

    return {
      composeData: composeData,
      editorOption: editorOption,
      emailToOptions: emailToOptions,
      showCcField: showCcField,
      showBccField: showBccField,
      // Email actions
      sendEmail: sendEmail,
      discardEmail: discardEmail
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/utils */ "./frontend/src/@core/utils/utils.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  components: {
    // BSV
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BListGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroup"],
    BListGroupItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BListGroupItem"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"],
    // 3rd Party
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    shallShowEmailComposeModal: {
      type: Boolean,
      required: true
    },
    emailsMeta: {
      type: Object,
      required: true
    }
  },
  setup: function setup() {
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60
    };
    var emailFilters = [{
      title: 'Inbox',
      icon: 'MailIcon',
      route: {
        name: 'apps-email'
      }
    }, {
      title: 'Sent',
      icon: 'SendIcon',
      route: {
        name: 'apps-email-folder',
        params: {
          folder: 'sent'
        }
      }
    }, {
      title: 'Draft',
      icon: 'Edit2Icon',
      route: {
        name: 'apps-email-folder',
        params: {
          folder: 'draft'
        }
      }
    }, {
      title: 'Starred',
      icon: 'StarIcon',
      route: {
        name: 'apps-email-folder',
        params: {
          folder: 'starred'
        }
      }
    }, {
      title: 'Spam',
      icon: 'InfoIcon',
      route: {
        name: 'apps-email-folder',
        params: {
          folder: 'spam'
        }
      }
    }, {
      title: 'Trash',
      icon: 'TrashIcon',
      route: {
        name: 'apps-email-folder',
        params: {
          folder: 'trash'
        }
      }
    }];
    var emailLabel = [{
      title: 'Personal',
      color: 'success',
      route: {
        name: 'apps-email-label',
        params: {
          label: 'personal'
        }
      }
    }, {
      title: 'Company',
      color: 'primary',
      route: {
        name: 'apps-email-label',
        params: {
          label: 'company'
        }
      }
    }, {
      title: 'Important',
      color: 'warning',
      route: {
        name: 'apps-email-label',
        params: {
          label: 'important'
        }
      }
    }, {
      title: 'Private',
      color: 'danger',
      route: {
        name: 'apps-email-label',
        params: {
          label: 'private'
        }
      }
    }];

    var resolveFilterBadgeColor = function resolveFilterBadgeColor(filter) {
      if (filter === 'Draft') return 'light-warning';
      if (filter === 'Spam') return 'light-danger';
      return 'light-primary';
    };

    return {
      // UI
      perfectScrollbarSettings: perfectScrollbarSettings,
      isDynamicRouteActive: _core_utils_utils__WEBPACK_IMPORTED_MODULE_2__["isDynamicRouteActive"],
      resolveFilterBadgeColor: resolveFilterBadgeColor,
      // Filter & Labels
      emailFilters: emailFilters,
      emailLabel: emailLabel
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/filter */ "./frontend/src/@core/utils/filter.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BCardFooter: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardFooter"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BImg"]
  },
  props: {
    message: {
      type: Object,
      required: true
    }
  },
  setup: function setup() {
    return {
      formatDate: _core_utils_filter__WEBPACK_IMPORTED_MODULE_1__["formatDate"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./frontend/node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _useEmail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEmail */ "./frontend/src/views/apps/email/useEmail.js");
/* harmony import */ var _EmailMessageCard_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmailMessageCard.vue */ "./frontend/src/views/apps/email/EmailMessageCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    // BSV
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    // 3rd Party
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    // SFC
    EmailMessageCard: _EmailMessageCard_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    emailViewData: {
      type: Object,
      required: true
    },
    opendedEmailMeta: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useEmail = Object(_useEmail__WEBPACK_IMPORTED_MODULE_3__["default"])(),
        resolveLabelColor = _useEmail.resolveLabelColor;

    var perfectScrollbarSettings = {
      maxScrollbarLength: 150
    };
    var showWholeThread = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(function () {
      return props.emailViewData.id;
    }, function () {
      showWholeThread.value = false;
    });
    return {
      // UI
      perfectScrollbarSettings: perfectScrollbarSettings,
      showWholeThread: showWholeThread,
      // useEmail
      resolveLabelColor: resolveLabelColor
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/Email.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/Email.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader!quill/dist/quill.core.css */ "./node_modules/css-loader/index.js!./frontend/node_modules/quill/dist/quill.core.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader!quill/dist/quill.snow.css */ "./node_modules/css-loader/index.js!./frontend/node_modules/quill/dist/quill.snow.css"), "");
exports.i(__webpack_require__(/*! -!../../../../../node_modules/css-loader!quill/dist/quill.bubble.css */ "./node_modules/css-loader/index.js!./frontend/node_modules/quill/dist/quill.bubble.css"), "");

// module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n[dir] .vs__fade-enter-active, [dir] .vs__fade-leave-active {\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  -webkit-transform: scale(1);\n  transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855), -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n          -webkit-transform: scale(1);\n                  transform: scale(1);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n          -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n                  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(180deg) scale(1);\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(-180deg) scale(1);\n          transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n          -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n                  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n}\n[dir] .vs__dropdown-option:hover {\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n}\n[dir] .vs__dropdown-option--disabled:hover {\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  -webkit-box-shadow: none;\n  width: 0;\n  max-width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::-webkit-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::-moz-placeholder {\n  color: #6e6b7b;\n}\n.vs__search:-ms-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::-ms-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  -ms-flex-item-align: center;\n      align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  -webkit-transform: translateZ(0);\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n          -webkit-transform: translateZ(0);\n                  transform: translateZ(0);\n  -webkit-transition: opacity 0.1s;\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-ltr 1.1s infinite linear;\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-rtl 1.1s infinite linear;\n          animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n  -webkit-transition: all 0.25s ease-in-out;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: -webkit-transform 0.2s ease;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n  -webkit-transition: -webkit-transform 0.2s ease;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  -webkit-transform: translateX(5px);\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  -webkit-transform: scale(0.8);\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n          -webkit-transform: scale(0.8);\n                  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n.vs--open .vs__dropdown-toggle {\n  -webkit-box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n          -webkit-box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n                  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  -webkit-transform: scale(1) !important;\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n          -webkit-transform: scale(1) !important;\n                  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::-webkit-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::-moz-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input:-ms-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::-ms-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n\n/* Set dropdown font-families */\n.ql-toolbar .ql-font span[data-label=\"Sailec Light\"]::before {\n  font-family: \"Sailec Light\";\n}\n.ql-toolbar .ql-font span[data-label=\"Sofia Pro\"]::before {\n  font-family: \"Sofia\";\n}\n.ql-toolbar .ql-font span[data-label=\"Slabo 27px\"]::before {\n  font-family: \"Slabo 27px\";\n}\n.ql-toolbar .ql-font span[data-label=\"Roboto Slab\"]::before {\n  font-family: \"Roboto Slab\";\n}\n.ql-toolbar .ql-font span[data-label=Inconsolata]::before {\n  font-family: \"Inconsolata\";\n}\n.ql-toolbar .ql-font span[data-label=\"Ubuntu Mono\"]::before {\n  font-family: \"Ubuntu Mono\";\n}\n\n/* Set content font-families */\n.ql-font-sofia {\n  font-family: \"Sofia\";\n}\n.ql-font-slabo {\n  font-family: \"Slabo 27px\";\n}\n.ql-font-roboto {\n  font-family: \"Roboto Slab\";\n}\n.ql-font-inconsolata {\n  font-family: \"Inconsolata\";\n}\n.ql-font-ubuntu {\n  font-family: \"Ubuntu Mono\";\n}\n[dir] .ql-toolbar {\n  border-color: #d8d6de !important;\n}\n.ql-toolbar .ql-formats:focus,\n.ql-toolbar .ql-formats *:focus {\n  outline: 0;\n}\n.ql-toolbar .ql-formats .ql-picker-label:hover, .ql-toolbar .ql-formats .ql-picker-label:focus,\n.ql-toolbar .ql-formats button:hover,\n.ql-toolbar .ql-formats button:focus {\n  color: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-label:hover .ql-stroke, .ql-toolbar .ql-formats .ql-picker-label:focus .ql-stroke,\n.ql-toolbar .ql-formats button:hover .ql-stroke,\n.ql-toolbar .ql-formats button:focus .ql-stroke {\n  stroke: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-label:hover .ql-fill, .ql-toolbar .ql-formats .ql-picker-label:focus .ql-fill,\n.ql-toolbar .ql-formats button:hover .ql-fill,\n.ql-toolbar .ql-formats button:focus .ql-fill {\n  fill: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-label.ql-active,\n.ql-toolbar .ql-formats button.ql-active {\n  color: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-item.ql-selected {\n  color: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-options .ql-picker-item:hover {\n  color: #7367f0 !important;\n}\n.ql-toolbar .ql-formats .ql-picker-options .ql-active {\n  color: #7367f0 !important;\n}\n.ql-bubble .ql-picker {\n  color: #fff !important;\n}\n.ql-bubble .ql-stroke {\n  stroke: #fff !important;\n}\n.ql-bubble .ql-fill {\n  fill: #fff !important;\n}\n.ql-container {\n  font-family: \"Montserrat\", Helvetica, Arial, serif;\n}\n[dir] .ql-container {\n  border-color: #d8d6de !important;\n}\n.ql-editor a {\n  color: #7367f0;\n}\n.ql-picker {\n  color: #5e5873 !important;\n}\n.ql-stroke {\n  stroke: #5e5873 !important;\n}\n.ql-active .ql-stroke {\n  stroke: #7367f0 !important;\n}\n.ql-active .ql-fill {\n  fill: #7367f0 !important;\n}\n.ql-fill {\n  fill: #5e5873 !important;\n}\n[dir=ltr] .ql-toolbar, [dir=ltr] .ql-container {\n  border-top-right-radius: 0.357rem;\n  border-top-left-radius: 0.357rem;\n}\n[dir=rtl] .ql-toolbar, [dir=rtl] .ql-container {\n  border-top-left-radius: 0.357rem;\n  border-top-right-radius: 0.357rem;\n}\n[dir=ltr] .ql-toolbar + .ql-container, [dir=ltr] .ql-container + .ql-toolbar {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n  border-top-right-radius: unset;\n  border-top-left-radius: unset;\n}\n[dir=rtl] .ql-toolbar + .ql-container, [dir=rtl] .ql-container + .ql-toolbar {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}\n[dir] .dark-layout .quill-toolbar, [dir] .dark-layout .ql-toolbar {\n  background-color: #283046;\n  border-color: #3b4253 !important;\n}\n.dark-layout .quill-toolbar .ql-picker,\n.dark-layout .ql-toolbar .ql-picker {\n  color: #fff !important;\n}\n.dark-layout .quill-toolbar .ql-stroke,\n.dark-layout .ql-toolbar .ql-stroke {\n  stroke: #fff !important;\n}\n.dark-layout .quill-toolbar .ql-fill,\n.dark-layout .ql-toolbar .ql-fill {\n  fill: #fff !important;\n}\n[dir] .dark-layout .quill-toolbar .ql-picker-options, [dir] .dark-layout .quill-toolbar .ql-picker-label, [dir] .dark-layout .ql-toolbar .ql-picker-options, [dir] .dark-layout .ql-toolbar .ql-picker-label {\n  background-color: #283046;\n}\n.dark-layout .quill-toolbar .ql-picker-options .ql-active,\n.dark-layout .quill-toolbar .ql-picker-label .ql-active,\n.dark-layout .ql-toolbar .ql-picker-options .ql-active,\n.dark-layout .ql-toolbar .ql-picker-label .ql-active {\n  color: #7367f0 !important;\n}\n.dark-layout .ql-active .ql-stroke {\n  stroke: #7367f0 !important;\n}\n.dark-layout .ql-active .ql-fill {\n  fill: #7367f0 !important;\n}\n[dir] .dark-layout .ql-bubble .ql-toolbar {\n  background: #3b4253;\n  border-radius: 2rem;\n}\n[dir] .dark-layout .ql-container {\n  border-color: #3b4253 !important;\n  background-color: #283046;\n}\n[dir] .dark-layout .ql-editor .ql-syntax {\n  background-color: #161d31;\n}\n.dark-layout .ql-editor.ql-blank:before {\n  color: #b4b7bd;\n}\n[dir=ltr] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) i, [dir=ltr] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  left: auto !important;\n  right: 0;\n}\n[dir=rtl] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) i, [dir=rtl] [data-textdirection=rtl] .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {\n  right: auto !important;\n  left: 0;\n}\n.quill-editor .ql-toolbar a,\n.quill-editor .ql-toolbar button:hover,\n.quill-editor .ql-toolbar .ql-picker:hover,\n.quill-editor .ql-editor a,\n.quill-editor .ql-editor button:hover,\n.quill-editor .ql-editor .ql-picker:hover {\n  color: #7367f0;\n}\n.quill-editor .ql-toolbar a .ql-fill,\n.quill-editor .ql-toolbar button:hover .ql-fill,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-fill,\n.quill-editor .ql-editor a .ql-fill,\n.quill-editor .ql-editor button:hover .ql-fill,\n.quill-editor .ql-editor .ql-picker:hover .ql-fill {\n  fill: #7367f0;\n}\n.quill-editor .ql-toolbar a .ql-stroke,\n.quill-editor .ql-toolbar button:hover .ql-stroke,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-stroke,\n.quill-editor .ql-editor a .ql-stroke,\n.quill-editor .ql-editor button:hover .ql-stroke,\n.quill-editor .ql-editor .ql-picker:hover .ql-stroke {\n  stroke: #7367f0;\n}\n.quill-editor .ql-toolbar a .ql-picker-label:hover,\n.quill-editor .ql-toolbar button:hover .ql-picker-label:hover,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-picker-label:hover,\n.quill-editor .ql-editor a .ql-picker-label:hover,\n.quill-editor .ql-editor button:hover .ql-picker-label:hover,\n.quill-editor .ql-editor .ql-picker:hover .ql-picker-label:hover {\n  color: #7367f0;\n}\n.quill-editor .ql-toolbar a .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-toolbar button:hover .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-toolbar .ql-picker:hover .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-editor a .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-editor button:hover .ql-picker-label:hover .ql-stroke,\n.quill-editor .ql-editor .ql-picker:hover .ql-picker-label:hover .ql-stroke {\n  stroke: #7367f0;\n}\n[dir=ltr] .quill-editor .ql-toolbar, [dir=ltr] .quill-editor .ql-container {\n  border-top-right-radius: 0.357rem;\n  border-top-left-radius: 0.357rem;\n}\n[dir=rtl] .quill-editor .ql-toolbar, [dir=rtl] .quill-editor .ql-container {\n  border-top-left-radius: 0.357rem;\n  border-top-right-radius: 0.357rem;\n}\n[dir=ltr] .quill-editor .ql-toolbar + .ql-container, [dir=ltr] .ql-container + .quill-editor .ql-toolbar {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n  border-top-right-radius: unset;\n  border-top-left-radius: unset;\n}\n[dir=rtl] .quill-editor .ql-toolbar + .ql-container, [dir=rtl] .ql-container + .quill-editor .ql-toolbar {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n  border-top-left-radius: unset;\n  border-top-right-radius: unset;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "form[data-v-1a7b160b]  .v-select .vs__dropdown-toggle {\n  -webkit-box-shadow: none;\n}[dir] form[data-v-1a7b160b]  .v-select .vs__dropdown-toggle {\n  border: 0;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\nform[data-v-1a7b160b]  .v-select .vs__open-indicator {\n  display: none;\n}\n[dir] form[data-v-1a7b160b]  .quill-editor .ql-container.ql-snow {\n  border-bottom: 0 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/Email.vue?vue&type=style&index=1&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/Email.vue?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Email.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/Email.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailCompose.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=style&index=1&id=1a7b160b&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/Email.vue?vue&type=template&id=06fb3eb7&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/Email.vue?vue&type=template&id=06fb3eb7&scoped=true& ***!
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
  return _c(
    "div",
    { staticStyle: { height: "inherit" } },
    [
      _c("div", {
        staticClass: "body-content-overlay",
        class: { show: _vm.mqShallShowLeftSidebar },
        on: {
          click: function($event) {
            _vm.mqShallShowLeftSidebar = false
          }
        }
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "email-app-list" },
        [
          _c(
            "div",
            { staticClass: "app-fixed-search d-flex align-items-center" },
            [
              _c(
                "div",
                { staticClass: "sidebar-toggle d-block d-lg-none ml-1" },
                [
                  _c("feather-icon", {
                    staticClass: "cursor-pointer",
                    attrs: { icon: "MenuIcon", size: "21" },
                    on: {
                      click: function($event) {
                        _vm.mqShallShowLeftSidebar = true
                      }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "d-flex align-content-center justify-content-between w-100"
                },
                [
                  _c(
                    "b-input-group",
                    { staticClass: "input-group-merge" },
                    [
                      _c(
                        "b-input-group-prepend",
                        { attrs: { "is-text": "" } },
                        [
                          _c("feather-icon", {
                            staticClass: "text-muted",
                            attrs: { icon: "SearchIcon" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-form-input", {
                        attrs: {
                          value: _vm.searchQuery,
                          placeholder: "Search email"
                        },
                        on: { input: _vm.updateRouteQuery }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "app-action" }, [
            _c(
              "div",
              { staticClass: "action-left" },
              [
                _c(
                  "b-form-checkbox",
                  {
                    attrs: {
                      checked: _vm.selectAllEmailCheckbox,
                      indeterminate: _vm.isSelectAllEmailCheckboxIndeterminate
                    },
                    on: { change: _vm.selectAllCheckboxUpdate }
                  },
                  [_vm._v("\n          Select All\n        ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.selectedEmails.length,
                    expression: "selectedEmails.length"
                  }
                ],
                staticClass: "align-items-center",
                class: { "d-flex": _vm.selectedEmails.length }
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
                    scopedSlots: _vm._u([
                      {
                        key: "button-content",
                        fn: function() {
                          return [
                            _c("feather-icon", {
                              staticClass: "align-middle text-body",
                              attrs: { icon: "FolderIcon", size: "17" }
                            })
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
                        on: {
                          click: function($event) {
                            return _vm.moveSelectedEmailsToFolder("draft")
                          }
                        }
                      },
                      [
                        _c("feather-icon", { attrs: { icon: "Edit2Icon" } }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle ml-50" }, [
                          _vm._v("Draft")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.moveSelectedEmailsToFolder("spam")
                          }
                        }
                      },
                      [
                        _c("feather-icon", { attrs: { icon: "InfoIcon" } }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle ml-50" }, [
                          _vm._v("Spam")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.$route.params.folder !== "trash",
                            expression: "$route.params.folder !== 'trash'"
                          }
                        ],
                        on: {
                          click: function($event) {
                            return _vm.moveSelectedEmailsToFolder("trash")
                          }
                        }
                      },
                      [
                        _c("feather-icon", { attrs: { icon: "TrashIcon" } }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle ml-50" }, [
                          _vm._v("Trash")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-dropdown",
                  {
                    staticClass: "ml-1",
                    attrs: {
                      variant: "link",
                      "no-caret": "",
                      "toggle-class": "p-0",
                      right: ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "button-content",
                        fn: function() {
                          return [
                            _c("feather-icon", {
                              staticClass: "align-middle text-body",
                              attrs: { icon: "TagIcon", size: "17" }
                            })
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
                        on: {
                          click: function($event) {
                            return _vm.updateSelectedEmailsLabel("personal")
                          }
                        }
                      },
                      [
                        _c("span", {
                          staticClass: "mr-50 bullet bullet-success bullet-sm"
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Personal")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.updateSelectedEmailsLabel("company")
                          }
                        }
                      },
                      [
                        _c("span", {
                          staticClass: "mr-50 bullet bullet-primary bullet-sm"
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Company")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.updateSelectedEmailsLabel("important")
                          }
                        }
                      },
                      [
                        _c("span", {
                          staticClass: "mr-50 bullet bullet-warning bullet-sm"
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Important")])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      {
                        on: {
                          click: function($event) {
                            return _vm.updateSelectedEmailsLabel("private")
                          }
                        }
                      },
                      [
                        _c("span", {
                          staticClass: "mr-50 bullet bullet-danger bullet-sm"
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Private")])
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("feather-icon", {
                  staticClass: "cursor-pointer ml-1",
                  attrs: { icon: "MailIcon", size: "17" },
                  on: { click: _vm.markSelectedEmailsAsUnread }
                }),
                _vm._v(" "),
                _c("feather-icon", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.$route.params.folder !== "trash",
                      expression: "$route.params.folder !== 'trash'"
                    }
                  ],
                  staticClass: "cursor-pointer ml-1",
                  attrs: { icon: "TrashIcon", size: "17" },
                  on: {
                    click: function($event) {
                      return _vm.moveSelectedEmailsToFolder("trash")
                    }
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "vue-perfect-scrollbar",
            {
              staticClass: "email-user-list scroll-area",
              attrs: { settings: _vm.perfectScrollbarSettings }
            },
            [
              _c(
                "ul",
                { staticClass: "email-media-list" },
                _vm._l(_vm.emails, function(email) {
                  return _c(
                    "b-media",
                    {
                      key: email.id,
                      class: { "mail-read": email.isRead },
                      attrs: { tag: "li", "no-body": "" },
                      on: {
                        click: function($event) {
                          return _vm.updateEmailViewData(email)
                        }
                      }
                    },
                    [
                      _c(
                        "b-media-aside",
                        { staticClass: "media-left mr-50" },
                        [
                          _c("b-avatar", {
                            staticClass: "avatar",
                            attrs: {
                              size: "40",
                              variant: "primary",
                              src: email.from.avatar
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "user-action" },
                            [
                              _c("b-form-checkbox", {
                                attrs: {
                                  checked: _vm.selectedEmails.includes(email.id)
                                },
                                on: {
                                  change: function($event) {
                                    return _vm.toggleSelectedMail(email.id)
                                  }
                                },
                                nativeOn: {
                                  click: function($event) {
                                    $event.stopPropagation()
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "email-favorite" },
                                [
                                  _c("feather-icon", {
                                    class: {
                                      "text-warning fill-current":
                                        email.isStarred
                                    },
                                    attrs: { icon: "StarIcon", size: "17" },
                                    on: {
                                      click: function($event) {
                                        $event.stopPropagation()
                                        return _vm.toggleStarred(email)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("b-media-body", [
                        _c("div", { staticClass: "mail-details" }, [
                          _c("div", { staticClass: "mail-items" }, [
                            _c("h5", { staticClass: "mb-25" }, [
                              _vm._v(
                                "\n                  " +
                                  _vm._s(email.from.name) +
                                  "\n                "
                              )
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "text-truncate" }, [
                              _vm._v(_vm._s(email.subject))
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mail-meta-item" },
                            [
                              email.attachments.length
                                ? _c("feather-icon", {
                                    attrs: { icon: "PaperclipIcon" }
                                  })
                                : _vm._e(),
                              _vm._v(" "),
                              _vm._l(email.labels, function(label) {
                                return _c("span", {
                                  key: label,
                                  staticClass: "mx-50 bullet bullet-sm",
                                  class:
                                    "bullet-" + _vm.resolveLabelColor(label)
                                })
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "mail-date" }, [
                                _vm._v(
                                  _vm._s(
                                    _vm.formatDateToMonthShort(email.time, {
                                      hour: "numeric",
                                      minute: "numeric"
                                    })
                                  )
                                )
                              ])
                            ],
                            2
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mail-message" }, [
                          _c("p", { staticClass: "text-truncate mb-0" }, [
                            _vm._v(
                              "\n                " +
                                _vm._s(_vm.filterTags(email.message)) +
                                "\n              "
                            )
                          ])
                        ])
                      ])
                    ],
                    1
                  )
                }),
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "no-results",
                  class: { show: !_vm.emails.length }
                },
                [_c("h5", [_vm._v("No Items Found")])]
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("email-view", {
        class: { show: _vm.showEmailDetails },
        attrs: {
          "email-view-data": _vm.emailViewData,
          "opended-email-meta": _vm.opendedEmailMeta
        },
        on: {
          "close-email-view": function($event) {
            _vm.showEmailDetails = false
          },
          "move-email-to-folder": _vm.moveOpenEmailToFolder,
          "toggle-email-starred": function($event) {
            return _vm.toggleStarred(_vm.emailViewData)
          },
          "update-email-label": _vm.updateOpenEmailLabel,
          "mark-email-unread": _vm.markOpenEmailAsUnread,
          "change-opened-email": _vm.changeOpenedEmail
        }
      }),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "content-renderer-sidebar-left" } },
        [
          _c("email-left-sidebar", {
            class: { show: _vm.mqShallShowLeftSidebar },
            attrs: {
              "shall-show-email-compose-modal": _vm.shallShowEmailComposeModal,
              "emails-meta": _vm.emailsMeta
            },
            on: {
              "update:shallShowEmailComposeModal": function($event) {
                _vm.shallShowEmailComposeModal = $event
              },
              "update:shall-show-email-compose-modal": function($event) {
                _vm.shallShowEmailComposeModal = $event
              },
              "close-left-sidebar": function($event) {
                _vm.mqShallShowLeftSidebar = false
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("email-compose", {
        model: {
          value: _vm.shallShowEmailComposeModal,
          callback: function($$v) {
            _vm.shallShowEmailComposeModal = $$v
          },
          expression: "shallShowEmailComposeModal"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=template&id=1a7b160b&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailCompose.vue?vue&type=template&id=1a7b160b&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "b-modal",
    {
      attrs: {
        id: "compose-mail",
        visible: _vm.shallShowEmailComposeModal,
        title: "Compose Email",
        "modal-class": "modal-sticky",
        "footer-class": "d-flex justify-content-between",
        "body-class": "p-0",
        size: "lg",
        "no-fade": "",
        "hide-backdrop": "",
        static: ""
      },
      on: {
        change: function(val) {
          return _vm.$emit("update:shall-show-email-compose-modal", val)
        }
      },
      scopedSlots: _vm._u([
        {
          key: "modal-header",
          fn: function() {
            return [
              _c("h5", { staticClass: "modal-title" }, [
                _vm._v("\n      Compose Mail\n    ")
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "modal-actions" },
                [
                  _c("feather-icon", {
                    staticClass: "cursor-pointer",
                    attrs: { icon: "MinusIcon" },
                    on: {
                      click: function($event) {
                        return _vm.$emit(
                          "update:shall-show-email-compose-modal",
                          false
                        )
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "ml-1 cursor-pointer",
                    attrs: { icon: "Maximize2Icon" }
                  }),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "ml-1 cursor-pointer",
                    attrs: { icon: "XIcon" },
                    on: { click: _vm.discardEmail }
                  })
                ],
                1
              )
            ]
          },
          proxy: true
        },
        {
          key: "modal-footer",
          fn: function() {
            return [
              _c(
                "div",
                [
                  _c(
                    "b-dropdown",
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
                        split: "",
                        text: "Send",
                        variant: "primary",
                        right: ""
                      },
                      on: { click: _vm.sendEmail }
                    },
                    [
                      _c("b-dropdown-item", [
                        _vm._v("\n          Schedule Send\n        ")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "ml-2 cursor-pointer",
                    attrs: { icon: "PaperclipIcon", size: "17" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
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
                      scopedSlots: _vm._u([
                        {
                          key: "button-content",
                          fn: function() {
                            return [
                              _c("feather-icon", {
                                staticClass: "text-body",
                                attrs: { icon: "MoreVerticalIcon", size: "17" }
                              })
                            ]
                          },
                          proxy: true
                        }
                      ])
                    },
                    [
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v("\n          Add Label\n        ")
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v("\n          Plain Text Mode\n        ")
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-divider"),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v("\n          Print\n        ")
                      ]),
                      _vm._v(" "),
                      _c("b-dropdown-item", [
                        _vm._v("\n          Check Spelling\n        ")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("feather-icon", {
                    staticClass: "ml-75 cursor-pointer",
                    attrs: { icon: "TrashIcon", size: "17" },
                    on: { click: _vm.discardEmail }
                  })
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
      _vm._v(" "),
      _c("b-form", [
        _c(
          "div",
          { staticClass: "compose-mail-form-field" },
          [
            _c(
              "label",
              { staticClass: "form-label", attrs: { for: "email-to" } },
              [_vm._v("To: ")]
            ),
            _vm._v(" "),
            _c("v-select", {
              staticClass: "flex-grow-1 email-to-selector",
              attrs: {
                dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                multiple: "",
                label: "name",
                "close-on-select": false,
                options: _vm.emailToOptions,
                "input-id": "email-to"
              },
              scopedSlots: _vm._u([
                {
                  key: "option",
                  fn: function(ref) {
                    var avatar = ref.avatar
                    var name = ref.name
                    return [
                      _c("b-avatar", { attrs: { size: "sm", src: avatar } }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-50" }, [
                        _vm._v(" " + _vm._s(name))
                      ])
                    ]
                  }
                },
                {
                  key: "selected-option",
                  fn: function(ref) {
                    var avatar = ref.avatar
                    var name = ref.name
                    return [
                      _c("b-avatar", {
                        staticClass: "border border-white",
                        attrs: { size: "sm", src: avatar }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-50" }, [
                        _vm._v(" " + _vm._s(name))
                      ])
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.composeData.to,
                callback: function($$v) {
                  _vm.$set(_vm.composeData, "to", $$v)
                },
                expression: "composeData.to"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "cursor-pointer",
                on: {
                  click: function($event) {
                    _vm.showCcField = !_vm.showCcField
                  }
                }
              },
              [_vm._v("Cc")]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                staticClass: "ml-1 cursor-pointer",
                on: {
                  click: function($event) {
                    _vm.showBccField = !_vm.showBccField
                  }
                }
              },
              [_vm._v("Bcc")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showCcField,
                expression: "showCcField"
              }
            ],
            staticClass: "compose-mail-form-field"
          },
          [
            _c("label", { attrs: { for: "email-cc" } }, [_vm._v("CC: ")]),
            _vm._v(" "),
            _c("v-select", {
              staticClass: "flex-grow-1 email-cc-selector",
              attrs: {
                dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                multiple: "",
                label: "name",
                "close-on-select": false,
                options: _vm.emailToOptions,
                "input-id": "email-cc"
              },
              scopedSlots: _vm._u([
                {
                  key: "option",
                  fn: function(ref) {
                    var avatar = ref.avatar
                    var name = ref.name
                    return [
                      _c("b-avatar", { attrs: { size: "sm", src: avatar } }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-50" }, [
                        _vm._v(" " + _vm._s(name))
                      ])
                    ]
                  }
                },
                {
                  key: "selected-option",
                  fn: function(ref) {
                    var avatar = ref.avatar
                    var name = ref.name
                    return [
                      _c("b-avatar", {
                        staticClass: "border border-white",
                        attrs: { size: "sm", src: avatar }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-50" }, [
                        _vm._v(" " + _vm._s(name))
                      ])
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.composeData.cc,
                callback: function($$v) {
                  _vm.$set(_vm.composeData, "cc", $$v)
                },
                expression: "composeData.cc"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showBccField,
                expression: "showBccField"
              }
            ],
            staticClass: "compose-mail-form-field"
          },
          [
            _c("label", { attrs: { for: "email-bcc" } }, [_vm._v("Bcc ")]),
            _vm._v(" "),
            _c("v-select", {
              staticClass: "flex-grow-1 email-bcc-selector",
              attrs: {
                dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                multiple: "",
                label: "name",
                "close-on-select": false,
                options: _vm.emailToOptions,
                "input-id": "email-bcc"
              },
              scopedSlots: _vm._u([
                {
                  key: "option",
                  fn: function(ref) {
                    var avatar = ref.avatar
                    var name = ref.name
                    return [
                      _c("b-avatar", { attrs: { size: "sm", src: avatar } }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-50" }, [
                        _vm._v(" " + _vm._s(name))
                      ])
                    ]
                  }
                },
                {
                  key: "selected-option",
                  fn: function(ref) {
                    var avatar = ref.avatar
                    var name = ref.name
                    return [
                      _c("b-avatar", {
                        staticClass: "border border-white",
                        attrs: { size: "sm", src: avatar }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "ml-50" }, [
                        _vm._v(" " + _vm._s(name))
                      ])
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.composeData.bcc,
                callback: function($$v) {
                  _vm.$set(_vm.composeData, "bcc", $$v)
                },
                expression: "composeData.bcc"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "compose-mail-form-field" },
          [
            _c("label", { attrs: { for: "email-subject" } }, [
              _vm._v("Subject: ")
            ]),
            _vm._v(" "),
            _c("b-form-input", {
              attrs: { id: "email-subject" },
              model: {
                value: _vm.composeData.subject,
                callback: function($$v) {
                  _vm.$set(_vm.composeData, "subject", $$v)
                },
                expression: "composeData.subject"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "message-editor" },
          [
            _c("quill-editor", {
              attrs: { id: "quil-content", options: _vm.editorOption },
              model: {
                value: _vm.composeData.message,
                callback: function($$v) {
                  _vm.$set(_vm.composeData, "message", $$v)
                },
                expression: "composeData.message"
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-flex border-bottom-0",
                attrs: { id: "quill-toolbar" }
              },
              [
                _c("button", { staticClass: "ql-bold" }),
                _vm._v(" "),
                _c("button", { staticClass: "ql-italic" }),
                _vm._v(" "),
                _c("button", { staticClass: "ql-underline" }),
                _vm._v(" "),
                _c("button", { staticClass: "ql-align" }),
                _vm._v(" "),
                _c("button", { staticClass: "ql-link" })
              ]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=template&id=30c3efce&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailLeftSidebar.vue?vue&type=template&id=30c3efce& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sidebar-left" }, [
    _c("div", { staticClass: "sidebar" }, [
      _c("div", { staticClass: "sidebar-content email-app-sidebar" }, [
        _c(
          "div",
          { staticClass: "email-app-menu" },
          [
            _c(
              "div",
              { staticClass: "form-group-compose text-center compose-btn" },
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
                    attrs: { variant: "primary", block: "" },
                    on: {
                      click: function($event) {
                        _vm.$emit("update:shall-show-email-compose-modal", true)
                        _vm.$emit("close-left-sidebar")
                      }
                    }
                  },
                  [_vm._v("\n            Compose\n          ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vue-perfect-scrollbar",
              {
                staticClass: "sidebar-menu-list scroll-area",
                attrs: { settings: _vm.perfectScrollbarSettings }
              },
              [
                _c(
                  "b-list-group",
                  { staticClass: "list-group-messages" },
                  _vm._l(_vm.emailFilters, function(filter) {
                    return _c(
                      "b-list-group-item",
                      {
                        key: filter.title + _vm.$route.path,
                        attrs: {
                          to: filter.route,
                          active: _vm.isDynamicRouteActive(filter.route)
                        },
                        on: {
                          click: function($event) {
                            return _vm.$emit("close-left-sidebar")
                          }
                        }
                      },
                      [
                        _c("feather-icon", {
                          staticClass: "mr-75",
                          attrs: { icon: filter.icon, size: "18" }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "align-text-bottom line-height-1" },
                          [_vm._v(_vm._s(filter.title))]
                        ),
                        _vm._v(" "),
                        _vm.emailsMeta[filter.title.toLowerCase()]
                          ? _c(
                              "b-badge",
                              {
                                staticClass: "float-right",
                                attrs: {
                                  pill: "",
                                  variant: _vm.resolveFilterBadgeColor(
                                    filter.title
                                  )
                                }
                              },
                              [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(
                                      _vm.emailsMeta[filter.title.toLowerCase()]
                                    ) +
                                    "\n              "
                                )
                              ]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  }),
                  1
                ),
                _vm._v(" "),
                _c("h6", { staticClass: "section-label mt-3 mb-1 px-2" }, [
                  _vm._v("\n            Labels\n          ")
                ]),
                _vm._v(" "),
                _c(
                  "b-list-group",
                  { staticClass: "list-group-labels" },
                  _vm._l(_vm.emailLabel, function(label) {
                    return _c(
                      "b-list-group-item",
                      {
                        key: label.title + _vm.$route.path,
                        attrs: {
                          to: label.route,
                          active: _vm.isDynamicRouteActive(label.route)
                        },
                        on: {
                          click: function($event) {
                            return _vm.$emit("close-left-sidebar")
                          }
                        }
                      },
                      [
                        _c("span", {
                          staticClass: "bullet bullet-sm mr-1",
                          class: "bullet-" + label.color
                        }),
                        _vm._v(" "),
                        _c("span", [_vm._v(_vm._s(label.title))])
                      ]
                    )
                  }),
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=template&id=e99175a0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailMessageCard.vue?vue&type=template&id=e99175a0& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _vm.message.from
        ? _c("b-card-header", { staticClass: "email-detail-head" }, [
            _c(
              "div",
              {
                staticClass:
                  "user-details d-flex justify-content-between align-items-center flex-wrap"
              },
              [
                _c("b-avatar", {
                  staticClass: "mr-75",
                  attrs: { size: "48", src: _vm.message.from.avatar }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mail-items" },
                  [
                    _c("h5", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.message.from.name) +
                          "\n        "
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-dropdown",
                      {
                        staticClass: "email-info-dropup",
                        attrs: {
                          variant: "link",
                          "no-caret": "",
                          "toggle-class": "p-0"
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "button-content",
                              fn: function() {
                                return [
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "font-small-3 text-muted mr-25"
                                    },
                                    [_vm._v(_vm._s(_vm.message.from.email))]
                                  ),
                                  _vm._v(" "),
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "ChevronDownIcon",
                                      size: "10"
                                    }
                                  })
                                ]
                              },
                              proxy: true
                            }
                          ],
                          null,
                          false,
                          654450116
                        )
                      },
                      [
                        _vm._v(" "),
                        _c(
                          "table",
                          {
                            staticClass:
                              "table table-sm table-borderless font-small-3"
                          },
                          [
                            _c("tbody", [
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "text-right text-muted align-top"
                                  },
                                  [
                                    _vm._v(
                                      "\n                  From:\n                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(_vm._s(_vm.message.from.email))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "text-right text-muted align-top"
                                  },
                                  [
                                    _vm._v(
                                      "\n                  To:\n                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.message.to
                                        .map(function(receiver) {
                                          return receiver.email
                                        })
                                        .join(", ")
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("tr", [
                                _c(
                                  "td",
                                  {
                                    staticClass:
                                      "text-right text-muted align-top"
                                  },
                                  [
                                    _vm._v(
                                      "\n                  Date:\n                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("td", [_vm._v("4:25 AM 13 Jan 2018")])
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mail-meta-item d-flex align-items-center" },
              [
                _c("small", { staticClass: "mail-date-time text-muted" }, [
                  _vm._v(_vm._s(_vm.formatDate(_vm.message.time)))
                ]),
                _vm._v(" "),
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
                              _c("feather-icon", {
                                staticClass: "ml-50 text-body",
                                attrs: { icon: "MoreVerticalIcon", size: "17" }
                              })
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      false,
                      2528854530
                    )
                  },
                  [
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      [
                        _c("feather-icon", {
                          attrs: { icon: "CornerUpLeftIcon" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle ml-50" }, [
                          _vm._v("Reply")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      [
                        _c("feather-icon", {
                          attrs: { icon: "CornerUpRightIcon" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle ml-50" }, [
                          _vm._v("Forward")
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "b-dropdown-item",
                      [
                        _c("feather-icon", { attrs: { icon: "TrashIcon" } }),
                        _vm._v(" "),
                        _c("span", { staticClass: "align-middle ml-50" }, [
                          _vm._v("Delete")
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
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("b-card-body", { staticClass: "mail-message-wrapper pt-2" }, [
        _c("div", {
          staticClass: "mail-message",
          domProps: { innerHTML: _vm._s(_vm.message.message) }
        })
      ]),
      _vm._v(" "),
      _vm.message.attachments && _vm.message.attachments.length
        ? _c("b-card-footer", [
            _c("div", { staticClass: "mail-attachments" }, [
              _c(
                "div",
                { staticClass: "d-flex align-items-center mb-1" },
                [
                  _c("feather-icon", {
                    attrs: { icon: "PaperclipIcon", size: "16" }
                  }),
                  _vm._v(" "),
                  _c(
                    "h5",
                    { staticClass: "font-weight-bolder text-body mb-0 ml-50" },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(_vm.message.attachments.length) +
                          " Attachment" +
                          _vm._s(
                            _vm.message.attachments.length > 1 ? "s" : ""
                          ) +
                          "\n        "
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex flex-column" },
                _vm._l(_vm.message.attachments, function(attachment, index) {
                  return _c(
                    "b-link",
                    {
                      key: index,
                      class: { "mt-75": index },
                      attrs: { href: attachment.url, target: "_blank" }
                    },
                    [
                      _c("b-img", {
                        staticClass: "mr-50",
                        attrs: { src: attachment.thumbnail, width: "16px" }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        {
                          staticClass:
                            "text-muted font-weight-bolder align-text-top"
                        },
                        [_vm._v(_vm._s(attachment.fileName))]
                      ),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "text-muted font-small-2 ml-25" },
                        [_vm._v("(" + _vm._s(attachment.size) + ")")]
                      )
                    ],
                    1
                  )
                }),
                1
              )
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/apps/email/EmailView.vue?vue&type=template&id=12f84908&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/apps/email/EmailView.vue?vue&type=template&id=12f84908& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "email-app-details" },
    [
      _c("div", { staticClass: "email-detail-header" }, [
        _c(
          "div",
          { staticClass: "email-header-left d-flex align-items-center" },
          [
            _c(
              "span",
              { staticClass: "go-back mr-1" },
              [
                _c("feather-icon", {
                  staticClass: "align-bottom",
                  attrs: {
                    icon: _vm.$store.state.appConfig.isRTL
                      ? "ChevronRightIcon"
                      : "ChevronLeftIcon",
                    size: "20"
                  },
                  on: {
                    click: function($event) {
                      return _vm.$emit("close-email-view")
                    }
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("h4", { staticClass: "email-subject mb-0" }, [
              _vm._v(
                "\n        " + _vm._s(_vm.emailViewData.subject) + "\n      "
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "email-header-right ml-2 pl-1" },
          [
            _c("feather-icon", {
              staticClass: "cursor-pointer",
              class: {
                "text-warning fill-current": _vm.emailViewData.isStarred
              },
              attrs: { icon: "StarIcon", size: "17" },
              on: {
                click: function($event) {
                  return _vm.$emit("toggle-email-starred")
                }
              }
            }),
            _vm._v(" "),
            _c(
              "b-dropdown",
              {
                staticClass: "ml-75",
                attrs: {
                  variant: "link",
                  "no-caret": "",
                  "toggle-class": "p-0",
                  right: ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "button-content",
                    fn: function() {
                      return [
                        _c("feather-icon", {
                          attrs: { icon: "FolderIcon", size: "17" }
                        })
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
                    on: {
                      click: function($event) {
                        return _vm.$emit("move-email-to-folder", "draft")
                      }
                    }
                  },
                  [
                    _c("feather-icon", { attrs: { icon: "Edit2Icon" } }),
                    _vm._v(" "),
                    _c("span", { staticClass: "align-middle ml-50" }, [
                      _vm._v("Draft")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-dropdown-item",
                  {
                    on: {
                      click: function($event) {
                        return _vm.$emit("move-email-to-folder", "spam")
                      }
                    }
                  },
                  [
                    _c("feather-icon", { attrs: { icon: "InfoIcon" } }),
                    _vm._v(" "),
                    _c("span", { staticClass: "align-middle ml-50" }, [
                      _vm._v("Spam")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "b-dropdown-item",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.$route.params.folder !== "trash",
                        expression: "$route.params.folder !== 'trash'"
                      }
                    ],
                    on: {
                      click: function($event) {
                        return _vm.$emit("move-email-to-folder", "trash")
                      }
                    }
                  },
                  [
                    _c("feather-icon", { attrs: { icon: "TrashIcon" } }),
                    _vm._v(" "),
                    _c("span", { staticClass: "align-middle ml-50" }, [
                      _vm._v("Trash")
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-dropdown",
              {
                staticClass: "ml-75",
                attrs: {
                  variant: "link",
                  "no-caret": "",
                  "toggle-class": "p-0",
                  right: ""
                },
                scopedSlots: _vm._u([
                  {
                    key: "button-content",
                    fn: function() {
                      return [
                        _c("feather-icon", {
                          staticClass: "align-middle text-body",
                          attrs: { icon: "TagIcon", size: "17" }
                        })
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
                    on: {
                      click: function($event) {
                        return _vm.$emit("update-email-label", "personal")
                      }
                    }
                  },
                  [
                    _c("span", {
                      staticClass: "mr-50 bullet bullet-success bullet-sm"
                    }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Personal")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-dropdown-item",
                  {
                    on: {
                      click: function($event) {
                        return _vm.$emit("update-email-label", "company")
                      }
                    }
                  },
                  [
                    _c("span", {
                      staticClass: "mr-50 bullet bullet-primary bullet-sm"
                    }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Company")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-dropdown-item",
                  {
                    on: {
                      click: function($event) {
                        return _vm.$emit("update-email-label", "important")
                      }
                    }
                  },
                  [
                    _c("span", {
                      staticClass: "mr-50 bullet bullet-warning bullet-sm"
                    }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Important")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-dropdown-item",
                  {
                    on: {
                      click: function($event) {
                        return _vm.$emit("update-email-label", "private")
                      }
                    }
                  },
                  [
                    _c("span", {
                      staticClass: "mr-50 bullet bullet-danger bullet-sm"
                    }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Private")])
                  ]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("feather-icon", {
              staticClass: "ml-75 cursor-pointer",
              attrs: { icon: "MailIcon", size: "17" },
              on: {
                click: function($event) {
                  return _vm.$emit("mark-email-unread")
                }
              }
            }),
            _vm._v(" "),
            _c("feather-icon", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.$route.params.folder !== "trash",
                  expression: "$route.params.folder !== 'trash'"
                }
              ],
              staticClass: "ml-75",
              attrs: { icon: "TrashIcon", size: "17" },
              on: {
                click: function($event) {
                  return _vm.$emit("move-email-to-folder", "trash")
                }
              }
            }),
            _vm._v(" "),
            _c("feather-icon", {
              staticClass: "ml-75 cursor-pointer",
              class: {
                "text-muted pointer-events-none": !_vm.opendedEmailMeta
                  .hasPreviousEmail
              },
              attrs: {
                icon: _vm.$store.state.appConfig.isRTL
                  ? "ChevronRightIcon"
                  : "ChevronLeftIcon",
                size: "17"
              },
              on: {
                click: function($event) {
                  return _vm.$emit("change-opened-email", "previous")
                }
              }
            }),
            _vm._v(" "),
            _c("feather-icon", {
              staticClass: "ml-75 cursor-pointer",
              class: {
                "text-muted pointer-events-none": !_vm.opendedEmailMeta
                  .hasNextEmail
              },
              attrs: {
                icon: _vm.$store.state.appConfig.isRTL
                  ? "ChevronLeftIcon"
                  : "ChevronRightIcon",
                size: "17"
              },
              on: {
                click: function($event) {
                  return _vm.$emit("change-opened-email", "next")
                }
              }
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "email-scroll-area scroll-area",
          attrs: { settings: _vm.perfectScrollbarSettings }
        },
        [
          _c(
            "b-row",
            [
              _c("b-col", { attrs: { cols: "12" } }, [
                _c(
                  "div",
                  { staticClass: "email-label" },
                  _vm._l(_vm.emailViewData.labels, function(label) {
                    return _c(
                      "b-badge",
                      {
                        key: label,
                        staticClass: "text-capitalize mr-50",
                        attrs: {
                          pill: "",
                          variant: "light-" + _vm.resolveLabelColor(label)
                        }
                      },
                      [
                        _vm._v(
                          "\n            " + _vm._s(label) + "\n          "
                        )
                      ]
                    )
                  }),
                  1
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          !_vm.showWholeThread &&
          _vm.emailViewData.replies &&
          _vm.emailViewData.replies.length
            ? _c(
                "b-row",
                { staticClass: "mb-1" },
                [
                  _c(
                    "b-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "b-link",
                        {
                          staticClass: "font-weight-bold",
                          on: {
                            click: function($event) {
                              _vm.showWholeThread = true
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n          View " +
                              _vm._s(_vm.emailViewData.replies.length) +
                              " Earlier Message" +
                              _vm._s(
                                _vm.emailViewData.replies.length > 1 ? "s" : ""
                              ) +
                              "\n        "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showWholeThread
            ? _vm._l(_vm.emailViewData.replies.slice().reverse(), function(
                threadMail
              ) {
                return _c(
                  "b-row",
                  { key: threadMail.id },
                  [
                    _c(
                      "b-col",
                      { attrs: { cols: "12" } },
                      [
                        _c("email-message-card", {
                          attrs: { message: threadMail }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { cols: "12" } },
                [
                  _c("email-message-card", {
                    attrs: { message: _vm.emailViewData }
                  })
                ],
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
                { attrs: { cols: "12" } },
                [
                  _c("b-card", [
                    _c(
                      "div",
                      { staticClass: "d-flex justify-content-between" },
                      [
                        _c(
                          "h5",
                          { staticClass: "mb-0" },
                          [
                            _vm._v(
                              "\n              Click here to\n              "
                            ),
                            _c("b-link", [_vm._v("Reply")]),
                            _vm._v("\n              or\n              "),
                            _c("b-link", [_vm._v("Forward")])
                          ],
                          1
                        )
                      ]
                    )
                  ])
                ],
                1
              )
            ],
            1
          )
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);