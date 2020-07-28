(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesViewComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/NotesViewComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
//
//
//
var NoteBodyComponent = function NoteBodyComponent() {
  return __webpack_require__.e(/*! import() */ 16).then(__webpack_require__.bind(null, /*! ./Elements/NoteBodyComponent */ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue"));
};

var CommentComponent = function CommentComponent() {
  return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ../Comments/CommentComponent */ "./resources/js/components/Comments/CommentComponent.vue"));
};

var CommentNewComponent = function CommentNewComponent() {
  return __webpack_require__.e(/*! import() */ 21).then(__webpack_require__.bind(null, /*! ../Comments/CommentNewComponent */ "./resources/js/components/Comments/CommentNewComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      page: 1,
      note: {},
      comments: []
    };
  },
  watch: {
    page_bottom: function page_bottom(newVal) {
      if (newVal) {
        this.page++;
        this.getComments();
      }
    }
  },
  mounted: function mounted() {
    this.getNote();
    this.getComments();
    this.scroll();
  },
  methods: {
    /**
     * Adds a newly created comment to the comments array
     * @param {Object} comment
     */
    newComment: function newComment(comment) {
      this.comments.unshift(comment);
    },

    /**
     * Gets the requested note
     */
    getNote: function getNote() {
      var _this = this;

      axios.get("/api/v1/notes/".concat(this.$route.params.id), {
        params: {
          page: this.page
        }
      }).then(function (res) {
        // Set the note object //
        _this.note = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },

    /**
     * Gets comments associated with a note
     */
    getComments: function getComments() {
      var _this2 = this;

      axios.get("/api/v1/notes/".concat(this.$route.params.id, "/comments"), {
        params: {
          page: this.page
        }
      }).then(function (res) {
        var _this2$comments;

        (_this2$comments = _this2.comments).push.apply(_this2$comments, _toConsumableArray(res.data));
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  },
  components: {
    NoteBodyComponent: NoteBodyComponent,
    CommentComponent: CommentComponent,
    CommentNewComponent: CommentNewComponent
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesViewComponent.vue?vue&type=template&id=7cf39ca0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/NotesViewComponent.vue?vue&type=template&id=7cf39ca0& ***!
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
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.note.id !== undefined,
          expression: "note.id !== undefined"
        }
      ]
    },
    [
      _vm.note.id !== undefined
        ? _c("NoteBodyComponent", { attrs: { note: _vm.note } })
        : _vm._e(),
      _vm._v(" "),
      _c("CommentNewComponent", {
        attrs: { note: _vm.note },
        on: { new_comment: _vm.newComment }
      }),
      _vm._v(" "),
      _c("CommentComponent", { attrs: { comments: _vm.comments } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Notes/NotesViewComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Notes/NotesViewComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotesViewComponent_vue_vue_type_template_id_7cf39ca0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesViewComponent.vue?vue&type=template&id=7cf39ca0& */ "./resources/js/components/Notes/NotesViewComponent.vue?vue&type=template&id=7cf39ca0&");
/* harmony import */ var _NotesViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesViewComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Notes/NotesViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotesViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotesViewComponent_vue_vue_type_template_id_7cf39ca0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotesViewComponent_vue_vue_type_template_id_7cf39ca0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notes/NotesViewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notes/NotesViewComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Notes/NotesViewComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotesViewComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesViewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesViewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notes/NotesViewComponent.vue?vue&type=template&id=7cf39ca0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Notes/NotesViewComponent.vue?vue&type=template&id=7cf39ca0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesViewComponent_vue_vue_type_template_id_7cf39ca0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotesViewComponent.vue?vue&type=template&id=7cf39ca0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesViewComponent.vue?vue&type=template&id=7cf39ca0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesViewComponent_vue_vue_type_template_id_7cf39ca0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesViewComponent_vue_vue_type_template_id_7cf39ca0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);