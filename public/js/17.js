(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/NotesComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      filter: "newest"
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesComponent.vue?vue&type=template&id=3d7ea855&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/NotesComponent.vue?vue&type=template&id=3d7ea855& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "row mb-3 justify-content-between" }, [
        _c("div", { staticClass: "col-md-2" }, [
          _vm.$route.name === "notes_user" || _vm.$route.name === "notes"
            ? _c("div", { staticClass: "dropdown" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info dropdown-toggle",
                    attrs: {
                      "aria-expanded": "false",
                      "aria-haspopup": "true",
                      "data-toggle": "dropdown",
                      id: "dropdownMenuButton",
                      type: "button"
                    }
                  },
                  [_vm._v("\n                    Filter\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "dropdown-menu",
                    attrs: { "aria-labelledby": "dropdownMenuButton" }
                  },
                  [
                    _c(
                      "button",
                      {
                        staticClass: "dropdown-item",
                        class: { active: _vm.filter === "newest" },
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.filter = "newest"
                          }
                        }
                      },
                      [_vm._v("Newest")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "dropdown-item",
                        class: { active: _vm.filter === "oldest" },
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            _vm.filter = "oldest"
                          }
                        }
                      },
                      [_vm._v("Oldest")]
                    )
                  ]
                )
              ])
            : _vm._e()
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "border-dark shadow nav-fill" }, [
            _c(
              "nav",
              { staticClass: "nav nav-pills" },
              [
                _c(
                  "router-link",
                  {
                    staticClass: "nav-item nav-link",
                    attrs: { to: { name: "notes" }, exact: "" }
                  },
                  [
                    _c("font-awesome-icon", {
                      attrs: { icon: ["fas", "stream"] }
                    }),
                    _vm._v(
                      "\n                        All Notes\n                    "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "nav-item nav-link",
                    attrs: { to: { name: "notes_create" } }
                  },
                  [
                    _c("font-awesome-icon", {
                      attrs: { icon: ["fas", "folder-plus"] }
                    }),
                    _vm._v(
                      "\n                        New Note\n                    "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "router-link",
                  {
                    staticClass: "nav-item nav-link",
                    attrs: { to: { name: "notes_user" } }
                  },
                  [
                    _c("font-awesome-icon", {
                      attrs: { icon: ["fas", "folder"] }
                    }),
                    _vm._v(
                      "\n                        My Notes\n                    "
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("router-view", { attrs: { filter: _vm.filter } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Notes/NotesComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Notes/NotesComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotesComponent_vue_vue_type_template_id_3d7ea855___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotesComponent.vue?vue&type=template&id=3d7ea855& */ "./resources/js/components/Notes/NotesComponent.vue?vue&type=template&id=3d7ea855&");
/* harmony import */ var _NotesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NotesComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Notes/NotesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NotesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NotesComponent_vue_vue_type_template_id_3d7ea855___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotesComponent_vue_vue_type_template_id_3d7ea855___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notes/NotesComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notes/NotesComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Notes/NotesComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotesComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notes/NotesComponent.vue?vue&type=template&id=3d7ea855&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Notes/NotesComponent.vue?vue&type=template&id=3d7ea855& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesComponent_vue_vue_type_template_id_3d7ea855___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NotesComponent.vue?vue&type=template&id=3d7ea855& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/NotesComponent.vue?vue&type=template&id=3d7ea855&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesComponent_vue_vue_type_template_id_3d7ea855___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NotesComponent_vue_vue_type_template_id_3d7ea855___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);