(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ApiComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ApiComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _includes_examples_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../includes/examples.json */ "./resources/js/includes/examples.json");
var _includes_examples_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../includes/examples.json */ "./resources/js/includes/examples.json", 1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      Examples: _includes_examples_json__WEBPACK_IMPORTED_MODULE_0__
    };
  },
  mounted: function mounted() {
    // Add prettyprint cdn to page //
    var pretty = document.createElement('script');
    pretty.setAttribute('src', 'https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?skin=desert');
    document.head.appendChild(pretty);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ApiComponent.vue?vue&type=template&id=6c5c3a6e&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ApiComponent.vue?vue&type=template&id=6c5c3a6e& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    { staticClass: "row justify-content-center", attrs: { id: "api" } },
    [
      _c("div", { staticClass: "col-sm-10" }, [
        _c("div", { staticClass: "card shadow" }, [
          _c("div", { staticClass: "card-body" }, [
            _c("div", { staticClass: "card mb-2" }, [
              _c("h1", { staticClass: "card-header text-center" }, [
                _vm._v("Interacting")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint lang-json" }, [
                  _vm._v(
                    _vm._s(
                      JSON.stringify(_vm.Examples.response_schema, null, 4)
                    )
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "card mb-2" }, [
              _c("p", { staticClass: "h3 card-header" }, [
                _vm._v("Getting all notes")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm._m(2),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint lang-json" }, [
                  _vm._v(_vm._s(JSON.stringify(_vm.Examples.get_all, null, 4)))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card mb-2" }, [
              _c("p", { staticClass: "h3 card-header" }, [
                _vm._v("Getting a note by id")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm._m(3),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint lang-json" }, [
                  _vm._v(_vm._s(JSON.stringify(_vm.Examples.by_id, null, 4)))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card mb-2" }, [
              _c("p", { staticClass: "h3 card-header" }, [
                _vm._v("Getting all notes for a user")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm._m(4),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint lang-json" }, [
                  _vm._v(_vm._s(JSON.stringify(_vm.Examples.all_user, null, 4)))
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card mb-2" }, [
              _c("p", { staticClass: "h3 card-header" }, [
                _vm._v("Create a new note")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm._m(5),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint json" }, [
                  _vm._v(
                    _vm._s(
                      JSON.stringify(_vm.Examples.new_note.schema, null, 4)
                    )
                  )
                ]),
                _vm._v(" "),
                _vm._m(6),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint json" }, [
                  _vm._v(
                    _vm._s(
                      JSON.stringify(_vm.Examples.new_note.example, null, 4)
                    )
                  )
                ]),
                _vm._v(" "),
                _vm._m(7),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint json" }, [
                  _vm._v(
                    _vm._s(
                      JSON.stringify(_vm.Examples.new_note.response, null, 4)
                    )
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card mb-2" }, [
              _c("p", { staticClass: "h3 card-header" }, [
                _vm._v("Update a note")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm._m(8),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint json" }, [
                  _vm._v(
                    _vm._s(
                      JSON.stringify(_vm.Examples.update_note.schema, null, 4)
                    )
                  )
                ]),
                _vm._v(" "),
                _vm._m(9),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint json" }, [
                  _vm._v(
                    _vm._s(
                      JSON.stringify(_vm.Examples.update_note.example, null, 4)
                    )
                  )
                ]),
                _vm._v(" "),
                _vm._m(10),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint json" }, [
                  _vm._v(
                    _vm._s(
                      JSON.stringify(_vm.Examples.update_note.response, null, 4)
                    )
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card mb-2" }, [
              _c("div", { staticClass: "h3 card-header" }, [
                _vm._v("Delete a note")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _vm._m(11),
                _vm._v(" "),
                _c("pre", { staticClass: "prettyprint json" }, [
                  _vm._v(
                    _vm._s(JSON.stringify(_vm.Examples.delete_note, null, 4))
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("FlashMessage")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [
        _vm._v(
          "\n                                Preparing to interact with the API\n                            "
        )
      ]),
      _vm._v(" "),
      _c("dd", [
        _vm._v(
          "\n                                In order to interact with the API, you must have a pre-qualified access key and token. Your\n                                key and token are necessary to interact with the api and are required with every request made.\n                            "
        )
      ]),
      _vm._v(" "),
      _c("dt", [
        _vm._v(
          "\n                                Using your 'key' and 'token'\n                            "
        )
      ]),
      _vm._v(" "),
      _c("dd", [
        _vm._v(
          "\n                                Every request needs to include it's key and token within the request string.\n                            "
        )
      ]),
      _vm._v(" "),
      _c("dt", [
        _vm._v(
          "\n                                Example:\n                            "
        )
      ]),
      _vm._v(" "),
      _c("dd", [
        _c("code", [
          _vm._v(
            "http://spring_notes/v1/entrypoint?key=your_key&token=your_token"
          )
        ])
      ]),
      _vm._v(" "),
      _c("dt", [
        _vm._v(
          "\n                                Response Body\n                            "
        )
      ]),
      _vm._v(" "),
      _c("dd", [
        _vm._v(
          "\n                                All responses will conform to this schema\n                            "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row mb-2" }, [
      _c("div", { staticClass: "col" }, [
        _c("h2", { staticClass: "text-center" }, [_vm._v("Usage")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [_vm._v("Request")]),
      _vm._v(" "),
      _c("dd", [_c("code", [_vm._v("GET - /v1/notes HTTP/1.1")])]),
      _vm._v(" "),
      _c("dt", [_vm._v("Example")]),
      _vm._v(" "),
      _c("dd", [_c("code", [_vm._v("/v1/notes?:tokens")])]),
      _vm._v(" "),
      _c("dt", [_vm._v("Response")]),
      _vm._v(" "),
      _c("dd", [_vm._v(" Returns an array of all notes")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [_vm._v("Request")]),
      _vm._v(" "),
      _c("dd", [_c("code", [_vm._v('GET - /v1/notes/{"{id}"} HTTP/1.1')])]),
      _vm._v(" "),
      _c("dt", [_c("strong", [_vm._v("Example:")])]),
      _vm._v(" "),
      _c("dd", [_c("code", [_vm._v("/v1/notes/2?:tokens")])]),
      _vm._v(" "),
      _c("dt", [_vm._v("Response")]),
      _vm._v(" "),
      _c("dd", [_vm._v("Returns a single note")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [_vm._v("Request")]),
      _vm._v(" "),
      _c("dd", [
        _c("code", [_vm._v('GET - /v1/notes/{"{id}"}/user_id HTTP/1.1')])
      ]),
      _vm._v(" "),
      _c("dt", [_vm._v("Example")]),
      _vm._v(" "),
      _c("dd", [_c("code", [_vm._v("/v1/notes/1/user_id?:tokens")])]),
      _vm._v(" "),
      _c("dt", [_vm._v("Response")]),
      _vm._v(" "),
      _c("dd", [_vm._v("Returns an array of notes for that user")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [_vm._v("Request")]),
      _vm._v(" "),
      _c("dd", [_c("code", [_vm._v("POST - /v1/notes HTTP/1.1")])]),
      _vm._v(" "),
      _c("dt", [_vm._v("Request body schema")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [_vm._v("Example")]),
      _vm._v(" "),
      _c("dd", [_c("code", [_vm._v("/v1/notes?:tokens")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [_vm._v("Response")]),
      _vm._v(" "),
      _c("dd", [_vm._v("Returns the id of the note created")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [_vm._v("Request")]),
      _vm._v(" "),
      _c("dd", [
        _c("code", [_vm._v('GET - /v1/notes/{"{id}"}/user_id HTTP/1.1')])
      ]),
      _vm._v(" "),
      _c("dt", [_vm._v("Request body schema")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [_vm._v("Example")]),
      _vm._v(" "),
      _c("dd", [_c("code", [_vm._v("/v1/notes/15?:tokens")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [_vm._v("Response")]),
      _vm._v(" "),
      _c("dd", [_vm._v("Returns a boolean value indicating note was updated")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("dl", [
      _c("dt", [_vm._v("Request")]),
      _vm._v(" "),
      _c("dd", [_c("code", [_vm._v('DELETE - /v1/notes/{"{id}"} HTTP/1.1')])]),
      _vm._v(" "),
      _c("dt", [_vm._v("Example")]),
      _vm._v(" "),
      _c("dd", [_c("code", [_vm._v("/v1/notes/15?:tokens")])]),
      _vm._v(" "),
      _c("dt", [_vm._v("Response")]),
      _vm._v(" "),
      _c("dd", [_vm._v("Returns a boolean value indicating note was deleted")])
    ])
  }
]
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

/***/ "./resources/js/components/ApiComponent.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/ApiComponent.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ApiComponent_vue_vue_type_template_id_6c5c3a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiComponent.vue?vue&type=template&id=6c5c3a6e& */ "./resources/js/components/ApiComponent.vue?vue&type=template&id=6c5c3a6e&");
/* harmony import */ var _ApiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ApiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ApiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApiComponent_vue_vue_type_template_id_6c5c3a6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ApiComponent_vue_vue_type_template_id_6c5c3a6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ApiComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ApiComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/ApiComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ApiComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ApiComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ApiComponent.vue?vue&type=template&id=6c5c3a6e&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/ApiComponent.vue?vue&type=template&id=6c5c3a6e& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiComponent_vue_vue_type_template_id_6c5c3a6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ApiComponent.vue?vue&type=template&id=6c5c3a6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ApiComponent.vue?vue&type=template&id=6c5c3a6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiComponent_vue_vue_type_template_id_6c5c3a6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiComponent_vue_vue_type_template_id_6c5c3a6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/includes/examples.json":
/*!*********************************************!*\
  !*** ./resources/js/includes/examples.json ***!
  \*********************************************/
/*! exports provided: response_schema, get_all, by_id, all_user, new_note, update_note, delete_note, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"response_schema\":{\"results\":\"mixed\",\"error\":\"array\"},\"get_all\":{\"results\":[{\"id\":1,\"name\":\"test\",\"title\":\"A Simple Sample\",\"body\":\"Here is a sample note\",\"created_at\":\"2017-11-08 22:50:06\",\"updated_at\":null},{\"id\":2,\"name\":\"test\",\"title\":\"Another Simple Sample\",\"body\":\"Here is another simple sample.\\r\\n\\r\\nThis is a modified note.\",\"created_at\":\"2017-11-08 22:50:54\",\"updated_at\":\"2017-11-08 22:51:12\"}],\"error\":[]},\"by_id\":{\"results\":{\"id\":2,\"name\":\"test\",\"title\":\"Another Simple Sample\",\"body\":\"Here is another simple sample.\\r\\n\\r\\nThis is a modified note.\",\"created_at\":\"2017-11-08 22:50:54\",\"updated_at\":\"2017-11-08 22:51:12\"},\"error\":[]},\"all_user\":{\"results\":[{\"id\":1,\"name\":\"test\",\"title\":\"A Simple Sample\",\"body\":\"Here is a sample note\",\"created_at\":\"2017-11-08 22:50:06\",\"updated_at\":null},{\"id\":2,\"name\":\"test\",\"title\":\"Another Simple Sample\",\"body\":\"Here is another simple sample.\\r\\n\\r\\nThis is a modified note.\",\"created_at\":\"2017-11-08 22:50:54\",\"updated_at\":\"2017-11-08 22:51:12\"}],\"error\":[]},\"new_note\":{\"schema\":{\"user_id\":\"int|required\",\"title\":\"string|required\",\"body\":\"string|required\"},\"example\":{\"user_id\":1,\"title\":\"this is a fun app\",\"body\":\"I enjoy making notes\"},\"response\":{\"results\":15,\"error\":[]}},\"update_note\":{\"schema\":{\"user_id\":\"int|required\",\"title\":\"string|optional\",\"body\":\"string|optional\"},\"example\":{\"id\":15,\"body\":\"I enjoy updating notes\"},\"response\":{\"results\":true,\"error\":[]}},\"delete_note\":{\"results\":true,\"error\":[]}}");

/***/ })

}]);