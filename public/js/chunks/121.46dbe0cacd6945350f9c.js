(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

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

/***/ "./frontend/src/@core/mixins/ui/transition.js":
/*!****************************************************!*\
  !*** ./frontend/src/@core/mixins/ui/transition.js ***!
  \****************************************************/
/*! exports provided: heightTransition, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "heightTransition", function() { return heightTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
var heightTransition = {
  /*
     HowTo:
      1. Add dynamic style to element and set style as `trHeight`
      2. Set transition speed using `transition: 0.35s height;` <= you can use appropriate value;
      3. Optionally you can set `overflow: hidden;` to hide element overflow while height is animated.
      4. Set initial height using `trSetHeight` before any operation. [mounted hook is recommended - You can use `ref` for dynamic contents]
      5. Toggle height using height operations 🍻
      6. Toggle usage of $nextTick for height operations is any issue occur [experimental] 🔬
   */
  data: function data() {
    return {
      trHeight: null
    };
  },
  methods: {
    trAddHeight: function trAddHeight(val) {
      // Add height to existing height
      // Usage: Where new element is append or more height is added (e.g. list append)

      /* Assumes:
       - Height is assigned and is `String`
       - Incoming value is valid number in `Number` or `String`
      */
      var heightValue = Number(this.trHeight.substring(0, this.trHeight.length - 2));
      this.trHeight = "".concat(heightValue + Number(val), "px");
    },
    trTrimHeight: function trTrimHeight(val) {
      // Remove height from existing height
      // Usage: Where new element is removed or height is remove (e.g. list pop/ele remove)

      /* Assumes:
       - Height is assigned and is `String`
       - Incoming value is valid number in `Number` or `String`
      */
      var heightValue = Number(this.trHeight.substring(0, this.trHeight.length - 2));
      this.trHeight = "".concat(heightValue - Number(val), "px");
    },
    trSetHeight: function trSetHeight(val) {
      // Set height
      // Usage: Mostly for assigning initial value from mounted hook

      /* Assumes:
       - Height is not assigned and what to assign for add/remove operation
       - What to set height at something for odd usage
       - Incoming value is valid number in `Number` or `String`
      */
      if (val === null) this.trHeight = 'auto';else this.trHeight = "".concat(Number(val), "px");
    }
  }
}; // Ignore below for now. We will remove it when we add more transition in future.

var _ = null;

/***/ }),

/***/ "./frontend/src/views/settings/FormRepeaterBasic.vue":
/*!***********************************************************!*\
  !*** ./frontend/src/views/settings/FormRepeaterBasic.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormRepeaterBasic_vue_vue_type_template_id_3566ea3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormRepeaterBasic.vue?vue&type=template&id=3566ea3e&scoped=true& */ "./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=template&id=3566ea3e&scoped=true&");
/* harmony import */ var _FormRepeaterBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormRepeaterBasic.vue?vue&type=script&lang=js& */ "./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormRepeaterBasic_vue_vue_type_style_index_0_id_3566ea3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true& */ "./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormRepeaterBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormRepeaterBasic_vue_vue_type_template_id_3566ea3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormRepeaterBasic_vue_vue_type_template_id_3566ea3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3566ea3e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/settings/FormRepeaterBasic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRepeaterBasic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_style_index_0_id_3566ea3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_style_index_0_id_3566ea3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_style_index_0_id_3566ea3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_style_index_0_id_3566ea3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_style_index_0_id_3566ea3e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=template&id=3566ea3e&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=template&id=3566ea3e&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_template_id_3566ea3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRepeaterBasic.vue?vue&type=template&id=3566ea3e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=template&id=3566ea3e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_template_id_3566ea3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormRepeaterBasic_vue_vue_type_template_id_3566ea3e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/settings/QuillEditorSnow.vue":
/*!*********************************************************!*\
  !*** ./frontend/src/views/settings/QuillEditorSnow.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuillEditorSnow_vue_vue_type_template_id_25e93574___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuillEditorSnow.vue?vue&type=template&id=25e93574& */ "./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=template&id=25e93574&");
/* harmony import */ var _QuillEditorSnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuillEditorSnow.vue?vue&type=script&lang=js& */ "./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuillEditorSnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuillEditorSnow_vue_vue_type_template_id_25e93574___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuillEditorSnow_vue_vue_type_template_id_25e93574___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/settings/QuillEditorSnow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorSnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditorSnow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorSnow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=template&id=25e93574&":
/*!****************************************************************************************!*\
  !*** ./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=template&id=25e93574& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorSnow_vue_vue_type_template_id_25e93574___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./QuillEditorSnow.vue?vue&type=template&id=25e93574& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=template&id=25e93574&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorSnow_vue_vue_type_template_id_25e93574___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuillEditorSnow_vue_vue_type_template_id_25e93574___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/settings/code.js":
/*!*********************************************!*\
  !*** ./frontend/src/views/settings/code.js ***!
  \*********************************************/
