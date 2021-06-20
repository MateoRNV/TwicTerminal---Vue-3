(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[138],{

/***/ "./frontend/src/@core/components/b-card-code/index.js":
/*!************************************************************!*\
  !*** ./frontend/src/@core/components/b-card-code/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BCardCode.vue */ "./frontend/src/@core/components/b-card-code/BCardCode.vue");

/* harmony default export */ __webpack_exports__["default"] = (_BCardCode_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/***/ "./frontend/src/views/inventory/inventory-list/code.js":
/*!*************************************************************!*\
  !*** ./frontend/src/views/inventory/inventory-list/code.js ***!
  \*************************************************************/
/*! exports provided: codeSimple, codeMultiple, codeType, codePlaceholder, codePlaceholderArgument, codeLocale, codeExtended */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSimple", function() { return codeSimple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeMultiple", function() { return codeMultiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeType", function() { return codeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codePlaceholder", function() { return codePlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codePlaceholderArgument", function() { return codePlaceholderArgument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeLocale", function() { return codeLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeExtended", function() { return codeExtended; });
var codeSimple = "\n<template>\n  <!-- form -->\n  <validation-observer ref=\"simpleRules\">\n    <b-form>\n      <b-row>\n        <b-col md=\"6\">\n          <b-form-group>\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"First Name\"\n              rules=\"required\"\n            >\n              <b-form-input\n                v-model=\"name\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"First Name\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n        <b-col md=\"6\">\n          <b-form-group>\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"Email\"\n              rules=\"required|email\"\n            >\n              <b-form-input\n                v-model=\"emailValue\"\n                :state=\"errors.length > 0 ? false:null\"\n                type=\"email\"\n                placeholder=\"Email\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n        <b-col cols=\"12\">\n          <b-button\n            variant=\"primary\"\n            type=\"submit\"\n            @click.prevent=\"validationForm\"\n          >\n            Submit\n          </b-button>\n        </b-col>\n      </b-row>\n    </b-form>\n  </validation-observer>\n</template>\n\n<script>\nimport { ValidationProvider, ValidationObserver } from 'vee-validate'\nimport {\n  BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText,\n} from 'bootstrap-vue'\nimport { required, email } from '@validations'\n\nexport default {\n  components: {\n    ValidationProvider,\n    ValidationObserver,\n    BCardText,\n    BFormInput,\n    BFormGroup,\n    BForm,\n    BRow,\n    BCol,\n    BButton,\n  },\n  data() {\n    return {\n      emailValue: '',\n      name: '',\n      required,\n      email,\n    }\n  },\n  methods: {\n    validationForm() {\n      this.$refs.simpleRules.validate().then(success => {\n        if (success) {\n          // eslint-disable-next-line\n          alert('form submitted!')\n        }\n      })\n    },\n  },\n}\n</script>\n";
var codeMultiple = "\n<template>\n  <validation-observer ref=\"simpleRules\">\n    <b-form>\n      <b-row>\n        <b-col md=\"6\">\n          <b-form-group>\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"Name\"\n              rules=\"required\"\n            >\n              <b-form-input\n                v-model=\"name\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Your Name\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n        <b-col md=\"6\">\n          <b-form-group>\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"Email\"\n              rules=\"required|email\"\n            >\n              <b-form-input\n                v-model=\"emailValue\"\n                :state=\"errors.length > 0 ? false:null\"\n                type=\"email\"\n                placeholder=\"Your Email\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n        <b-col md=\"6\">\n          <b-form-group>\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"Password\"\n              vid=\"Password\"\n              rules=\"required|password\"\n            >\n              <b-form-input\n                v-model=\"PasswordValue\"\n                type=\"password\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Your Password\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n        <b-col md=\"6\">\n          <b-form-group>\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"Password Confirm\"\n              rules=\"required|confirmed:Password\"\n            >\n              <b-form-input\n                v-model=\"passwordCon\"\n                :state=\"errors.length > 0 ? false:null\"\n                type=\"password\"\n                placeholder=\"Confirm Password\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- submit button -->\n        <b-col>\n          <b-button\n            variant=\"primary\"\n            type=\"submit\"\n            @click.prevent=\"validationForm\"\n          >\n            Submit\n          </b-button>\n        </b-col>\n      </b-row>\n    </b-form>\n  </validation-observer>\n</template>\n\n<script>\nimport { ValidationProvider, ValidationObserver } from 'vee-validate'\nimport {\n  BFormInput, BFormGroup, BForm, BRow, BCol, BButton,\n} from 'bootstrap-vue'\nimport {\n  required, email, confirmed, password,\n} from '@validations'\n\nexport default {\n  components: {\n    ValidationProvider,\n    ValidationObserver,\n    BFormInput,\n    BFormGroup,\n    BForm,\n    BRow,\n    BCol,\n    BButton,\n  },\n  data() {\n    return {\n      emailValue: '',\n      name: '',\n      PasswordValue: '',\n      passwordCon: '',\n      required,\n      password,\n      email,\n      confirmed,\n    }\n  },\n  methods: {\n    validationForm() {\n      this.$refs.simpleRules.validate().then(success => {\n        if (success) {\n          // eslint-disable-next-line\n          alert('form submitted!')\n        }\n      })\n    },\n  },\n}\n</script>\n";
var codeType = "\n<template>\n  <validation-observer ref=\"simpleRules\">\n    <b-form>\n      <b-row>\n\n        <!--  This field is required-->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>This field is required</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              rules=\"required\"\n              name=\"First Name\"\n            >\n              <b-form-input\n                v-model=\"name\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Fist Name\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!--Enter Number between 10 & 20 -->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>Enter Number between 10 & 20</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              rules=\"required|between:10,20\"\n              name=\"Number between\"\n            >\n              <b-form-input\n                v-model=\"numberRange\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Enter Number between 10 & 20\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- Must only consist of numbers-->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>Must only consist of numbers</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              rules=\"required|integer\"\n              name=\"Number\"\n            >\n              <b-form-input\n                v-model=\"number\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Enter Number Only\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- Must match the specified regular expression : ^([0-9]+)$ - numbers only -->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>Must match the specified regular expression : ^([0-9]+)$ - numbers only</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              rules=\"required|regex:^([0-9]+)$\"\n              name=\"Regex\"\n            >\n              <b-form-input\n                v-model=\"numberRegx\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Enter Specified regular expression\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!--  Only alphabetic characters-->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>Only alphabetic characters</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              rules=\"required|alpha\"\n              name=\"Alpha\"\n            >\n              <b-form-input\n                v-model=\"Alphabetic\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Enter Character Only\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- Length should not be less than the specified length : 3 -->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>Length should not be less than the specified length : 3</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              rules=\"required|min:3\"\n              name=\"Min Character\"\n            >\n              <b-form-input\n                v-model=\"digitValue\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Enter minimum 3 Characters\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!--Password Input Field -->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>Password Input Field</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              rules=\"required|password\"\n              name=\"password\"\n              vid=\"password\"\n            >\n              <b-form-input\n                v-model=\"passwordValue\"\n                type=\"password\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Password\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- The digits field must be numeric and exactly contain 3 digits -->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>The digits field must be numeric and exactly contain 3 digits</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              rules=\"required|digits:3\"\n              name=\"Numeric\"\n            >\n              <b-form-input\n                v-model=\"digitValue2\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Enter Exactyly 3 digit\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!--Repeat password must match  -->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>Repeat password must match</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              rules=\"required|confirmed:password\"\n              name=\"Confirm Password\"\n            >\n              <b-form-input\n                v-model=\"passwordCon\"\n                type=\"password\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Repeat Password\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!--Only alphabetic characters, numbers, dashes or underscores -->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>Only alphabetic characters, numbers, dashes or underscores</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              rules=\"required|alpha-dash\"\n              name=\"All Character\"\n            >\n              <b-form-input\n                v-model=\"character\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Enter Character, Numbers, Dash, Underscores\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- Must be a valid email -->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>Must be a valid email</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"Email\"\n              rules=\"required|email\"\n            >\n              <b-form-input\n                v-model=\"emailValue\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Email\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!--Must be a valid url  -->\n        <b-col md=\"6\">\n          <b-form-group>\n            <label>Must be a valid url</label>\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"URL\"\n              rules=\"required|url\"\n            >\n              <b-form-input\n                v-model=\"URL\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Enter Valid URL\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- submit button -->\n        <b-col cols=\"12\">\n          <b-button\n            variant=\"primary\"\n            type=\"submit\"\n            @click.prevent=\"validationForm\"\n          >\n            Submit\n          </b-button>\n        </b-col>\n      </b-row>\n    </b-form>\n  </validation-observer>\n</template>\n\n<script>\nimport { ValidationProvider, ValidationObserver } from 'vee-validate'\nimport {\n  BFormInput, BFormGroup, BForm, BRow, BCol, BButton,\n} from 'bootstrap-vue'\nimport {\n  required, email, confirmed, url, between, alpha, integer, password, min, digits, alphaDash, length,\n} from '@validations'\n\nexport default {\n  components: {\n    ValidationProvider,\n    ValidationObserver,\n    BFormInput,\n    BFormGroup,\n    BForm,\n    BRow,\n    BCol,\n    BButton,\n  },\n  data() {\n    return {\n      name: '',\n      passwordValue: '',\n      passwordCon: '',\n      emailValue: '',\n      number: '',\n      numberRange: '',\n      numberRegx: '',\n      URL: '',\n      Alphabetic: '',\n      digitValue: '',\n      digitValue2: '',\n      character: '',\n      required,\n      confirmed,\n      password,\n      email,\n      min,\n      integer,\n      url,\n      alpha,\n      between,\n      digits,\n      length,\n      alphaDash,\n    }\n  },\n  methods: {\n    validationForm() {\n      this.$refs.simpleRules.validate().then(success => {\n        if (success) {\n          // eslint-disable-next-line\n          alert('form submitted!')\n        }\n      })\n    },\n  },\n}\n</script>\n";
var codePlaceholder = "\n<template>\n  <validation-observer ref=\"simpleRules\">\n    <b-form>\n      <b-row>\n\n        <!-- username -->\n        <b-col cols=\"12\">\n          <b-form-group\n            label=\"Username\"\n            label-for=\"username\"\n          >\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"Username\"\n              rules=\"required\"\n            >\n              <b-form-input\n                id=\"username\"\n                v-model=\"username\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Username\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- password -->\n        <b-col cols=\"12\">\n          <b-form-group\n            label=\"Password\"\n            label-for=\"password\"\n          >\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"Password\"\n              rules=\"required\"\n            >\n              <b-form-input\n                id=\"password\"\n                v-model=\"passValue\"\n                type=\"password\"\n                :state=\"errors.length > 0 ? false:null\"\n                placeholder=\"Password\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- login button -->\n        <b-col cols=\"12\">\n          <b-button\n            variant=\"primary\"\n            type=\"submit\"\n            @click.prevent=\"validationForm\"\n          >\n            Login\n          </b-button>\n        </b-col>\n      </b-row>\n    </b-form>\n  </validation-observer>\n</template>\n\n<script>\nimport { ValidationProvider, ValidationObserver } from 'vee-validate'\nimport {BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText,} from 'bootstrap-vue'\nimport { required } from '@validations'\n\nexport default {\n  components: {\n    ValidationProvider,\n    ValidationObserver,\n    BFormInput,\n    BFormGroup,\n    BCardText,\n    BForm,\n    BRow,\n    BCol,\n    BButton,\n  },\n  data() {\n    return {\n      passValue: '',\n      username: '',\n      required,\n    }\n  },\n  methods: {\n    validationForm() {\n      this.$refs.simpleRules.validate().then(success => {\n        if (success) {\n          // eslint-disable-next-line\n          alert('login successfully')\n        }\n      })\n    },\n  },\n}\n</script>\n";
var codePlaceholderArgument = "\n<template>\n  <validation-observer ref=\"simpleRules\">\n    <b-form>\n      <b-row>\n\n        <!-- password -->\n        <b-col cols=\"12\">\n          <b-form-group\n            label=\"Password\"\n            label-for=\"a-password\"\n          >\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"Password\"\n              vid=\"Password\"\n              rules=\"required|min:8|password\"\n            >\n              <b-form-input\n                id=\"a-password\"\n                v-model=\"username\"\n                :state=\"errors.length > 0 ? false:null\"\n                type=\"password\"\n                placeholder=\"Password\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- confirm password -->\n        <b-col cols=\"12\">\n          <b-form-group\n            label=\"Confirm Password\"\n            label-for=\"ac-password\"\n          >\n            <validation-provider\n              #default=\"{ errors }\"\n              name=\"Confirm Password\"\n              rules=\"required|confirmed:Password\"\n            >\n\n              <b-form-input\n                id=\"ac-password\"\n                v-model=\"passValue\"\n                :state=\"errors.length > 0 ? false:null\"\n                type=\"password\"\n                placeholder=\"Confirm Password\"\n              />\n              <small class=\"text-danger\">{{ errors[0] }}</small>\n            </validation-provider>\n          </b-form-group>\n        </b-col>\n\n        <!-- reset button -->\n        <b-col cols=\"12\">\n          <b-button\n            variant=\"primary\"\n            type=\"submit\"\n            @click.prevent=\"validationForm\"\n          >\n            Reset\n          </b-button>\n        </b-col>\n      </b-row>\n    </b-form>\n  </validation-observer>\n</template>\n\n<script>\nimport { ValidationProvider, ValidationObserver } from 'vee-validate'\nimport {\n  BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText,\n} from 'bootstrap-vue'\nimport {\n  required, min, confirmed,\n} from '@validations'\n\nexport default {\n  components: {\n    ValidationProvider,\n    ValidationObserver,\n    BCardText,\n    BFormInput,\n    BFormGroup,\n    BForm,\n    BRow,\n    BCol,\n    BButton,\n  },\n  data() {\n    return {\n      passValue: '',\n      username: '',\n      required,\n      min,\n      confirmed,\n      codePlaceholderArgument,\n    }\n  },\n  methods: {\n    validationForm() {\n      this.$refs.simpleRules.validate().then(success => {\n        if (success) {\n          // eslint-disable-next-line\n          alert('password reset!')\n        }\n      })\n    },\n  },\n}\n</script>\n";
var codeLocale = "\n<template>\n  <validation-observer ref=\"form\">\n    <b-row>\n      <b-col md=\"6\">\n        <b-form-group>\n          <validation-provider\n            #default=\"{ errors }\"\n            name=\"email\"\n            rules=\"required|email\"\n          >\n            <b-form-input\n              v-model=\"email\"\n              type=\"email\"\n              :state=\"errors.length > 0 ? false:null\"\n              placeholder=\"Email\"\n            />\n            <small class=\"text-danger\">{{ errors[0] }}</small>\n          </validation-provider>\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group>\n          <validation-provider\n            #default=\"{ errors }\"\n            name=\"password\"\n            rules=\"required|min:6\"\n          >\n            <b-form-input\n              v-model=\"passwordValue\"\n              type=\"password\"\n              :state=\"errors.length > 0 ? false:null\"\n              placeholder=\"Password\"\n            />\n            <small class=\"text-danger\">{{ errors[0] }}</small>\n          </validation-provider>\n        </b-form-group>\n      </b-col>\n    </b-row>\n  </validation-observer>\n</template>\n\n<script>\nimport {\n  BFormInput, BFormGroup, BButton, BRow, BCol, BCardText,\n} from 'bootstrap-vue'\nimport { ValidationProvider, ValidationObserver, localize } from 'vee-validate'\nimport { password, required } from '@validations'\n\nexport default {\n  components: {\n    BFormInput,\n    BFormGroup,\n    BButton,\n    BCardText,\n    BRow,\n    BCol,\n    ValidationProvider,\n    ValidationObserver,\n  },\n  data() {\n    return {\n      // ? Default locale for VeeValidate is 'en'\n      locale: 'en',\n      email: '',\n      passwordValue: '',\n      password,\n      required,\n    }\n  },\n  methods: {\n    switchLoc() {\n      // switch the locale.\n      this.locale = this.locale === 'en' ? 'ar' : 'en'\n      localize(this.locale)\n\n      // re-validate to re-generate the messages.\n      this.$refs.form.validate()\n    },\n  },\n}\n</script>\n";
var codeExtended = "\n<template>\n  <div>\n    <b-row>\n\n      <!-- code -->\n      <b-col md=\"6\">\n        <prism\n          language=\"javascript\"\n          class=\"rounded \"\n        >\n          {{ codeCredit }}\n        </prism>\n      </b-col>\n\n      <!-- ciode -->\n      <b-col md=\"6\">\n        <prism\n          language=\"javascript\"\n          class=\"rounded mb-2\"\n        >\n          {{ codePositive }}\n        </prism>\n      </b-col>\n    </b-row>\n\n    <!-- form -->\n    <validation-observer ref=\"simpleRules\">\n      <b-form>\n        <b-row>\n          <b-col md=\"6\">\n            <b-form-group label=\"Credit Card\">\n              <validation-provider\n                #default=\"{ errors }\"\n                name=\"Credit Card\"\n                rules=\"required|credit-card\"\n              >\n                <b-form-input\n                  v-model=\"cardNUm\"\n                  :state=\"errors.length > 0 ? false:null\"\n                  placeholder=\"Credit Card Number\"\n                />\n                <small class=\"text-danger\">{{ errors[0] }}</small>\n              </validation-provider>\n            </b-form-group>\n          </b-col>\n          <b-col md=\"6\">\n            <b-form-group label=\"Enter Only Positive Number\">\n              <validation-provider\n                #default=\"{ errors }\"\n                name=\"Number\"\n                rules=\"required|positive\"\n              >\n                <b-form-input\n                  v-model=\"posNum\"\n                  :state=\"errors.length > 0 ? false:null\"\n                  placeholder=\"Positive Number\"\n                />\n                <small class=\"text-danger\">{{ errors[0] }}</small>\n              </validation-provider>\n            </b-form-group>\n          </b-col>\n        </b-row>\n\n        <!-- submit button -->\n        <b-form-group>\n          <b-button\n            type=\"submit\"\n            variant=\"primary\"\n            @click.prevent=\"validationForm\"\n          >\n            Submit\n          </b-button>\n        </b-form-group>\n      </b-form>\n    </validation-observer>\n  </div>\n</template>\n\n<script>\nimport { ValidationProvider, ValidationObserver } from 'vee-validate'\nimport {\n  BFormInput, BFormGroup, BForm, BButton, BRow, BCol, BCardText,\n} from 'bootstrap-vue'\nimport 'prismjs'\nimport 'prismjs/themes/prism-tomorrow.css'\nimport Prism from 'vue-prism-component'\n\nexport default {\n  components: {\n    ValidationProvider,\n    ValidationObserver,\n    BFormInput,\n    BFormGroup,\n    BCardText,\n    BForm,\n    BRow,\n    BCol,\n    BButton,\n    Prism,\n  },\n  data() {\n    return {\n      cardNUm: '',\n      posNum: '',\n      codeCredit: `export const credit = extend('credit', {\n    validate: validatorCreditCard,\n    message: 'Please enter positive number!',\n  })\n\n  export const validatorCreditCard = creditnum => {\n  /* eslint-disable no-useless-escape */\n  const cRegExp = /^(?:3[47][0-9]{13})$/\n  /* eslint-enable no-useless-escape */\n  const validCreditCard = cRegExp.test(creditnum)\n  return validCreditCard\n  }`,\n      codePositive: `export const positive = extend('positive', {\n  validate: validatorPositive,\n  message: 'Please enter positive number!',\n  })\n\n  export const validatorPositive = value => {\n  if (value >= 0) {\n    return true\n  }\n  return false\n  }\n  `,\n    }\n  },\n  methods: {\n    validationForm() {\n      this.$refs.simpleRules.validate().then(success => {\n        if (success) {\n        // eslint-disable-next-line\n          alert('form submitted!')\n        }\n      })\n    },\n  },\n}\n</script>\n";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/inventory/inventory-list/InventoryView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./frontend/src/@core/components/b-card-code/index.js");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate */ "./frontend/node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @validations */ "./frontend/src/@core/utils/validations/validations.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./frontend/src/views/inventory/inventory-list/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BCardCode: _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__["default"],
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormInput"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BFormGroup"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BForm"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BButton"]
  },
  data: function data() {
    return {
      emailValue: '',
      name: '',
      PasswordValue: '',
      passwordCon: '',
      required: _validations__WEBPACK_IMPORTED_MODULE_3__["required"],
      password: _validations__WEBPACK_IMPORTED_MODULE_3__["password"],
      email: _validations__WEBPACK_IMPORTED_MODULE_3__["email"],
      confirmed: _validations__WEBPACK_IMPORTED_MODULE_3__["confirmed"],
      codeMultiple: _code__WEBPACK_IMPORTED_MODULE_4__["codeMultiple"]
    };
  },
  methods: {
    validationForm: function validationForm() {
      this.$refs.simpleRules.validate().then(function (success) {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!');
        }
      });
    }
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
    "b-card-code",
    {
      attrs: { title: "Validating Multiple Rules" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function() {
            return [_vm._v("\n    " + _vm._s(_vm.codeMultiple) + "\n  ")]
          },
          proxy: true
        }
      ])
    },
    [
      _c(
        "validation-observer",
        { ref: "simpleRules" },
        [
          _c(
            "b-form",
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        [
                          _c("validation-provider", {
                            attrs: { name: "Name", rules: "required" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("b-form-input", {
                                      attrs: {
                                        state: errors.length > 0 ? false : null,
                                        placeholder: "Your Name"
                                      },
                                      model: {
                                        value: _vm.name,
                                        callback: function($$v) {
                                          _vm.name = $$v
                                        },
                                        expression: "name"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    )
                                  ]
                                }
                              }
                            ])
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
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        [
                          _c("validation-provider", {
                            attrs: { name: "Email", rules: "required|email" },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("b-form-input", {
                                      attrs: {
                                        state: errors.length > 0 ? false : null,
                                        type: "email",
                                        placeholder: "Your Email"
                                      },
                                      model: {
                                        value: _vm.emailValue,
                                        callback: function($$v) {
                                          _vm.emailValue = $$v
                                        },
                                        expression: "emailValue"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    )
                                  ]
                                }
                              }
                            ])
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
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Password",
                              vid: "Password",
                              rules: "required|password"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("b-form-input", {
                                      attrs: {
                                        type: "password",
                                        state: errors.length > 0 ? false : null,
                                        placeholder: "Your Password"
                                      },
                                      model: {
                                        value: _vm.PasswordValue,
                                        callback: function($$v) {
                                          _vm.PasswordValue = $$v
                                        },
                                        expression: "PasswordValue"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    )
                                  ]
                                }
                              }
                            ])
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
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        [
                          _c("validation-provider", {
                            attrs: {
                              name: "Password Confirm",
                              rules: "required|confirmed:Password"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "default",
                                fn: function(ref) {
                                  var errors = ref.errors
                                  return [
                                    _c("b-form-input", {
                                      attrs: {
                                        state: errors.length > 0 ? false : null,
                                        type: "password",
                                        placeholder: "Confirm Password"
                                      },
                                      model: {
                                        value: _vm.passwordCon,
                                        callback: function($$v) {
                                          _vm.passwordCon = $$v
                                        },
                                        expression: "passwordCon"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "small",
                                      { staticClass: "text-danger" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    )
                                  ]
                                }
                              }
                            ])
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
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "primary", type: "submit" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.validationForm($event)
                            }
                          }
                        },
                        [_vm._v("\n            Submit\n          ")]
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
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);