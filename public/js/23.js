(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tokens/TokensComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tokens/TokensComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var FormErrorComponent = function FormErrorComponent() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../Elements/Form/FormErrorComponent */ "./resources/js/components/Elements/Form/FormErrorComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      tokens: [],
      errors: {},
      token_name: ''
    };
  },
  computed: _objectSpread({
    tokens_exist: function tokens_exist() {
      return this.tokens.length > 0;
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['user'])),
  mounted: function mounted() {
    this.fetchTokens();
  },
  methods: {
    /**
     * Fetches all the user's tokens
     */
    fetchTokens: function fetchTokens() {
      var _this = this;

      axios.get("/api/v1/users/".concat(this.user.id, "/tokens")).then(function (res) {
        return _this.tokens = res.data;
      })["catch"](function (err) {
        return console.log(err);
      });
    },

    /**
     * Generates a new access token
     */
    generateToken: function generateToken() {
      var _this2 = this;

      var token_text = document.getElementById('token_text');
      var token_output = document.getElementById('token_output');
      var form_submit = document.getElementById('form_submit'); // Disable the submit button //

      form_submit.disabled = true;
      axios.post("/api/v1/users/".concat(this.user.id, "/tokens"), {
        token_name: this.token_name
      }).then(function (res) {
        // Set the output //
        token_output.className += ' border border-success';
        token_text.innerHTML = '<pre>' + res.data.token + '</pre>';
        token_text.className += ' mt-2';
        form_submit.disabled = false; // Refetch tokens //

        _this2.fetchTokens();
      })["catch"](function (err) {
        return _this2.errors = err.response.data.errors;
      });
    },

    /**
     * Deletes an api token from account
     * @param {int} id Id of token
     */
    deleteToken: function deleteToken(id) {
      var _this3 = this;

      var btn = document.getElementById("delete_btn_".concat(id)); // Disable the button //

      btn.disabled = true;
      axios["delete"]("/api/v1/users/".concat(this.user.id, "/tokens/").concat(id)).then(function () {
        var index = _.findIndex(_this3.tokens, function (n) {
          return n.id === id;
        });

        _this3.tokens.splice(index, 1);
      })["catch"](function () {
        _this3.flashMessage.error({
          message: 'Unable to delete token at this time'
        });

        btn.disabled = false;
      });
    },

    /**
     * Copies the generated token
     */
    copyToken: function copyToken() {
      var _this4 = this;

      // Make sure render refreshes before trying to copy
      this.$nextTick(function () {
        // Get token //
        var token_text = document.getElementById('token_text').innerText; // If token not generated yet //

        if (token_text.length === 0) {
          _this4.flashMessage.warning({
            message: 'No token generated to copy'
          });
        } else {
          // Get output div //
          var token_output = document.getElementById('token_output'); // Create a false span //

          var shadow_text = document.createElement('span'); // Copy over output //

          shadow_text.innerText = token_text; // add to output div //

          token_output.append(shadow_text); // Create invisible range //

          var range = document.createRange(); // Get current window selections //

          var selection = window.getSelection(); // Add the element to the range //

          range.selectNodeContents(document.getElementById('token_text'));
          range.selectNodeContents(shadow_text); // Remove previous ranges //

          selection.removeAllRanges(); // Add the new selection //

          selection.addRange(range); // Attempt to copy //

          document.execCommand('copy') ? _this4.flashMessage.success({
            message: 'Token copy success'
          }) : _this4.flashMessage.error({
            message: 'Token copy unsuccessful'
          }); // Delete the shadow_text before it appears //

          shadow_text.remove();
        }
      });
    }
  },
  components: {
    FormErrorComponent: FormErrorComponent
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tokens/TokensComponent.vue?vue&type=template&id=0c2e6b19&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Tokens/TokensComponent.vue?vue&type=template&id=0c2e6b19& ***!
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
  return _c("div", [
    _c("div", { staticClass: "row mb-2" }, [
      _c("div", { staticClass: "col text-right" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-primary",
            attrs: {
              "aria-controls": "TokenForm",
              "aria-expanded": "false",
              "data-target": "#token_form",
              "data-toggle": "collapse",
              type: "button"
            }
          },
          [
            _c("font-awesome-icon", {
              attrs: { icon: ["fas", "plus-circle"] }
            }),
            _vm._v("\n                Generate Token\n            ")
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "row mb-2 collapse justify-content-center",
        attrs: { id: "token_form" }
      },
      [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card card-body rounded shadow" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.generateToken($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group row" }, [
                  _c(
                    "label",
                    {
                      staticClass: "col-md-2 col-form-label text-md-right",
                      attrs: { for: "token_name" }
                    },
                    [_vm._v("Token Name")]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col-md-9" },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model.trim",
                            value: _vm.token_name,
                            expression: "token_name",
                            modifiers: { trim: true }
                          }
                        ],
                        staticClass: "form-control",
                        class:
                          _vm.errors.token_name !== undefined
                            ? "is-invalid"
                            : "",
                        attrs: {
                          autofocus: "",
                          id: "token_name",
                          name: "token_name",
                          required: "",
                          type: "text"
                        },
                        domProps: { value: _vm.token_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.token_name = $event.target.value.trim()
                          },
                          blur: function($event) {
                            return _vm.$forceUpdate()
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c("FormErrorComponent", {
                        attrs: { errors: _vm.errors.token_name }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _vm._m(0)
              ]
            ),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "card-body", attrs: { id: "token_output" } },
              [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-info mr-2",
                    attrs: { type: "button" },
                    on: { click: _vm.copyToken }
                  },
                  [
                    _c("font-awesome-icon", {
                      attrs: { icon: ["far", "copy"] }
                    }),
                    _vm._v(
                      "\n                        Copy\n                    "
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("span", { staticClass: "card-text" }, [
                  _vm._v("Once generated, Your Token will appear below")
                ]),
                _vm._v(" "),
                _c("p", {
                  staticClass: "card-text",
                  attrs: { id: "token_text" }
                }),
                _vm._v(" "),
                _vm._m(1)
              ]
            )
          ])
        ])
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-md-8" }, [
        !_vm.tokens_exist
          ? _c("div", { staticClass: "card" }, [_vm._m(2)])
          : _c("table", { staticClass: "table table-hover" }, [
              _vm._m(3),
              _vm._v(" "),
              _c(
                "tbody",
                _vm._l(_vm.tokens, function(token) {
                  return _c("tr", { key: token.id }, [
                    _c("td", [_vm._v(_vm._s(token.id))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(token.name))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(token.created_at))]),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(token.last_used_at))]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger",
                          attrs: {
                            id: "delete_btn_" + token.id,
                            type: "button"
                          },
                          on: {
                            click: function($event) {
                              return _vm.deleteToken(token.id)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n                                Delete\n                            "
                          )
                        ]
                      )
                    ])
                  ])
                }),
                0
              )
            ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row mb-0" }, [
      _c("div", { staticClass: "col-md-8 offset-md-2" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success",
            attrs: { id: "form_submit", type: "submit" }
          },
          [
            _vm._v(
              "\n                                Generate\n                            "
            )
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "small" }, [
      _c("strong", [_vm._v("* Note:")]),
      _vm._v(
        "\n                        Copy token after creation. Token only visible once.\n                    "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body text-center" }, [
      _c("p", { staticClass: "lead card-text" }, [
        _vm._v(
          "\n                        No Api access tokens assigned. Click generate to create some.\n                    "
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "text-center" }, [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Created")]),
        _vm._v(" "),
        _c("th", [_vm._v("Last Active")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Tokens/TokensComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Tokens/TokensComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TokensComponent_vue_vue_type_template_id_0c2e6b19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TokensComponent.vue?vue&type=template&id=0c2e6b19& */ "./resources/js/components/Tokens/TokensComponent.vue?vue&type=template&id=0c2e6b19&");
/* harmony import */ var _TokensComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokensComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Tokens/TokensComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TokensComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TokensComponent_vue_vue_type_template_id_0c2e6b19___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TokensComponent_vue_vue_type_template_id_0c2e6b19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Tokens/TokensComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Tokens/TokensComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Tokens/TokensComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TokensComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tokens/TokensComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Tokens/TokensComponent.vue?vue&type=template&id=0c2e6b19&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Tokens/TokensComponent.vue?vue&type=template&id=0c2e6b19& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensComponent_vue_vue_type_template_id_0c2e6b19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TokensComponent.vue?vue&type=template&id=0c2e6b19& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Tokens/TokensComponent.vue?vue&type=template&id=0c2e6b19&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensComponent_vue_vue_type_template_id_0c2e6b19___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TokensComponent_vue_vue_type_template_id_0c2e6b19___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);