/*! exports provided: codeBasic, codeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeBasic", function() { return codeBasic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeInfo", function() { return codeInfo; });
var codeBasic = "\n<template>\n  <div>\n     <div>\n      <b-form\n        ref=\"form\"\n        :style=\"{height: trHeight}\"\n        class=\"repeater-form\"\n        @submit.prevent=\"repeateAgain\"\n      >\n\n        <!-- Row Loop -->\n        <b-row\n          v-for=\"(item, index) in items\"\n          :id=\"item.id\"\n          :key=\"item.id\"\n          ref=\"row\"\n        >\n\n          <!-- Item Name -->\n          <b-col md=\"4\">\n            <b-form-group\n              label=\"Item Name\"\n              label-for=\"item-name\"\n            >\n              <b-form-input\n                id=\"item-name\"\n                type=\"text\"\n                placeholder=\"Vuexy Admin Template\"\n              />\n            </b-form-group>\n          </b-col>\n\n          <!-- Cost -->\n          <b-col md=\"2\">\n            <b-form-group\n              label=\"Cost\"\n              label-for=\"cost\"\n            >\n              <b-form-input\n                id=\"cost\"\n                type=\"number\"\n                placeholder=\"32\"\n              />\n            </b-form-group>\n          </b-col>\n\n          <!-- Quantity -->\n          <b-col md=\"2\">\n            <b-form-group\n              label=\"Quantity\"\n              label-for=\"quantity\"\n            >\n              <b-form-input\n                id=\"quantity\"\n                type=\"number\"\n                placeholder=\"1\"\n              />\n            </b-form-group>\n          </b-col>\n\n          <!-- Profession -->\n          <b-col\n            lg=\"2\"\n            md=\"1\"\n          >\n            <b-form-group\n              label=\"Price\"\n              label-for=\"price\"\n            >\n              <b-form-input\n                id=\"pzrice\"\n                value=\"32$\"\n                plaintext\n              />\n            </b-form-group>\n          </b-col>\n\n          <!-- Remove Button -->\n          <b-col\n            lg=\"2\"\n            md=\"3\"\n            class=\"mb-50\"\n          >\n            <b-button\n              v-ripple.400=\"'rgba(234, 84, 85, 0.15)'\"\n              variant=\"outline-danger\"\n              class=\"mt-0 mt-md-2\"\n              @click=\"removeItem(index)\"\n            >\n              <feather-icon\n                icon=\"XIcon\"\n                class=\"mr-25\"\n              />\n              <span>Delete</span>\n            </b-button>\n          </b-col>\n          <b-col cols=\"12\">\n            <hr>\n          </b-col>\n        </b-row>\n\n      </b-form>\n    </div>\n    <b-button\n      v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n      variant=\"primary\"\n      @click=\"repeateAgain\"\n    >\n      <feather-icon\n        icon=\"PlusIcon\"\n        class=\"mr-25\"\n      />\n      <span>Add New</span>\n    </b-button>\n  </div>\n</template>\n\n<script>\nimport {\n  BForm, BFormGroup, BFormInput, BRow, BCol, BButton,\n} from 'bootstrap-vue'\nimport { heightTransition } from '@core/mixins/ui/transition'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BForm,\n    BRow,\n    BCol,\n    BButton,\n    BFormGroup,\n    BFormInput,\n  },\n  directives: {\n    Ripple,\n  },\n  mixins: [heightTransition],\n  data() {\n    return {\n      items: [{\n        id: 1,\n        selected: 'male',\n        selected1: 'designer',\n        prevHeight: 0,\n      }],\n      nextTodoId: 2,\n    }\n  },\n  mounted() {\n    this.initTrHeight()\n  },\n  created() {\n    window.addEventListener('resize', this.initTrHeight)\n  },\n  destroyed() {\n    window.removeEventListener('resize', this.initTrHeight)\n  },\n  methods: {\n    repeateAgain() {\n      this.items.push({\n        id: this.nextTodoId += this.nextTodoId,\n      })\n\n      this.$nextTick(() => {\n        this.trAddHeight(this.$refs.row[0].offsetHeight)\n      })\n    },\n    removeItem(index) {\n      this.items.splice(index, 1)\n      this.trTrimHeight(this.$refs.row[0].offsetHeight)\n    },\n    initTrHeight() {\n      this.trSetHeight(null)\n      this.$nextTick(() => {\n        this.trSetHeight(this.$refs.form.scrollHeight)\n      })\n    },\n  },\n}\n</script>\n\n<style lang=\"scss\" scoped>\n.repeater-form {\n  overflow: hidden;\n  transition: .35s height;\n}\n</style>\n";
var codeInfo = 'default';

/***/ }),

