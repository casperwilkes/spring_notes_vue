(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/CommentNewComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comments/CommentNewComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
var FormErrorComponent = function FormErrorComponent() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../Elements/Form/FormErrorComponent */ "./resources/js/components/Elements/Form/FormErrorComponent.vue"));
};

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      message: '',
      errors: {}
    };
  },
  props: {
    note: Object
  },
  methods: {
    /**
     * Adds a new comment to the note
     */
    newComment: function newComment() {
      var _this = this;

      var new_note = {
        commentable_type: '\\App\\Note',
        commentable_id: "".concat(this.note.id),
        message: this.message
      };
      axios.post('/api/v1/comments', new_note).then(function (res) {
        _this.$emit('new_comment', res.data);

        _this.message = '';
      })["catch"](function (err) {
        return _this.errors = err.response.data.errors;
      });
    }
  },
  components: {
    FormErrorComponent: FormErrorComponent
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/CommentNewComponent.vue?vue&type=template&id=691e5028&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Comments/CommentNewComponent.vue?vue&type=template&id=691e5028& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row justify-content-center mb-4" }, [
    _c("div", { staticClass: "col-md-10" }, [
      _c("div", { staticClass: "card my-4 rounded shadow" }, [
        _c("div", { staticClass: "card-body" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.newComment($event)
                }
              }
            },
            [
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
                        rawName: "v-model",
                        value: _vm.message,
                        expression: "message"
                      }
                    ],
                    staticClass: "form-control",
                    class: _vm.errors.message !== undefined ? "is-invalid" : "",
                    attrs: { id: "message", name: "message", rows: "3" },
                    domProps: { value: _vm.message },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.message = $event.target.value
                      }
                    }
                  }),
                  _vm._v(" "),
                  _c("FormErrorComponent", {
                    attrs: { errors: _vm.errors.message }
                  }),
                  _vm._v(" "),
                  _vm._m(0)
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-outline-success text-uppercase",
                  attrs: { type: "submit" }
                },
                [_vm._v("Submit")]
              )
            ]
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
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Comments/CommentNewComponent.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Comments/CommentNewComponent.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CommentNewComponent_vue_vue_type_template_id_691e5028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentNewComponent.vue?vue&type=template&id=691e5028& */ "./resources/js/components/Comments/CommentNewComponent.vue?vue&type=template&id=691e5028&");
/* harmony import */ var _CommentNewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CommentNewComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/Comments/CommentNewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CommentNewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CommentNewComponent_vue_vue_type_template_id_691e5028___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CommentNewComponent_vue_vue_type_template_id_691e5028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Comments/CommentNewComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Comments/CommentNewComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Comments/CommentNewComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentNewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CommentNewComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/CommentNewComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentNewComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Comments/CommentNewComponent.vue?vue&type=template&id=691e5028&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Comments/CommentNewComponent.vue?vue&type=template&id=691e5028& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentNewComponent_vue_vue_type_template_id_691e5028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CommentNewComponent.vue?vue&type=template&id=691e5028& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Comments/CommentNewComponent.vue?vue&type=template&id=691e5028&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentNewComponent_vue_vue_type_template_id_691e5028___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentNewComponent_vue_vue_type_template_id_691e5028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);