(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      date_format: "MMMM Do YYYY [at] H:mm a"
    };
  },
  props: {
    note: Object
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['user'])),
  methods: {
    datesEqual: function datesEqual(note) {
      return note.created_at === note.updated_at;
    },
    authUser: function authUser(note) {
      return this.user.id === note.author.id;
    },
    deleteNote: function deleteNote(note) {
      console.log(note);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row justify-content-center mb-2 note-body" },
    [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "card shadow" }, [
          _c(
            "p",
            { staticClass: "card-header h3 text-center text-capitalize" },
            [
              _vm._v(
                "\n                " + _vm._s(_vm.note.title) + "\n            "
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "p",
              { staticClass: "card-text" },
              [
                _vm._v(
                  "\n                    Created by\n                    "
                ),
                _c(
                  "router-link",
                  {
                    attrs: {
                      to: {
                        name: "notes_user",
                        params: { user: _vm.note.author.id }
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.note.author.name))]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(
                  "\n                    on " +
                    _vm._s(
                      _vm._f("moment")(_vm.note.created_at, _vm.date_format)
                    ) +
                    "\n                "
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("p", { staticClass: "card-text" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(_vm.note.body) +
                  "\n                "
              )
            ])
          ]),
          _vm._v(" "),
          !_vm.datesEqual(_vm.note) || _vm.authUser(_vm.note)
            ? _c("div", { staticClass: "card-footer" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-md-8 align-self-center" }, [
                    !_vm.datesEqual(_vm.note)
                      ? _c("span", [
                          _vm._v(
                            "Updated at " +
                              _vm._s(
                                _vm._f("moment")(
                                  _vm.note.updated_at,
                                  _vm.date_format
                                )
                              )
                          )
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _vm.authUser(_vm.note)
                    ? _c("div", { staticClass: "col-md-4 text-right" }, [
                        _c(
                          "div",
                          { staticClass: "btn-group" },
                          [
                            _c(
                              "router-link",
                              {
                                staticClass: "btn btn-primary card-link",
                                attrs: {
                                  to: {
                                    name: "notes_edit",
                                    params: { id: _vm.note.id }
                                  }
                                }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: ["far", "edit"] }
                                }),
                                _vm._v(
                                  "\n                                Edit\n                            "
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                staticClass: "btn btn-danger card-link",
                                attrs: { type: "button" },
                                on: {
                                  click: function($event) {
                                    return _vm.$emit("deleteNote", _vm.note.id)
                                  }
                                }
                              },
                              [
                                _c("font-awesome-icon", {
                                  attrs: { icon: ["fas", "folder-minus"] }
                                }),
                                _vm._v(
                                  "\n                                Delete\n                            "
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    : _vm._e()
                ])
              ])
            : _vm._e()
        ])
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/Notes/Elements/NoteBodyComponent.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NoteBodyComponent.vue?vue&type=template&id=ef8046ec& */ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec&");
/* harmony import */ var _NoteBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteBodyComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _NoteBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Notes/Elements/NoteBodyComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NoteBodyComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteBodyComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./NoteBodyComponent.vue?vue&type=template&id=ef8046ec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Notes/Elements/NoteBodyComponent.vue?vue&type=template&id=ef8046ec&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NoteBodyComponent_vue_vue_type_template_id_ef8046ec___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);