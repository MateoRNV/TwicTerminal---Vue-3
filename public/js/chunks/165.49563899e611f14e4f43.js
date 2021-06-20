(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[165],{

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

/***/ "./frontend/src/views/forms/form-layout/code.js":
/*!******************************************************!*\
  !*** ./frontend/src/views/forms/form-layout/code.js ***!
  \******************************************************/
/*! exports provided: codeFeedbackHelper, codeHelper, codeHorizontal, codeHorizontalIcon, codeMultipleColumn, codeVertical, codeVerticalIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeFeedbackHelper", function() { return codeFeedbackHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeHelper", function() { return codeHelper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeHorizontal", function() { return codeHorizontal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeHorizontalIcon", function() { return codeHorizontalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeMultipleColumn", function() { return codeMultipleColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVertical", function() { return codeVertical; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "codeVerticalIcon", function() { return codeVerticalIcon; });
var codeFeedbackHelper = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n      <!-- username -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Username\"\n          label-for=\"fh-usename\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"UserIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"fh-usename\"\n              placeholder=\"Username\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n\n      <!-- email -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"fh-email\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"MailIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"fh-email\"\n              type=\"email\"\n              placeholder=\"Email\"\n            />\n          </b-input-group>\n          <b-form-text class=\"text-danger\">\n            Enter a Valid Email\n          </b-form-text>\n        </b-form-group>\n      </b-col>\n\n      <!-- password -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"fh-password\"\n        >\n          <b-input-group\n            class=\"input-group-merge\"\n            :class=\"validation ? 'is-valid' : 'is-invalid'\"\n          >\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"LockIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"fh-password\"\n              v-model=\"userId\"\n              type=\"password\"\n              :state=\"validation\"\n              placeholder=\"Password\"\n            />\n          </b-input-group>\n          <b-form-invalid-feedback :state=\"validation\">\n            Your password must be 8-20 characters long.\n          </b-form-invalid-feedback>\n          <b-form-valid-feedback :state=\"validation\">\n            Looks Good.\n          </b-form-valid-feedback>\n        </b-form-group>\n      </b-col>\n\n      <!-- occupation -->\n      <b-col cols=\"12\">\n        <b-form-group label=\"Occupation\">\n          <b-input-group\n            class=\"input-group-merge\"\n            :class=\"validationOccupation ? 'is-valid' : 'is-invalid'\"\n          >\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"LockIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              v-model=\"occupationID\"\n              list=\"input-list\"\n              placeholder=\"Occupation\"\n              :state=\"validationOccupation\"\n            />\n          </b-input-group>\n          <b-form-datalist\n            id=\"input-list\"\n            :options=\"options\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- checkbox -->\n      <b-col cols=\"12\">\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-8\"\n            name=\"checkbox-8\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col>\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n          @click=\"reset\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-form>\n</template>\n\n<script>\nimport {\n  BRow,\n  BCol,\n  BFormGroup,\n  BFormInput,\n  BFormCheckbox,\n  BForm,\n  BButton,\n  BFormText,\n  BFormDatalist,\n  BFormInvalidFeedback,\n  BInputGroup,\n  BInputGroupPrepend,\n  BFormValidFeedback,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BInputGroup,\n    BInputGroupPrepend,\n    BFormInput,\n    BFormCheckbox,\n    BForm,\n    BFormText,\n    BButton,\n    BFormDatalist,\n    BFormInvalidFeedback,\n    BFormValidFeedback,\n  },\n directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      options: ['Devloper', 'Manager', 'CEO', 'CTO', 'Full Stack Devloper'],\n      userId: '',\n      occupationID: '',\n    }\n  },\n  computed: {\n    validation() {\n      return this.userId.length > 4 && this.userId.length < 13\n    },\n    validationOccupation() {\n      return this.occupationID.length > 1\n    },\n  },\n  methods: {\n    reset() {\n      this.userId = ''\n      this.occupationID = ''\n    },\n  },\n}\n</script>\n";
var codeHelper = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n\n      <!-- username -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Username\"\n          label-for=\"h-username\"\n        >\n          <b-form-input\n            id=\"h-username\"\n            placeholder=\"Username\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- email -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"d-email\"\n        >\n          <b-form-input\n            id=\"d-email\"\n            type=\"email\"\n            placeholder=\"Email\"\n          />\n          <b-form-text>Enter a Valid Email</b-form-text>\n        </b-form-group>\n      </b-col>\n\n      <!-- password -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"d-password\"\n        >\n          <b-form-input\n            id=\"d-password\"\n            type=\"password\"\n            placeholder=\"Password\"\n          />\n          <b-form-text>Your password must be 8-20 characters long.</b-form-text>\n        </b-form-group>\n      </b-col>\n\n      <!-- occupation -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Occupation\"\n          label-for=\"h-occupation\"\n        >\n          <b-form-input\n            id=\"h-occupation\"\n            list=\"input-list\"\n            placeholder=\"Occupation\"\n          />\n          <b-form-datalist\n            id=\"input-list\"\n            :options=\"options\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- checkbox -->\n      <b-col cols=\"12\">\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-9\"\n            name=\"checkbox-9\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col>\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-form>\n</template>\n\n<script>\nimport {\n  BRow,\n  BCol,\n  BFormGroup,\n  BFormInput,\n  BFormCheckbox,\n  BForm,\n  BButton,\n  BFormText,\n  BFormDatalist,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BForm,\n    BFormText,\n    BButton,\n    BFormDatalist,\n  },\n   directives: {\n    Ripple,\n  },\n  data() {\n    return {\n      options: ['Devloper', 'Manager', 'CEO', 'CTO', 'Full Stack Devloper'],\n    }\n  },\n}\n</script>\n";
var codeHorizontal = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"First Name\"\n          label-for=\"h-first-name\"\n          label-cols-md=\"4\"\n        >\n          <b-form-input\n            id=\"h-first-name\"\n            placeholder=\"First Name\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"h-email\"\n          label-cols-md=\"4\"\n        >\n          <b-form-input\n            id=\"h-email\"\n            type=\"email\"\n            placeholder=\"Email\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Mobile\"\n          label-for=\"h-number\"\n          label-cols-md=\"4\"\n        >\n          <b-form-input\n            id=\"h-number\"\n            type=\"number\"\n            placeholder=\"Mobile\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"h-password\"\n          label-cols-md=\"4\"\n        >\n          <b-form-input\n            id=\"h-password\"\n            type=\"password\"\n            placeholder=\"Password\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col\n        md=\"8\"\n        offset-md=\"4\"\n      >\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-2\"\n            name=\"checkbox-2\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col offset-md=\"4\">\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n\n  </b-form>\n</template>\n\n<script>\nimport {\n  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BForm,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";
var codeHorizontalIcon = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"First Name\"\n          label-for=\"hi-first-name\"\n          label-cols-md=\"4\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"UserIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"hi-first-name\"\n              placeholder=\"First Name\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"hi-email\"\n          label-cols-md=\"4\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"MailIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"hi-email\"\n              type=\"email\"\n              placeholder=\"Email\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Mobile\"\n          label-for=\"hi-number\"\n          label-cols-md=\"4\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"SmartphoneIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"hi-number\"\n              type=\"number\"\n              placeholder=\"Mobile\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"hi-password\"\n          label-cols-md=\"4\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"LockIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"hi-password\"\n              type=\"password\"\n              placeholder=\"Password\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n      <b-col\n        md=\"8\"\n        offset-md=\"4\"\n      >\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-1\"\n            name=\"checkbox-1\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col offset-md=\"4\">\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n\n  </b-form>\n</template>\n\n<script>\nimport {\n  BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BRow, BCol,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BInputGroup,\n    BInputGroupPrepend,\n    BForm,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";
var codeMultipleColumn = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n      <b-col md=\"6\">\n        <b-form-group\n          label=\"First Name\"\n          label-for=\"mc-first-name\"\n        >\n          <b-form-input\n            id=\"mc-first-name\"\n            placeholder=\"First Name\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group\n          label=\"Last Name\"\n          label-for=\"mc-last-name\"\n        >\n          <b-form-input\n            id=\"mc-last-name\"\n            placeholder=\"Last Name\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group\n          label=\"City\"\n          label-for=\"mc-city\"\n        >\n          <b-form-input\n            id=\"mc-city\"\n            placeholder=\"City\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group\n          label=\"Country\"\n          label-for=\"mc-country\"\n        >\n          <b-form-input\n            id=\"mc-country\"\n            placeholder=\"Country\"\n          />\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group\n          label=\"Company\"\n          label-for=\"mc-company\"\n        >\n          <div class=\"form-label-group\">\n            <b-form-input\n              id=\"mc-company\"\n              placeholder=\"Company\"\n            />\n          </div>\n        </b-form-group>\n      </b-col>\n      <b-col md=\"6\">\n        <b-form-group\n          label-for=\"mc-email\"\n          label=\"Email\"\n        >\n          <div class=\"form-label-group\">\n            <b-form-input\n              id=\"mc-email\"\n              type=\"email\"\n              placeholder=\"Email\"\n            />\n          </div>\n        </b-form-group>\n      </b-col>\n\n      <b-col cols=\"12\">\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-10\"\n            name=\"checkbox-10\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col>\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-form>\n</template>\n\n\n<script>\nimport {\n  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BForm,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";
var codeVertical = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n\n      <!-- first name -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"First Name\"\n          label-for=\"v-first-name\"\n        >\n          <b-form-input\n            id=\"v-first-name\"\n            placeholder=\"First Name\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- email -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"v-email\"\n        >\n          <b-form-input\n            id=\"v-email\"\n            type=\"email\"\n            placeholder=\"Email\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- mobile -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Mobile\"\n          label-for=\"v-mobile\"\n        >\n          <b-form-input\n            id=\"v-mobile\"\n            type=\"number\"\n            placeholder=\"Mobile\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- password -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"v-password\"\n        >\n          <b-form-input\n            id=\"v-password\"\n            type=\"password\"\n            placeholder=\"Password\"\n          />\n        </b-form-group>\n      </b-col>\n\n      <!-- checkbox -->\n      <b-col cols=\"12\">\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-3\"\n            name=\"checkbox-3\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- submit and reset -->\n      <b-col cols=\"12\">\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-form>\n</template>\n\n<script>\nimport {\n  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BForm,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";
var codeVerticalIcon = "\n<template>\n  <b-form @submit.prevent>\n    <b-row>\n\n      <!-- first name -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"First Name\"\n          label-for=\"vi-first-name\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"UserIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"vi-first-name\"\n              placeholder=\"First Name\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n\n      <!-- email -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Email\"\n          label-for=\"vi-email\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"MailIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"vi-email\"\n              type=\"email\"\n              placeholder=\"Email\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n\n      <!-- mobile -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Mobile\"\n          label-for=\"vi-mobile\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"SmartphoneIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"vi-mobile\"\n              type=\"number\"\n              placeholder=\"Mobile\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n\n      <!-- password -->\n      <b-col cols=\"12\">\n        <b-form-group\n          label=\"Password\"\n          label-for=\"vi-password\"\n        >\n          <b-input-group class=\"input-group-merge\">\n            <b-input-group-prepend is-text>\n              <feather-icon icon=\"LockIcon\" />\n            </b-input-group-prepend>\n            <b-form-input\n              id=\"vi-password\"\n              type=\"password\"\n              placeholder=\"Password\"\n            />\n          </b-input-group>\n        </b-form-group>\n      </b-col>\n\n      <!-- checkbox -->\n      <b-col cols=\"12\">\n        <b-form-group>\n          <b-form-checkbox\n            id=\"checkbox-4\"\n            name=\"checkbox-4\"\n            value=\"Remember_me\"\n          >\n            Remember me\n          </b-form-checkbox>\n        </b-form-group>\n      </b-col>\n\n      <!-- reset and submit -->\n      <b-col cols=\"12\">\n        <b-button\n          v-ripple.400=\"'rgba(255, 255, 255, 0.15)'\"\n          type=\"submit\"\n          variant=\"primary\"\n          class=\"mr-1\"\n        >\n          Submit\n        </b-button>\n        <b-button\n          v-ripple.400=\"'rgba(186, 191, 199, 0.15)'\"\n          type=\"reset\"\n          variant=\"outline-secondary\"\n        >\n          Reset\n        </b-button>\n      </b-col>\n    </b-row>\n  </b-form>\n</template>\n\n<script>\nimport {\n  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend,\n} from 'bootstrap-vue'\nimport Ripple from 'vue-ripple-directive'\n\nexport default {\n  components: {\n    BRow,\n    BCol,\n    BFormGroup,\n    BFormInput,\n    BFormCheckbox,\n    BInputGroup,\n    BInputGroupPrepend,\n    BForm,\n    BButton,\n  },\n  directives: {\n    Ripple,\n  },\n}\n</script>\n";

/***/ })

}]);