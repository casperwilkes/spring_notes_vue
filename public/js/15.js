(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesEditComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/NotesEditComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
var NoteFormComponent = function NoteFormComponent() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ./Elements/NoteFormComponent */ "./resources/js/components/Notes/Elements/NoteFormComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      errors: {},
      note: {
        title: null,
        body: null
      }
    };
  },
  components: {
    NoteFormComponent: NoteFormComponent
  },
  mounted: function mounted() {
    var _this = this;

    axios.get("/api/v1/notes/".concat(this.$route.params.id)).then(function (res) {
      return _this.note = res.data;
    })["catch"](function (err) {
      return console.log(err);
    });
  },
  methods: {
    editHandle: function editHandle(note) {
      var _this2 = this;

      axios.put("/api/v1/notes/".concat(note.id), note).then(function () {
        _this2.flashMessage.success({
          message: 'Successfully edited note'
        });

        _this2.$router.push({
          name: 'notes_user'
        });
      })["catch"](function (err) {
        return _this2.errors = err.response.data.errors;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesEditComponent.vue?vue&type=template&id=7f8d2b2a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/NotesEditComponent.vue?vue&type=template&id=7f8d2b2a& ***!
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
    [
      _c("NoteFormComponent", {
        attrs: {
          errors: _vm.errors,
          handle: _vm.editHandle,
          noteObject: _vm.note,
          focus: "Edit"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Notes/NotesEditComponent.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Notes/NotesEditComponent.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotesEditComponent_vue_vue_type_template_id_7f8d2b2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesEditComponent.vue?vue&type=template&id=7f8d2b2a& */ "./resources/js/components/Notes/NotesEditComponent.vue?vue&type=template&id=7f8d2b2a&");
/* harmony import */ var _NotesEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesEditComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Notes/NotesEditComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotesEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotesEditComponent_vue_vue_type_template_id_7f8d2b2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotesEditComponent_vue_vue_type_template_id_7f8d2b2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notes/NotesEditComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notes/NotesEditComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Notes/NotesEditComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotesEditComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesEditComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notes/NotesEditComponent.vue?vue&type=template&id=7f8d2b2a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Notes/NotesEditComponent.vue?vue&type=template&id=7f8d2b2a& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesEditComponent_vue_vue_type_template_id_7f8d2b2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotesEditComponent.vue?vue&type=template&id=7f8d2b2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesEditComponent.vue?vue&type=template&id=7f8d2b2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesEditComponent_vue_vue_type_template_id_7f8d2b2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesEditComponent_vue_vue_type_template_id_7f8d2b2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);