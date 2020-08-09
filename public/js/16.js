(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
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
//
//
//
var FormErrorComponent = function FormErrorComponent() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../../Elements/Form/FormErrorComponent */ "./resources/js/components/Elements/Form/FormErrorComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      message: '',
      errors: {}
    };
  },
  props: {
    comment: Object
  },
  methods: {
    replyComment: function replyComment() {
      var _this = this;

      axios.post("/api/v1/comments/".concat(this.comment.id), {
        message: this.message
      }).then(function (res) {
        // New comment should have a children element for replies
        if (res.data.children === undefined) {
          res.data.children = [];
        } // Add new comment ot the children //


        _this.comment.children.push(res.data); // Hide the modal //


        $("#reply-modal-".concat(_this.comment.id)).modal('hide'); // Reset message to empty //

        _this.message = '';
      })["catch"](function (err) {
        console.log(err);
        _this.errors = err.response.data.errors;
      });
    }
  },
  components: {
    FormErrorComponent: FormErrorComponent
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=template&id=a693dcbc&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=template&id=a693dcbc& ***!
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
  return _c(
    "div",
    {
      staticClass: "modal fade",
      attrs: {
        id: "reply-modal-" + _vm.comment.id,
        role: "dialog",
        tabindex: "-1"
      }
    },
    [
      _c("div", { staticClass: "modal-dialog", attrs: { role: "document" } }, [
        _c("div", { staticClass: "modal-content" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.replyComment($event)
                }
              }
            },
            [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "modal-body" }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "message" } }, [
                      _vm._v("Enter your message here:")
                    ]),
                    _vm._v(" "),
                    _c("textarea", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model.trim",
                          value: _vm.message,
                          expression: "message",
                          modifiers: { trim: true }
                        }
                      ],
                      staticClass: "form-control",
                      class:
                        _vm.errors.message !== undefined ? "is-invalid" : "",
                      attrs: {
                        id: "message",
                        name: "message",
                        required: "",
                        rows: "3"
                      },
                      domProps: { value: _vm.message },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.message = $event.target.value.trim()
                        },
                        blur: function($event) {
                          return _vm.$forceUpdate()
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("FormErrorComponent", {
                      attrs: { errors: _vm.errors.message }
                    }),
                    _vm._v(" "),
                    _vm._m(1)
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm._m(2)
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Reply to Comment")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close",
          attrs: { "data-dismiss": "modal", type: "button" }
        },
        [_c("span", [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("small", { staticClass: "form-text text-muted" }, [
      _c(
        "a",
        {
          attrs: {
            href:
              "https://help.github.com/articles/basic-writing-and-formatting-syntax",
            target: "_blank"
          }
        },
        [
          _vm._v(
            "\n                                Markdown\n                            "
          )
        ]
      ),
      _vm._v(
        "\n                            cheatsheet.\n                        "
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-outline-secondary text-uppercase",
          attrs: { "data-dismiss": "modal", type: "button" }
        },
        [_vm._v("Cancel")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-outline-success text-uppercase",
          attrs: { type: "submit" }
        },
        [_vm._v("Reply")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Comments/Elements/ReplyModalComponent.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Comments/Elements/ReplyModalComponent.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReplyModalComponent_vue_vue_type_template_id_a693dcbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReplyModalComponent.vue?vue&type=template&id=a693dcbc& */ "./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=template&id=a693dcbc&");
/* harmony import */ var _ReplyModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplyModalComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReplyModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReplyModalComponent_vue_vue_type_template_id_a693dcbc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReplyModalComponent_vue_vue_type_template_id_a693dcbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comments/Elements/ReplyModalComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReplyModalComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyModalComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=template&id=a693dcbc&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=template&id=a693dcbc& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyModalComponent_vue_vue_type_template_id_a693dcbc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ReplyModalComponent.vue?vue&type=template&id=a693dcbc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/Elements/ReplyModalComponent.vue?vue&type=template&id=a693dcbc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyModalComponent_vue_vue_type_template_id_a693dcbc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReplyModalComponent_vue_vue_type_template_id_a693dcbc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);