(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[96],{

/***/ "./frontend/src/@core/comp-functions/forms/form-validation.js":
/*!********************************************************************!*\
  !*** ./frontend/src/@core/comp-functions/forms/form-validation.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formValidation; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
 // ===========================================================
// ! This is coupled with "veeValidate" plugin
// ===========================================================

function formValidation(resetFormData) {
  var clearFormData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
  // ------------------------------------------------
  // refFormObserver
  // ! This is for veeValidate Observer
  // * Used for veeValidate form observer
  // ------------------------------------------------
  var refFormObserver = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null); // ------------------------------------------------
  // resetObserver
  // ! This function is coupled with veeValidate
  // * It resets form observer
  // ------------------------------------------------

  var resetObserver = function resetObserver() {
    refFormObserver.value.reset();
  }; // ------------------------------------------------
  // getValidationState
  // ! This function is coupled with veeValidate
  // * It returns true/false based on validation
  // ------------------------------------------------
  // eslint-disable-next-line object-curly-newline


  var getValidationState = function getValidationState(_ref) {
    var dirty = _ref.dirty,
        validated = _ref.validated,
        fieldRequired = _ref.required,
        changed = _ref.changed,
        _ref$valid = _ref.valid,
        valid = _ref$valid === void 0 ? null : _ref$valid;
    var result = dirty || validated ? valid : null;
    return !fieldRequired && !changed ? null : result;
  }; // ------------------------------------------------
  // resetForm
  // ! This function is coupled with veeValidate
  // * This uses resetFormData arg to reset form data
  // ------------------------------------------------


  var resetForm = function resetForm() {
    resetFormData();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
      resetObserver();
    });
  }; // ------------------------------------------------
  // clearForm
  // ! This function is coupled with veeValidate
  // * This uses clearFormData arg to reset form data
  // ------------------------------------------------


  var clearForm = function clearForm() {
    clearFormData();
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["nextTick"])(function () {
      resetObserver();
    });
  };

  return {
    refFormObserver: refFormObserver,
    resetObserver: resetObserver,
    getValidationState: getValidationState,
    resetForm: resetForm,
    clearForm: clearForm
  };
}

/***/ }),

/***/ "./frontend/src/@core/utils/validations/validations.js":
/*!*************************************************************!*\
  !*** ./frontend/src/@core/utils/validations/validations.js ***!
  \*************************************************************/
/*! exports provided: required, email, min, confirmed, regex, between, alpha, integer, digits, alphaDash, alphaNum, length, positive, credit, password, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmed", function() { return confirmed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digits", function() { return digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaDash", function() { return alphaDash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNum", function() { return alphaNum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "length", function() { return length; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positive", function() { return positive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "credit", function() { return credit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "password", function() { return password; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate */ "./frontend/node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/rules */ "./frontend/node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/locale/ar.json */ "./frontend/node_modules/vee-validate/dist/locale/ar.json");
var vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/ar.json */ "./frontend/node_modules/vee-validate/dist/locale/ar.json", 1);
/* harmony import */ var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vee-validate/dist/locale/en.json */ "./frontend/node_modules/vee-validate/dist/locale/en.json");
var vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! vee-validate/dist/locale/en.json */ "./frontend/node_modules/vee-validate/dist/locale/en.json", 1);
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./validators */ "./frontend/src/@core/utils/validations/validators.js");



 // eslint-disable-next-line object-curly-newline

 // ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

var required = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('required', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["required"]);
var email = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('email', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["email"]);
var min = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('min', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["min"]);
var confirmed = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('confirmed', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["confirmed"]);
var regex = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('regex', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["regex"]);
var between = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('between', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["between"]);
var alpha = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha"]);
var integer = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('integer', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["integer"]);
var digits = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('digits', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["digits"]);
var alphaDash = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-dash', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_dash"]);
var alphaNum = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('alpha-num', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["alpha_num"]);
var length = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('length', vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_1__["length"]);
var positive = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('positive', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPositive"],
  message: 'Please enter positive number!'
});
var credit = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('credit-card', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorCreditCard"],
  message: 'It is not valid credit card!'
});
var password = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('password', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorPassword"],
  message: 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit'
});
var url = Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["extend"])('url', {
  validate: _validators__WEBPACK_IMPORTED_MODULE_4__["validatorUrlValidator"],
  message: 'URL is invalid'
}); // Install English and Arabic localizations.

Object(vee_validate__WEBPACK_IMPORTED_MODULE_0__["localize"])({
  en: {
    messages: vee_validate_dist_locale_en_json__WEBPACK_IMPORTED_MODULE_3__.messages,
    names: {
      email: 'Email',
      password: 'Password'
    },
    fields: {
      password: {
        min: '{_field_} is too short, you want to get hacked?'
      }
    }
  },
  ar: {
    messages: vee_validate_dist_locale_ar_json__WEBPACK_IMPORTED_MODULE_2__.messages,
    names: {
      email: 'البريد الإلكتروني',
      password: 'كلمة السر'
    },
    fields: {
      password: {
        min: 'كلمة السر قصيرة جداً سيتم اختراقك'
      }
    }
  }
}); // ////////////////////////////////////////////////////////
// NOTE:
// Quasar validation for reference only
// Remove this note once development is finished and make sure to
// to convert all of them in veevalidate version
// ////////////////////////////////////////////////////////
// export const required = (val) => {
//   return (val && val.length > 0) || '*Field is required'
// }
// export const required_obj = (obj) => {
//   if (obj === null || obj === undefined) return '*Field is required'
//   return (Object.entries(obj).length > 0 && obj.constructor === Object) || '*Field is required'
// }
// export const no_blank_spaces_arr = (arr) => {
//   return arr.every(val => (val.trim() && val.trim().length > 0)) || 'Blank Spaces are not allowed'
// }
// export const url = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   // Used
//   // https://stackoverflow.com/questions/4314741/url-regex-validation
//   // Other
//   // https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
//   // https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-9.php
//   // https://www.geeksforgeeks.org/how-to-validate-url-using-regular-expression-in-javascript/
//   /* eslint-disable no-useless-escape */
//   const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
//   /* eslint-enable no-useless-escape */
//   return re.test(val) || 'URL is invalid'
// }
// export const date = val => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   // https://github.com/quasarframework/quasar/blob/dev/ui/src/utils/patterns.js
//   return /^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(val) || 'Date is invalid'
// }
// export const max = (val, max) => {
//   // If blank return
//   if (val === undefined || val === null) return true
//   return val.length <= max || `More than ${max} characters are not allowed`
// }
// export const max_arr = (val, max) => {
//   return val.length <= max || `More than ${max} values are not allowed`
// }
// export const min = (val, min) => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   return val.length >= min || `Minimum ${min} characters are required`
// }
// export const num_range = (val, min, max) => {
//   // If blank return
//   if (val === undefined || val === null || val.length === 0) return true
//   const msg = 'Value is invalid'
//   if (min === null) return val <= max || msg
//   else if (max === null) return val >= min || msg
//   else return (val >= min && val <= max) || msg
// }

/***/ }),

/***/ "./frontend/src/@core/utils/validations/validators.js":
/*!************************************************************!*\
  !*** ./frontend/src/@core/utils/validations/validators.js ***!
  \************************************************************/
/*! exports provided: validatorPositive, validatorPassword, validatorCreditCard, validatorUrlValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPositive", function() { return validatorPositive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorPassword", function() { return validatorPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorCreditCard", function() { return validatorCreditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatorUrlValidator", function() { return validatorUrlValidator; });
var validatorPositive = function validatorPositive(value) {
  if (value >= 0) {
    return true;
  }

  return false;
};
var validatorPassword = function validatorPassword(password) {
  /* eslint-disable no-useless-escape */
  var regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/;
  /* eslint-enable no-useless-escape */

  var validPassword = regExp.test(password);
  return validPassword;
};
var validatorCreditCard = function validatorCreditCard(creditnum) {
  /* eslint-disable no-useless-escape */
  var cRegExp = /^(?:3[47][0-9]{13})$/;
  /* eslint-enable no-useless-escape */

  var validCreditCard = cRegExp.test(creditnum);
  return validCreditCard;
};
var validatorUrlValidator = function validatorUrlValidator(val) {
  if (val === undefined || val === null || val.length === 0) {
    return true;
  }
  /* eslint-disable no-useless-escape */


  var re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  /* eslint-enable no-useless-escape */

  return re.test(val);
};

/***/ }),

/***/ "./frontend/src/@fake-db/data/other/countries.js":
/*!*******************************************************!*\
  !*** ./frontend/src/@fake-db/data/other/countries.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', "Côte d'Ivoire", 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent & the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'USA', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe']);

/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue":
/*!***************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserListAddNew_vue_vue_type_template_id_443bdc99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserListAddNew.vue?vue&type=template&id=443bdc99& */ "./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=template&id=443bdc99&");
/* harmony import */ var _UserListAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserListAddNew.vue?vue&type=script&lang=js& */ "./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserListAddNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserListAddNew.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserListAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserListAddNew_vue_vue_type_template_id_443bdc99___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserListAddNew_vue_vue_type_template_id_443bdc99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/settings/vehicle-categories/UserListAddNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserListAddNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListAddNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListAddNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserListAddNew.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListAddNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListAddNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListAddNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListAddNew_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=template&id=443bdc99&":
/*!**********************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=template&id=443bdc99& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListAddNew_vue_vue_type_template_id_443bdc99___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserListAddNew.vue?vue&type=template&id=443bdc99& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=template&id=443bdc99&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListAddNew_vue_vue_type_template_id_443bdc99___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListAddNew_vue_vue_type_template_id_443bdc99___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue":
/*!*****************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UsersListFilters_vue_vue_type_template_id_c0981ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UsersListFilters.vue?vue&type=template&id=c0981ef4&scoped=true& */ "./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=template&id=c0981ef4&scoped=true&");
/* harmony import */ var _UsersListFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UsersListFilters.vue?vue&type=script&lang=js& */ "./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UsersListFilters_vue_vue_type_style_index_0_id_c0981ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css& */ "./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css&");
/* harmony import */ var _UsersListFilters_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UsersListFilters.vue?vue&type=style&index=1&lang=scss& */ "./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _UsersListFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UsersListFilters_vue_vue_type_template_id_c0981ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UsersListFilters_vue_vue_type_template_id_c0981ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c0981ef4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/settings/vehicle-categories/UsersListFilters.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersListFilters.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css&":
/*!**************************************************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_style_index_0_id_c0981ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_style_index_0_id_c0981ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_style_index_0_id_c0981ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_style_index_0_id_c0981ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_style_index_0_id_c0981ef4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=1&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersListFilters.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=template&id=c0981ef4&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=template&id=c0981ef4&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_template_id_c0981ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersListFilters.vue?vue&type=template&id=c0981ef4&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=template&id=c0981ef4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_template_id_c0981ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UsersListFilters_vue_vue_type_template_id_c0981ef4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/useUsersList.js":
/*!************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/useUsersList.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUsersList; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/filter */ "./frontend/src/@core/utils/filter.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-toastification/composition */ "./frontend/node_modules/vue-toastification/composition/index.js");
/* harmony import */ var vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/components/toastification/ToastificationContent.vue */ "./frontend/src/@core/components/toastification/ToastificationContent.vue");


 // Notification