/***/ "./frontend/src/views/settings/create_status_list.vue":
/*!************************************************************!*\
  !*** ./frontend/src/views/settings/create_status_list.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_status_list_vue_vue_type_template_id_242ce18e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create_status_list.vue?vue&type=template&id=242ce18e& */ "./frontend/src/views/settings/create_status_list.vue?vue&type=template&id=242ce18e&");
/* harmony import */ var _create_status_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_status_list.vue?vue&type=script&lang=js& */ "./frontend/src/views/settings/create_status_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _create_status_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create_status_list.vue?vue&type=style&index=0&lang=scss& */ "./frontend/src/views/settings/create_status_list.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _create_status_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_status_list_vue_vue_type_template_id_242ce18e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_status_list_vue_vue_type_template_id_242ce18e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "frontend/src/views/settings/create_status_list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./frontend/src/views/settings/create_status_list.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./frontend/src/views/settings/create_status_list.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_status_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create_status_list.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/create_status_list.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_status_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./frontend/src/views/settings/create_status_list.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./frontend/src/views/settings/create_status_list.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_status_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create_status_list.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/create_status_list.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_status_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_status_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_status_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_status_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./frontend/src/views/settings/create_status_list.vue?vue&type=template&id=242ce18e&":
/*!*******************************************************************************************!*\
  !*** ./frontend/src/views/settings/create_status_list.vue?vue&type=template&id=242ce18e& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_status_list_vue_vue_type_template_id_242ce18e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create_status_list.vue?vue&type=template&id=242ce18e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/create_status_list.vue?vue&type=template&id=242ce18e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_status_list_vue_vue_type_template_id_242ce18e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_status_list_vue_vue_type_template_id_242ce18e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./frontend/src/views/settings/quillCode.js":
/*!**************************************************!*\
  !*** ./frontend/src/views/settings/quillCode.js ***!
  \**************************************************/