function useUsersList() {
  // Use toast
  var toast = Object(vue_toastification_composition__WEBPACK_IMPORTED_MODULE_3__["useToast"])();
  var refUserListTable = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null); // Table Handlers

  var tableColumns = [{
    key: 'sr',
    sortable: true
  }, {
    key: 'category',
    sortable: true
  }, {
    key: 'basis',
    sortable: true
  }, {
    key: 'part',
    sortable: true
  }, {
    key: 'unit',
    sortable: true
  }, {
    key: 'operator',
    sortable: true
  }, {
    key: 'value',
    sortable: true
  }, {
    key: 'and_or',
    sortable: true
  }, {
    key: 'actions'
  }];
  var perPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(10);
  var totalUsers = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  var currentPage = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(1);
  var perPageOptions = [10, 25, 50, 100];
  var searchQuery = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('');
  var sortBy = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])('id');
  var isSortDirDesc = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(true);
  var roleFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var planFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var statusFilter = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var dataMeta = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var localItemsCount = refUserListTable.value ? refUserListTable.value.localItems.length : 0;
    return {
      from: perPage.value * (currentPage.value - 1) + (localItemsCount ? 1 : 0),
      to: perPage.value * (currentPage.value - 1) + localItemsCount,
      of: totalUsers.value
    };
  });

  var refetchData = function refetchData() {
    refUserListTable.value.refresh();
  };

  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["watch"])([currentPage, perPage, searchQuery, roleFilter, planFilter, statusFilter], function () {
    refetchData();
  });

  var fetchUsers = function fetchUsers(ctx, callback) {
    _store__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('app-user/fetchUsers', {
      q: searchQuery.value,
      perPage: perPage.value,
      page: currentPage.value,
      sortBy: sortBy.value,
      sortDesc: isSortDirDesc.value,
      role: roleFilter.value,
      plan: planFilter.value,
      status: statusFilter.value
    }).then(function (response) {
      var _response$data = response.data,
          users = _response$data.users,
          total = _response$data.total;
      callback(users);
      totalUsers.value = total;
    })["catch"](function () {
      toast({
        component: _core_components_toastification_ToastificationContent_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
        props: {
          title: 'Error fetching users list',
          icon: 'AlertTriangleIcon',
          variant: 'danger'
        }
      });
    });
  }; // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*


  var resolveUserRoleVariant = function resolveUserRoleVariant(role) {
    if (role === 'subscriber') return 'primary';
    if (role === 'author') return 'warning';
    if (role === 'maintainer') return 'success';
    if (role === 'editor') return 'info';
    if (role === 'admin') return 'danger';
    return 'primary';
  };

  var resolveUserRoleIcon = function resolveUserRoleIcon(role) {
    if (role === 'subscriber') return 'UserIcon';
    if (role === 'author') return 'SettingsIcon';
    if (role === 'maintainer') return 'DatabaseIcon';
    if (role === 'editor') return 'Edit2Icon';
    if (role === 'admin') return 'ServerIcon';
    return 'UserIcon';
  };

  var resolveUserStatusVariant = function resolveUserStatusVariant(status) {
    if (status === 'pending') return 'warning';
    if (status === 'active') return 'success';
    if (status === 'inactive') return 'secondary';
    return 'primary';
  };

  return {
    fetchUsers: fetchUsers,
    tableColumns: tableColumns,
    perPage: perPage,
    currentPage: currentPage,
    totalUsers: totalUsers,
    dataMeta: dataMeta,
    perPageOptions: perPageOptions,
    searchQuery: searchQuery,
    sortBy: sortBy,
    isSortDirDesc: isSortDirDesc,
    refUserListTable: refUserListTable,
    resolveUserRoleVariant: resolveUserRoleVariant,
    resolveUserRoleIcon: resolveUserRoleIcon,
    resolveUserStatusVariant: resolveUserStatusVariant,
    refetchData: refetchData,
    // Extra Filters
    roleFilter: roleFilter,
    planFilter: planFilter,
    statusFilter: statusFilter
  };
}

/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/userStoreModule.js":
/*!***************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/userStoreModule.js ***!
  \***************************************************************************/
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

/***/ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue":
/*!*******************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vehicle_categories_vue_vue_type_template_id_0020e840_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehicle_categories.vue?vue&type=template&id=0020e840&scoped=true& */ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=template&id=0020e840&scoped=true&");
/* harmony import */ var _vehicle_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vehicle_categories.vue?vue&type=script&lang=js& */ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _vehicle_categories_vue_vue_type_style_index_0_id_0020e840_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true& */ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true&");
/* harmony import */ var _vehicle_categories_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicle_categories.vue?vue&type=style&index=1&lang=scss& */ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _vehicle_categories_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vehicle_categories.vue?vue&type=style&index=2&lang=scss& */ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _vehicle_categories_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicle_categories.vue?vue&type=style&index=3&lang=scss& */ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=3&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");









/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_6__["default"])(
  _vehicle_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _vehicle_categories_vue_vue_type_template_id_0020e840_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _vehicle_categories_vue_vue_type_template_id_0020e840_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0020e840",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/settings/vehicle-categories/vehicle_categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vehicle_categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_0_id_0020e840_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_0_id_0020e840_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_0_id_0020e840_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_0_id_0020e840_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_0_id_0020e840_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vehicle_categories.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=2&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=2&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vehicle_categories.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=2&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_2_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=3&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=3&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vehicle_categories.vue?vue&type=style&index=3&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=3&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_style_index_3_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=template&id=0020e840&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=template&id=0020e840&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_template_id_0020e840_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vehicle_categories.vue?vue&type=template&id=0020e840&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=template&id=0020e840&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_template_id_0020e840_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_vehicle_categories_vue_vue_type_template_id_0020e840_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate */ "./frontend/node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @validations */ "./frontend/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/comp-functions/forms/form-validation */ "./frontend/src/@core/comp-functions/forms/form-validation.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-select */ "./frontend/node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fake_db_data_other_countries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/@fake-db/data/other/countries */ "./frontend/src/@fake-db/data/other/countries.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./frontend/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _router_routes_apps__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/router/routes/apps */ "./frontend/src/router/routes/apps.js");