/*! exports provided: codeSnow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeSnow", function() { return codeSnow; });
var codeSnow = "\n<template>\n  <quill-editor\n    v-model=\"content\"\n    :options=\"snowOption\"\n  />\n</template>\n\n<script>\n// eslint-disable-next-line\nimport 'quill/dist/quill.core.css'\n// eslint-disable-next-line\nimport 'quill/dist/quill.snow.css'\n// eslint-disable-next-line\nimport 'quill/dist/quill.bubble.css'\n\nimport { create_email_template } from 'vue-quill-editor'\n\nexport default {\n  components: {\n    create_email_template,\n  },\n  data: () => ({\n    content: `<h1>Quill Rich Text Editor</h1>\n  <p>Quill is a free, <a href=\"https://github.com/quilljs/quill/\">open source</a> WYSIWYG editor built for the modern web. With its <a href=\"http://quilljs.com/docs/modules/\">modular architecture</a> and expressive <a href=\"http://quilljs.com/docs/api/\">API</a>, it is completely customizable to fit any need.</p>\n  <iframe class=\"ql-video\" src=\"https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0\" width=\"560\" height=\"238\"></iframe>\n  <p><br></p>\n  <h2>Getting Started is Easy</h2>\n  <p><br></p>\n  <pre>\n// &lt;link href=\"https://cdn.quilljs.com/1.0.5/quill.snow.css\" rel=\"stylesheet\"&gt;\n// &lt;script src=\"https://cdn.quilljs.com/1.0.5/quill.min.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\n  var quill = new Quill('#editor', {\n  modules: {\n  toolbar: '#toolbar'\n  },\n  theme: 'snow'\n  });\n// Open your browser's developer console to try out the API!</pre>  `,\n  }),\n}\n</script>\n";

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_components_b_card_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/b-card-code */ "./frontend/src/@core/components/b-card-code/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/mixins/ui/transition */ "./frontend/src/@core/mixins/ui/transition.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code */ "./frontend/src/views/settings/code.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BForm"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BCol"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormGroup"],
    BFormInput: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BFormInput"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mixins: [_core_mixins_ui_transition__WEBPACK_IMPORTED_MODULE_2__["heightTransition"]],
  data: function data() {
    return {
      items: [{
        id: 1,
        selected: 'male',
        selected1: 'designer',
        prevHeight: 0
      }],
      nextTodoId: 2,
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_4__["codeBasic"]
    };
  },
  mounted: function mounted() {
    this.initTrHeight();
  },
  created: function created() {
    window.addEventListener('resize', this.initTrHeight);
  },
  destroyed: function destroyed() {
    window.removeEventListener('resize', this.initTrHeight);
  },
  methods: {
    repeateAgain: function repeateAgain() {
      var _this = this;

      this.items.push({
        id: this.nextTodoId += this.nextTodoId
      });
      this.$nextTick(function () {
        _this.trAddHeight(_this.$refs.row[0].offsetHeight);
      });
    },
    removeItem: function removeItem(index) {
      this.items.splice(index, 1);
      this.trTrimHeight(this.$refs.row[0].offsetHeight);
    },
    initTrHeight: function initTrHeight() {
      var _this2 = this;

      this.trSetHeight(null);
      this.$nextTick(function () {
        _this2.trSetHeight(_this2.$refs.form.scrollHeight);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./frontend/src/@core/components/b-card-code/BCardCode.vue");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./frontend/node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _quillCode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quillCode */ "./frontend/src/views/settings/quillCode.js");
//
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
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"]
  },
  data: function data() {
    return {
      codeSnow: _quillCode__WEBPACK_IMPORTED_MODULE_3__["codeSnow"],
      snowOption: {
        theme: "snow"
      },
      content: ""
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/create_status_list.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/create_status_list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./frontend/node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./frontend/node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./frontend/src/store/index.js");
/* harmony import */ var _AddNew_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddNew.vue */ "./frontend/src/views/settings/AddNew.vue");
/* harmony import */ var vee_validate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vee-validate */ "./frontend/node_modules/vee-validate/dist/vee-validate.esm.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/composition-api */ "./frontend/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony import */ var _validations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @validations */ "./frontend/src/@core/utils/validations/validations.js");
/* harmony import */ var _core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/comp-functions/forms/form-validation */ "./frontend/src/@core/comp-functions/forms/form-validation.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./frontend/node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-ripple-directive */ "./frontend/node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _FormRepeaterBasic_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FormRepeaterBasic.vue */ "./frontend/src/views/settings/FormRepeaterBasic.vue");
/* harmony import */ var _code__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./code */ "./frontend/src/views/settings/code.js");
/* harmony import */ var _QuillEditorSnow_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./QuillEditorSnow.vue */ "./frontend/src/views/settings/QuillEditorSnow.vue");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-quill-editor */ "./frontend/node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @core/components/b-card-code/BCardCode.vue */ "./frontend/src/@core/components/b-card-code/BCardCode.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BSidebar: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BSidebar"],
    AddNew: _AddNew_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
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
    BFormSelect: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormSelect"],
    // Form Validation
    ValidationProvider: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationProvider"],
    ValidationObserver: vee_validate__WEBPACK_IMPORTED_MODULE_4__["ValidationObserver"],
    BFormRadio: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormRadio"],
    BFormGroup: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormGroup"],
    BForm: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BForm"],
    BFormInvalidFeedback: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormInvalidFeedback"],
    FormRepeaterBasic: _FormRepeaterBasic_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_1___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_13__["quillEditor"],
    BFormCheckbox: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BFormCheckbox"],
    BCardText: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCardText"],
    BCardCode: _core_components_b_card_code_BCardCode_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    QuillEditorSnow: _QuillEditorSnow_vue__WEBPACK_IMPORTED_MODULE_12__["default"]
  },
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var blankstatusList = {
      description: "",
      name: "",
      status: "Published",
      key: 6
    };
    var statusList = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__["ref"])(JSON.parse(JSON.stringify(blankstatusList)));

    var resetstatusList = function resetstatusList() {
      statusList.value = JSON.parse(JSON.stringify(blankstatusList));
    };

    var onSubmit = function onSubmit() {
      _store__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch("app-user/addUser", statusList.value);
    };

    var _formValidation = Object(_core_comp_functions_forms_form_validation__WEBPACK_IMPORTED_MODULE_7__["default"])(resetstatusList),
        refFormObserver = _formValidation.refFormObserver,
        getValidationState = _formValidation.getValidationState,
        resetForm = _formValidation.resetForm;

    return {
      statusList: statusList,
      onSubmit: onSubmit,
      refFormObserver: refFormObserver,
      getValidationState: getValidationState,
      resetForm: resetForm
    };
  },
  mounted: function mounted() {
    this.getstatusGroup();
  },
  data: function data() {
    return {
      statusList: {
        group_id: "",
        description: "",
        color: "",
        title: "",
        status: "Published"
      },
      statuswithcolors: [{
        title: "",
        color: ""
      }],
      statusGroup: [],
      items: [{
        id: 1,
        prevHeight: 0
      }],
      nextTodoId: 2,
      codeBasic: _code__WEBPACK_IMPORTED_MODULE_11__["codeBasic"],
      inventoryduration: {},
      inventorydates: {}
    };
  },
  methods: {
    postData: function postData(e) {
      console.log(this.statuswithcolors);
      var currentObj = this;
      e.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://koboautos.com/twic-terminal/connect/api/create-status-list", {
        statuswithcolors: this.statuswithcolors,
        group_id: this.statusList.group_id.value,
        description: this.statusList.description,
        status: this.statusList.status
      }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4YmJiOGJkZmJiNmQ5YTgzNmVmMDkwZGRkZDY5MDFmOWEzZDFiNTE3MWUzODA5ODE0ZmJlMWE1MWY3ZjExZjBiMWIwNzExNjQ2NWRkYWZmIn0.eyJhdWQiOiIxOTM4NDcxMiIsImp0aSI6IjY4YmJiOGJkZmJiNmQ5YTgzNmVmMDkwZGRkZDY5MDFmOWEzZDFiNTE3MWUzODA5ODE0ZmJlMWE1MWY3ZjExZjBiMWIwNzExNjQ2NWRkYWZmIiwiaWF0IjoxNjA2MzA3ODc5LCJuYmYiOjE2MDYzMDc4NzksImV4cCI6MTYzNzg0Mzg3OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.OSYl-wXlW42CIeFq-agf10WPbHo57EBRD1NDFTodnALlqVBWmEW2yMy3CA2YYYiKz27Ot6XP61ROcl153W7CpmL6wjVX2qUEbethwaGDvUReb2UEPY6hBBRVrhB6LoA46m3sHA5FNq9E02TzWAwvj7NQVpPgRF6dvaH6go1z-Opfp-L6q0czpTuUXGtgDbJmnU8yG1NCc8gJYqtZxjiqBDjHq8GiLpr5254hgoVJTdY_9kLjmy_VDE_GlBxdZJVyPB3hCCEuSCjnFaJiDwO3pAEFLqY2KecimVtc78TChFzJycwMo0bUQRsgpmSjzxSYE2z-J_dJJEtx4u8pR2Zg3PhDxmYRvMip0b688mGbay_BobAcyrXumQmJsFfqekDewLuBfYtmB0TCZmmf5H6G0tyaXGcmfKMMFY8Qdv2qLy-y-1Vu06npoK94pElsOexkESxiiu8__bpkNrWMt8VLHYMmygJ_Y8o0JrmB4eyfnceaO-lvtFnFMZtVQP_XgWApzWTzYAy27cU56oR9vz1UfmM0HfGCbXPQDTmkmmL1RNO-MyKEMoIJSJLWdjXB9f6yyDpEurgG0lt0xDgrvr43RCappToLGYtFHiAYMTT-xqy2ucZPnUXKf8X4WDYH_8yuMS9_JZKc2mLViaoZje4nhTQe3RquhloJB6VQon4WNNo"
        }
      }).then(function (response) {
        console.log(response);

        if (response.data.status == "success") {
          currentObj.$router.push({
            path: "/status-list"
          });
        }
      });
    },
    getstatusGroup: function getstatusGroup() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://koboautos.com/twic-terminal/connect/api/status-group-list").then(function (response) {
        _this.statusGroup = response.data.statusgroup;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    addField: function addField(value, fieldType) {
      fieldType.push({
        value: ""
      });
    },
    removeItem: function removeItem(index, fieldType) {
      fieldType.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".repeater-form[data-v-3566ea3e] {\n  overflow: hidden;\n  -webkit-transition: 0.35s height;\n  transition: 0.35s height;\n}[dir] .repeater-form[data-v-3566ea3e] {\n  -webkit-transition: 0.35s height;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/create_status_list.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/create_status_list.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Expected identifier.\n    ╷\n480 │ .btn-primary :{\n    │               ^\n    ╵\n  C:\\xampp\\htdocs\\twic_terminal-june\\frontend\\src\\views\\settings\\create_status_list.vue 480:15  root stylesheet");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=style&index=0&id=3566ea3e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/create_status_list.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/create_status_list.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create_status_list.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/create_status_list.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=template&id=3566ea3e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/FormRepeaterBasic.vue?vue&type=template&id=3566ea3e&scoped=true& ***!
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
      attrs: { title: "Repeating Forms" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function() {
            return [_vm._v("\n    " + _vm._s(_vm.codeBasic) + "\n  ")]
          },
          proxy: true
        }
      ])
    },
    [
      _c(
        "div",
        [
          _c(
            "b-form",
            {
              ref: "form",
              staticClass: "repeater-form",
              style: { height: _vm.trHeight },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.repeateAgain($event)
                }
              }
            },
            _vm._l(_vm.items, function(item, index) {
              return _c(
                "b-row",
                {
                  key: item.id,
                  ref: "row",
                  refInFor: true,
                  attrs: { id: item.id }
                },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "4" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            label: "Item Name",
                            "label-for": "item-name"
                          }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "item-name",
                              type: "text",
                              placeholder: "Vuexy Admin Template"
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
                    { attrs: { md: "2" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Cost", "label-for": "cost" } },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "cost",
                              type: "number",
                              placeholder: "32"
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
                    { attrs: { md: "2" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: { label: "Quantity", "label-for": "quantity" }
                        },
                        [
                          _c("b-form-input", {
                            attrs: {
                              id: "quantity",
                              type: "number",
                              placeholder: "1"
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
                    { attrs: { lg: "2", md: "1" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Price", "label-for": "price" } },
                        [
                          _c("b-form-input", {
                            attrs: { id: "pzrice", value: "32$", plaintext: "" }
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
                    { staticClass: "mb-50", attrs: { lg: "2", md: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "ripple",
                              rawName: "v-ripple.400",
                              value: "rgba(234, 84, 85, 0.15)",
                              expression: "'rgba(234, 84, 85, 0.15)'",
                              modifiers: { "400": true }
                            }
                          ],
                          staticClass: "mt-0 mt-md-2",
                          attrs: { variant: "outline-danger" },
                          on: {
                            click: function($event) {
                              return _vm.removeItem(index)
                            }
                          }
                        },
                        [
                          _c("feather-icon", {
                            staticClass: "mr-25",
                            attrs: { icon: "XIcon" }
                          }),
                          _vm._v(" "),
                          _c("span", [_vm._v("Delete")])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "12" } }, [_c("hr")])
                ],
                1
              )
            }),
            1
          )
        ],
        1
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
          attrs: { variant: "primary" },
          on: { click: _vm.repeateAgain }
        },
        [
          _c("feather-icon", {
            staticClass: "mr-25",
            attrs: { icon: "PlusIcon" }
          }),
          _vm._v(" "),
          _c("span", [_vm._v("Add New")])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=template&id=25e93574&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/QuillEditorSnow.vue?vue&type=template&id=25e93574& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "b-card-text",
    {
      attrs: { title: "" },
      scopedSlots: _vm._u([
        {
          key: "code",
          fn: function() {
            return [_vm._v("\n        " + _vm._s(_vm.codeSnow) + "\n    ")]
          },
          proxy: true
        }
      ])
    },
    [
      _c("quill-editor", {
        attrs: { options: _vm.snowOption },
        model: {
          value: _vm.content,
          callback: function($$v) {
            _vm.content = $$v
          },
          expression: "content"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./frontend/src/views/settings/create_status_list.vue?vue&type=template&id=242ce18e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./frontend/src/views/settings/create_status_list.vue?vue&type=template&id=242ce18e& ***!
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
    "div",
    [
      _c(
        "b-card",
        { staticClass: "mb-0", attrs: { "no-body": "" } },
        [
          _c("div", { staticClass: "card-header pb-50" }, [
            _c("h5", [
              _vm._v("\n                Add New Status List\n            ")
            ])
          ]),
          _vm._v(" "),
          _c("validation-observer", {
            ref: "refFormObserver",
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var handleSubmit = ref.handleSubmit
                  return [
                    _c(
                      "b-form",
                      {
                        attrs: { method: "post" },
                        on: {
                          submit: [
                            _vm.postData,
                            function($event) {
                              $event.preventDefault()
                              return handleSubmit(_vm.onSubmit)
                            }
                          ],
                          reset: function($event) {
                            $event.preventDefault()
                            return _vm.resetForm($event)
                          }
                        }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "m-2" },
                          [
                            _c(
                              "b-row",
                              { staticClass: "mb-2" },
                              [
                                _c(
                                  "b-col",
                                  { attrs: { cols: "12", md: "8" } },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "d-block",
                                        attrs: { for: "basicInput" }
                                      },
                                      [_vm._v("Group")]
                                    ),
                                    _vm._v(" "),
                                    _c("validation-provider", {
                                      attrs: {
                                        name: "Group",
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
                                                      state: _vm.getValidationState(
                                                        validationContext
                                                      )
                                                    }
                                                  },
                                                  [
                                                    _c("v-select", {
                                                      attrs: {
                                                        dir: _vm.$store.state
                                                          .appConfig.isRTL
                                                          ? "rtl"
                                                          : "ltr",
                                                        label: "title",
                                                        options: _vm.statusGroup
                                                      },
                                                      model: {
                                                        value:
                                                          _vm.statusList
                                                            .group_id,
                                                        callback: function(
                                                          $$v
                                                        ) {
                                                          _vm.$set(
                                                            _vm.statusList,
                                                            "group_id",
                                                            $$v
                                                          )
                                                        },
                                                        expression:
                                                          "statusList.group_id"
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
                                                          "\n                                        " +
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            ) +
                                                            "\n                                    "
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
                              "b-row",
                              [
                                _c(
                                  "b-col",
                                  { attrs: { cols: "12", md: "10" } },
                                  [
                                    _c(
                                      "b-row",
                                      { ref: "row" },
                                      [
                                        _c(
                                          "b-col",
                                          { attrs: { cols: "10", md: "8" } },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass: "d-block",
                                                attrs: { for: "basicInput" }
                                              },
                                              [_vm._v("Status")]
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-col",
                                          { attrs: { cols: "10", md: "2" } },
                                          [
                                            _c(
                                              "label",
                                              {
                                                staticClass: "d-block",
                                                attrs: { for: "basicInput" }
                                              },
                                              [_vm._v("Color")]
                                            )
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
                            ),
                            _vm._v(" "),
                            _c(
                              "b-row",
                              { ref: "row", staticClass: "repeater-form mb-2" },
                              [
                                _vm._l(_vm.statuswithcolors, function(
                                  input,
                                  index
                                ) {
                                  return _c(
                                    "b-col",
                                    {
                                      key: "phoneInput-" + index,
                                      attrs: { cols: "12", md: "10" }
                                    },
                                    [
                                      _c(
                                        "b-row",
                                        {
                                          ref: "row",
                                          refInFor: true,
                                          staticClass: "mb-2"
                                        },
                                        [
                                          _c(
                                            "b-col",
                                            { attrs: { cols: "12", md: "8" } },
                                            [
                                              _c("validation-provider", {
                                                attrs: {
                                                  name: "Title",
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
                                                            [
                                                              _c(
                                                                "b-form-input",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block mr-1",
                                                                  attrs: {
                                                                    placeholder:
                                                                      "Enter Name",
                                                                    state: _vm.getValidationState(
                                                                      validationContext
                                                                    )
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      input.title,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        input,
                                                                        "title",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "input.title"
                                                                  }
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "b-form-invalid-feedback",
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                " +
                                                                      _vm._s(
                                                                        validationContext
                                                                          .errors[0]
                                                                      ) +
                                                                      "\n                                            "
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
                                            { attrs: { cols: "12", md: "2" } },
                                            [
                                              _c("validation-provider", {
                                                attrs: {
                                                  name: "Color",
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
                                                            [
                                                              _c(
                                                                "b-form-input",
                                                                {
                                                                  staticClass:
                                                                    "d-inline-block mr-1",
                                                                  attrs: {
                                                                    type:
                                                                      "color",
                                                                    placeholder:
                                                                      "Enter Name",
                                                                    name:
                                                                      "color",
                                                                    state: _vm.getValidationState(
                                                                      validationContext
                                                                    )
                                                                  },
                                                                  model: {
                                                                    value:
                                                                      input.color,
                                                                    callback: function(
                                                                      $$v
                                                                    ) {
                                                                      _vm.$set(
                                                                        input,
                                                                        "color",
                                                                        $$v
                                                                      )
                                                                    },
                                                                    expression:
                                                                      "input.color"
                                                                  }
                                                                }
                                                              ),
                                                              _vm._v(" "),
                                                              _c(
                                                                "b-form-invalid-feedback",
                                                                [
                                                                  _vm._v(
                                                                    "\n                                                " +
                                                                      _vm._s(
                                                                        validationContext
                                                                          .errors[0]
                                                                      ) +
                                                                      "\n                                            "
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
                                            { attrs: { cols: "12", md: "2" } },
                                            [
                                              _c(
                                                "b-button",
                                                {
                                                  directives: [
                                                    {
                                                      name: "show",
                                                      rawName: "v-show",
                                                      value:
                                                        _vm.statuswithcolors
                                                          .length > 1,
                                                      expression:
                                                        "statuswithcolors.length > 1"
                                                    },
                                                    {
                                                      name: "ripple",
                                                      rawName: "v-ripple.400",
                                                      value:
                                                        "rgba(234, 84, 85, 0.15)",
                                                      expression:
                                                        "\n                                            'rgba(234, 84, 85, 0.15)'\n                                        ",
                                                      modifiers: { "400": true }
                                                    }
                                                  ],
                                                  staticClass: "mt-0",
                                                  attrs: { variant: "danger" },
                                                  on: {
                                                    click: function($event) {
                                                      return _vm.removeItem(
                                                        index,
                                                        _vm.statuswithcolors
                                                      )
                                                    }
                                                  }
                                                },
                                                [_c("span", [_vm._v("Remove")])]
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
                                }),
                                _vm._v(" "),
                                _c(
                                  "b-col",
                                  { attrs: { cols: "12", md: "2" } },
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
                                        attrs: {
                                          id: "add",
                                          variant: "primary"
                                        },
                                        on: {
                                          click: function($event) {
                                            return _vm.addField(
                                              _vm.input,
                                              _vm.statuswithcolors
                                            )
                                          }
                                        }
                                      },
                                      [_c("span", [_vm._v("Add More")])]
                                    )
                                  ],
                                  1
                                )
                              ],
                              2
                            ),
                            _vm._v(" "),
                            _c(
                              "b-row",
                              { staticClass: "mb-2" },
                              [
                                _c(
                                  "b-col",
                                  { attrs: { cols: "8", md: "8" } },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "d-block",
                                        attrs: { for: "basicInput" }
                                      },
                                      [_vm._v("Description")]
                                    ),
                                    _vm._v(" "),
                                    _c("validation-provider", {
                                      attrs: {
                                        name: "Description",
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
                                                  [
                                                    _c("textarea", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.statusList
                                                              .description,
                                                          expression:
                                                            "statusList.description"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-control",
                                                      attrs: {
                                                        id: "textarea-default",
                                                        placeholder: "Textarea",
                                                        rows: "3",
                                                        name: "description",
                                                        wrap: "soft",
                                                        "data-v-aa799a9e": "",
                                                        state: _vm.getValidationState(
                                                          validationContext
                                                        )
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.statusList
                                                            .description
                                                      },
                                                      on: {
                                                        input: function(
                                                          $event
                                                        ) {
                                                          if (
                                                            $event.target
                                                              .composing
                                                          ) {
                                                            return
                                                          }
                                                          _vm.$set(
                                                            _vm.statusList,
                                                            "description",
                                                            $event.target.value
                                                          )
                                                        }
                                                      }
                                                    }),
                                                    _vm._v(" "),
                                                    _c(
                                                      "b-form-invalid-feedback",
                                                      [
                                                        _vm._v(
                                                          "\n                                        " +
                                                            _vm._s(
                                                              validationContext
                                                                .errors[0]
                                                            ) +
                                                            "\n                                    "
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
                              "b-row",
                              { staticClass: "mb-2" },
                              [
                                _c(
                                  "b-col",
                                  { attrs: { cols: "12", md: "6" } },
                                  [
                                    _c(
                                      "label",
                                      {
                                        staticClass: "d-block mb-1",
                                        attrs: { for: "basicInput" }
                                      },
                                      [_vm._v("Status")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      {
                                        staticClass: "d-flex align-items-center"
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticStyle: {
                                              "margin-right": "20px"
                                            }
                                          },
                                          [
                                            _c(
                                              "b-form-checkbox",
                                              {
                                                attrs: {
                                                  value: "Published",
                                                  name: "check-button",
                                                  switch: "",
                                                  inline: ""
                                                },
                                                model: {
                                                  value: _vm.statusList.status,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.statusList,
                                                      "status",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "statusList.status"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        Published\n\n                                        "
                                                ),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "switch-icon-left"
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "CheckIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {},
                                          [
                                            _c(
                                              "b-form-checkbox",
                                              {
                                                attrs: {
                                                  name: "check-button",
                                                  switch: "",
                                                  inline: "",
                                                  value: "UnPublished"
                                                },
                                                model: {
                                                  value: _vm.statusList.status,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.statusList,
                                                      "status",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "statusList.status"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                                        UnPublished\n\n                                        "
                                                ),
                                                _c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "switch-icon-left"
                                                  },
                                                  [
                                                    _c("feather-icon", {
                                                      attrs: {
                                                        icon: "CheckIcon"
                                                      }
                                                    })
                                                  ],
                                                  1
                                                )
                                              ]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    )
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
                                  { attrs: { cols: "12", md: "12" } },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass:
                                          "d-flex align-items-center justify-content-end"
                                      },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "btn btn-danger",
                                            staticStyle: {
                                              "margin-right": "10px"
                                            },
                                            attrs: { to: "/status-list" }
                                          },
                                          [_vm._v("Back")]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "b-button",
                                          {
                                            attrs: {
                                              variant: "success",
                                              type: "submit"
                                            }
                                          },
                                          [
                                            _c(
                                              "span",
                                              { staticClass: "text-nowrap" },
                                              [_vm._v("Submit")]
                                            )
                                          ]
                                        )
                                      ],
                                      1
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
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("div", { staticClass: "position-relative table-responsive" })
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