/* harmony import */ var vue_country_code_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vue-country-code-select */ "./node_modules/vue-country-code-select/dist/vue-country-code.js");
/* harmony import */ var vue_country_code_select__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(vue_country_code_select__WEBPACK_IMPORTED_MODULE_12__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    VueCountryCode: vue_country_code_select__WEBPACK_IMPORTED_MODULE_12___default.a,
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSidebar"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BModal"],
    BAlert: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAlert"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    axios: axios__WEBPACK_IMPORTED_MODULE_10___default.a,
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInvalidFeedback"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_7___default.a,
    VBModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    // Form Validation
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"]
  },
  directives: {
    'b-modal': bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["VBModal"],
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  // directives: {
  //   Ripple,
  // },
  model: {
    prop: 'isAddNewUserSidebarActive',
    event: 'update:is-add-new-user-sidebar-active'
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
  data: function data() {
    return {
      vinnumberdetails: false,
      showcompanyname: false,
      //showModal: false,
      required: _validations__WEBPACK_IMPORTED_MODULE_4__["required"],
      alphaNum: _validations__WEBPACK_IMPORTED_MODULE_4__["alphaNum"],
      email: _validations__WEBPACK_IMPORTED_MODULE_4__["email"],
      countries: _fake_db_data_other_countries__WEBPACK_IMPORTED_MODULE_8__["default"],
      gender: [{
        title: 'Male'
      }, {
        title: 'Female'
      }],
      accounttype: [{
        title: 'Individual'
      }, {
        title: 'Company'
      }],
      customers: [{
        value: 1,
        title: 'Abdul sSalam'
      }, {
        title: 'Frank'
      }, {
        title: 'Ademola'
      }, {
        title: 'Adeolu'
      }],
      //option: [{ title: 'Square'}, { title: 'Rectangle' }, { title: 'Rombo' }, { title: 'Romboid' }],
      option: [],
      customerinfo: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        gender: "",
        address: "",
        customer_type: "",
        newcompanyname: "",
        dialCode: ""
      },
      countrylist: [],
      customergroupdropdownlist: [],
      customerswithcompany: [],
      customergroups: [],
      selected: '',
      modal: true,
      isActive: false,
      isVisible: false
    };
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var blankUserData = {
      firstNam: '',
      lastName: '',
      username: '',
      email: '',
      role: null,
      currentPlan: null,
      company: '',
      country: '',
      contact: ''
    };
    var userData = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(JSON.parse(JSON.stringify(blankUserData)));

    var resetuserData = function resetuserData() {
      userData.value = JSON.parse(JSON.stringify(blankUserData));
    };

    var onSubmit = function onSubmit() {//  let currentObj = this;
      // console.log(userData.value.vin_number);
      //  // axios.post('http://koboautos.com/twic-terminal/connect/api/create_inspections?vin_number=' + userData.value.vin_number+'&driver_name=' + userData.value.driver_name+'&company_name=' + userData.value.companyName+'&customer=Abdul sSalam')
      //  //   .then(response => {
      //  //     // this.laravelData = response.data.Inspection;
      //  //     console.log(response);
      //  //    gotoviewpage(response.key);
      //  //   });
      // //router.push("/inventory/list/1");
      // //router.stateService.go('inventory/list/1');
      // // isAddNewUserSidebarActive = false;
      // // router.push('terminal');
      // currentObj.router.push({ path : '/terminal' });
    };

    var _formValidation = Object(_core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])(resetuserData),
        refFormObserver = _formValidation.refFormObserver,
        getValidationState = _formValidation.getValidationState,
        resetForm = _formValidation.resetForm;

    return {
      userData: userData,
      onSubmit: onSubmit,
      refFormObserver: refFormObserver,
      getValidationState: getValidationState,
      resetForm: resetForm
    };
  },
  mounted: function mounted() {
    this.allcustomers();
    this.allcompanies();
    this.allcustomersgroups();
    this.allcountries();
  },
  methods: {
    // showModal() {
    //     let element = this.$refs.modal.$el
    //     $(element).modal('show')
    //   },
    onSelect: function onSelect(_ref2) {
      var name = _ref2.name,
          iso2 = _ref2.iso2,
          dialCode = _ref2.dialCode;
      console.log(name, iso2, dialCode);
      localStorage["dialCode"] = '+' + dialCode;
      console.log(localStorage["dialCode"]);
    },
    allcountries: function allcountries(e) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('http://koboautos.com/twic-terminal/connect/api/all-countries').then(function (response) {
        // console.log(response);
        _this.countrylist = response.data.countries;
      });
    },
    allcustomersgroups: function allcustomersgroups(e) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('http://koboautos.com/twic-terminal/connect/api/create_group').then(function (response) {
        // console.log(response);
        _this2.customergroups = response.data.customergroups;
      });
    },
    showModal: function showModal() {
      // document.getElementById('modal').classList.add('is-active')
      this.isActive = true;
      this.isVisible = true;
    },
    closeModal: function closeModal() {
      // document.getElementById('modal').classList.remove('is-active')
      this.isActive = false;
      this.isVisible = false;
    },
    formSubmit: function formSubmit(e) {
      e.preventDefault();
      var currentObj = this; //console.log(this.userData);

      axios__WEBPACK_IMPORTED_MODULE_10___default()({
        method: 'post',
        url: 'http://koboautos.com/twic-terminal/connect/api/create_inspections?vin_number=' + this.userData.vin_number + '&driver_name=' + this.userData.driver_name + '&company_name=' + this.userData.companyName + '&customer=' + this.userData.customerName.value
      }).then(function (response) {
        console.log(response);

        if (response.status == 200) {
          currentObj.$router.push({
            path: '/inventory/view/' + response.data.key
          });
        }
      })["catch"](function (response) {
        if (response.status == 422) {
          this.errors = response.data.errors;
          return;
        }

        if (response.status == 500) {
          flash({
            'error': 'Server Error'
          });
        }
      });
    },
    customerformSubmit: function customerformSubmit(e) {
      e.preventDefault();
      var currentObj = this;
      var phonumber = localStorage["dialCode"] + this.userData.contact;
      axios__WEBPACK_IMPORTED_MODULE_10___default()({
        method: 'post',
        url: 'http://koboautos.com/twic-terminal/connect/api/create_customer?first_name=' + this.userData.first_name + '&last_name=' + this.userData.last_name + '&email=' + this.userData.email + '&phone=' + phonumber + '&gender=' + this.userData.gender.title + '&customer_type=' + this.userData.role.id + '&address=' + this.userData.address + '&account_type=' + this.userData.type.title + '&country_id=' + this.userData.country.key + '&company_name=' + this.companyname
      }).then(function (response) {
        console.log(response);

        if (response.status == 200) {
          currentObj.customerswithcompany = response.data.newcustomer;
          currentObj.$root.$emit("bv::hide::modal", "modal-1"); // currentObj.userData.customerName= response.data.lastedit;
        }
      })["catch"](function (response) {
        if (response.status == 422) {
          this.errors = response.data.errors;
          return;
        }

        if (response.status == 500) {
          flash({
            'error': 'Server Error'
          });
        }
      });
    },
    createnewcompany: function createnewcompany(e) {
      e.preventDefault();
      var currentObj = this;
      currentObj.$root.$emit("bv::hide::modal", "modal-2");
      this.userData.companyName = this.userData.company;
    },
    // Our method to GET results from a Laravel endpoint
    vindecorder: function vindecorder(e) {
      var _this3 = this;

      var vin_number = e.target.value;
      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('https://shipafrika.com/api/getcrossdata/decodevin.php?vin=' + vin_number).then(function (response) {
        _this3.userData.year_make_model = response.data.model_year + ' | ' + response.data.make + ' | ' + response.data.model;
      }); // axios.post('http://koboautos.com/twic-terminal/scrapping/getcrossdata/decodevin.php?vin='+vin_number)
      //   .then(response => {
      //      this.userData.year_make_model = response.data.model_year+' | '+ response.data.make+' | '+ response.data.model;
      //   });
    },
    allcustomers: function allcustomers(e) {
      var _this4 = this;

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('http://koboautos.com/twic-terminal/connect/api/customerwithcompany').then(function (response) {
        _this4.customerswithcompany = response.data.customers;
      });
    },
    allcompanies: function allcompanies(e) {
      var _this5 = this;

      axios__WEBPACK_IMPORTED_MODULE_10___default.a.post('http://koboautos.com/twic-terminal/connect/api/all-companies').then(function (response) {
        _this5.option = response.data.companies;
      });
    },
    gotoviewpage: function gotoviewpage(id) {
      this.$router.push("/inventory/list/1");
    }
  },
  watch: {
    'userData.customerName': function userDataCustomerName(val, oldval) {
      console.log(val.value);

      if (val.value == 'add') {
        this.$root.$emit("bv::show::modal", "modal-1");
      }
    },
    'userData.companyName': function userDataCompanyName(val, oldval) {
      console.log(val.title);

      if (val.title == 'Add New Company') {
        this.$root.$emit("bv::show::modal", "modal-2");
      }
    },
    'userData.type': function userDataType(val, oldval) {
      console.log(val.title);

      if (val.title == 'Company') {
        this.showcompanyname = true;
      } else {
        this.showcompanyname = false;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./frontend/node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  //  name: "ToggleDiv",
  // data: function () {
  //   return {
  //     isShow: true,
  //   };
  // },
  data: function data() {
    return {
      Customerslist: [{
        title: 'Muddassar'
      }, {
        title: 'Mohsin'
      }, {
        title: 'Shakir'
      }],
      statuslist: [{
        title: 'In-Gated'
      }, {
        title: 'Out-Gated'
      }]
    };
  },
  props: {
    msg: String
  },
  components: {
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BCardHeader: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardHeader"],
    BCardBody: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardBody"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  }
}, "props", {
  roleFilter: {
    type: [String, null],
    "default": null
  },
  planFilter: {
    type: [String, null],
    "default": null
  },
  statusFilter: {
    type: [String, null],
    "default": null
  },
  roleOptions: {
    type: Array,
    required: true
  },
  planOptions: {
    type: Array,
    required: true
  },
  statusOptions: {
    type: Array,
    required: true
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./frontend/node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/filter */ "./frontend/src/@core/utils/filter.js");
/* harmony import */ var _UsersListFilters_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UsersListFilters.vue */ "./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue");
/* harmony import */ var _useUsersList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useUsersList */ "./frontend/src/views/settings/vehicle-categories/useUsersList.js");
/* harmony import */ var _userStoreModule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./userStoreModule */ "./frontend/src/views/settings/vehicle-categories/userStoreModule.js");
/* harmony import */ var _UserListAddNew_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserListAddNew.vue */ "./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      isHidden: true // inventorylist: {},
      // laravelData: {},
      // inventoryduration: {},
      // inventorydates: {}

    };
  },
  components: {
    UsersListFilters: _UsersListFilters_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    UserListAddNew: _UserListAddNew_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    BCard: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCard"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInput"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"],
    BTable: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BTable"],
    BMedia: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BMedia"],
    BAvatar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BAvatar"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BPagination: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BPagination"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  setup: function setup() {
    var USER_APP_STORE_MODULE_NAME = 'app-user'; // Register module

    if (!_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasModule(USER_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_2__["default"].registerModule(USER_APP_STORE_MODULE_NAME, _userStoreModule__WEBPACK_IMPORTED_MODULE_7__["default"]); // UnRegister on leave

    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["onUnmounted"])(function () {
      if (_store__WEBPACK_IMPORTED_MODULE_2__["default"].hasModule(USER_APP_STORE_MODULE_NAME)) _store__WEBPACK_IMPORTED_MODULE_2__["default"].unregisterModule(USER_APP_STORE_MODULE_NAME);
    });
    var isAddNewUserSidebarActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["ref"])(false);
    var roleOptions = [{
      label: 'Admin',
      value: 'admin'
    }, {
      label: 'Author',
      value: 'author'
    }, {
      label: 'Editor',
      value: 'editor'
    }, {
      label: 'Maintainer',
      value: 'maintainer'
    }, {
      label: 'Subscriber',
      value: 'subscriber'
    }];
    var planOptions = [{
      label: 'Basic',
      value: 'basic'
    }, {
      label: 'Company',
      value: 'company'
    }, {
      label: 'Enterprise',
      value: 'enterprise'
    }, {
      label: 'Team',
      value: 'team'
    }];
    var statusOptions = [{
      label: 'Pending',
      value: 'pending'
    }, {
      label: 'Active',
      value: 'active'
    }, {
      label: 'Inactive',
      value: 'inactive'
    }];

    var _useUsersList = Object(_useUsersList__WEBPACK_IMPORTED_MODULE_6__["default"])(),
        fetchUsers = _useUsersList.fetchUsers,
        tableColumns = _useUsersList.tableColumns,
        perPage = _useUsersList.perPage,
        currentPage = _useUsersList.currentPage,
        totalUsers = _useUsersList.totalUsers,
        dataMeta = _useUsersList.dataMeta,
        perPageOptions = _useUsersList.perPageOptions,
        searchQuery = _useUsersList.searchQuery,
        sortBy = _useUsersList.sortBy,
        isSortDirDesc = _useUsersList.isSortDirDesc,
        refUserListTable = _useUsersList.refUserListTable,
        refetchData = _useUsersList.refetchData,
        resolveUserRoleVariant = _useUsersList.resolveUserRoleVariant,
        resolveUserRoleIcon = _useUsersList.resolveUserRoleIcon,
        resolveUserStatusVariant = _useUsersList.resolveUserStatusVariant,
        roleFilter = _useUsersList.roleFilter,
        planFilter = _useUsersList.planFilter,
        statusFilter = _useUsersList.statusFilter;

    return {
      // Sidebar
      isAddNewUserSidebarActive: isAddNewUserSidebarActive,
      fetchUsers: fetchUsers,
      tableColumns: tableColumns,
      perPage: perPage,
      currentPage: currentPage,
      totalUsers: totalUsers,
      dataMeta: dataMeta,
      perPageOptions: perPageOptions,
      searchQuery: searchQuery,
      sortBy: sortBy,
      isSortDirDesc: isSortDirDesc,
      refUserListTable: refUserListTable,
      refetchData: refetchData,
      // Filter
      avatarText: _core_utils_filter__WEBPACK_IMPORTED_MODULE_4__["avatarText"],
      // UI
      resolveUserRoleVariant: resolveUserRoleVariant,
      resolveUserRoleIcon: resolveUserRoleIcon,
      resolveUserStatusVariant: resolveUserStatusVariant,
      roleOptions: roleOptions,
      planOptions: planOptions,
      statusOptions: statusOptions,
      // Extra Filters
      roleFilter: roleFilter,
      planFilter: planFilter,
      statusFilter: statusFilter
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n[dir] .vs__fade-enter-active, [dir] .vs__fade-leave-active {\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  -webkit-transform: scale(1);\n  transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855), -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n          -webkit-transform: scale(1);\n                  transform: scale(1);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n          -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n                  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(180deg) scale(1);\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(-180deg) scale(1);\n          transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n          -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n                  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n}\n[dir] .vs__dropdown-option:hover {\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n}\n[dir] .vs__dropdown-option--disabled:hover {\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  -webkit-box-shadow: none;\n  width: 0;\n  max-width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::-webkit-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::-moz-placeholder {\n  color: #6e6b7b;\n}\n.vs__search:-ms-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::-ms-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  -ms-flex-item-align: center;\n      align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  -webkit-transform: translateZ(0);\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n          -webkit-transform: translateZ(0);\n                  transform: translateZ(0);\n  -webkit-transition: opacity 0.1s;\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-ltr 1.1s infinite linear;\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-rtl 1.1s infinite linear;\n          animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n  -webkit-transition: all 0.25s ease-in-out;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: -webkit-transform 0.2s ease;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n  -webkit-transition: -webkit-transform 0.2s ease;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  -webkit-transform: translateX(5px);\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  -webkit-transform: scale(0.8);\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n          -webkit-transform: scale(0.8);\n                  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n.vs--open .vs__dropdown-toggle {\n  -webkit-box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n          -webkit-box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n                  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  -webkit-transform: scale(1) !important;\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n          -webkit-transform: scale(1) !important;\n                  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::-webkit-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::-moz-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input:-ms-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::-ms-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}\n.vue-country-select {\n  height: 35px;\n}\n[dir] .vue-country-select {\n  margin-top: 2px;\n  border-radius: 0.357rem;\n}\n[dir=ltr] .vue-country-select {\n  float: left;\n}\n[dir=rtl] .vue-country-select {\n  float: right;\n}\n#add-new-user-sidebar .vs__dropdown-menu {\n  max-height: 200px !important;\n}\n.modal-footer {\n  display: none;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=1&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=1&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n[dir] .vs__fade-enter-active, [dir] .vs__fade-leave-active {\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  -webkit-transform: scale(1);\n  transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855), -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n          -webkit-transform: scale(1);\n                  transform: scale(1);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n          -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n                  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(180deg) scale(1);\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(-180deg) scale(1);\n          transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n          -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n                  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n}\n[dir] .vs__dropdown-option:hover {\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n}\n[dir] .vs__dropdown-option--disabled:hover {\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  -webkit-box-shadow: none;\n  width: 0;\n  max-width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::-webkit-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::-moz-placeholder {\n  color: #6e6b7b;\n}\n.vs__search:-ms-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::-ms-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  -ms-flex-item-align: center;\n      align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  -webkit-transform: translateZ(0);\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n          -webkit-transform: translateZ(0);\n                  transform: translateZ(0);\n  -webkit-transition: opacity 0.1s;\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-ltr 1.1s infinite linear;\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-rtl 1.1s infinite linear;\n          animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n  -webkit-transition: all 0.25s ease-in-out;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: -webkit-transform 0.2s ease;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n  -webkit-transition: -webkit-transform 0.2s ease;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  -webkit-transform: translateX(5px);\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  -webkit-transform: scale(0.8);\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n          -webkit-transform: scale(0.8);\n                  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n.vs--open .vs__dropdown-toggle {\n  -webkit-box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n          -webkit-box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n                  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  -webkit-transform: scale(1) !important;\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n          -webkit-transform: scale(1) !important;\n                  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::-webkit-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::-moz-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input:-ms-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::-ms-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".per-page-selector[data-v-0020e840] {\n  width: 90px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".per-page-selector {\n  width: 90px;\n}\n.main-menu .navbar-header .navbar-brand .brand-logo img {\n  max-width: 115px !important;\n}\n[dir] .main-menu .navbar-header .navbar-brand {\n  margin: 3px auto !important;\n}\n.main-menu .navbar-header .navbar-brand .brand-text {\n  font-size: 1rem !important;\n}\n[dir=ltr] .main-menu .navbar-header .navbar-brand .brand-text {\n  padding-left: 7px !important;\n}\n[dir=rtl] .main-menu .navbar-header .navbar-brand .brand-text {\n  padding-right: 7px !important;\n}\n.main-menu .navbar-header .navbar-brand .brand-text {\n  color: #f4bc33 !important;\n  font-weight: 600;\n  letter-spacing: 0.01rem;\n  font-size: 1.45rem;\n}\n.nav-pills .nav-link.active {\n  -webkit-box-shadow: 0 4px 18px -4px #f3bb37 !important;\n}\n[dir] .nav-pills .nav-link.active {\n  border-color: #ff9f43 !important;\n  -webkit-box-shadow: 0 4px 18px -4px rgba(115, 103, 240, 0.65) !important;\n          box-shadow: 0 4px 18px -4px rgba(115, 103, 240, 0.65) !important;\n}\n.nav-pills .nav-link.active, [dir] .nav-pills .show > .nav-link {\n  background-color: #f39c41 !important;\n}\n[dir] .customizer .customizer-toggle {\n  background: #f39c41 !important;\n}\na {\n  color: #ff9f43;\n}\n[dir] .btn-primary {\n  border-color: #f39c41 !important;\n  background-color: #f39c41 !important;\n}\n[dir=ltr] .main-menu.menu-dark .navigation > li.active > a {\n  background: linear-gradient(118deg, #e8b231, #f39c41);\n}\n[dir=rtl] .main-menu.menu-dark .navigation > li.active > a {\n  background: linear-gradient(-118deg, #e8b231, #f39c41);\n}\n.main-menu.menu-dark .navigation > li.active > a {\n  -webkit-box-shadow: 0 0 10px 1px #283046;\n}\n[dir] .main-menu.menu-dark .navigation > li.active > a {\n  -webkit-box-shadow: 0 0 10px 1px #283046;\n          box-shadow: 0 0 10px 1px #283046;\n  border-radius: 4px;\n}\n[dir] .page-item.active .page-link {\n  border-color: #ff9f43;\n  background-color: #ff9f43;\n}\n[dir] .page-item.next-item .page-link:active, [dir] .page-item.next-item .page-link:hover {\n  background-color: #ff9f43 !important;\n}\n[dir] .dropdown-menu .dropdown-item:focus {\n  background: #e8b231;\n}\n[dir] .dropdown-menu .dropdown-item {\n  padding: 0 !important;\n}\n.dropdown-menu .dropdown-item:hover {\n  color: #7367f0;\n}\n.dropdown-menu .dropdown-item a {\n  color: #6e6a7a;\n}\n.dropdown-menu .dropdown-item a:hover {\n  color: #7367f0;\n}\n.dropdown-menu .dropdown-item p {\n  line-height: 40px;\n}\n[dir=ltr] .dropdown-menu .dropdown-item p {\n  padding-right: 50px;\n}\n[dir=rtl] .dropdown-menu .dropdown-item p {\n  padding-left: 50px;\n}\n.pac-container.pac-logo {\n  z-index: 9999 !important;\n}\n[dir=ltr] .pac-container.pac-logo {\n  left: 84.5% !important;\n}\n[dir=rtl] .pac-container.pac-logo {\n  right: 84.5% !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=2&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=2&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".v-select {\n  position: relative;\n  font-family: inherit;\n}\n.v-select,\n.v-select * {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\n/* KeyFrames */\n@-webkit-keyframes vSelectSpinner-ltr {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@-webkit-keyframes vSelectSpinner-rtl {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n@keyframes vSelectSpinner-ltr {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n}\n}\n@keyframes vSelectSpinner-rtl {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n100% {\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg);\n}\n}\n/* Dropdown Default Transition */\n.vs__fade-enter-active,\n.vs__fade-leave-active {\n  pointer-events: none;\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n  transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n[dir] .vs__fade-enter-active, [dir] .vs__fade-leave-active {\n  -webkit-transition: opacity 0.15s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.vs__fade-enter,\n.vs__fade-leave-to {\n  opacity: 0;\n}\n\n/** Component States */\n/*\n * Disabled\n *\n * When the component is disabled, all interaction\n * should be prevented. Here we modify the bg color,\n * and change the cursor displayed on the interactive\n * components.\n */\n[dir] .vs--disabled .vs__dropdown-toggle, [dir] .vs--disabled .vs__clear, [dir] .vs--disabled .vs__search, [dir] .vs--disabled .vs__selected, [dir] .vs--disabled .vs__open-indicator {\n  cursor: not-allowed;\n  background-color: #f8f8f8;\n}\n\n/*\n *  RTL - Right to Left Support\n *\n *  Because we're using a flexbox layout, the `dir=\"rtl\"`\n *  HTML attribute does most of the work for us by\n *  rearranging the child elements visually.\n */\n.v-select[dir=rtl] .vs__actions {\n  padding: 0 3px 0 6px;\n}\n.v-select[dir=rtl] .vs__clear {\n  margin-left: 6px;\n  margin-right: 0;\n}\n.v-select[dir=rtl] .vs__deselect {\n  margin-left: 0;\n  margin-right: 2px;\n}\n.v-select[dir=rtl] .vs__dropdown-menu {\n  text-align: right;\n}\n\n/**\n    Dropdown Toggle\n\n    The dropdown toggle is the primary wrapper of the component. It\n    has two direct descendants: .vs__selected-options, and .vs__actions.\n\n    .vs__selected-options holds the .vs__selected's as well as the\n    main search input.\n\n    .vs__actions holds the clear button and dropdown toggle.\n */\n.vs__dropdown-toggle {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  white-space: normal;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0 0 4px 0;\n  background: none;\n  border: 1px solid #d8d6de;\n  border-radius: 0.357rem;\n}\n.vs__selected-options {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  position: relative;\n}\n[dir] .vs__selected-options {\n  padding: 0 2px;\n}\n.vs__actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n[dir=ltr] .vs__actions {\n  padding: 4px 6px 0 3px;\n}\n[dir=rtl] .vs__actions {\n  padding: 4px 3px 0 6px;\n}\n\n/* Dropdown Toggle States */\n[dir] .vs--searchable .vs__dropdown-toggle {\n  cursor: text;\n}\n[dir] .vs--unsearchable .vs__dropdown-toggle {\n  cursor: pointer;\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-bottom-color: transparent;\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.vs__open-indicator {\n  fill: rgba(60, 60, 60, 0.5);\n  -webkit-transform: scale(1);\n  transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  transition: transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855), -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n  -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir] .vs__open-indicator {\n          -webkit-transform: scale(1);\n                  transform: scale(1);\n  -webkit-transition: -webkit-transform 150ms cubic-bezier(1, -0.115, 0.975, 0.855);\n          -webkit-transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n                  transition-timing-function: cubic-bezier(1, -0.115, 0.975, 0.855);\n}\n[dir=ltr] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(180deg) scale(1);\n  transform: rotate(180deg) scale(1);\n}\n[dir=rtl] .vs--open .vs__open-indicator {\n  -webkit-transform: rotate(-180deg) scale(1);\n          transform: rotate(-180deg) scale(1);\n}\n.vs--loading .vs__open-indicator {\n  opacity: 0;\n}\n\n/* Clear Button */\n.vs__clear {\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__clear {\n  padding: 0;\n  border: 0;\n  background-color: transparent;\n  cursor: pointer;\n}\n[dir=ltr] .vs__clear {\n  margin-right: 8px;\n}\n[dir=rtl] .vs__clear {\n  margin-left: 8px;\n}\n\n/* Dropdown Menu */\n.vs__dropdown-menu {\n  display: block;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: absolute;\n  top: calc(100% - 1px);\n  z-index: 1000;\n  width: 100%;\n  max-height: 350px;\n  min-width: 160px;\n  overflow-y: auto;\n  -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  list-style: none;\n}\n[dir] .vs__dropdown-menu {\n  padding: 5px 0;\n  margin: 0;\n          -webkit-box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n                  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid #d8d6de;\n  border-top-style: none;\n  border-radius: 0 0 0.357rem 0.357rem;\n  background: #fff;\n}\n[dir=ltr] .vs__dropdown-menu {\n  left: 0;\n  text-align: left;\n}\n[dir=rtl] .vs__dropdown-menu {\n  right: 0;\n  text-align: right;\n}\n[dir] .vs__no-options {\n  text-align: center;\n}\n\n/* List Items */\n.vs__dropdown-option {\n  line-height: 1.42857143;\n  /* Normalize line height */\n  display: block;\n  color: #333;\n  /* Overrides most CSS frameworks */\n  white-space: nowrap;\n}\n[dir] .vs__dropdown-option {\n  padding: 3px 20px;\n  clear: both;\n}\n[dir] .vs__dropdown-option:hover {\n  cursor: pointer;\n}\n.vs__dropdown-option--highlight {\n  color: #7367f0 !important;\n}\n[dir] .vs__dropdown-option--highlight {\n  background: rgba(115, 103, 240, 0.12);\n}\n.vs__dropdown-option--disabled {\n  color: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__dropdown-option--disabled {\n  background: inherit;\n}\n[dir] .vs__dropdown-option--disabled:hover {\n  cursor: inherit;\n}\n\n/* Selected Tags */\n.vs__selected {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  color: #333;\n  line-height: 1.8;\n  z-index: 0;\n}\n[dir] .vs__selected {\n  background-color: #7367f0;\n  border: 0 solid rgba(60, 60, 60, 0.26);\n  border-radius: 0.357rem;\n  margin: 4px 2px 0px 2px;\n  padding: 0 0.25em;\n}\n.vs__deselect {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  fill: rgba(60, 60, 60, 0.5);\n}\n[dir] .vs__deselect {\n  padding: 0;\n  border: 0;\n  cursor: pointer;\n  background: none;\n  text-shadow: 0 1px 0 #fff;\n}\n[dir=ltr] .vs__deselect {\n  margin-left: 4px;\n}\n[dir=rtl] .vs__deselect {\n  margin-right: 4px;\n}\n\n/* States */\n[dir] .vs--single .vs__selected {\n  background-color: transparent;\n  border-color: transparent;\n}\n.vs--single.vs--open .vs__selected {\n  position: absolute;\n  opacity: 0.4;\n}\n.vs--single.vs--searching .vs__selected {\n  display: none;\n}\n\n/* Search Input */\n/**\n * Super weird bug... If this declaration is grouped\n * below, the cancel button will still appear in chrome.\n * If it's up here on it's own, it'll hide it.\n */\n.vs__search::-webkit-search-cancel-button {\n  display: none;\n}\n.vs__search::-webkit-search-decoration,\n.vs__search::-webkit-search-results-button,\n.vs__search::-webkit-search-results-decoration,\n.vs__search::-ms-clear {\n  display: none;\n}\n.vs__search,\n.vs__search:focus {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  line-height: 1.8;\n  font-size: 1em;\n  outline: none;\n  -webkit-box-shadow: none;\n  width: 0;\n  max-width: 100%;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  z-index: 1;\n}\n[dir] .vs__search, [dir] .vs__search:focus {\n  border: 1px solid transparent;\n  margin: 4px 0 0 0;\n  padding: 0 7px;\n  background: none;\n          -webkit-box-shadow: none;\n                  box-shadow: none;\n}\n[dir=ltr] .vs__search, [dir=ltr] .vs__search:focus {\n  border-left: none;\n}\n[dir=rtl] .vs__search, [dir=rtl] .vs__search:focus {\n  border-right: none;\n}\n.vs__search::-webkit-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::-moz-placeholder {\n  color: #6e6b7b;\n}\n.vs__search:-ms-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::-ms-input-placeholder {\n  color: #6e6b7b;\n}\n.vs__search::placeholder {\n  color: #6e6b7b;\n}\n\n/**\n    States\n */\n.vs--unsearchable .vs__search {\n  opacity: 1;\n}\n[dir] .vs--unsearchable:not(.vs--disabled) .vs__search:hover {\n  cursor: pointer;\n}\n.vs--single.vs--searching:not(.vs--open):not(.vs--loading) .vs__search {\n  opacity: 0.2;\n}\n\n/* Loading Spinner */\n.vs__spinner {\n  -ms-flex-item-align: center;\n      align-self: center;\n  opacity: 0;\n  font-size: 5px;\n  text-indent: -9999em;\n  overflow: hidden;\n  -webkit-transform: translateZ(0);\n  -webkit-transition: opacity 0.1s;\n  transition: opacity 0.1s;\n}\n[dir] .vs__spinner {\n  border-top: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-bottom: 0.9em solid rgba(100, 100, 100, 0.1);\n          -webkit-transform: translateZ(0);\n                  transform: translateZ(0);\n  -webkit-transition: opacity 0.1s;\n}\n[dir=ltr] .vs__spinner {\n  border-right: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-left: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-ltr 1.1s infinite linear;\n  animation:  vSelectSpinner-ltr 1.1s infinite linear;\n}\n[dir=rtl] .vs__spinner {\n  border-left: 0.9em solid rgba(100, 100, 100, 0.1);\n  border-right: 0.9em solid rgba(60, 60, 60, 0.45);\n  -webkit-animation:  vSelectSpinner-rtl 1.1s infinite linear;\n          animation:  vSelectSpinner-rtl 1.1s infinite linear;\n}\n.vs__spinner,\n.vs__spinner:after {\n  width: 5em;\n  height: 5em;\n}\n[dir] .vs__spinner, [dir] .vs__spinner:after {\n  border-radius: 50%;\n}\n\n/* Loading Spinner States */\n.vs--loading .vs__spinner {\n  opacity: 1;\n}\n.vs__open-indicator {\n  fill: none;\n}\n[dir] .vs__open-indicator {\n  margin-top: 0.15rem;\n}\n.vs__dropdown-toggle {\n  -webkit-transition: all 0.25s ease-in-out;\n  transition: all 0.25s ease-in-out;\n}\n[dir] .vs__dropdown-toggle {\n  padding: 0.59px 0 4px 0;\n  -webkit-transition: all 0.25s ease-in-out;\n}\n[dir=ltr] .vs--single .vs__dropdown-toggle {\n  padding-left: 6px;\n}\n[dir=rtl] .vs--single .vs__dropdown-toggle {\n  padding-right: 6px;\n}\n.vs__dropdown-option--disabled {\n  opacity: 0.5;\n}\n[dir] .vs__dropdown-option--disabled.vs__dropdown-option--selected {\n  background: #7367f0 !important;\n}\n.vs__dropdown-option {\n  color: #6e6b7b;\n}\n[dir] .vs__dropdown-option, [dir] .vs__no-options {\n  padding: 7px 20px;\n}\n.vs__dropdown-option--selected {\n  background-color: #7367f0;\n  color: #fff;\n  position: relative;\n}\n.vs__dropdown-option--selected::after {\n  content: \"\";\n  height: 1.1rem;\n  width: 1.1rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  right: 20px;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3E%3Cpolyline points='20 6 9 17 4 12'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1.1rem;\n}\n[dir=rtl] .vs__dropdown-option--selected::after {\n  left: 20px;\n  right: unset;\n}\n.vs__dropdown-option--selected.vs__dropdown-option--highlight {\n  color: #fff !important;\n  background-color: #7367f0 !important;\n}\n.vs__clear svg {\n  color: #6e6b7b;\n}\n.vs__selected {\n  color: #fff;\n}\n.v-select.vs--single .vs__selected {\n  color: #6e6b7b;\n  transition: -webkit-transform 0.2s ease;\n  -webkit-transition: -webkit-transform 0.2s ease;\n  transition: transform 0.2s ease;\n  transition: transform 0.2s ease, -webkit-transform 0.2s ease;\n}\n[dir] .v-select.vs--single .vs__selected {\n  margin-top: 5px;\n  -webkit-transition: -webkit-transform 0.2s ease;\n}\n[dir=ltr] .v-select.vs--single .vs__selected input {\n  padding-left: 0;\n}\n[dir=rtl] .v-select.vs--single .vs__selected input {\n  padding-right: 0;\n}\n[dir=ltr] .vs--single.vs--open .vs__selected {\n  -webkit-transform: translateX(5px);\n  transform: translateX(5px);\n}\n[dir=rtl] .vs--single.vs--open .vs__selected {\n  -webkit-transform: translateX(-5px);\n          transform: translateX(-5px);\n}\n.vs__selected .vs__deselect {\n  color: inherit;\n}\n.v-select:not(.vs--single) .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .v-select:not(.vs--single) .vs__selected {\n  border-radius: 3px;\n  padding: 0 0.6em;\n}\n[dir=ltr] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 2px 2px 5px;\n}\n[dir=rtl] .v-select:not(.vs--single) .vs__selected {\n  margin: 5px 5px 2px 2px;\n}\n.v-select:not(.vs--single) .vs__deselect svg {\n  -webkit-transform: scale(0.8);\n  vertical-align: text-top;\n}\n[dir] .v-select:not(.vs--single) .vs__deselect svg {\n          -webkit-transform: scale(0.8);\n                  transform: scale(0.8);\n}\n.vs__dropdown-menu {\n  top: calc(100% + 1rem);\n}\n[dir] .vs__dropdown-menu {\n  border: none;\n  border-radius: 6px;\n  padding: 0;\n}\n.vs--open .vs__dropdown-toggle {\n  -webkit-box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir] .vs--open .vs__dropdown-toggle {\n  border-color: #7367f0;\n  border-bottom-color: #7367f0;\n          -webkit-box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n                  box-shadow: 0 3px 10px 0 rgba(34, 41, 47, 0.1);\n}\n[dir=ltr] .vs--open .vs__dropdown-toggle {\n  border-bottom-left-radius: 0.357rem;\n  border-bottom-right-radius: 0.357rem;\n}\n[dir=rtl] .vs--open .vs__dropdown-toggle {\n  border-bottom-right-radius: 0.357rem;\n  border-bottom-left-radius: 0.357rem;\n}\n.select-size-lg .vs__selected {\n  font-size: 1rem !important;\n}\n[dir] .select-size-lg.vs--single.vs--open .vs__selected {\n  margin-top: 6px;\n}\n.select-size-lg .vs__dropdown-toggle,\n.select-size-lg .vs__selected {\n  font-size: 1.25rem;\n}\n[dir] .select-size-lg .vs__dropdown-toggle {\n  padding: 5px;\n}\n[dir] .select-size-lg .vs__dropdown-toggle input {\n  margin-top: 0;\n}\n.select-size-lg .vs__deselect svg {\n  -webkit-transform: scale(1) !important;\n  vertical-align: middle !important;\n}\n[dir] .select-size-lg .vs__deselect svg {\n          -webkit-transform: scale(1) !important;\n                  transform: scale(1) !important;\n}\n[dir] .select-size-sm .vs__dropdown-toggle {\n  padding-bottom: 0;\n  padding: 1px;\n}\n[dir] .select-size-sm.vs--single .vs__dropdown-toggle {\n  padding: 2px;\n}\n.select-size-sm .vs__dropdown-toggle,\n.select-size-sm .vs__selected {\n  font-size: 0.9rem;\n}\n[dir] .select-size-sm .vs__actions {\n  padding-top: 2px;\n  padding-bottom: 2px;\n}\n.select-size-sm .vs__deselect svg {\n  vertical-align: middle !important;\n}\n[dir] .select-size-sm .vs__search {\n  margin-top: 0;\n}\n.select-size-sm.v-select .vs__selected {\n  font-size: 0.75rem;\n}\n[dir] .select-size-sm.v-select .vs__selected {\n  padding: 0 0.3rem;\n}\n[dir] .select-size-sm.v-select:not(.vs--single) .vs__selected {\n  margin: 4px 5px;\n}\n[dir] .select-size-sm.v-select.vs--single .vs__selected {\n  margin-top: 1px;\n}\n[dir] .select-size-sm.vs--single.vs--open .vs__selected {\n  margin-top: 4px;\n}\n.dark-layout .vs__dropdown-toggle {\n  color: #b4b7bd;\n}\n[dir] .dark-layout .vs__dropdown-toggle {\n  background: #283046;\n  border-color: #404656;\n}\n.dark-layout .vs__selected-options input {\n  color: #b4b7bd;\n}\n.dark-layout .vs__selected-options input::-webkit-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::-moz-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input:-ms-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::-ms-input-placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__selected-options input::placeholder {\n  color: #676d7d;\n}\n.dark-layout .vs__actions svg {\n  fill: #404656;\n}\n[dir] .dark-layout .vs__dropdown-menu {\n  background: #283046;\n}\n.dark-layout .vs__dropdown-menu li {\n  color: #b4b7bd;\n}\n.dark-layout .v-select:not(.vs--single) .vs__selected {\n  color: #7367f0;\n}\n[dir] .dark-layout .v-select:not(.vs--single) .vs__selected {\n  background-color: rgba(115, 103, 240, 0.12);\n}\n.dark-layout .v-select.vs--single .vs__selected {\n  color: #b4b7bd !important;\n}\n.dark-layout .vs--disabled .vs__dropdown-toggle,\n.dark-layout .vs--disabled .vs__clear,\n.dark-layout .vs--disabled .vs__search,\n.dark-layout .vs--disabled .vs__selected,\n.dark-layout .vs--disabled .vs__open-indicator {\n  opacity: 0.5;\n}\n[dir] .dark-layout .vs--disabled .vs__dropdown-toggle, [dir] .dark-layout .vs--disabled .vs__clear, [dir] .dark-layout .vs--disabled .vs__search, [dir] .dark-layout .vs--disabled .vs__selected, [dir] .dark-layout .vs--disabled .vs__open-indicator {\n  background-color: #283046;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=3&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=3&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-menu .dropdown-item svg.feather {\n  display: inline-block !important;\n}[dir=ltr] .dropdown-menu .dropdown-item svg.feather {\n  margin: 12px 0px 12px 12px !important;\n}[dir=rtl] .dropdown-menu .dropdown-item svg.feather {\n  margin: 12px 12px 12px 0px !important;\n}\n[dir=ltr] .main-menu.menu-dark .navigation > li.active > a {\n  background: linear-gradient(118deg, #e8b231, #f39c41);\n}\n[dir=rtl] .main-menu.menu-dark .navigation > li.active > a {\n  background: linear-gradient(-118deg, #e8b231, #f39c41);\n}\n.main-menu.menu-dark .navigation > li ul .active {\n  -webkit-box-shadow: transparent;\n}\n[dir] .main-menu.menu-dark .navigation > li ul .active {\n  -webkit-box-shadow: transparent;\n          box-shadow: transparent;\n  border-radius: 4px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.notShown[data-v-c0981ef4] {\n  visibility: hidden !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserListAddNew.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersListFilters.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=0&id=0020e840&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vehicle_categories.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=1&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=2&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=2&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vehicle_categories.vue?vue&type=style&index=2&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=2&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=3&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=3&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./vehicle_categories.vue?vue&type=style&index=3&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=style&index=3&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=style&index=0&id=c0981ef4&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=template&id=443bdc99&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/UserListAddNew.vue?vue&type=template&id=443bdc99& ***!
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
  return _c("b-sidebar", {
    attrs: {
      id: "add-new-user-sidebar",
      visible: _vm.isAddNewUserSidebarActive,
      "bg-variant": "white",
      "sidebar-class": "sidebar-lg",
      shadow: "",
      backdrop: "",
      "no-header": "",
      right: ""
    },
    on: {
      hidden: _vm.resetForm,
      change: function(val) {
        return _vm.$emit("update:is-add-new-user-sidebar-active", val)
      }
    },
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var hide = ref.hide
          return [
            _c(
              "div",
              {
                staticClass:
                  "d-flex justify-content-between align-items-center content-sidebar-header px-2 py-1"
              },
              [
                _c("h5", { staticClass: "mb-0" }, [
                  _vm._v("\n          Create Inventory\n        ")
                ]),
                _vm._v(" "),
                _c("feather-icon", {
                  staticClass: "ml-1 cursor-pointer",
                  attrs: { icon: "XIcon", size: "16" },
                  on: { click: hide }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c("validation-observer", {
              ref: "refFormObserver",
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function(ref) {
                      var handleSubmit = ref.handleSubmit
                      return [
                        _c(
                          "b-form",
                          {
                            staticClass: "p-2",
                            on: {
                              submit: [
                                function($event) {
                                  $event.preventDefault()
                                  return handleSubmit(_vm.onSubmit)
                                },
                                _vm.formSubmit
                              ],
                              reset: function($event) {
                                $event.preventDefault()
                                return _vm.resetForm($event)
                              }
                            }
                          },
                          [
                            _c("validation-provider", {
                              attrs: { name: "Vin Number", rules: "required" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(validationContext) {
                                      return [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              label: "Vin Number",
                                              "label-for": "vin-number"
                                            }
                                          },
                                          [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "full-name",
                                                autofocus: "",
                                                state: _vm.getValidationState(
                                                  validationContext
                                                ),
                                                trim: "",
                                                placeholder: ""
                                              },
                                              on: { focusout: _vm.vindecorder },
                                              model: {
                                                value: _vm.userData.vin_number,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.userData,
                                                    "vin_number",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "userData.vin_number"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-invalid-feedback", [
                                              _vm._v(
                                                "\n                " +
                                                  _vm._s(
                                                    validationContext.errors[0]
                                                  ) +
                                                  "\n              "
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            _c("validation-provider", {
                              attrs: {
                                name: "Year Make Model",
                                rules: "required"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(validationContext) {
                                      return [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              label: "Year | Make | model",
                                              "label-for": "year_make_model"
                                            }
                                          },
                                          [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "year_make_model",
                                                autofocus: "",
                                                trim: "",
                                                placeholder: "",
                                                readonly: "readonly"
                                              },
                                              model: {
                                                value:
                                                  _vm.userData.year_make_model,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.userData,
                                                    "year_make_model",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "userData.year_make_model"
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            _c("validation-provider", {
                              attrs: { name: "Driver Name", rules: "required" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(validationContext) {
                                      return [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              label: "Driver Name",
                                              "label-for": "driver-name"
                                            }
                                          },
                                          [
                                            _c("b-form-input", {
                                              attrs: {
                                                id: "full-name",
                                                autofocus: "",
                                                state: _vm.getValidationState(
                                                  validationContext
                                                ),
                                                trim: "",
                                                placeholder: ""
                                              },
                                              model: {
                                                value: _vm.userData.driver_name,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.userData,
                                                    "driver_name",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "userData.driver_name"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("b-form-invalid-feedback", [
                                              _vm._v(
                                                "\n                " +
                                                  _vm._s(
                                                    validationContext.errors[0]
                                                  ) +
                                                  "\n              "
                                              )
                                            ])
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            _c("validation-provider", {
                              attrs: {
                                name: "Company Name",
                                rules: "required"
                              },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(validationContext) {
                                      return [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              label: "Company Name",
                                              "label-for": "company-name",
                                              state: _vm.getValidationState(
                                                validationContext
                                              )
                                            }
                                          },
                                          [
                                            _c("v-select", {
                                              attrs: {
                                                dir: _vm.$store.state.appConfig
                                                  .isRTL
                                                  ? "rtl"
                                                  : "ltr",
                                                label: "title",
                                                options: _vm.option
                                              },
                                              model: {
                                                value: _vm.userData.companyName,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.userData,
                                                    "companyName",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "userData.companyName"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "b-form-invalid-feedback",
                                              {
                                                attrs: {
                                                  state: _vm.getValidationState(
                                                    validationContext
                                                  )
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                " +
                                                    _vm._s(
                                                      validationContext
                                                        .errors[0]
                                                    ) +
                                                    "\n              "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            _c("validation-provider", {
                              attrs: { name: "Customer", rules: "required" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "default",
                                    fn: function(validationContext) {
                                      return [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              label: "Customer",
                                              "label-for": "customer",
                                              state: _vm.getValidationState(
                                                validationContext
                                              )
                                            }
                                          },
                                          [
                                            _c("v-select", {
                                              attrs: {
                                                dir: _vm.$store.state.appConfig
                                                  .isRTL
                                                  ? "rtl"
                                                  : "ltr",
                                                label: "title",
                                                options:
                                                  _vm.customerswithcompany
                                              },
                                              model: {
                                                value:
                                                  _vm.userData.customerName,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.userData,
                                                    "customerName",
                                                    $$v
                                                  )
                                                },
                                                expression:
                                                  "userData.customerName"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "b-form-invalid-feedback",
                                              {
                                                attrs: {
                                                  state: _vm.getValidationState(
                                                    validationContext
                                                  )
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                " +
                                                    _vm._s(
                                                      validationContext
                                                        .errors[0]
                                                    ) +
                                                    "\n              "
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "form-grou" }, [
                              _c("label", [_vm._v("Note")]),
                              _vm._v(" "),
                              _c("textarea", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.userData.note,
                                    expression: "userData.note"
                                  }
                                ],
                                staticClass: "form-control",
                                domProps: { value: _vm.userData.note },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(
                                      _vm.userData,
                                      "note",
                                      $event.target.value
                                    )
                                  }
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "d-flex mt-2" },
                              [
                                _c(
                                  "b-button",
                                  {
                                    directives: [
                                      {
                                        name: "ripple",
                                        rawName: "v-ripple.400",
                                        value: "rgba(255, 255, 255, 0.15)",
                                        expression:
                                          "'rgba(255, 255, 255, 0.15)'",
                                        modifiers: { "400": true }
                                      }
                                    ],
                                    staticClass: "mr-2",
                                    attrs: {
                                      variant: "primary",
                                      type: "submit"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n              Submit\n            "
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
                                        value: "rgba(186, 191, 199, 0.15)",
                                        expression:
                                          "'rgba(186, 191, 199, 0.15)'",
                                        modifiers: { "400": true }
                                      }
                                    ],
                                    attrs: {
                                      type: "button",
                                      variant: "outline-secondary"
                                    },
                                    on: { click: hide }
                                  },
                                  [
                                    _vm._v(
                                      "\n              Cancel\n            "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    }
                  }
                ],
                null,
                true
              )
            }),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                attrs: {
                  id: "modal-1",
                  title: "Create New Customer",
                  "ok-only": "",
                  "ok-title": "Close"
                }
              },
              [
                _c(
                  "b-card-text",
                  [
                    _c("validation-observer", {
                      ref: "refFormObserver",
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var handleSubmit = ref.handleSubmit
                              return [
                                _c(
                                  "b-form",
                                  {
                                    staticClass: "p-2",
                                    on: {
                                      submit: [
                                        function($event) {
                                          $event.preventDefault()
                                          return handleSubmit(_vm.onSubmit)
                                        },
                                        _vm.customerformSubmit
                                      ],
                                      reset: function($event) {
                                        $event.preventDefault()
                                        return _vm.resetForm($event)
                                      }
                                    }
                                  },
                                  [
                                    _c(
                                      "b-row",
                                      [
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mb-md-0 mb-2",
                                            attrs: { cols: "12", md: "6" }
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "First Name",
                                                rules: "required"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label:
                                                                "First Name",
                                                              "label-for":
                                                                "first-name"
                                                            }
                                                          },
                                                          [
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                id: "full-name",
                                                                autofocus: "",
                                                                state: _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                                trim: "",
                                                                placeholder: ""
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.userData
                                                                    .first_name,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.userData,
                                                                    "first_name",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "userData.first_name"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              [
                                                                _vm._v(
                                                                  "\n                " +
                                                                    _vm._s(
                                                                      validationContext
                                                                        .errors[0]
                                                                    ) +
                                                                    "\n              "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
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
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mb-md-0 mb-2",
                                            attrs: { cols: "12", md: "6" }
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Last Name",
                                                rules: "required"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label:
                                                                "Last Name",
                                                              "label-for":
                                                                "last-name"
                                                            }
                                                          },
                                                          [
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                id: "full-name",
                                                                autofocus: "",
                                                                state: _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                                trim: "",
                                                                placeholder: ""
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.userData
                                                                    .last_name,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.userData,
                                                                    "last_name",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "userData.last_name"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              [
                                                                _vm._v(
                                                                  "\n                " +
                                                                    _vm._s(
                                                                      validationContext
                                                                        .errors[0]
                                                                    ) +
                                                                    "\n              "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
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
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mb-md-0 mb-2",
                                            attrs: { cols: "12", md: "6" }
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Email",
                                                rules: "required|email"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label: "Email",
                                                              "label-for":
                                                                "email"
                                                            }
                                                          },
                                                          [
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                id: "email",
                                                                state: _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                                trim: ""
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.userData
                                                                    .email,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.userData,
                                                                    "email",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "userData.email"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              [
                                                                _vm._v(
                                                                  "\n                " +
                                                                    _vm._s(
                                                                      validationContext
                                                                        .errors[0]
                                                                    ) +
                                                                    "\n              "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
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
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mb-md-0 mb-2",
                                            attrs: { cols: "12", md: "6" }
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Phone",
                                                rules: "required"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label: "Phone",
                                                              "label-for":
                                                                "phone"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "vue-country-code",
                                                              {
                                                                attrs: {
                                                                  preferredCountries: [
                                                                    "vn",
                                                                    "us",
                                                                    "gb"
                                                                  ]
                                                                },
                                                                on: {
                                                                  onSelect:
                                                                    _vm.onSelect
                                                                }
                                                              }
                                                            ),
                                                            _vm._v(" "),
                                                            _c("b-form-input", {
                                                              staticStyle: {
                                                                float: "right",
                                                                width: "70%"
                                                              },
                                                              attrs: {
                                                                id: "contact",
                                                                state: _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                                trim: ""
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.userData
                                                                    .contact,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.userData,
                                                                    "contact",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "userData.contact"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              [
                                                                _vm._v(
                                                                  "\n                " +
                                                                    _vm._s(
                                                                      validationContext
                                                                        .errors[0]
                                                                    ) +
                                                                    "\n              "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
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
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mb-md-0 mb-2",
                                            attrs: { cols: "12", md: "6" }
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Gender",
                                                rules: "required"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label: "Gender",
                                                              "label-for":
                                                                "gender",
                                                              state: _vm.getValidationState(
                                                                validationContext
                                                              )
                                                            }
                                                          },
                                                          [
                                                            _c("v-select", {
                                                              attrs: {
                                                                dir: _vm.$store
                                                                  .state
                                                                  .appConfig
                                                                  .isRTL
                                                                  ? "rtl"
                                                                  : "ltr",
                                                                label: "title",
                                                                options:
                                                                  _vm.gender
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.userData
                                                                    .gender,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.userData,
                                                                    "gender",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "userData.gender"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              {
                                                                attrs: {
                                                                  state: _vm.getValidationState(
                                                                    validationContext
                                                                  )
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                " +
                                                                    _vm._s(
                                                                      validationContext
                                                                        .errors[0]
                                                                    ) +
                                                                    "\n              "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
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
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mb-md-0 mb-2",
                                            attrs: { cols: "12", md: "6" }
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Customer",
                                                rules: "required"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label:
                                                                "Account Type",
                                                              "label-for":
                                                                "customer",
                                                              state: _vm.getValidationState(
                                                                validationContext
                                                              )
                                                            }
                                                          },
                                                          [
                                                            _c("v-select", {
                                                              attrs: {
                                                                dir: _vm.$store
                                                                  .state
                                                                  .appConfig
                                                                  .isRTL
                                                                  ? "rtl"
                                                                  : "ltr",
                                                                label: "title",
                                                                options:
                                                                  _vm.accounttype
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.userData
                                                                    .type,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.userData,
                                                                    "type",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "userData.type"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              {
                                                                attrs: {
                                                                  state: _vm.getValidationState(
                                                                    validationContext
                                                                  )
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                " +
                                                                    _vm._s(
                                                                      validationContext
                                                                        .errors[0]
                                                                    ) +
                                                                    "\n              "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
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
                                        _vm.showcompanyname
                                          ? _c(
                                              "b-col",
                                              {
                                                staticClass: "mb-md-0 mb-2",
                                                attrs: { cols: "12", md: "6" }
                                              },
                                              [
                                                _c("validation-provider", {
                                                  attrs: { name: "Customer" },
                                                  scopedSlots: _vm._u(
                                                    [
                                                      {
                                                        key: "default",
                                                        fn: function(
                                                          validationContext
                                                        ) {
                                                          return [
                                                            _c(
                                                              "b-form-group",
                                                              {
                                                                attrs: {
                                                                  label:
                                                                    "Company Name",
                                                                  "label-for":
                                                                    "customer",
                                                                  state: _vm.getValidationState(
                                                                    validationContext
                                                                  )
                                                                }
                                                              },
                                                              [
                                                                _c(
                                                                  "b-form-input",
                                                                  {
                                                                    attrs: {
                                                                      id:
                                                                        "contact",
                                                                      state: _vm.getValidationState(
                                                                        validationContext
                                                                      ),
                                                                      trim: ""
                                                                    },
                                                                    model: {
                                                                      value:
                                                                        _vm.companyname,
                                                                      callback: function(
                                                                        $$v
                                                                      ) {
                                                                        _vm.companyname = $$v
                                                                      },
                                                                      expression:
                                                                        "companyname"
                                                                    }
                                                                  }
                                                                )
                                                              ],
                                                              1
                                                            )
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
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mb-md-0 mb-2",
                                            attrs: { cols: "12", md: "6" }
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Customer",
                                                rules: "required"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label:
                                                                "Customer Type",
                                                              "label-for":
                                                                "customer",
                                                              state: _vm.getValidationState(
                                                                validationContext
                                                              )
                                                            }
                                                          },
                                                          [
                                                            _c("v-select", {
                                                              attrs: {
                                                                dir: _vm.$store
                                                                  .state
                                                                  .appConfig
                                                                  .isRTL
                                                                  ? "rtl"
                                                                  : "ltr",
                                                                label: "title",
                                                                options:
                                                                  _vm.customergroups
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.userData
                                                                    .role,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.userData,
                                                                    "role",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "userData.role"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              {
                                                                attrs: {
                                                                  state: _vm.getValidationState(
                                                                    validationContext
                                                                  )
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                " +
                                                                    _vm._s(
                                                                      validationContext
                                                                        .errors[0]
                                                                    ) +
                                                                    "\n              "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
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
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mb-md-0 mb-2",
                                            attrs: { cols: "12", md: "6" }
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Customer",
                                                rules: "required"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label: "Country",
                                                              "label-for":
                                                                "customer",
                                                              state: _vm.getValidationState(
                                                                validationContext
                                                              )
                                                            }
                                                          },
                                                          [
                                                            _c("v-select", {
                                                              attrs: {
                                                                dir: _vm.$store
                                                                  .state
                                                                  .appConfig
                                                                  .isRTL
                                                                  ? "rtl"
                                                                  : "ltr",
                                                                label: "title",
                                                                options:
                                                                  _vm.countrylist
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.userData
                                                                    .country,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.userData,
                                                                    "country",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "userData.country"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              {
                                                                attrs: {
                                                                  state: _vm.getValidationState(
                                                                    validationContext
                                                                  )
                                                                }
                                                              },
                                                              [
                                                                _vm._v(
                                                                  "\n                " +
                                                                    _vm._s(
                                                                      validationContext
                                                                        .errors[0]
                                                                    ) +
                                                                    "\n              "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
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
                                        _c(
                                          "b-col",
                                          {
                                            staticClass: "mb-md-0 mb-2",
                                            attrs: { cols: "12", md: "6" }
                                          },
                                          [
                                            _c("validation-provider", {
                                              attrs: {
                                                name: "Address",
                                                rules: "required"
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "default",
                                                    fn: function(
                                                      validationContext
                                                    ) {
                                                      return [
                                                        _c(
                                                          "b-form-group",
                                                          {
                                                            attrs: {
                                                              label: "Address",
                                                              "label-for":
                                                                "address"
                                                            }
                                                          },
                                                          [
                                                            _c("b-form-input", {
                                                              attrs: {
                                                                id: "contact",
                                                                state: _vm.getValidationState(
                                                                  validationContext
                                                                ),
                                                                trim: ""
                                                              },
                                                              model: {
                                                                value:
                                                                  _vm.userData
                                                                    .address,
                                                                callback: function(
                                                                  $$v
                                                                ) {
                                                                  _vm.$set(
                                                                    _vm.userData,
                                                                    "address",
                                                                    $$v
                                                                  )
                                                                },
                                                                expression:
                                                                  "userData.address"
                                                              }
                                                            }),
                                                            _vm._v(" "),
                                                            _c(
                                                              "b-form-invalid-feedback",
                                                              [
                                                                _vm._v(
                                                                  "\n                " +
                                                                    _vm._s(
                                                                      validationContext
                                                                        .errors[0]
                                                                    ) +
                                                                    "\n              "
                                                                )
                                                              ]
                                                            )
                                                          ],
                                                          1
                                                        )
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
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "d-flex mt-2" },
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            directives: [
                                              {
                                                name: "ripple",
                                                rawName: "v-ripple.400",
                                                value:
                                                  "rgba(255, 255, 255, 0.15)",
                                                expression:
                                                  "'rgba(255, 255, 255, 0.15)'",
                                                modifiers: { "400": true }
                                              }
                                            ],
                                            staticClass: "mr-2",
                                            attrs: {
                                              variant: "primary",
                                              type: "submit"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n              Submit\n            "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
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
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "b-modal",
              {
                attrs: {
                  id: "modal-2",
                  title: "Company Name",
                  "ok-only": "",
                  "ok-title": "Close"
                }
              },
              [
                _c(
                  "b-card-text",
                  [
                    _c("validation-observer", {
                      ref: "refFormObserver",
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var handleSubmit = ref.handleSubmit
                              return [
                                _c(
                                  "b-form",
                                  {
                                    staticClass: "p-2",
                                    on: {
                                      submit: [
                                        function($event) {
                                          $event.preventDefault()
                                          return handleSubmit(_vm.onSubmit)
                                        },
                                        _vm.createnewcompany
                                      ],
                                      reset: function($event) {
                                        $event.preventDefault()
                                        return _vm.resetForm($event)
                                      }
                                    }
                                  },
                                  [
                                    _c("validation-provider", {
                                      attrs: {
                                        name: "Type Company Name",
                                        rules: "required"
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "default",
                                            fn: function(validationContext) {
                                              return [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      label:
                                                        "Type Company Name",
                                                      "label-for": "first-name"
                                                    }
                                                  },
                                                  [
                                                    _c("b-form-input", {
                                                      attrs: {
                                                        id: "full-name",
                                                        autofocus: "",
                                                        state: _vm.getValidationState(
                                                          validationContext
                                                        ),
                                                        trim: "",
                                                        placeholder: ""
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.userData.company,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.userData,
                                                            "company",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "userData.company"
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          "\n                " +
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            ) +
                                                            "\n              "
                                                        )
                                                      ]
                                                    )
                                                  ],
                                                  1
                                                )
                                              ]
                                            }
                                          }
                                        ],
                                        null,
                                        true
                                      )
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "d-flex mt-2" },
                                      [
                                        _c(
                                          "b-button",
                                          {
                                            directives: [
                                              {
                                                name: "ripple",
                                                rawName: "v-ripple.400",
                                                value:
                                                  "rgba(255, 255, 255, 0.15)",
                                                expression:
                                                  "'rgba(255, 255, 255, 0.15)'",
                                                modifiers: { "400": true }
                                              }
                                            ],
                                            staticClass: "mr-2",
                                            attrs: {
                                              variant: "primary",
                                              type: "submit"
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n              Submit\n            "
                                            )
                                          ]
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
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
                )
              ],
              1
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=template&id=c0981ef4&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/UsersListFilters.vue?vue&type=template&id=c0981ef4&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      _c("b-card-header", { staticClass: "pb-50" }, [
        _c("h5", [_vm._v("\n        Filters\n      ")])
      ]),
      _vm._v(" "),
      _c(
        "b-card-body",
        [
          _c(
            "b-row",
            [
              _c(
                "b-col",
                {
                  staticClass: "mb-md-0 mb-2 ",
                  attrs: { cols: "12", md: "4" }
                },
                [
                  _c("label", [_vm._v("Date From")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "date", name: "date_from" }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass: "mb-md-0 mb-2 ",
                  attrs: { cols: "12", md: "4" }
                },
                [
                  _c("label", [_vm._v("Date To")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "date", name: "date_to" }
                  })
                ]
              ),
              _vm._v(" "),
              _c(
                "b-col",
                {
                  staticClass: "mb-md-0 mb-2 ",
                  attrs: { cols: "12", md: "4" }
                },
                [
                  _c("label", [_vm._v("Keyword")]),
                  _vm._v(" "),
                  _c("input", {
                    staticClass: "form-control",
                    attrs: { type: "text", name: "keyword" }
                  })
                ]
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
                {
                  staticClass: "mb-md-0 mb-2 mt-2",
                  attrs: { cols: "12", md: "4" }
                },
                [
                  _c("label", [_vm._v("Customer")]),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("v-select", {
                        attrs: {
                          dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                          label: "title",
                          options: _vm.Customerslist
                        },
                        model: {
                          value: _vm.selected,
                          callback: function($$v) {
                            _vm.selected = $$v
                          },
                          expression: "selected"
                        }
                      })
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
                  staticClass: "mb-md-0 mb-2 mt-2",
                  attrs: { cols: "12", md: "4" }
                },
                [
                  _c("label", [_vm._v("Status")]),
                  _vm._v(" "),
                  _c(
                    "b-form-group",
                    [
                      _c("v-select", {
                        attrs: {
                          dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                          label: "title",
                          options: _vm.statuslist
                        },
                        model: {
                          value: _vm.selected,
                          callback: function($$v) {
                            _vm.selected = $$v
                          },
                          expression: "selected"
                        }
                      })
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
                  staticClass: "mb-md-0 mb-2 mt-2",
                  attrs: { cols: "12", md: "4" }
                },
                [
                  _c("input", {
                    staticClass: "btn btn-primary mt-2",
                    attrs: { type: "submit", name: "submit", value: "Submit" }
                  })
                ]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=template&id=0020e840&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/vehicle-categories/vehicle_categories.vue?vue&type=template&id=0020e840&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
      _c("user-list-add-new", {
        attrs: {
          "is-add-new-user-sidebar-active": _vm.isAddNewUserSidebarActive,
          "role-options": _vm.roleOptions,
          "plan-options": _vm.planOptions
        },
        on: {
          "update:isAddNewUserSidebarActive": function($event) {
            _vm.isAddNewUserSidebarActive = $event
          },
          "update:is-add-new-user-sidebar-active": function($event) {
            _vm.isAddNewUserSidebarActive = $event
          },
          "refetch-data": _vm.refetchData
        }
      }),
      _vm._v(" "),
      _c(
        "b-card",
        { staticClass: "mb-0", attrs: { "no-body": "" } },
        [
          _c(
            "div",
            { staticClass: "m-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-start mb-1 mb-md-0",
                      attrs: { cols: "12", md: "5" }
                    },
                    [
                      _c("label", [_vm._v("Show")]),
                      _vm._v(" "),
                      _c("v-select", {
                        staticClass: "per-page-selector d-inline-block mx-50",
                        attrs: {
                          dir: _vm.$store.state.appConfig.isRTL ? "rtl" : "ltr",
                          options: _vm.perPageOptions,
                          clearable: false
                        },
                        model: {
                          value: _vm.perPage,
                          callback: function($$v) {
                            _vm.perPage = $$v
                          },
                          expression: "perPage"
                        }
                      }),
                      _vm._v(" "),
                      _c("label", [_vm._v("entries")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "12", md: "7" } }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "d-flex align-items-center justify-content-end"
                      },
                      [
                        _c("b-form-input", {
                          staticClass: "d-inline-block mr-1",
                          attrs: { placeholder: "Search..." },
                          model: {
                            value: _vm.searchQuery,
                            callback: function($$v) {
                              _vm.searchQuery = $$v
                            },
                            expression: "searchQuery"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "btn btn-primary w-100",
                            attrs: { to: "/create-vehicle-categories" }
                          },
                          [_vm._v("Create Vehicle Category")]
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
          _c("b-table", {
            ref: "refUserListTable",
            staticClass: "position-relative",
            attrs: {
              items: _vm.fetchUsers,
              responsive: "",
              fields: _vm.tableColumns,
              "primary-key": "id",
              "sort-by": _vm.sortBy,
              "show-empty": "",
              "empty-text": "No matching records found",
              "sort-desc": _vm.isSortDirDesc
            },
            on: {
              "update:sortBy": function($event) {
                _vm.sortBy = $event
              },
              "update:sort-by": function($event) {
                _vm.sortBy = $event
              },
              "update:sortDesc": function($event) {
                _vm.isSortDirDesc = $event
              },
              "update:sort-desc": function($event) {
                _vm.isSortDirDesc = $event
              }
            },
            scopedSlots: _vm._u([
              {
                key: "cell(sr)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "text-nowrap" }, [
                      _vm._v("\n            1\n            ")
                    ])
                  ]
                }
              },
              {
                key: "cell(category)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "text-nowrap" }, [
                      _vm._v("Small Sedans")
                    ])
                  ]
                }
              },
              {
                key: "cell(basis)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "text-nowrap" }, [
                      _vm._v("Dimensions")
                    ])
                  ]
                }
              },
              {
                key: "cell(part)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "text-nowrap" }, [_vm._v("Width")])
                  ]
                }
              },
              {
                key: "cell(unit)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "text-nowrap" }, [
                      _vm._v("Pounds")
                    ])
                  ]
                }
              },
              {
                key: "cell(operator)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "text-nowrap" }, [_vm._v(">=")])
                  ]
                }
              },
              {
                key: "cell(value)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "text-nowrap" }, [
                      _vm._v("1212.12")
                    ])
                  ]
                }
              },
              {
                key: "cell(and_or)",
                fn: function(data) {
                  return [
                    _c("div", { staticClass: "text-nowrap" }, [_vm._v("AND")])
                  ]
                }
              },
              {
                key: "cell(actions)",
                fn: function(data) {
                  return [
                    _c(
                      "b-dropdown",
                      {
                        attrs: {
                          variant: "link",
                          "no-caret": "",
                          right: _vm.$store.state.appConfig.isRTL
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "button-content",
                              fn: function() {
                                return [
                                  _c("feather-icon", {
                                    staticClass: "align-middle text-body",
                                    attrs: {
                                      icon: "MoreVerticalIcon",
                                      size: "16"
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
                        _c(
                          "b-dropdown-item",
                          {
                            attrs: {
                              to: {
                                name: "apps-users-edit",
                                params: { id: data.item.id }
                              }
                            }
                          },
                          [
                            _c("feather-icon", { attrs: { icon: "EditIcon" } }),
                            _vm._v(" "),
                            _c("span", { staticClass: "align-middle ml-50" }, [
                              _vm._v("Edit")
                            ])
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-dropdown-item",
                          [
                            _c("feather-icon", {
                              attrs: { icon: "TrashIcon" }
                            }),
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
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "mx-2 mb-2" },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-center justify-content-sm-start",
                      attrs: { cols: "12", sm: "6" }
                    },
                    [
                      _c("span", { staticClass: "text-muted" }, [
                        _vm._v(
                          "Showing " +
                            _vm._s(_vm.dataMeta.from) +
                            " to " +
                            _vm._s(_vm.dataMeta.to) +
                            " of " +
                            _vm._s(_vm.dataMeta.of) +
                            " entries"
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-center justify-content-sm-end",
                      attrs: { cols: "12", sm: "6" }
                    },
                    [
                      _c("b-pagination", {
                        staticClass: "mb-0 mt-1 mt-sm-0",
                        attrs: {
                          "total-rows": _vm.totalUsers,
                          "per-page": _vm.perPage,
                          "first-number": "",
                          "last-number": "",
                          "prev-class": "prev-item",
                          "next-class": "next-item"
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "prev-text",
                            fn: function() {
                              return [
                                _c("feather-icon", {
                                  attrs: { icon: "ChevronLeftIcon", size: "18" }
                                })
                              ]
                            },
                            proxy: true
                          },
                          {
                            key: "next-text",
                            fn: function() {
                              return [
                                _c("feather-icon", {
                                  attrs: {
                                    icon: "ChevronRightIcon",
                                    size: "18"
                                  }
                                })
                              ]
                            },
                            proxy: true
                          }
                        ]),
                        model: {
                          value: _vm.currentPage,
                          callback: function($$v) {
                            _vm.currentPage = $$v
                          },
                          expression: "currentPage"
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
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);